import styled from 'styled-components';

export const ListItem = styled.li`
  border-radius: 5px;
  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,
    inset rgba(255, 255, 255, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 13px 3px #9d0043;
    transform: scale(1.03);
  }
`;

export const Section = styled.section`
  padding: 15px 10;
`;

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 35px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin: 10px auto 0px;
  padding: 0px 0px 30px;
  list-style: none;
`;

export const CastImg = styled.img`
  width: 100%;
  min-height: 300px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const CastInfo = styled.div`
  display: flex-box;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 22px;
  align-items: center;
  text-align: center;
  font-style: italic;
  color: black;
`;
