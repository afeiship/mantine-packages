interface NxStatic {
  $rule(names: string[] | string): Record<string, (value: any, values: any) => string | null>;
}
