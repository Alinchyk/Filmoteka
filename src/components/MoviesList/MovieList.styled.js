import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: black;
  padding: 5px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #e0e0e0;
  transition: transform var(--animation-duration) var(--timing-function);
  height: 100%;

  &:hover {
    box-shadow: 0 0 13px 3px #9d0043;
    transform: scale(1.03);
  }
`;

export const Gallery = styled.ul`
  display: grid;
  flex-basis: calc((100% - 8 * 15px) / 3);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
