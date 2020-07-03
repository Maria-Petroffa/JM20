import axios from 'axios';

export const request = (values) => {
  axios.post('http://localhost:5000/sign-up', values).then((response) => {
    response.data === 'error'
      ? alert('Этот адрес уже занят')
      : alert('Регистрация прошла успешно');
  });
};
