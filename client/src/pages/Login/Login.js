import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './Login.module.scss';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});
export const Login = () => {
  // const formOptions = { resolver: yupResolver(validationSchema) };
  // const [state, setstate] = useState(null);
  // // get functions to build form with useForm() hook
  // const { register, handleSubmit, reset, formState } = useForm(formOptions);
  // const { errors } = formState;

  // function onSubmit({ name, email, password }) {
  //   axios
  //     .post('/v1/user/register', {
  //       name,
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }
  // const login = () => {
  //   axios
  //     .post('/v1/user/login', {
  //       email: 'name@name.com',
  //       password: 'test123',
  //     })
  //     .then((res) => {
  //       setstate(res.data.token);
  //     });
  // };
  return (
    <div className={styles.container}>
      <div className={styles.container__inner_container}>
        <div className={styles.container__inner_container__login_left_side}>
          <div
            className={
              styles.container__inner_container__login_left_side__login
            }
          >
            hello world
          </div>
        </div>
        <div
          className={styles.container__inner_container__picture_right_side}
        ></div>
      </div>
    </div>
  );
};

export default Login;
