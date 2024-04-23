import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 50px;
  color: #000;

  border: 2px solid red;
  padding: 20px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 0;
  }

  @media screen and (max-width: 380px) {
    text-align: center;
  }
`;

export const TopDescription = styled.p`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  margin-top: 20px;
`;

export const ListsDescription = styled.ul`
  margin: 15px 0;
  padding: 0;
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  li {
    list-style: inside;
    padding: 5px 0;
    margin: 0;
  }

  @media screen and (max-width: 380px) {
    text-align: center;
  }
`;

export const ContentBox = styled.div`
  margin: 15px 0;
  margin-bottom: 20px;
  h4 {
    margin-bottom: 15px;
  }

  span {
    color: red;
    background-color: #eee;
  }

  @media screen and (max-width: 380px) {
    h4,
    p {
      text-align: center;
    }
  }
`;

export const ExampleBox = styled.div`
  background-color: #ccc;
  padding: 20px;
  margin: 10px 0;

  h5 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  p {
    padding: 10px;
    background-color: #fff;
    color: blue;
  }

  span {
    color: red;
    background-color: #eee;
  }

  @media screen and (max-width: 380px) {
    p {
      text-align: left;
    }
  }
`;
