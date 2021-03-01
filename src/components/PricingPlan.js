import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled from 'styled-components';

const WhiteContainer = styled.div`
    background: white;

`;
const PricingPlanContainer = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const Pricing = styled.section`
    background: white;
    width:300px;
    border-radius: 25px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    overflow: hidden;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #555555;
    margin: 15px;

    &:hover &:active {
        box-shadow: 0 0 15px rgba(0,0,0,0.4);
        transform: scale(1.05);


    }
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

    padding: 25px;

`;
const List = styled.ul`
    padding: 0; 
    margin: 0;
    text-align: left;
`;
const Feature = styled.li`
    margin: 0;
    padding-left: 25px;
    position: relative;
    font-size: 0.9em;

    &:not(:last-child) {
        margin-bottom: 2em; 
    }

    &::before {
    content: "\2714";
    color: #009578;
    position: absolute;
    left: 0;

    }

`;
const Actions = styled.div`

    padding: 25px;
    border-top: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;

`;
const Button = styled.a`

    display: inline-block;
    margin: 15px auto;
    padding: 8px 20px;
    color: #009578;
    background: #ffffff;
    border-radius: 5px;
    border: 1px solid #009578;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    text-decoration: none !important;
    font-weight: bold;
    text-align: center;

    &:hover {

    background: #009578;
    color: #ffffff;

    }


`;

class PricingPlan extends Component {

    render() {
        return (
            <div className="body">
                <NavBar />
                <br />
                <br />
                <br />
                <h1 style={{ 'color': '#66bfbf', 'margin-left': '20px' }}>Pricing Plan</h1>
                <PricingPlanContainer>

                    <Pricing>
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
                    </Pricing>
                    <Pricing>
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
                    </Pricing>
                    <Pricing>
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
                    </Pricing>


                </PricingPlanContainer>
                <Button>Purchase</Button>
                <Footer />



            </div>

        )
    }

}
export default PricingPlan;