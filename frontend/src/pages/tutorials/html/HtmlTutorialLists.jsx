import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TutorialLists = styled.ul`
  width: 250px;
  height: 300px;
  overflow-y: scroll;

  h2 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  li {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const HtmlTutorialLists = () => {
  return (
    <div className='mt-5'>
      <div>
        <TutorialLists>
          <h2>HTML Tutorial</h2>
          <li>
            <NavLink to='/tutorials/html/html-introduction'>
              HTML Introduction
            </NavLink>
          </li>
          <li>
            <NavLink to='/tutorials/html/html-editors'>HTML Editors</NavLink>
          </li>
          <li>
            <NavLink to='/tutorials/html/html-basics'>HTML Basic</NavLink>
          </li>
          {/* <li>HTML Elements</li> */}
          <li>
            <NavLink to='/tutorials/html/html-attributes'>
              HTML Attributes
            </NavLink>
          </li>
          <li>HTML Headings</li>
          <li>HTML Paragraphs</li>
        </TutorialLists>
        <div>
          <p>Welcome to the HTML Crash Course.</p>
        </div>
      </div>
    </div>
  );
};

export default HtmlTutorialLists;
