import { defineRule } from '@jswork/mantine-form-validators/src/main';

export default defineRule({
  methods: {
    mobile: (value) => {
      return value.length < 11 ? 'Mobile number should be 11 digits.' : null;
    },
    verify_code: (value, values) => {
      return value !== values.password ? 'Verify codes do not match.' : null;
    },
  },
});
