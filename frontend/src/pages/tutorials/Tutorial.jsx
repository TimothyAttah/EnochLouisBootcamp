import React from 'react';
import { user } from '../../components/Authentication';
import styled from 'styled-components';
import { FcFolder } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const H2 = styled.h2`
  /* display: inline-block; */
  text-transform: capitalize;
  margin-top: 80px;
`;

export const FolderWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin: 50px 0;
`;

export const FolderInfo = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 55px;
  }

  h5 {
    font-size: 16px;
    font-weight: 500;
  }
`;

const Tutorial = () => {
  return (
    <div className='container mt-5'>
      <H2>
        Congratulations, {user?.firstname} {user?.lastname}
      </H2>
      <h4>Welcome to the start of your journey.</h4>
      <FolderWrapper>
        <Link to='/tutorials/html'>
          <FolderInfo>
            <FcFolder />
            <h5>HTML</h5>
          </FolderInfo>
        </Link>
        <FolderInfo>
          <FcFolder />
          <h5>CSS</h5>
        </FolderInfo>
        <FolderInfo>
          <FcFolder />
          <h5>JavaScript</h5>
        </FolderInfo>
        <FolderInfo>
          <FcFolder />
          <h5>ReactJS</h5>
        </FolderInfo>
      </FolderWrapper>
    </div>
  );
};

export default Tutorial;
