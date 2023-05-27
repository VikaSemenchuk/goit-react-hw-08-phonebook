import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  & h2 {
    color: #0d6efd;
    text-align: center;
    text-transform: uppercase;
  }
  & span {
    display: inline-block;
    margin-bottom: 10px;
  }

  & button {
    max-width: 150px;
  }
`;
