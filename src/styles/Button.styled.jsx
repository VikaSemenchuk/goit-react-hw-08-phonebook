import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 0.25rem 0.5rem;

  font-weight: 400;
  line-height: 1.5;
  font-size: 0.875rem;
  vertical-align: middle;

  color: #0d6efd;
  background-color: transparent;

  border: 1px solid #0d6efd;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #0d6efd;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &.formBtn {
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    color: #fff;

    background-color: #0d6efd;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #0b5ed7;
      transition: all 0.3s ease-in-out;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
  &.headerBtn {
    min-width: 100px;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    border: 1px solid #fff;

    &:hover,
    &:focus {
      color: #0d6efd;
      background-color: #b6dff6;
      transition: all 0.3s ease-in-out;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }
`;
