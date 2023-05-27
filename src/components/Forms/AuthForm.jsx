import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/auth/selectors';

import { Button } from 'styles/Button.styled';
import Loader from 'components/loader/Loader';

import { Input, Label } from 'styles/Form.styled';
import { StyledForm } from './AuthForm.styled';

function AuthForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>{isLoginForm ? 'Sign In' : 'Sign Up'}</h2>
        {isLoginForm ? null : (
          <Label>
            <span>Name: </span>
            <Input
              type="text"
              name="name"
              placeholder={'Enter your name'}
              ref={nameInputRef}
              required
            />
          </Label>
        )}
        <Label>
          <span>E-mail: </span>
          <Input
            type="email"
            name="email"
            placeholder={'Enter your e-mail'}
            ref={emailInputRef}
            required
          />
        </Label>
        <Label>
          <span>Password: </span>
          <Input
            type="password"
            name="password"
            minLength={7}
            placeholder={'Enter your password'}
            ref={passwordInputRef}
            required
          />
        </Label>

        <Button
          className="formBtn"
          disabled={status === 'pending'}
          type="submit"
        >
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </Button>
      </StyledForm>
      {status === 'pending' && <Loader />}
    </>
  );
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
