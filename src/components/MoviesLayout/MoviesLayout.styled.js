import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.ul`
  display: flex;
  padding: 10px 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
  background-image: url('https://dgdesign.ru/uploads/posts/2018-02/1517479415_shapka-sayta-kinolenta-45431321.jpg');
  background-size: cover;
  background-position: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: box-shadow 0.3s ease;

  &.active {
    color: white;
    background-color: #9d0043;
  }

  &:hover {
    box-shadow: 0 0 13px 3px #9d0043;
    transform: scale(1.03);
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 36px;
  color: black;
  textshadow: 2px 2px 4px white;
  padding: 5px;
  margin: 0;
  text-align: center;
  flex: 1;
  margin-left: 200px;
`;
