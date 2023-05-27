import { useLocation } from 'react-router-dom';

import { ImPhone } from 'react-icons/im';
import { StyledNavLink } from 'layout/header/Header.styled';
import { MainPage } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation(); 


  return (
    <>
      <MainPage>
        <h1>Welcome to the</h1>
        <StyledNavLink
          className="inHomePageLink"
          to="contacts"
          state={{ from: location }}
        >
          <ImPhone /> Phonebook
        </StyledNavLink>
      </MainPage>
    </>
  );
};

export default HomePage;
