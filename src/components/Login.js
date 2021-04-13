import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Axios from "axios";
import ErrorNotice from "./ErrorNotice";
import { Link, useHistory, withRouter } from "react-router-dom";

import {Button, FormCenter, FormField, FormLabel, FormInput, FormLink  } from './miscellaneous/Styles'
const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

 const { userData,setUserData } = useContext(UserContext);

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "https://server-locaft.herokuapp.com/users/login",
        loginUser
      );
      console.dir("login res " + loginRes.data.user);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
        return (

        <FormCenter>
          {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
            <form  className="FormFields" onSubmit={submit}>
            <FormField>
                <FormLabel htmlFor="email">E-Mail Address</FormLabel>
                <FormInput type="email" id="email"  value={ email } placeholder="enter your email" name="email" onChange={(e) => setEmail(e.target.value)} />
              </FormField>

              <FormField>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput type="password" id="password" value={ password } placeholder="Enter your password" name="password" onChange={(e) => setPassword(e.target.value)} />
              </FormField>

              <FormField>

              <Button
                  type="submit"
                  radiuscolor="#009578"
                  textcolor="#009578"
                  hovercolor="#009578"
                  hovertextcolor="white"
                  >Sign In</Button> <FormLink exact to="/register" className="FormField__Link">Not a member?</FormLink>
              </FormField>
            </form>

          </FormCenter>
        );
    }

export default withRouter(Login);