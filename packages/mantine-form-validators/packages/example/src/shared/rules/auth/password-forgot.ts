import { defineRule } from '@jswork/mantine-form-validators/src/main';

export default defineRule({
  name: 'auth-password-forgot',
  methods: {
    username: (value) => {
      return value.length < 6 ? 'Username must be at least 6 characters long' : null;
    },
  },
});
