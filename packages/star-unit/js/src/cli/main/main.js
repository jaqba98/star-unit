const {Command} = require('commander');
const {InitProgram} = require('../program/init.program');
const {ParamsStore} = require("../store/params.store");

const program = new Command();

program
    .name(`Star Unit (for JavaScript)`)
    .description('A lightweight tool for instant JavaScript unit testing.')
    .version('1.0.12');

program
    .command('init')
    .description('Initialize the configuration required by this tool.')
    .option('-r, --root <name>', 'Root to the root directory.', './packages')
    .action((params) => {
        ParamsStore.setStore(params);
        new InitProgram().run();
    });

program.parse();
