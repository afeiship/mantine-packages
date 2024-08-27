type Rule = (value: any, values: any) => string | false | null;

interface NxStatic {
  $rule(names: string[] | string): Record<string, Rule>;
}
