import React from 'react';
import {
  RadioGroup as RadioGroupComponent,
  MantineProvider,
  RadioGroupProps,
  MantineTheme,
  Radio,
  Group,
  GroupProps
} from '@mantine/core';
import RcList, { ReactListProps, TemplateArgs } from '@jswork/react-list';
import { raw2kv } from './_helpers';

type PrimitiveType = string | number;
type Kv = { value: PrimitiveType; label: any } & Record<string, any>;
type ChangeHandler = ((value: PrimitiveType) => any) | React.SetStateAction<any>;

interface RadioGroupExtendProps extends Omit<RadioGroupProps, 'children' | 'value' | 'onChange'> {
  theme?: MantineTheme;
  items: Kv[];
  template?: (args: TemplateArgs) => React.ReactNode;
  value?: PrimitiveType;
  onChange?: ChangeHandler;
  groupProps?: GroupProps;
  listProps?: Omit<ReactListProps, 'items' | 'template'>;
}

const tryParse = (value: PrimitiveType) => parseFloat(String(value)) || value;
const defaultTemplate = ({ item }) => {
  const { value, ...rest } = item;
  return <Radio key={value} value={value} {...rest} />;
};

function RadioGroup(props: RadioGroupExtendProps) {
  const { className, theme, items, template, value, onChange, listProps, groupProps, ...rest } = props;
  const _value = String(value);
  const _items = items.map((item) => raw2kv(item));
  const handleChange = (e: string) => {
    const parsed = tryParse(e);
    onChange?.(parsed);
  };

  return (
    <MantineProvider theme={theme}>
      <RadioGroupComponent value={_value} onChange={handleChange} className={className} {...rest}>
        <Group gap={4} {...groupProps}>
          <RcList items={_items} template={template} {...listProps} />
        </Group>
      </RadioGroupComponent>
    </MantineProvider>
  );
}

RadioGroup.defaultProps = {
  items: [],
  template: defaultTemplate
};

export default RadioGroup;
