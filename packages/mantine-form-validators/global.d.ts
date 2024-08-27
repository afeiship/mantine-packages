type Rule = (value: any, values: any) => string | null;

interface NxStatic {
  $rule(names: string[] | string): Record<string, Rule>;
}
