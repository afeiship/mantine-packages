export interface Rule {
  name?: string;
  methods: {
    [key: string]: (value: any, values: any, rulePath: string) => string | boolean | null;
  };
}

function defineRule(inRule: Rule): Rule {
  return inRule;
}

export default defineRule;
