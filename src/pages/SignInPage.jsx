import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAuthError, selectIsLoggedIn } from 'redux/auth/selectors';
import { loginRequest } from 'redux/auth/operations';
import { toast } from 'react-toastify';
import { PageContainer } from 'components/styles/PageContainer';
import AuthForm from 'components/Forms/AuthForm';

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);
  if (error) {
    toast.error(`Oops, some error occured... ${error}`);
  }
  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <PageContainer>
      <h1 className='hidden'>Sign-in page</h1>
      {/* {error !== null && <p>Oops, some error occured... {error}</p>} */}
      <AuthForm onSubmit={handleLogin} isLoginForm />
    </PageContainer>
  );
}

export default SignInPage;
