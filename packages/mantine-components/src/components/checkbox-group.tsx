import React, { useEffect } from 'react';
import RcList, { ReactListProps, TemplateArgs } from '@jswork/react-list';
import { Checkbox, CheckboxGroupProps, Group, GroupProps, MantineProvider, MantineTheme } from '@mantine/core';

type PrimitiveType = string | number;
type Kv = { value: PrimitiveType; label: any } & Record<string, any>;

interface CheckboxGroupExtendProps extends Omit<CheckboxGroupProps, 'children' | 'value' | 'onChange'> {
  items: Kv[];
  value?: any[];
  onChange?: (value: any[]) => void;
  theme?: MantineTheme;
  template?: (args: TemplateArgs) => React.ReactNode;
  groupProps?: GroupProps;
  listProps?: Omit<ReactListProps, 'items' | 'template'>;
}

const defaultTemplate = ({ item }) => {
  const { value, ...rest } = item;
  return <Checkbox key={value} value={String(value)} {...rest} />;
};

const tryParse = (value: PrimitiveType[]) => {
  const fn = (item: PrimitiveType) => parseFloat(String(item)) || item;
  return value.map(fn);
};

const CheckboxGroup = (props: CheckboxGroupExtendProps) => {
  const { className, theme, items, template, value, onChange, groupProps, listProps, ...rest } = props;
  const _value = value!.map(String);
  const _items = items.map((item) => ({ ...item, value: String(item.value) }));
  const [checkBoxValue, setCheckBoxValue] = React.useState(_value);
  const handleChange = (e: string[]) => {
    const parsed = tryParse(e);
    onChange?.(parsed);
  };

  useEffect(() => {
    setCheckBoxValue(_value);
  }, [value]);

  return (
    <MantineProvider theme={theme}>
      <Checkbox.Group onChange={handleChange} value={checkBoxValue} {...rest}>
        <Group gap={4} {...groupProps}>
          <RcList items={_items} template={template} {...listProps} />
        </Group>
      </Checkbox.Group>
    </MantineProvider>
  );
};

CheckboxGroup.defaultProps = {
  items: [],
  value: [],
  template: defaultTemplate
};

export default CheckboxGroup;
