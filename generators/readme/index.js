const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    var pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    console.log(this.templatePath('README.md'), this.destinationPath('README.md'));
    this.fs.delete(this.destinationPath('README.md'));
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        projectName: this.options.name,
        description: this.options.description,
        githubAccount: this.options.githubAccount,
        author: {
          name: this.options.authorName,
          url: this.options.authorUrl
        },
        license: pkg.license,
        includeCoveralls: this.options.coveralls,
        content: this.options.content
      }
    );
  }
};
