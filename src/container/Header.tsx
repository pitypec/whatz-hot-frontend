import React from 'react';
import { Navbar } from '@blueprintjs/core';
import styled from 'styled-components';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Group>
        <Wrapper>
          <Navbar.Heading>Whatz-hot</Navbar.Heading>
        </Wrapper>
      </Navbar.Group>
    </Navbar>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Header;
