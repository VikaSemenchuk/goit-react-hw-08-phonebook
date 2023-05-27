import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  display: block;

  width: 100%;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  color: #212529;

  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;

  &:hover,
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;
