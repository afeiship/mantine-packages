import React, { Component } from 'react';
import dayjs from 'dayjs';
import { MantineProvider, MantineTheme } from '@mantine/core';
import { DateInput, DateInputProps } from '@mantine/dates';

interface DateInputExtProps extends Omit<DateInputProps, 'value' | 'onChange'> {
  theme?: MantineTheme;
  value: DateInputProps['value'] | string | null | undefined;
  onChange: (date: string) => void;
}

const CLASS_NAME = 'date-input-ext';
const DATA_FORMAT_HOOKS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss'
};

class DateInputExt extends Component<DateInputExtProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    valueFormat: 'YYYY-MM-DD'
  };

  get valueFormat() {
    const { valueFormat } = this.props;
    return DATA_FORMAT_HOOKS[valueFormat as 'string'] || valueFormat;
  }

  get value() {
    const { value } = this.props;
    const fmt = this.valueFormat;

    if (value == null || value === '') return null;
    if (typeof value === 'string') return dayjs(value, fmt).toDate();
    return value;
  }

  handleChange = (value: Date) => {
    const { onChange } = this.props;
    const _value = value ? dayjs(value).format(this.valueFormat) : '';
    onChange(_value);
  };

  render() {
    const { theme, valueFormat, value, onChange, ...rest } = this.props;
    return (
      <MantineProvider theme={theme}>
        <DateInput valueFormat={this.valueFormat} value={this.value} onChange={this.handleChange} {...rest} />
      </MantineProvider>
    );
  }
}

export default DateInputExt;
