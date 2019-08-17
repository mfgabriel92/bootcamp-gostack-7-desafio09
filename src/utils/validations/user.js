import * as Yup from 'yup'

export default Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  middle_name: Yup.string(),
  last_name: Yup.string().required('Last name is required'),
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
