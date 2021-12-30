import axios from 'axios';

export const postSignUp = async ({ name, email, password }) =>
  await axios.post('/v1/user/register', {
    name,
    email,
    password,
  });

export const postSignIn = async ({ email, password }) =>
  await axios.post('/v1/user/login', {
    email,
    password,
  });
