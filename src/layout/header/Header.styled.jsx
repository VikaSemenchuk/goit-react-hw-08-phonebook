import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;

  min-height: 64px;
  padding: 15px 20px;

  background-color: rgb(13, 110, 253);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavList = styled.nav`
  display: flex;
  margin: 0 auto;
  max-width: 780px;

  justify-content: space-between;
  list-style: none;
`;

export const PagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  min-width: 120px;
  padding: 8px 16px;

  text-align: center;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;

  border-radius: 4px;
  border: 1px solid #fff;

  &.inHomePageLink {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 58px;
    color: #0d6efd;
  }

  &.active,
  :hover,
  :focus {
    color: #0d6efd;
    background-color: #c9e5f6;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const GreetingText = styled.span`
  color: #fff;
`;
