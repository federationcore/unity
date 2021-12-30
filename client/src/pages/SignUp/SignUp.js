import React, { useState } from 'react'; // { useState }

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import axios from 'axios';
import styles from './SignUp.module.scss';
import logo from './united.png';
import earth from './m.jpg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/user/user.action';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});
export const SignUp = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const formOptions = { resolver: yupResolver(validationSchema) };
  // const [state, setstate] = useState(null);
  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (values) => {
    setLoading(true);
    dispatch(signUp(values));
    setLoading(false);

    // axios
    //   .post('/v1/user/register', {
    //     name,
    //     email,
    //     password,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  };
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
            <div
              className={
                styles.container__inner_container__login_left_side__login__logo_container
              }
            >
              <img src={logo} alt="logo" />
            </div>
            <h1>Sign Up</h1>
            <p>We are saving the world believe us!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                register={register}
                name={'name'}
                label={'Name'}
                errors={errors.name?.message}
              />
              <Input
                register={register}
                name={'email'}
                label={'Email'}
                errors={errors.email?.message}
              />
              <Input
                register={register}
                name={'password'}
                label={'Password'}
                errors={errors.password?.message}
              />

              <Button type={'submit'} isLoading={loading}>
                Submit
              </Button>
            </form>
            <p>
              Already Have An Account?{' '}
              <span onClick={() => navigate('/login')}>Sign In</span>
            </p>
          </div>
        </div>
        <div className={styles.container__inner_container__picture_right_side}>
          <img src={earth} alt="earth" />
          <h1>United Federation Of Earth!</h1>
          <h2>Turn Your Ideas Into Reality</h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
