import styled from 'styled-components';

export const Item = styled.li`
  width: 274px;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  display: block;
  margin-bottom: 14px;
  width: 274px;
  height: 268px;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    color: #121417;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const CardTitleModel = styled.span`
  color: #3470ff;
`;

export const CardDetails = styled.p`
  font-size: 12px;
  line-height: 1.5;
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  margin-top: 28px;
  padding: 12px 99px;
  border-radius: 12px;
  background-color: #3470ff;
  font-size: 14px;
  line-height: 1.43;
  border: none;
  color: white;
  transition: background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #0b44cd;
  }
`;
