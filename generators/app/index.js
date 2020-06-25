"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const glob = require("glob");
const { resolve } = require("path");
const remote = require("yeoman-remote");
const yoHelper = require("@feizheng/yeoman-generator-helper");
const replace = require("replace-in-file");

require('@afeiship/next-npm-registries');

const NPM_CHOICES = ['npm', 'github', 'alo7'].map(item => {
  return { name: item, value: nx.npmRegistries(item) };
});

module.exports = class extends Generator {
  prompting() {
    // console.log(this.determineAppname());
    const prompts = [
      {
        type: "input",
        name: "scope",
        message: "Your project_name scope (eg: `@babel(scope is babel)`)?",
        default: 'feizheng'
      },
      {
        type: 'list',
        name: 'registry',
        message: 'Your registry',
        choices: NPM_CHOICES
      },
      {
        type: "input",
        name: "project_name",
        message: "Your project_name (eg: like this `my-project` )?",
        default: yoHelper.discoverRoot
      },
      {
        type: "input",
        name: "description",
        message: "Your description?"
      },
      {
        type: "input",
        name: "homepage",
        message: "Your homepage?",
        default: "https://github.com/afeiship"
      },
      {
        type: "input",
        name: "author",
        message: "Your author?",
        default: this.user.git.name()
      },
      {
        type: "input",
        name: "email",
        message: "Your email?",
        default: this.user.git.email()
      }
    ];

    return this.prompt(prompts).then(
      function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
        yoHelper.rewriteProps(props, {
          exclude: ["email", "description", "author", "homepage", 'registry']
        });
      }.bind(this)
    );
  }

  writing() {
    const done = this.async();
    remote(
      "afeiship",
      "boilerplate-github",
      function (err, cachePath) {
        // copy files:
        this.fs.copyTpl(
          glob.sync(resolve(cachePath, "{**,.*}")),
          this.destinationPath(),
          this.props,
        );
        done();
      }.bind(this)
    );
  }

  end() {
    const { project_name, homepage, author, email, description } = this.props;
    const files = glob.sync(resolve(this.destinationPath(), "{**,.*}"));

    replace.sync({
      files,
      from: [
        /boilerplate-github-description/g,
        /boilerplate-github-homepage/g,
        /boilerplate-github-author/g,
        /boilerplate-github-email/g,
        /boilerplate-github/g,
      ],
      to: [description, homepage, author, email, project_name]
    });
  }
};
