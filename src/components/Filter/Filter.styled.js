import styled from 'styled-components';

export const ButtonSearch = styled.button`
  padding: 14px 44px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  transition: background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    background-color: #0b44cd;
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
  display: flex;
  gap: 18px;
  justify-content: center;
`;

export const LabelFilter = styled.p`
  position: absolute;
  z-index: 1000;
  top: -22px;
  left: 402px;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;
