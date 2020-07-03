import * as Yup from 'yup';

export const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введите верный адрес')
    .required('Email обязательно для заполнения'),
  name: Yup.string()
    .max(50, 'Не более 50 символов')
    .required('Name обязательно для заполнения'),
  password: Yup.string()
    .min(8, 'Длина не менее 8 символов')
    .max(40, 'Длина не более 4 символов')
    .matches(
      /[a-z]*[0-9]+[A-Z]+/,
      'Используйте только буквы латинского алфавита и цифры, как минимум одна цифра и одна заглавная буква',
    )
    .required('Password обязательно для заполнения'),
  age: Yup.number()
    .min(18, 'от 18')
    .max(65, 'до 65')
    .required('Age обязательно для заполнения'),
  website: Yup.string().url('введите верный адрес'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Repeat Password обязательно для заполнения'),
  acceptTerms: Yup.string().required('Необходимо согласиться с условиями'),
});
