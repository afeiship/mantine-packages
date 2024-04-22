import React, { useEffect } from 'react';
import {
  Checkbox as CheckboxComponent,
  CheckboxProps,
  MantineProvider,
  MantineTheme
} from '@mantine/core';

interface CheckboxExtendProps extends Omit<CheckboxProps, 'value' | 'onChange' | 'defaultValue'> {
  theme?: MantineTheme;
  defaultValue?: boolean;
  value?: boolean;

  onChange?(value: boolean): any;
}

function Checkbox(props: CheckboxExtendProps) {
  const { theme, defaultValue, value, onChange, ...rest } = props;
  const [checked, setChecked] = React.useState(value || defaultValue || false);
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = event.target.checked;
    setChecked(nextChecked);
    onChange?.(nextChecked);
  };

  useEffect(() => {
    setChecked(!!value);
  }, [value]);

  return (
    <MantineProvider theme={theme}>
      <CheckboxComponent checked={checked} onChange={handleToggle} {...rest} />
    </MantineProvider>
  );
}

Checkbox.defaultProps = {
  defaultValue: false,
  onChange: () => {}
};

export default Checkbox;
