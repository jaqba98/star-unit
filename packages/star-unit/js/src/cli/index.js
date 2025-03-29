#!/usr/bin/env node
const { Command } = require('commander');

const program = new Command();

program
    .name('Star Unit (For JavaScript)')
    .description('A lightweight tool for testing JavaScript code instantly.')
    .version('1.0.9')

program.command('init')
    .description('Initialize the configuration required by this tool.')
    .action(() => {
        console.log('Init');
    });

program.parse();
