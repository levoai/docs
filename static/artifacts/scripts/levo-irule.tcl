proc isCapturableContentType {contentType} {
    set contentType [string tolower $contentType]
    foreach type $::static::capturable_content_types {
        if {[string match *$type* $contentType]} {
            return 1
        }
    }
    return 0
}

when RULE_INIT {

# Limit payload collection to 10Kb
set static::max_collect_len 10240

# Body content types to capture
set static::capturable_content_types {json xml x-www-form-urlencoded}

# Levo.ai's Collector details
set static::collector_host_ip "<collector-host-ip>"
set static::collector_host_port "<collector-host-port>"
# Do not modify
set static::collector_uri "/v1/f5-ltm-logs"

}

when CLIENT_ACCEPTED {

    set hsl [HSL::open -proto TCP -pool $static::hsl_pool]
    set sessionId "[IP::client_addr][TCP::client_port][IP::local_addr][TCP::local_port][expr { int(100000000 * rand()) }]"
    binary scan [md5 $sessionId] H* correlationId junk
    
    if { [PROFILE::exists clientssl] == 1 } {
        set protocol "HTTPS"
    } else {
        set protocol "HTTP"
    }
    set requestId 0
}

when HTTP_REQUEST  {
    incr requestId

    set request_time [clock clicks -milliseconds]
    set reqHeaderString "${static::request_header_start}"
    set json_req_header_names_list "\["
    set json_req_header_values_list "\["
    set contentTypeHeaderValue ""
    set is_first 1
    foreach aHeader [HTTP::header names] {
      if { [string tolower $aHeader] == "content-type" } {
        set contentTypeHeaderValue [HTTP::header value $aHeader]
      }
      set lwcasekey [string map -nocase {"\"" "\\\""}[string tolower $aHeader]]
      set value [string map -nocase {"\"" "\\\""} [HTTP::header value $aHeader]]
      
      set headers "${static::header_name}${lwcasekey}${static::header_value}${value}"
      append reqHeaderString $headers
      
      if {$is_first} {
        append json_req_header_names_list "\"$lwcasekey\""
        append json_req_header_values_list "\"$value\""
        set is_first 0
      } else {
        append json_req_header_names_list ",\"$lwcasekey\""
        append json_req_header_values_list ",\"$value\""
      }
    }
    append json_req_header_names_list "\]"
    append json_req_header_values_list "\]"
    
    
    append reqHeaderString ${static::request_header_end}
    set uri [HTTP::uri]
    set method [HTTP::method]
    set queryString [HTTP::query]
    set client_addr [IP::client_addr]
    set local_port [TCP::local_port]
    set host [HTTP::host]
    set request_time [clock clicks -milliseconds]
    set request_payload ""
    set request_truncated 0

    set captureBody [call isCapturableContentType $contentTypeHeaderValue]
    if {$captureBody} {
         HTTP::collect $static::max_collect_len
    }
}

when HTTP_REQUEST_DATA {
    if {$captureBody && [HTTP::payload length] > 0 } {
        set capture_length [HTTP::payload length]
        if { $capture_length >  $static::max_collect_len } {
          set request_truncated 1
          set capture_length $static::max_collect_len
        }
        set request_payload [b64encode [string range "[HTTP::payload]" 0 $capture_length ]]
    }
}

when HTTP_RESPONSE  {
    set response_time [clock clicks -milliseconds]
    set resHeaderString "${static::response_header_start}"
    set json_res_header_names_list "\["
    set json_res_header_values_list "\["
    set contentTypeHeaderValue ""
    set status [HTTP::status]
    
    set is_first 1
    foreach aHeader [HTTP::header names] {
      if { [string tolower $aHeader] == "content-type" } {
        set contentTypeHeaderValue [HTTP::header value $aHeader]
      }
      set lwcasekey [string map -nocase {"\"" "\\\""}[string tolower $aHeader]]
      set value [string map -nocase {"\"" "\\\""} [HTTP::header value $aHeader]]
      
      if {$is_first} {
        append json_res_header_names_list "\"$lwcasekey\""
        append json_res_header_values_list "\"$value\""
        set is_first 0
      } else {
        append json_res_header_names_list ",\"$lwcasekey\""
        append json_res_header_values_list ",\"$value\""
      }

      set headers "${static::header_name}${lwcasekey}${static::header_value}${value}"
      append resHeaderString $headers
    }
    append json_res_header_names_list "\]"
    append json_res_header_values_list "\]"

    set captureResponseBody [call isCapturableContentType $contentTypeHeaderValue]
    if {$captureResponseBody} {
        HTTP::collect $static::max_collect_len
    }
    set data_sent 0
    set response_truncated 0
    # Prepare an HTTP POST request
    set http_request "POST ${static::collector_uri} HTTP/1.1\r\n"
    append http_request "Host: ${static::collector_host_ip}\r\n"
    append http_request "Content-Type: application/json\r\n"

      
    if { [HTTP::header exists "Content-Length"] && [HTTP::header value "Content-Length"] == 0 } {
      set response_payload ""

      set log_message "{\"config\": \{ \"requestId\": \"$correlationId\", \"eventType\": \"f5_ltm_log\"\}, \"request\": \{ \"protocol\": \"$protocol\",\"uri\": \"$uri\", \"method\":\"$method\", \"domainName\": \"$host\", \"queryString\": \"$queryString\", \"clientIp\": \"$client_addr\", \"headerNamesList\": $json_req_header_names_list, \"headerValuesList\": $json_req_header_values_list, \"body\": \"$request_payload\" \}, \"response\": \{ \"headerNamesList\": $json_res_header_names_list, \"headerValuesList\": $json_res_header_values_list, \"body\": \"$response_payload\", \"status\": \"$status\" \} }"
      append http_request "Content-Length: [string length $log_message]\r\n"
      append http_request "\r\n"
      append http_request "$log_message"

      # Open a connection to the HTTP server
      set conn_handle [connect ${static::collector_host_ip} ${static::collector_host_port}]

      # Send the HTTP POST request
      if {$conn_handle ne ""} {
          send $conn_handle $http_request
          close $conn_handle
      }

      set data_sent 1
    }
}

when HTTP_RESPONSE_DATA {
    set response_payload ""
    if { $captureResponseBody && [HTTP::payload length] > 0 } {
        set capture_length [HTTP::payload length]
        if { $capture_length >  $static::max_collect_len } {
          set response_truncated 1
          set capture_length $static::max_collect_len
        }
        set response_payload [b64encode [string range "[HTTP::payload]" 0 $capture_length]]
    }
    if { $data_sent != 1 } {
      set log_message "{\"config\": \{ \"requestId\": \"$correlationId\", \"eventType\": \"f5_ltm_log\"\}, \"request\": \{ \"protocol\": \"$protocol\",\"uri\": \"$uri\", \"method\":\"$method\", \"domainName\": \"$host\", \"queryString\": \"$queryString\", \"clientIp\": \"$client_addr\", \"headerNamesList\": $json_req_header_names_list, \"headerValuesList\": $json_req_header_values_list, \"body\": \"$request_payload\" \}, \"response\": \{ \"headerNamesList\": $json_res_header_names_list, \"headerValuesList\": $json_res_header_values_list, \"body\": \"$response_payload\", \"status\": \"$status\" \} }"
      append http_request "Content-Length: [string length $log_message]\r\n"
      append http_request "\r\n"
      append http_request "$log_message"
      
      # log local0. $http_request
      
      # Open a connection to the HTTP server
      set conn_handle [connect ${static::collector_host_ip} ${static::collector_host_port}]

      # Send the HTTP POST request
      if {$conn_handle ne ""} {
          send $conn_handle $http_request
          close $conn_handle
      }
    }
}