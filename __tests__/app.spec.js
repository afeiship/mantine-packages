'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-github:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ scope: 'jswork' });
  });

  test('creates files, include prettier/editorconfig', () => {
    assert.file(['.prettier', '.prettierignore', '.editorconfig', 'README.md']);
  });
});
