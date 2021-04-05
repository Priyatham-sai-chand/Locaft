import React, { useState,useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import  UserContext  from "../context/UserContext";
import styled,{ css } from 'styled-components';

const Header = styled.header`

@import url('https://fonts.googleapis.com/css?family=Montserrat|Ubuntu');
  background: #66bfbf;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 5px 15px;
  z-index: 100000;
  font-family: Ubuntu;

  ${ props => props.sticky ? css`
  ${Header};
  padding: 3px 45px;
  min-height: 3vh;
  opacity: 0.85;
  display: fixed;
  `:css``};

  
   & .logo {
  font-family: "Ubuntu";
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  color: #fff;
  text-decoration: none;
  text-transform: lowercase;
  transition: 0.6s;

   }
   @media (max-width: 768px) {
     display:none;
    }
`;
const List = styled.ul`

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 50px;
  flex-wrap: nowrap;
  margin-bottom: 0px !important;

`;
const ListElement = styled.li`
	color: #fff;
    text-decoration: none;
    text-transform: uppercase;

	position:relative;
	padding:3px 50px;
`;

const Anchor = styled.a`
    color: #fff;
    text-transform: uppercase;
    color: inherit;
    letter-spacing: 2px;
    font-size: 1.2em;
    padding: 3px ;
    transition: 0.6s;
    white-space: nowrap;



    
`;
const Linker = styled(Link)`
	color:#fff;
    text-transform: uppercase;
    color: inherit;
    letter-spacing: 2px;
    font-size: 1.2em;
    padding: 3px 0;
    transition: 0.6s;

`;

export  const logout = (setUserData) => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

export default function NavBar() {
  const [scrolled, setScrolled] = useState(); 
const { userData, setUserData } = useContext(UserContext);
  
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })


  
  return (
    <div className="navbar">
      <Header sticky = {scrolled} >
       
        <Anchor href="/" className="logo">locaft</Anchor>
        <List>
          <ListElement><Anchor href="/">Home</Anchor></ListElement>
          <ListElement><Anchor href="/#about-us">About</Anchor></ListElement>
          <ListElement><Anchor href="/pricing">Pricing</Anchor></ListElement>
          <ListElement><Anchor href="/#footer">Contact us</Anchor></ListElement>
          {userData.user ? (
            <React.Fragment>
            <ListElement><Linker onClick={() => logout(setUserData)}>{userData.user.username}</Linker></ListElement>
            </React.Fragment>
            
          ) : (
              <React.Fragment>
              <ListElement><Linker  to="/user/register">Register</Linker></ListElement>
              <ListElement><Linker to="/user/login">login</Linker></ListElement>
              </React.Fragment>
            )}
        </List>

      </Header>
    </div>

  )
}

