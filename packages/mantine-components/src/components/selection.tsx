import React, { useEffect } from 'react';
import {
  Checkbox as CheckboxComponent,
  CheckboxProps,
  Radio as RadioComponent,
  RadioProps,
  Switch as SwitchComponent,
  SwitchProps,
  MantineProvider,
  MantineTheme
} from '@mantine/core';

type SelectionProps =
  | Omit<CheckboxProps, 'value' | 'onChange' | 'defaultValue'>
  | Omit<RadioProps, 'value' | 'onChange' | 'defaultValue'>
  | Omit<SwitchProps, 'value' | 'onChange' | 'defaultValue'>;

interface SelectionExtendProps {
  theme?: MantineTheme;
  selectionType?: keyof typeof SELECTION_WIDGETS;
  defaultValue?: boolean;
  value?: boolean;

  onChange?(value: boolean): any;
}

const SELECTION_WIDGETS = {
  checkbox: CheckboxComponent,
  radio: RadioComponent,
  switch: SwitchComponent
};

function Selection<T extends SelectionProps>(props: SelectionExtendProps & T) {
  const { theme, defaultValue, value, onChange, selectionType, ...rest } = props;
  const SelectionComponent = SELECTION_WIDGETS[selectionType!] as any;
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
      <SelectionComponent checked={checked} onChange={handleToggle} {...rest} />
    </MantineProvider>
  );
}

Selection.defaultProps = {
  selectionType: 'checkbox',
  defaultValue: false,
  onChange: () => {}
};

export default Selection;
