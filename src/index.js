#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('devkit')
  .description('Lightweight development toolkit for Node.js microservices')
  .version('2.1.0');

program
  .command('new <name>')
  .description('Scaffold a new microservice')
  .action((name) => {
    console.log(`Creating service: ${name}`);
    // TODO: implement scaffolding
  });

program
  .command('test')
  .description('Run test suite')
  .action(() => {
    console.log('Running tests...');
    // TODO: implement test runner
  });

program
  .command('deploy')
  .description('Deploy service')
  .option('--stage <env>', 'deployment stage', 'dev')
  .action((opts) => {
    console.log(`Deploying to ${opts.stage}...`);
    // TODO: implement deployment
  });

program.parse();
