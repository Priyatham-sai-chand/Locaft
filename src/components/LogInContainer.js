import React from 'react';
import { BrowserRouter, Route, NavLink, Switch,withRouter } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Footer from './Footer';
import styled, {css} from 'styled-components';

import '../login_reg.css';
const BaseApp = styled.div`
  display: flex;
  color: white;
  height:100vh;


`;
const AppSide = styled.div`
  width: 50%;
  background-color: #66bfbf;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
 
`;
const AppForm = styled.div`

  width: 50%;
  background-color: #ffffff;
  padding: 25px 40px;
  overflow: auto;

`;
const PageSwitcherContainer = styled.div`

  display: flex;
  justify-content: flex-end;
  margin-bottom: 10%;

`;
const BannerHeading = styled.h1`

  position: relative;
  text-align: center;
  font-family: Ubuntu;
  font-size: 5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  text-transform: lowercase;
`;
const PlaneContainer = styled.div`

  width:100px;
  display:flex;
  margin-bottom: 50px;
  align-content: flex-start;
  justify-content: flex-start;

`;
const TextContainer = styled.p`

  width: 50%;
  background-color: #66bfbf;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
 
`;

const BannerText = styled.p`
  color:white;
  font-size: 1.25em;
  font-style:italic;


`;
const SkyContainer = styled.div`
  margin-top: 600px;
  width: 100%;
  background-size: 100%;
`;
const PageSwitcher = styled(NavLink)`
  background-color: #4C5D72;
  color: white;
  padding: 10px 25px;
  cursor: pointer;
  font-size: .9em;
  border: none;
  outline: none;
  display: inline-block;
  text-decoration: none !important;

  &.active{
  background-color: #66bfbf;
  color: white;
  }

  &:first-child {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;

  }
  &:last-child {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;

  }
`;

const FormLink = styled(NavLink)`

  color: #707C8B;
  text-decoration: none !important;
  display: inline-block;
  font-size: 1.7em;
  margin: 0 10px;
  padding-bottom: 5px;
  border: none;

  &:first-child {
    margin-left: 0;
  }
  &:last-child{
    color: #707c8b;
  }
  &.active{
    border-bottom: 1px solid #199087;
  }



`;

const FormTitle = styled.div`
  color: #000000;
  font-weight: 300;
  margin-bottom: 50px;


`;
const LogInContainer = (props) => {
    return (
        <BrowserRouter basename="user">
        <BaseApp>
          <AppSide>
            <PlaneContainer>
            <img src="/logo.jpg" alt="plane logo"></img>
            </PlaneContainer>
            <TextContainer>
              <BannerHeading>locaft</BannerHeading>
              <BannerText>Sit back, let us move you</BannerText>

            </TextContainer>
             <SkyContainer>
                <img src="/skyscraper.png" alt="skyscraper"></img>
              </SkyContainer>
          </AppSide>
          <AppForm>
              <PageSwitcherContainer>
                <PageSwitcher to="/login" >Sign In</PageSwitcher>
                <PageSwitcher to="/register" >Sign Up</PageSwitcher>
              </PageSwitcherContainer>
              <FormTitle>
                  <FormLink to="/login" >Sign In</FormLink> or <FormLink  to="/register">Sign Up</FormLink>
              </FormTitle>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          <p>

          </p>

          </AppForm>

        </BaseApp>
          <Footer background="blue"/>
        </BrowserRouter>
    );
  }


export default withRouter(LogInContainer);

