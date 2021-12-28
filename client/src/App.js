import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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

const App = () => {
  const formOptions = { resolver: yupResolver(validationSchema) };
  const [state, setstate] = useState(null);
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ name, email, password }) {
    axios
      .post('/v1/user/register', {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  const login = () => {
    axios
      .post('/v1/user/login', {
        email: 'name@name.com',
        password: 'test123',
      })
      .then((res) => {
        setstate(res.data.token);
      });
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" name="name" {...register('name')} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" {...register('email')} />
        </div>
        <div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              {...register('password')}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            <div>{errors.password?.message}</div>
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              {...register('confirmPassword')}
              className={`form-control ${
                errors.confirmPassword ? 'is-invalid' : ''
              }`}
            />
            <div>{errors.confirmPassword?.message}</div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mr-1">
            Register
          </button>
        </div>
        <br />
        <br />
        <br />
      </form>
      TOKEN
      <br />
      <br />
      <br />
      <div style={{ width: '300px', wordBreak: 'break-all' }}>
        {state ? state : null}
      </div>
      <br />
      <br />
      <br />
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default App;
