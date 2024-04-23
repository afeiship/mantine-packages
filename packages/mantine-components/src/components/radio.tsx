import React, { useEffect } from 'react';
import { Radio as RadioComponent, RadioProps, MantineProvider, MantineTheme } from '@mantine/core';

interface RadioExtendProps extends Omit<RadioProps, 'value' | 'onChange' | 'defaultValue'> {
  theme?: MantineTheme;
  defaultValue?: boolean;
  value?: boolean;

  onChange?(value: boolean): any;
}

function Radio(props: RadioExtendProps) {
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
      <RadioComponent checked={checked} onChange={handleToggle} {...rest} />
    </MantineProvider>
  );
}

Radio.defaultProps = {
  defaultValue: false,
  onChange: () => {}
};

export default Radio;
