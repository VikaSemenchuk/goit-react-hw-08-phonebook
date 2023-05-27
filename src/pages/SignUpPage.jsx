import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';

import { registerRequest } from 'redux/auth/operations';
import { selectAuthError, selectIsLoggedIn } from 'redux/auth/selectors';

// import SignUpForm from 'components/Forms/AuthForm';
import { toast } from 'react-toastify';
// import css from '../components/App.module.css';
import { PageContainer } from 'components/styles/PageContainer';
import AuthForm from 'components/Forms/AuthForm';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (error) {
      toast.error('Sorry, something went wrong');
    }
  }, [error]);

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <PageContainer>
      <section>
        <div>
          <h1 className='hidden'>Register page</h1>
          {/* {error  && toast.error('Sorry, something went wrong')} */}
          <AuthForm onSubmit={handleRegister} />
        </div>
      </section>
    </PageContainer>
  );
};

export default SignUpPage;
