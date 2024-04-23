# mantine-components
> Mantine components for React.

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
  ```
2. import js
  ```js
  import React, { useEffect } from 'react';
  import { Selection } from '@jswork/mantine-components';

  export default () => {
    const [checked, setChecked] = React.useState(true);

    // simulate a server response
    useEffect(() => {
      setTimeout(() => {
        console.log('server response received');
        setChecked(false);
      }, 1000);
    }, []);

    return (
      <div className="relative border w-4/5 mx-auto mt-10">
        <Selection value={checked} onChange={setChecked} label="I agree to the terms and conditions" />
        <hr />
        <Selection
          selectionType="radio"
          value={checked}
          onChange={setChecked}
          label="I agree to the terms and conditions"
        />
        <pre className="p-5 bg-gray-100">{JSON.stringify({ checked }, null, 2)}</pre>
      </div>
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
