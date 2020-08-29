import React from 'react';
import styled from 'styled-components';
import Header from '../container/UserauthHeader';
import signimg from '../images/signup_illustration.png';

interface Iprops {
  Children: any;
}
const UserauthLayout: React.FC<Iprops> = ({ children }) => {
  return (
    <Wrapper>
      <Col>
        <Header />
      </Col>
      <Col>
        <Row>
          <FormWrapper>{children}</FormWrapper>
        </Row>
        <Row>
          <SideWrapper>
            <img src={signimg} alt='sigup illustration' />
          </SideWrapper>
        </Row>
      </Col>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  height: 100%;
`;
const Row = styled.div`
  flex-grow: 1;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const SideWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin-top: 100px;
  margin-left: 120px;
`;

export default UserauthLayout;
