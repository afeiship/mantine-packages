import { defineRule } from '@jswork/mantine-form-validators/src/main';

export default defineRule({
  name: 'x1',
  methods: {
    email: (value) => {
      return !value.includes('@') ? 'Invalid email' : null;
    },
  },
});
