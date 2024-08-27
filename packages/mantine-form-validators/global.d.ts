type Rule = (value: any, values: any, rulePath: string) => string | false | null;

interface NxStatic {
  $rule(names: string[] | string): Record<string, Rule>;
}
