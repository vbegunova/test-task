import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 60px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  padding: 20px 20px;
  color: #3470ff;

  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.active,
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;