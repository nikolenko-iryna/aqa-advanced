import chalk from 'chalk';

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

console.log(error('Error!'));
console.log(warning('Warning!'));
