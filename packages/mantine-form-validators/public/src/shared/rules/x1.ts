import { defineRule } from '@jswork/mantine-form-validators/src/main';

export default defineRule({
  methods: {
    email: (value) => {
      return !value.includes('@') ? 'Invalid email' : null;
    },
  },
});