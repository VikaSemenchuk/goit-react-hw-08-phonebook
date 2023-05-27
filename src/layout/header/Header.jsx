import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUserData } from 'redux/auth/selectors';

import { Button } from 'styles/Button.styled';
import {
  AuthWrapper,
  GreetingText,
  NavList,
  PagesWrapper,
  StyledHeader,
  StyledNavLink,
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  return (
    <StyledHeader>
      <NavList>
        {isLoggedIn ? (
          <>
            <PagesWrapper>
              <StyledNavLink to={'/'}>HOME</StyledNavLink>
              <StyledNavLink to={'/contacts'}>CONTACTS</StyledNavLink>
            </PagesWrapper>
            <AuthWrapper>
              <GreetingText>HELLO, {userData.name}</GreetingText>
              <Button
                type="button"
                className="headerBtn"
                onClick={handleLogOut}
              >
                Log out
              </Button>
            </AuthWrapper>
          </>
        ) : (
          <>
            <StyledNavLink to={'/'}>HOME</StyledNavLink>
            <AuthWrapper>
              <StyledNavLink to={'/login'}>LOGIN</StyledNavLink>
              <StyledNavLink to={'/register'}>SIGN UP</StyledNavLink>
            </AuthWrapper>
          </>
        )}
      </NavList>
    </StyledHeader>
  );
};
