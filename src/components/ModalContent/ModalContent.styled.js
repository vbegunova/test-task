import styled from 'styled-components';

export const Image = styled.img`
  margin-bottom: 14px;
  display: block;
  width: 461px;
  height: 248px;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
`;

export const ModalCardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
`;

export const ModalCardTitleAccent = styled.span`
  color: #3470ff;
`;

export const ModalCardDetails = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 14px;
  }
`;

export const ModalCardDescription = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const ModalCardSubtitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const ConditionalsContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Condition = styled.div`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const ButtonRent = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 44px;
  border-radius: 12px;
  background-color: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  text-decoration: none;
  transition: background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    background-color: #0b44cd;
  }
`;
