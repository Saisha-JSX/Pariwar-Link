export const validateLoginForm = (email: string, password: string) => {
  const errors: { email?: string; password?: string } = {};
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  return errors;
};
