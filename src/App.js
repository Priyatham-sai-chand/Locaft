import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import HomePage from "./components/HomePage";
import PricingPlan from "./components/PricingPlan";
import LogInContainer from "./components/LogInContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from "./context/UserContext";
import Options from "./components/Options";
import Stepper from './components/Stepper';
import NavBar from "./components/NavBar";
import FillingDetails from "./components/FillingDetails";
import Error404 from './components/Error404';
import Payment from './components/Payment'
export default function App() {
  const [userData, setUserData ] = useState({
    token: undefined,
    user: undefined
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      console.log("app js " + token);
      if (token == null) {
        localStorage.setItem("auth-token","");
        token ="";
      }
      const tokenRes = await Axios.post(
        "https://server-locaft.herokuapp.com/users/tokenIsValid",
        null,
        {headers: {"x-auth-token": token }}

        );
        if (tokenRes.data) {
          const userRes = await Axios.get("https://server-locaft.herokuapp.com/users/",
          {headers:{"x-auth-token":token},
          });
          setUserData({
            token,
            user: userRes.data,
          });
        }

    };


    checkLoggedIn();

  },[])
    return (
      <>
      <div className="App">
        <BrowserRouter>
        <UserContext.Provider value= {{userData, setUserData}}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="asdf" component={NavBar} />
            <Route path="/user" component={LogInContainer} />
            <Route path="/pricing" component={PricingPlan} />
            <Route path="/track" component={Stepper} />
            <Route path="/options" component={Options} />
            <Route path="/details" component={FillingDetails} />
            <Route path="/payment" component={Payment} />
            <Route path="/" component={Error404} />
          </Switch>
          </UserContext.Provider>
        </BrowserRouter>


      </div>
      </>

    );
  }


