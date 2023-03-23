'use strict';
const Generator = require('@jswork/yeoman-generator');
const globby = require('globby');
const getp = require('@jswork/generator-prompts');
const prompts = getp([
  'project_name',
  'description',
  'homepage',
  'author',
  'email'
]);

module.exports = class extends Generator {
  async prompting() {
    this.props = await this.prompt(prompts);
  }

  writing() {
    // from dotfiles
    this.composeWith([
      '@jswork/dotfiles:prettier',
      '@jswork/dotfiles:gitignore'
    ]);

    this.fs.copyTpl(this.srcFiles, this.destinationPath(), this.props);
  }
};
