import React, { Component } from 'react';
import { MantineProvider, MantineTheme, Select, SelectProps } from '@mantine/core';

interface SelectExtProps extends Omit<SelectProps, 'data' | 'value' | 'onChange'> {
  theme?: MantineTheme;
  value: string | number | boolean | null;
  data: any[];
  onChange: (value: any, arg: any) => void;
}

const CLASS_NAME = 'select-ext';

class SelectExt extends Component<SelectExtProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    type: 'item',
    data: []
  };

  private getParsedValue = (value) => {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  };

  get data() {
    const { data } = this.props;
    return data.map((item) => {
      const { label, value, ...rest } = item;
      const isNumber = typeof value === 'number';
      const isBoolean = typeof value === 'boolean';
      if (isNumber || isBoolean) {
        return { value: value.toString(), label, ...rest };
      }
      return { value, label, ...rest };
    });
  }

  get value() {
    const { value } = this.props;
    return value == null ? null : value.toString();
  }

  onChange = (value, arg) => {
    const { onChange } = this.props;
    const parsedValue = this.getParsedValue(value);
    onChange?.(parsedValue, arg);
  };

  render() {
    const { theme, data, value, onChange, ...rest } = this.props;
    return (
      <MantineProvider theme={theme}>
        <Select data={this.data} value={this.value} onChange={this.onChange} {...rest} />
      </MantineProvider>
    );
  }
}

export default SelectExt;
