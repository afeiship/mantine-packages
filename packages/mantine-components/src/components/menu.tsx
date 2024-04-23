import React from 'react';
import { Menu as MenuComponent, MenuProps } from '@mantine/core';
import ReactList, { TemplateArgs } from '@jswork/react-list';

interface MenuItemProps {
  type?: keyof typeof MENU_ITEMS;
  label?: string;

  [key: string]: any;
}

interface MenuExtendProps extends MenuProps {
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

const template = ({ item, index, options }) => {
  const { onItemClick } = options;
  const { type, label, children, key, ...itemRest } = item;
  const _type = type || 'item';
  const _children = label || children;
  const MenuItemComponent = MENU_ITEMS[_type];
  const handleCmdClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const value = key || index;
    onItemClick?.(value);
  };
  return <MenuItemComponent key={index} children={_children} onClick={handleCmdClick} {...itemRest} />;
};

function Menu(props: MenuExtendProps) {
  const { items, children, template, onItemClick, ...rest } = props;

  return (
    <MenuComponent {...rest}>
      <MenuTarget>{children}</MenuTarget>
      <MenuDropdown>
        <ReactList items={items} template={template} options={{ onItemClick }} />
      </MenuDropdown>
    </MenuComponent>
  );
}

Menu.defaultProps = {
  items: [],
  template
};

export default Menu;
