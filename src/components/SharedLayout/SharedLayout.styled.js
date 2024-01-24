import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Nav = styled(NavLink)`
  display: flex;
  gap: 30px;
  font-weight: 700;
  padding: 5px;
  border-bottom: 1px solid;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 5px;
  :hover {
    color: white;
    background: grey;
    border-radius: 4px;
    padding: 5px;
  }
  &.active {
    color: white;
    background: grey;
    border-radius: 4px;
  }
`;
