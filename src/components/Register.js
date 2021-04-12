import React, {  useState, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";
import { Link } from "react-router-dom";
import ErrorNotice from "./ErrorNotice";
import styled from 'styled-components';
import {Button, FormCenter, FormField, FormLabel, FormInput, FormLink  } from './miscellaneous/Styles'

const CheckBoxLabel = styled.label`

  color: #646F7D;
  font-size: .9em;

`;
const CheckBox = styled.input`

  position: relative;
  top: 1.5px;
`;
const TermsLink = styled.a`

  color: #646F7D;
  border-bottom: 1px solid #199087;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 2px;
  margin-left: 5px;


`;
 const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState();
  const [contains8C, setContains8C] = useState(false);

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { username,email,phonenumber,password};
      const isEmpty = !Object.values(newUser).some(x => (x !== null && x !== ''));
        console.log("isempty: " + isEmpty )
      if(isEmpty){
        setError("Not all Fields are entered")
        return;
      }
      await Axios.post("https://server-locaft.herokuapp.com/users/register", newUser);
      const loginRes = await Axios.post("https://server-locaft.herokuapp.com/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      return err.response.data.msg && setError(err.response.data.msg);
    }
  };
  const validatePassword = () => {

 if(password.length >= 8) {
   setContains8C(true)
    setError(null)
 }
 else { setContains8C(false); setError("The Password needs to be atleast 8 characters") };
  }


  return (
    <FormCenter>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="FormFields" onSubmit={submit}>
        <FormField>
          <FormLabel htmlFor="name">UserName</FormLabel>
          <FormInput
            type="text"
            id="name"
            placeholder="Enter your full name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            className="FormField__Input"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={validatePassword}
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="email">E-Mail Address</FormLabel> 
          <FormInput
          type="email" 
          id="email" 
          className="FormField__Input" 
          placeholder="Enter your email"
          onChange= { (e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="phone">Phone number</FormLabel>
          <FormInput
          type="number" 
          id="phonenumber" 
            className="FormField__Input"
            placeholder="Enter your Phone no. (+91)"
            onChange={(e) => setPhonenumber(parseInt(e.target.value, 10))}
          />
        </FormField>

        <FormField>
          <CheckBoxLabel>
            <CheckBox type="checkbox" name="hasAgreed" /> I agree all statements in <a href="/" className="FormField__TermsLink">terms of service</a>
          </CheckBoxLabel>
        </FormField>

        <FormField>
          <Button
            type="submit"
             radiuscolor="#009578"
             textcolor="#009578"
             hovercolor="#009578"
             hovertextcolor="white"
          
          >Sign Up</Button>
          <FormLink to="/login">already a member?</FormLink>
        </FormField>
      </form>
    </FormCenter>
  );
}

export default withRouter( Register );
