import { Component, HTMLAttributes } from 'react';
import objectPath from 'object-path';
import { Rule } from './define-rule';

const CLASS_NAME = 'mantine-form-validators';
export type MantineFormValidatorsProps = {
  /**
   * Vite or webpack alias for modules.
   */
  modules: any[];
} & HTMLAttributes<HTMLDivElement>;

export default class MantineFormValidators extends Component<MantineFormValidatorsProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    modules: []
  };

  private readonly commands: Record<string, any>;

  constructor(props: MantineFormValidatorsProps) {
    super(props);
    const { modules } = this.props;
    const root = typeof window === 'undefined' ? globalThis : window;
    this.commands = {};

    // Register nx.$rule
    objectPath.set(root, 'nx.$rule', this.rule);

    Object.keys(modules).forEach((key: string) => {
      const value = modules[key] as Rule;
      const name = value.name || key;
      if (this.commands[name]) throw new Error(`Command name "${name}" is duplicated.`);
      objectPath.set(this.commands, name, value.methods);
    });
  }

  rule = (names: string | string[]) => {
    if (!names) return this.commands;
    if (typeof names === 'string') {
      // Single name
      const value = objectPath.get(this.commands, names);
      const isDotPath = names.includes('.');
      if (!isDotPath) return value;
      const [_, name] = names.split('.');
      return { [name]: value };
    } else {
      // Array of names
      return names.reduce((acc, name) => {
        const values = this.rule(name);
        return { ...acc, ...values };
      }, {});
    }
  };

  render() {
    return null;
  }
}
