import * as Yup from 'yup'

export default Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email()
    .required('E-mail is required'),
  password: Yup.string()
    .min(8)
    .required('Password is required'),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
})
