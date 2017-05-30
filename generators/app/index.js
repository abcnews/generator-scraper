const Generator = require('yeoman-generator');
const path = require('path');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const askName = require('inquirer-npm-name');

module.exports = Generator.extend({
  initializing: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine ' + chalk.red('generator-morphio-scraper') + ' generator!'
    ));
  },

  prompting: {

  },

  default: function () {
    this.composeWith(require.resolve('../readme'));
    this.composeWith(require.resolve('generator-node/generators/app'), {
      coveralls: false,
      travis: false,
      cli: false,
      babel: false,
      boilerplate: false,
      gulp: false,
      projectRoot: '',
      skipInstall: this.options.skipInstall
    });
  },

  writing: function () {

  },

  install: function () {
    // this.installDependencies();
  }
});
