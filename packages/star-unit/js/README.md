# Star Unit (for JavaScript) - CLI Tool

**Version**: 1.0.13  
**Command shortcut**: `suj`

Star Unit is a lightweight command-line tool designed for instant JavaScript unit testing, particularly for projects using monorepos. It helps streamline the configuration and execution of unit tests in a simple and fast manner.

## Getting Started

To get started with Star Unit, you can install it globally using npm:

```bash
npm install -g star-unit
```

Once installed, you can run the tool using the `suj` command.

## CLI Commands

### `init`

This command initializes the necessary configuration required for Star Unit to work with your project. You will usually run this first to set up your testing environment.

```bash
suj init
```

#### Options

- `-r, --root <name>`  
  Set the path to the root directory of your packages or modules.  
  **Default**: `./packages`

#### Example Usage

To initialize the configuration with a custom root directory:

```bash
suj init --root ./modules
```

This will set up the necessary configuration files and initialize Star Unit using the `./modules` directory as the root for unit testing.

## License

MIT

**Made with 💛 to simplify JavaScript testing.**
