# mantine-form-validators
> Validate rule manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/mantine-form-validators
```

## usage
1. import css
  ```scss
  @import "~@jswork/mantine-form-validators/dist/style.css";

  // or use sass
  @import "~@jswork/mantine-form-validators/dist/style.scss";

  // customize your styles:
  $mantine-form-validators-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import MantineFormValidators from '../../src/main';
  import styled from 'styled-components';
  import { scanVite } from '@jswork/scan-modules';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default () => {
    const moduleFiles = import.meta.glob('./shared/rules/**/*.ts', { eager: true });
    const modules = scanVite(moduleFiles, { modules: '/rules/' }) as any;

    return (
      <Container>
        <MantineFormValidators modules={modules} />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/mantine-form-validators/

## license
Code released under [the MIT license](https://github.com/afeiship/mantine-form-validators/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/mantine-form-validators
[version-url]: https://npmjs.org/package/@jswork/mantine-form-validators

[license-image]: https://img.shields.io/npm/l/@jswork/mantine-form-validators
[license-url]: https://github.com/afeiship/mantine-form-validators/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/mantine-form-validators
[size-url]: https://github.com/afeiship/mantine-form-validators/blob/master/dist/mantine-form-validators.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/mantine-form-validators
[download-url]: https://www.npmjs.com/package/@jswork/mantine-form-validators
