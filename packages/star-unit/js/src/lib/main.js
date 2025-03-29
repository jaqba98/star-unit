const { Command } = require('commander');

const program = new Command();

program
    .name('Star Unit (For JavaScript)')
    .description('A lightweight tool for testing JavaScript code instantly.')
    .version('1.0.6')

program.command('a')
    .option('-a, --aa', 'aaa', 'aaa')
    .action((options) => {
        console.log(options);
    });

program.command('b')
    .option('-b, --bb', 'bbb', 'bbb')
    .action((options) => {
        console.log(options);
    });

program.parse();
