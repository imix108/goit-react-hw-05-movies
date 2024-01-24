import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  outline: grey transparent 2px;
  border-radius: 20px;
  background: transparent;
  border: none;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 80px;
  height: 30px;
  :hover {
    color: white;
    background: grey;
  }
`;
export const LinkGoBack = styled(Link)`
  text-decoration: none;
`;
