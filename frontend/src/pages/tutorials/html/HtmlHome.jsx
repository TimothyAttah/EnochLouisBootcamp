import React from 'react';
import HtmlTutorialLists from './HtmlTutorialLists';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 50px;
`;

const HtmlHome = () => {
  return (
    <div className='mt-5'>
      <Container>
        <HtmlTutorialLists />
        <div>
          <h1>HTML Tutorial</h1>
          <div>
            <p>
              HTML is the standard markup language for Web pages.
              <br />
              With HTML you can create your own Website.
              <br />
              HTML is easy to learn - You will enjoy it!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HtmlHome;
