import React, { Component } from 'react';
import { MantineProvider, MantineTheme, TextInput, TextInputProps } from '@mantine/core';

interface TextInputExtProps extends Omit<TextInputProps, 'value' | 'onChange'> {
  theme?: MantineTheme;
  value: TextInputProps['value'] | null | undefined;
  onChange: TextInputProps['onChange'];
}

const CLASS_NAME = 'text-input-ext';

class TextInputExt extends Component<TextInputExtProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: null
  };

  get value() {
    const { value } = this.props;
    return value == null ? '' : value;
  }

  render() {
    const { theme, value, onChange, ...rest } = this.props;
    return (
      <MantineProvider theme={theme}>
        <TextInput value={this.value} onChange={onChange} {...rest} />
      </MantineProvider>
    );
  }
}

export default TextInputExt;
