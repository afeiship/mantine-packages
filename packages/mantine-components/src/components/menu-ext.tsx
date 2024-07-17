import React, { Component } from 'react';
import { MantineProvider, MantineTheme, Menu as MenuComponent, MenuProps } from '@mantine/core';
import ReactList, { TemplateArgs } from '@jswork/react-list';

const CLASS_NAME = 'MenuExt';

interface MenuItemProps {
  type?: keyof typeof MENU_ITEMS;
  label?: string;

  [key: string]: any;
}

interface MenuExtProps extends MenuProps {
  theme?: MantineTheme;
  items: MenuItemProps[];
  template?: (args: TemplateArgs) => React.ReactNode;
  onItemClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuTarget = MenuComponent.Target;
const MenuDropdown = MenuComponent.Dropdown;
const MENU_ITEMS = {
  item: MenuComponent.Item,
  label: MenuComponent.Label,
  divider: MenuComponent.Divider
};

export default class MenuExt extends Component<MenuExtProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const { theme, items, children, template, onItemClick, ...rest } = this.props;
    return (
      <MantineProvider theme={theme}>
        <MenuComponent {...rest}>
          <MenuTarget>{children}</MenuTarget>
          <MenuDropdown>
            <ReactList items={items} template={template} options={{ onItemClick }} />
          </MenuDropdown>
        </MenuComponent>
      </MantineProvider>
    );
  }
}
