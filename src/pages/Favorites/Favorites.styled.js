import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NoFavorites = styled.p`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #3470ff;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
