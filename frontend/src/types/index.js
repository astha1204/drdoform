// User structure
export const createUser = (id, email) => ({
  id,
  email,
  created_at: new Date().toISOString(),
});

// Group structure
export const createGroup = (id, name, description, color, user_id, form_count = 0) => ({
  id,
  name,
  description,
  color,
  user_id,
  created_at: new Date().toISOString(),
  form_count,
});

// FormField structure
export const createFormField = (id, label, type, required, options = [], placeholder = '') => ({
  id,
  label,
  type, // 'text' | 'email' | 'number' | 'textarea' | 'select' | 'checkbox'
  required,
  options,
  placeholder,
});

// Form structure
export const createForm = (id, title, description, group_id, user_id, fields = []) => ({
  id,
  title,
  description,
  group_id,
  user_id,
  created_at: new Date().toISOString(),
  fields,
});

// Auth context shape (no types in JS, just a plain object shape for reference)
export const AuthContextShape = {
  user: null,
  loading: false,
  signIn: async (email, password) => {},
  signUp: async (email, password) => {},
  signOut: async () => {},
};
