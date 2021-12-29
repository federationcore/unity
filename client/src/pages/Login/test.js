import React from 'react';

const test = () => {
  return (
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
      </form>
      TOKEN
      <div style={{ width: '300px', wordBreak: 'break-all' }}>
        {state ? state : null}
      </div>
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default test;
