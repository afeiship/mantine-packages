export interface Rule {
  name?: string;
  methods: {
    [key: string]: (value: any, values: any, rulePath: string) => string | false | null;
  };
}

function defineRule(inRule: Rule): Rule {
  return inRule;
}

export default defineRule;
