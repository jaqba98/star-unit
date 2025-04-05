# Star Unit (for JavaScript) - CLI Tool

**Version**: 1.0.12
**Command shortcut**: `suj`

Star Unit is a lightweight and efficient command-line tool designed to support instant unit testing in JavaScript projects. This CLI aims to streamline the configuration and execution of unit tests in a modular and fast way, especially suited for monorepo setups.

## Getting Started

To use the CLI, simply run the `suj` command followed by one of the available subcommands.

### Installation

```bash
npm install -g star-unit
```

Once installed, you'll have access to the `suj` command.

## CLI Overview

```bash
suj [command] [options]
```

### Available Commands

#### `init`

Initializes the configuration required by the Star Unit tool. This is usually the first command you should run to set up the testing environment for your project.

```bash
suj init
```

##### Options

- `-r, --root <name>`  
  Define the path to the root directory of your packages/modules.  
  **Default**: `./packages`

##### Example

```bash
suj init --root ./modules
```

This will create the necessary configuration files and initialize Star Unit to use the `./modules` folder as the root for unit testing.

## Under the Hood

Star Unit uses a modular system to keep configurations centralized and easily extendable. It stores CLI parameters using a custom in-memory `ParamsStore` and executes initialization logic through the `InitProgram` class.

The CLI itself is built using [commander.js](https://github.com/tj/commander.js), providing a clean and extensible command-line experience.

## Roadmap

- Test discovery and execution
- Watch mode for live testing
- Custom test reporter integration
- TypeScript support

## Contributing

Pull requests and issues are welcome! Feel free to open a discussion to suggest features or report bugs.

## License

MIT

**Made with 💛 to simplify JavaScript testing.**
