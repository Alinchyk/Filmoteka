import styled from 'styled-components';

export const Button = styled.button`
  /* Загальні стилі для кнопок */
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #f2f2f2;
  color: #333;
  margin: 0 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.active {
    background-color: #007bff;
    color: #fff;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const PaginationButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  margin-top: 20px;
`;
