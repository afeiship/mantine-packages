import { defineRule } from '@jswork/mantine-form-validators/src/main';

export default defineRule({
  methods: {
    password: (value) => {
      return value.length <= 8 ? 'Password should be at least 9 characters long.' : null;
    },
    password_confirmation: (value, values) => {
      return value !== values.password ? 'Passwords do not match.' : null;
    }
  }
});
