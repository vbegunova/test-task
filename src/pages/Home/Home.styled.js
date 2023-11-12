import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePage = styled.div`
  padding-top: 100px;
`;
export const HomeImage = styled.img`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 1000px;
  object-fit: cover;
  object-position: center;
  transform: scale(-1, 1);
`;

export const HomeTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 600;
  color: #121417;
`;

export const HomeSubtitle = styled.h2`
  font-size: 25px;
  margin-bottom: 70px;
`;

export const HomeStyledLink = styled(Link)`
  text-decoration: none;
  padding: 20px 50px;
  background-color: #3470ff;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  transition: background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const Accent = styled.span`
  color: #3470ff;
`;
