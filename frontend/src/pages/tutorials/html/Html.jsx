import React from 'react';
import styled from 'styled-components';
import HtmlTutorialLists from './HtmlTutorialLists';
import { Container } from './HtmlStyles';

export const TutorialLists = styled.ul`
  width: 250px;
  height: 300px;
  overflow-y: scroll;

  li {
    margin-bottom: 10px;
  }
`;

const Html = () => {
  return (
    <div className='mt-5'>
      <Container>
        <HtmlTutorialLists />
        <div>
          <h1>HTML Tutorial</h1>
          <p>HTML is the standard markup language for Web pages.</p>
          <p>With HTML you can create your own Website.</p>
          <p>HTML is easy to learn - You will enjoy it!</p>
        </div>
      </Container>
    </div>
  );
};

export default Html;
