import React from 'react';
import styles from './Input.module.scss';
const Input = ({ register, label = false, name, errors, ...rest }) => {
  return (
    <div className={styles.root}>
      {label ? <label className={styles.controlLabel}>{label}*</label> : null}
      <input
        type={name === 'password' ? name : 'text'}
        placeholder={name}
        {...rest}
        {...(register ? { ...register(name) } : {})}
      />
      {errors ? <div className={styles.errors}>{errors}</div> : null}
    </div>
  );
};

export default Input;
