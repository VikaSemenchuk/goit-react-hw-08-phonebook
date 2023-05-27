import styled from 'styled-components';

export const StyledFooter = styled.footer`
  max-width: 780px;
  margin: 0 auto;
`;
export const GitHubLink = styled.a`
  text-decoration: none;
  color: rgb(13, 110, 253);
  &:hover,
  &:focus {
    border-bottom: 1px solid blue;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
