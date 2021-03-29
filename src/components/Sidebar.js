import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import UserContext from '../context/UserContext';
const StyledMenu = styled.nav`

  display: flex;
  flex-direction: column;
  position:fixed !important;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <StyledMenu open={props.open}>
      <a href="/#about-us">
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/pricing">
        <span role="img" aria-label="pricing">💸</span>
        Pricing
        </a>
      <a href="/#footer">
        <span role="img" aria-label="contact us">📩</span>
        Contact
        </a>
        
      {userData.user ? (
      <Link >
        <span role="img" aria-label="{userData.user.username}">📩</span>
        {userData.user.username}
        </Link>
            
        
          ):(
<React.Fragment>
      <a href="/user/register">
        <span role="img" aria-label="Register">📩</span>
        Register
        </a>
      <a href="/user/login">
        <span role="img" aria-label="Login">📩</span>
        Login
        </a>
</React.Fragment>
        )
      
      }
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  &:hover{
  background: transparent;

  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media(min-width:768px){
      display:none;
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();
  return (
    <div>
    
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} logout={props.logout} />
      </div>
    </div>
  )  
}

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};
export default Sidebar;
