import React, { useState,useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled,{css} from 'styled-components';
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import { Button } from './miscellaneous/Styles';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const Device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
const PricingPlanContainer = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-direction: column;

    @media ${Device.laptop} {
        flex-direction: row;
    }


    
    
`;

const Radio = styled.input`
    display:none;

`;
const Label = styled.label`
    display: relative;
    cursor:pointer;


`;
const Pricing = styled.section`
    background: white;
    border-radius: 25px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    overflow: hidden;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #555555;
    margin: 15px;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 15px rgba(0,0,0,0.4);
        transform: scale(1.05);


    }
    ${props => props.pricing_id === props.pricing_plan ? css`
        box-shadow: 0 0 15px rgba(0,0,0,0.4);
        transform: scale(1.05);

    
    `:css``};
    
     
`;

const Text = styled.p`
    font-size: 0.9em;
    text-align: center;
    margin: 0 0 10px 0;
`;
const Currency = styled.p`

    margin: 0;
    text-align: center;
    font-size: 2em;
    color:#000000;


`;

const Title = styled.h1`
    font-size:1.5em;
    font-weight: 400;
`;


const Header = styled.div`

    padding:25px;
    background: #009578;
    color: #ffffff;

`;
const Summary = styled.h2`

    font-size: 1em;
    font-weight: 300;
    `;

const SpecialText = styled.div`

    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    background: #007c64;
    box-shadow: 0 0 10px rgba(0,0,0,0.2) inset;
    
    &, ${Title}{
    margin: 0;
    text-align: center;
    font-family: sans-serif;

    }

`;
const Description = styled.div`
    display:block;
    padding: 25px;

`;
const List = styled.ul`
    padding: 0; 
    margin: 0;
    text-align: left;
`;
const Feature = styled.li`
    margin: 0 0 25px 0;
    padding-left: 25px;
    position: relative;
    font-size: 0.9 em;
    &:not(:last-child) {
        margin-bottom: 2em; 
    }

    &::before {
    content: "✓ ";
    color: green;

    }

`;
const Actions = styled.div`

    padding: 25px;
    border-top: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;

`;

const Heading = styled.h1`
    color: #309975;
    margin-left: 20px;
    margin-top: 100px;
    font-weight: bold;

`;

const PricingPlan = () => {

    const { userData, setUserData } = useContext(UserContext);
const [ purchased, setPurchased ] = useState(false);
    const [ pricing, setPricing ] = useState();

  const history = useHistory();
const submit = async (props) => {
    props.preventDefault();
    try {
        const id = userData.user.id;
        console.log("Id " + id)
        const pricingRes = await Axios.put(
            "https://server-locaft.herokuapp.com/users/update", {
            id,
            pricing
                
        }
        
        );
    } catch (err) {
        console.log(err);

    }
}

        return (
            <div className="body">
                <NavBar />
               { !purchased ? (
                
               <React.Fragment>
                <Heading>Pricing Plan</Heading>
                <PricingPlanContainer onChange={event => setPricing(event.target.value)}>

                    <Pricing pricing_plan={pricing} pricing_id="basic">
                        <Radio type ="radio" value="basic" name="pricing" id = "basic"/>
                        <Label for="basic">
                        <Header>
                            <Title>Basic Package</Title>
                            <Summary>For those getting started</Summary>

                        </Header>
                        <Description>
                            <List>
                                <Feature>Feature #1</Feature>
                                <Feature>Feature #2</Feature>
                                <Feature>Feature #3</Feature>
                                <Feature>Feature #4</Feature>
                            </List>
                        </Description>
                        <Actions>
                            <Currency>$10</Currency>
                            <Text>per month</Text>
                            <Text>Minimum sped over 12 months</Text>

                        </Actions>
                        </Label>
                    </Pricing>
                    <Pricing pricing_plan={pricing} pricing_id="intermediate">
                        <Radio type="radio" value="intermediate" name="pricing" id="intermediate" />
                        <Label for="intermediate" >
                        <SpecialText>Recommended</SpecialText>
                        <Header>

                            <Title>Intermediate Package</Title>
                            <Summary>For those getting started</Summary>

                        </Header>
                        <Description>
                            <List>
                                <Feature>Feature #1</Feature>
                                <Feature>Feature #2</Feature>
                                <Feature>Feature #3</Feature>
                                <Feature>Feature #4</Feature>
                            </List>
                        </Description>
                        <Actions>
                            <Currency>$50</Currency>
                            <Text>per month</Text>
                            <Text>Minimum spend over 12 months</Text>

                        </Actions>
                        </Label>
                    </Pricing>
                    <Pricing pricing_plan={pricing} pricing_id="luxury">
                        <Radio type="radio" value="luxury" name="pricing" id="luxury" />
                        <Label for="luxury">
                        <Header>
                            <Title>Luxury Package</Title>
                            <Summary>For those getting started</Summary>

                        </Header>
                        <Description>
                            <List>
                                <Feature>Feature #1</Feature>
                                <Feature>Feature #2</Feature>
                                <Feature>Feature #3</Feature>
                                <Feature>Feature #4</Feature>
                            </List>
                        </Description>
                        <Actions>
                            <Currency>$100</Currency>
                            <Text>per month</Text>
                            <Text>Minimum spend over 12 months</Text>

                        </Actions>
                        </Label>

                    </Pricing>


                </PricingPlanContainer>
                <PricingPlanContainer>
                            <Button
                                radiuscolor="#009578"
                                textcolor="#009578"
                                hovercolor="#009578"
                                hovertextcolor="white"
                                onClick={() => setPurchased(true)}
                            >Purchase</Button>
                </PricingPlanContainer>
                </React.Fragment>
             ): (
                 <React.Fragment>
                            <PricingPlanContainer styles = "{'flex-direction':'column'}">
                            <Heading>user name: {userData.user.username}</Heading>
                <Heading>Plan selected : {pricing}</Heading>

                <Button onClick={submit}>Confirm and Pay</Button>
</PricingPlanContainer>
                </React.Fragment>
             )
             }
                <Footer />



            </div>

        )
    

}
export default PricingPlan;