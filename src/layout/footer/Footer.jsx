import React from 'react';
import { GitHubLink, StyledFooter } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © {new Date().getFullYear()} <span>Phonebook.</span>, Inc. All rights
        reserved.
      </p>
      <p>
        Created by{' '}
        <GitHubLink
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="https://github.com/VikaSemenchuk"
        >
          Victoria Semenchuk
        </GitHubLink>{' '}
      </p>
    </StyledFooter>
  );
};
