import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getCurrentUserRequest } from 'redux/auth/operations';
import Layout from 'layout/layout/Layout';

const HomePage = lazy(() => import('pages/homePage/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  );
}
