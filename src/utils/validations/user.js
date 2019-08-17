import * as Yup from 'yup'

export default Yup.object().shape({
  first_name: Yup.string()
    .required('First name is required')
    .max(12),
  middle_name: Yup.string().max(20),
  last_name: Yup.string()
    .required('Last name is required')
    .max(18),
  email: Yup.string()
    .email()
    .required('E-mail is required'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (password, field) =>
    password ? field.required().min(8) : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
})
