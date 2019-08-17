import * as Yup from 'yup'

export default Yup.object().shape({
  first_name: Yup.string()
    .required('First name is required')
    .max(12),
  last_name: Yup.string()
    .required('Last name is required')
    .max(18),
  email: Yup.string()
    .email()
    .required('E-mail is required'),
  password: Yup.string()
    .min(8)
    .max(72)
    .required('Password is required'),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
})
