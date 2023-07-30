import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 18;

  &:hover {
    color: #9d0043;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 350px;
  border: 1px solid black;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #ff4081;
  }
`;

export const SearchButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #9d0043;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0005a;
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 22px;
  align-items: center;
  text-align: center;
  font-style: italic;
  color: black;
`;

export const Card = styled.li`
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

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 35px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin: 10px auto 0px;
  padding: 0px 0px 30px;
  list-style: none;
`;

export const Poster = styled.img`
  width: 100%;
  min-height: 410px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
