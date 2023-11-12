import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  color: #3470ff;
  text-decoration: underline;
  line-height: 1.5;
  font-size: 16px;
  border: none;
  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    color: #0b44cd;
  }
`;
