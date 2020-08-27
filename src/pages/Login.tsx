import React, { Component } from 'react';
import styled from 'styled-components';
import { FormGroup, InputGroup, Button, Alignment } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import Header from '../container/Header';
import signimg from '../images/signup_illustration.png';

class Login extends Component {
  handleSubmit = () => {};
  render() {
    return (
      <Wrapper>
        <Col>
          <Header />
        </Col>
        <Col>
          <Row>
            <FormWrapper>
              <Form onSubmit={this.handleSubmit}>
                <H2>sign in to whatz-hot</H2>
                <SubHeading>
                  new to what-hot? <Link to='/sigup'>sign up</Link>
                </SubHeading>
                <LegalCopy>
                  By logging in, you agree to Yelp’s{' '}
                  <Link to='/termsofservice'>Terms of Service</Link> and{' '}
                  <Link to='/privacypolicy'>Privacy Policy.</Link>
                </LegalCopy>
                <ButtonWrapper>
                  <Button
                    alignText={Alignment.CENTER}
                    intent={'primary'}
                    large={true}
                    fill={true}
                  >
                    login with facebook
                  </Button>
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button alignText={Alignment.CENTER} large={true} fill={true}>
                    login with google
                  </Button>
                </ButtonWrapper>

                <FormGroup
                  helperText='Helper text with details...'
                  label='Email'
                  labelFor='email'
                  labelInfo='(required)'
                >
                  <InputGroup id='email' type='email' placeholder='Email' />
                </FormGroup>
                <FormGroup
                  helperText='Helper text with details...'
                  label='Password'
                  labelFor='password'
                  labelInfo='(required)'
                >
                  <InputGroup
                    id='password'
                    type='password'
                    placeholder='Password'
                  />
                </FormGroup>
                <Link to='/forgotpassword'>
                  <H3>forgot password?</H3>
                </Link>
                <ButtonWrapper>
                  <Button
                    alignText={Alignment.CENTER}
                    intent={'success'}
                    large={true}
                    fill={true}
                  >
                    Login
                  </Button>
                </ButtonWrapper>
              </Form>
            </FormWrapper>
          </Row>
          <Row>
            <SideWrapper>
              <img src={signimg} alt='sigup illustration' />
            </SideWrapper>
          </Row>
        </Col>
      </Wrapper>
    );
  }
}

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
  margin-left: 80px;
`;
const Form = styled.form`
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin-top: 70px;
`;
const H2 = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #d32323;
  text-transform: capitalize;
  padding-bottom: 10px;
`;
const SubHeading = styled.p`
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 12px;
`;
const LegalCopy = styled.p`
  text-align: center;
  margin-top: 10px;
  color: red;
  text-transform: capitalize;
  color: #333;
  font-size: 12px;
  line-height: 1.5em;
`;
const H3 = styled.h4`
  text-align: right;
  font-size: 10px;
  padding-bottom: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export default Login;
