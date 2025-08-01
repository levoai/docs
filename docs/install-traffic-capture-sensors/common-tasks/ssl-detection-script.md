---
sidebar_position: 4
---

# SSL/TLS Detection Script

This script helps you identify SSL/TLS implementations on your system, which is useful for determining the appropriate eBPF SSL hooking strategies for API observability.

## Download the Script

import BrowserOnly from '@docusaurus/BrowserOnly';

export function SSLScript() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <a href={window.location.protocol + '//' + window.location.host + '/artifacts/sensor/ssl-detection.sh'} download>Download SSL Detection Script</a>
      )}
    </BrowserOnly>
  );
}

Download the comprehensive SSL detection script: <SSLScript/>

## Usage

1. **Download the script** using the link above
2. **Make it executable**:
   ```bash
   chmod +x ssl-detection.sh
   ```
3. **Run the script**:
   ```bash
   ./ssl-detection.sh
   ```

The script will automatically create a timestamped output file (e.g., `ssl-detection-report-20240115-143022.txt`) in the same directory. This file contains the complete report and can be shared with Levo support for analysis.

## What the Script Does

The script analyzes your system to identify SSL/TLS implementations and provides a comprehensive report that helps determine the best eBPF SSL hooking strategies for API observability.

## Output File

The script automatically creates a timestamped output file in the same directory where you run it. The filename format is:
```
ssl-detection-report-YYYYMMDD-HHMMSS.txt
```

For example: `ssl-detection-report-20240115-143022.txt`

This file contains the complete report and can be easily shared with Levo support for analysis. 