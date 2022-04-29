'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');
const yoHelper = require('@jswork/yeoman-generator-helper');
const getp = require('@jswork/generator-prompts').default;
const prompts = getp([
  'scope',
  'registry',
  'project_name',
  'description',
  'homepage',
  'author',
  'email'
]);

module.exports = class extends Generator {
  async prompting() {
    this.props = await this.prompt(prompts);
    yoHelper.rewriteProps(this.props);
  }

  writing() {
    // from dotfiles
    this.composeWith([
      '@jswork/dotfiles:prettier',
      '@jswork/dotfiles:npmrc',
      '@jswork/dotfiles:editorconfig',
      '@jswork/dotfiles:gitignore'
    ]);

    this.fs.copyTpl(
      globby.sync(this.templatePath('**'), { dot: true }),
      this.destinationPath(),
      this.props
    );
  }
};
