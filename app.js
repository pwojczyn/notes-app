const validator = require('validator')

const getNotes = require('./notes.js')

const chalk = require('chalk')

console.log(getNotes())

console.log(chalk.blue(validator.isURL('https://wp.pl')))

console.log(chalk.green('Success !...'))