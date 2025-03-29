const { Command } = require('commander');
const { NAME, VERSION } = require('../const/domain.const');
const { PROGRAM_INIT } = require('../const/program.const');
const { InitProgram } = require('../program/init.program');

const program = new Command();

program
    .name(`${NAME} (for JavaScript)`)
    .description('A lightweight tool for instant JavaScript unit testing.')
    .version(VERSION)

program.command(PROGRAM_INIT)
    .description('Initialize the configuration required by this tool.')
    .action(() => new InitProgram().run());

program.parse();
