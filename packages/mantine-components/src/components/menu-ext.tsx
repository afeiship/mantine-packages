import React, { Component } from 'react';
import { MantineProvider, MantineTheme, Menu, MenuProps } from '@mantine/core';
import ReactList, { ReactListProps } from '@jswork/react-list';

const CLASS_NAME = 'MenuExt';

interface MenuItemProps {
  type?: keyof typeof MENU_ITEMS;
  label?: string;
  value?: number | string | boolean;

  [key: string]: any;
}

interface MenuExtProps extends MenuProps {
  theme?: MantineTheme;
  items: MenuItemProps[];
  listProps?: ReactListProps;
  onItemClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MENU_ITEMS = {
  item: Menu.Item,
  label: Menu.Label,
  divider: Menu.Divider
};

export default class MenuExt extends Component<MenuExtProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  template = ({ item, index, options }) => {
    const { onItemClick } = options;
    const { type, label, value, ...itemRest } = item;
    const _type = type || 'item';
    const MenuItemComponent = MENU_ITEMS[_type];
    const handleCmdClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const _value = value || index;
      onItemClick?.(_value);
    };
    return <MenuItemComponent key={index} children={label} onClick={handleCmdClick} {...itemRest} />;
  };

  render() {
    const { theme, items, children, onItemClick, listProps, ...rest } = this.props;
    return (
      <MantineProvider theme={theme}>
        <Menu {...rest}>
          <Menu.Target>{children}</Menu.Target>
          <Menu.Dropdown>
            <ReactList items={items} template={this.template} options={{ onItemClick }} {...listProps} />
          </Menu.Dropdown>
        </Menu>
      </MantineProvider>
    );
  }
}
