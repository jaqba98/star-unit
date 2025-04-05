const { Command } = require("commander");
const { commandDomain } = require("./command.domain");
const { programDomain } = require("./program.domain");

class CommandBuilder {
  build() {
    const program = new Command();
    program
      .name(programDomain.name)
      .description(programDomain.description)
      .version(programDomain.version);
    this.#getDomainCommands().forEach((domainCommand) =>
      this.#createCommand(program, domainCommand),
    );
    program.parse();
  }

  #getDomainCommands() {
    return Object.values(commandDomain);
  }

  #createCommand(program, domainCommand) {
    const command = program.command(domainCommand.name);
    command.description(domainCommand.description);
    this.#getOptions(domainCommand).forEach((option) =>
      this.#createOption(command, option),
    );
    command.action((args) => domainCommand.program.run(commandDomain, args));
  }

  #getOptions(domainCommands) {
    return Object.values(domainCommands.options);
  }

  #createOption(command, option) {
    command.option(option.flags, option.description, option.defaultValue);
  }
}

module.exports = { CommandBuilder };
