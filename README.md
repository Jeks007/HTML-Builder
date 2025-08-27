# HTML Builder for Sublime Text

🚀 Ultra-fast HTML file opener for Sublime Text with instant browser preview

## Features

- ⚡ **Blazing fast** - opens HTML files in milliseconds
- 🌐 **Instant browser preview** - opens directly in default browser
- 🎯 **One-click operation** - simple and intuitive
- 🖱️ **Keyboard shortcuts** - quick access with `Ctrl+B`
- 💻 **Cross-platform** - works on Windows, Linux, and macOS

## Installation

### Manual Installation

1. Download or clone this repository
2. Copy the files to your Sublime Text Packages folder:
   - **Windows**: `%APPDATA%\Sublime Text\Packages\User\HTML-Builder\`
   - **macOS**: `~/Library/Application Support/Sublime Text/Packages/User/HTML-Builder/`
   - **Linux**: `~/.config/sublime-text/Packages/User/HTML-Builder/`

3. Create the `HTML-Builder` folder if it doesn't exist

### File Structure
HTML-Builder/
├── build.js
└── HTML Builder.sublime-build


## Requirements

- **Sublime Text 3+** or **Sublime Text 4**
- **Node.js** (already installed on most systems)
- Default web browser

## Usage

### Basic Opening
1. Open any HTML file in Sublime Text
2. Press `Ctrl+B` (or `Cmd+B` on macOS)
3. The HTML file will open in your default browser

### Alternative Methods
- `Ctrl+Shift+B` → Select `Build and Open`
- Right-click in editor → `Build With` → `HTML Builder`

## Configuration

The package works out-of-the-box with no configuration needed. 

### Customization Options

You can modify the `build.js` file to change behavior:

- Edit the opening command for different browsers
- Add additional file validation
- Modify output messages

## Performance

- **Opening time**: < 100ms
- **Zero dependencies** (only uses native Node.js modules)
- **Lightweight** - minimal resource usage

## Supported Platforms

- ✅ Windows (tested)
- ✅ macOS (should work)
- ✅ Linux (should work)

## Troubleshooting

### Common Issues

1. **"Node.js not found"**
   - Install Node.js from [nodejs.org](https://nodejs.org/)
   - Ensure Node.js is in your system PATH

2. **File doesn't open in browser**
   - Check if the file path contains special characters
   - Verify file exists at the specified path

3. **Permission denied**
   - Ensure you have read permissions for the HTML file

### Debug Mode

To see detailed output, add `--debug` to the build command in the sublime-build file.

## License

MIT License - feel free to modify and distribute.

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Ensure all files are in the correct directory
3. Verify Node.js is properly installed

## Contributing

This is a simple open-source project. Feel free to:
- Fork the repository
- Submit pull requests
- Suggest improvements
- Report bugs

## Changelog

### v1.0.0
- Initial release
- Basic HTML file opening functionality
- Cross-platform support
- Fast execution

---

**Enjoy instant HTML previews in your browser!** 🎉"# HTML-Builder" 
