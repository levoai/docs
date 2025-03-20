proc isCapturableContentType {contentType} {
    set contentType [string tolower $contentType]
    foreach type $static::capturable_content_types {
        if {[string match *$type* $contentType]} {
            return 1
        }
    }
    return 0
}

when RULE_INIT {

# Limit payload collection to 10Kb
set static::max_collect_len 10240

# HSL pool name
set static::hsl_pool "levo-satellite-pool"

# Service name
set static::service_name "f5"

# Body content types to capture
set static::capturable_content_types {json xml x-www-form-urlencoded}

# The following should not be modified
set static::protocol "HTTPS"
set static::module_version "0.1.1"
set static::module_name "f5-hsl"

set static::delimiter "__"
set static::hsl_start "${static::delimiter}HSL_START${static::delimiter}"
set static::request_header_start "${static::delimiter}RQH${static::delimiter}"
set static::request_header_end "${static::delimiter}RQHE${static::delimiter}"
set static::response_header_start "${static::delimiter}RSH${static::delimiter}"
set static::response_header_end "${static::delimiter}RSHE${static::delimiter}"
set static::header_name "${static::delimiter}HN${static::delimiter}"
set static::header_value "${static::delimiter}HV${static::delimiter}"
set static::request_payload "${static::delimiter}RQP${static::delimiter}"
set static::response_payload "${static::delimiter}RSP${static::delimiter}"
set static::hsl_end "${static::delimiter}HSL_END${static::delimiter}"
}

when CLIENT_ACCEPTED {

    set hsl [HSL::open -proto TCP -pool $static::hsl_pool]
    set sessionId "[IP::client_addr][TCP::client_port][IP::local_addr][TCP::local_port][expr { int(100000000 * rand()) }]"
    binary scan [md5 $sessionId] H* correlationId junk
    set requestId 0
}

when HTTP_REQUEST  {
    incr requestId

    set request_time [clock clicks -milliseconds]
    set reqHeaderString "${static::request_header_start}"
    set contentTypeHeaderValue ""
    foreach aHeader [HTTP::header names] {
      if { [string tolower $aHeader] == "content-type" } {
        set contentTypeHeaderValue [HTTP::header value $aHeader]
      }
      set lwcasekey [string map -nocase {"\"" "\\\""}[string tolower $aHeader]]
      set value [string map -nocase {"\"" "\\\""} [HTTP::header value $aHeader]]
      set headers "${static::header_name}${lwcasekey}${static::header_value}${value}"
      append reqHeaderString $headers
    }
    append reqHeaderString ${static::request_header_end}
    set uri [HTTP::uri]
    set method [HTTP::method]
    set client_addr [IP::client_addr]
    set local_port [TCP::local_port]
    set method [HTTP::method]
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
    set contentTypeHeaderValue ""
    foreach aHeader [HTTP::header names] {
      if { [string tolower $aHeader] == "content-type" } {
        set contentTypeHeaderValue [HTTP::header value $aHeader]
      }
      set lwcasekey [string map -nocase {"\"" "\\\""}[string tolower $aHeader]]
      set value [string map -nocase {"\"" "\\\""} [HTTP::header value $aHeader]]
      set headers "${static::header_name}${lwcasekey}${static::header_value}${value}"
      append resHeaderString $headers
    }
    append resHeaderString "${static::response_header_end}"

    set captureResponseBody [call isCapturableContentType $contentTypeHeaderValue]
    if {$captureResponseBody} {
        HTTP::collect $static::max_collect_len
    }
    set data_sent 0
    set response_truncated 0
    if { ([HTTP::header exists "Content-Length"] && [HTTP::header value "Content-Length"] == 0) || !$captureResponseBody } {
       set response_payload ""
       HSL::send $hsl "${static::hsl_start}$correlationId $static::service_name $static::module_name $static::module_version $method $requestId $static::protocol $uri $client_addr $local_port [HTTP::status] $host [HTTP::version] $request_time $response_time $request_truncated $response_truncated $reqHeaderString $resHeaderString ${static::request_payload}$request_payload ${static::response_payload}$response_payload ${static::hsl_end}\n"
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
      HSL::send $hsl "${static::hsl_start}$correlationId $static::service_name $static::module_name $static::module_version $method $requestId $static::protocol $uri $client_addr $local_port [HTTP::status] $host [HTTP::version] $request_time $response_time $request_truncated $response_truncated  $reqHeaderString $resHeaderString ${static::request_payload}$request_payload ${static::response_payload}$response_payload ${static::hsl_end}\n"
    }
}
