# react-component-mono-lib
> A react component library template for monorepo.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/mantine-components
```

## usage
1. import css
  ```scss
  @import "~@jswork/mantine-components/dist/style.css";

  // or use sass
  @import "~@jswork/mantine-components/dist/style.scss";

  // customize your styles:
  $react-component-mono-lib-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactComponentMonoLib from '@jswork/mantine-components';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactComponentMonoLib />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-component-mono-lib/

## license
Code released under [the MIT license](https://github.com/afeiship/react-component-mono-lib/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/mantine-components
[version-url]: https://npmjs.org/package/@jswork/mantine-components

[license-image]: https://img.shields.io/npm/l/@jswork/mantine-components
[license-url]: https://github.com/afeiship/react-component-mono-lib/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/mantine-components
[size-url]: https://github.com/afeiship/react-component-mono-lib/blob/master/dist/react-component-mono-lib.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/mantine-components
[download-url]: https://www.npmjs.com/package/@jswork/mantine-components
