# Hello World VS Code Extension

A simple working VS Code extension that demonstrates the basics of extension development.

## Features

- **Hello World Command**: Shows an information message (Ctrl+Shift+H or Cmd+Shift+H)
- **Show Date Command**: Displays the current date and time

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile TypeScript:
   ```bash
   npm run compile
   ```

3. Open the extension in debug mode:
   - Press `F5` to launch the Extension Development Host
   - In the new VS Code window, use `Ctrl+Shift+P` and run:
     - "Hello World: Show Message" (or press Ctrl+Shift+H)
     - "Hello World: Show Current Date"

## Development

- **Watch mode**: `npm run watch` - Automatically recompiles on file changes
- **Debug**: Press `F5` in VS Code to start debugging

## Project Structure

```
.
├── src/
│   └── extension.ts       # Main extension code
├── .vscode/
│   ├── launch.json        # Debug configuration
│   └── tasks.json         # Build tasks
├── package.json           # Extension manifest
├── tsconfig.json          # TypeScript config
└── README.md             # This file
```

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Extension Examples](https://github.com/microsoft/vscode-extension-samples)
