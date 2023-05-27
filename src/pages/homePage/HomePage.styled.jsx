import styled from 'styled-components';

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 70vh;

  & h1 {
    font-weight: 600;
    font-size: 58px;
    line-height: 1.22;
    text-align: center;
    color: #0d6efd;
    & span {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      text-transform: uppercase;
    }
  }
`;
