import React from 'react';
import { BrowserRouter, Route, NavLink, Switch,withRouter } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Footer from './Footer';

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

const LogInContainer = (props) => {
    return (
        <BrowserRouter basename="user">
        <div className="Apper">
          <div className="Apper__Aside">
            <div className="Apper_logo">
            <img src="/logo.jpg" alt="plane logo"></img>
            </div>
            <div className="Apper__Aside__text">
              <h1 className="Apper_heading">locaft</h1>
              <p className="Apper_quote">Sit back, let us move you</p>

            </div>
             <div className="Apper_Aside_image">
                <img src="/skyscraper.png" alt="skyscraper"></img>
              </div>
          </div>
          <div className="Apper__Form">
              <div className="PageSwitcher">
                <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
              <div className="FormTitle">
                  <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          <p>

          </p>

          </div>

        </div>
          <Footer background="blue"/>
        </BrowserRouter>
    );
  }


export default withRouter(LogInContainer);

