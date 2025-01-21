# Rename Gulf of Mexico Chrome Extension

A Chrome extension that automatically replaces all instances of "Gulf of Mexico" with "Gulf of America" and "Golfo de México" with "Golfo de América" across all websites in real-time.

## Features

- Instantly replaces text as pages load
- Works on dynamically loaded content
- Supports both English and Spanish variations
- Processes all web pages without impacting performance
- Handles various DOM manipulation methods including document.write

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension will be immediately active

## How It Works

The extension uses a content script that:
1. Observes DOM changes using MutationObserver
2. Processes text nodes as they're added to the page
3. Replaces target phrases while preserving case sensitivity
4. Handles both static and dynamically loaded content
5. Skips script and style tags to prevent unwanted modifications

## Screenshots

![Gulf of America Demo](public/gulfofamericademo.png)

*Above: Example of the extension replacing "Gulf of Mexico" with "Gulf of America" on a webpage.*

## Technical Details

- **Manifest Version**: 3
- **Permissions**: 
  - scripting
  - all_urls (to work across all websites)
- **Content Scripts**:
  - Runs at document_start for immediate text processing
  - Uses MutationObserver for dynamic content
  - Preserves original DOM structure
  - Handles various edge cases and dynamic content loading scenarios

## Development

The extension is built using vanilla JavaScript and follows Chrome's Manifest V3 specifications. The content script uses modern DOM APIs and efficient text processing to ensure minimal impact on page load times and performance.

Key files:
- `manifest.json`: Extension configuration and permissions
- `content.js`: Core text replacement logic
- `style.css`: Styling for processed content
