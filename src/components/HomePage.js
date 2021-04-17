import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from '../lottie/plane_gif';
import {Container,Row,Col,Carousel, Button} from "react-bootstrap";
import styled from 'styled-components';
import { CheckCircle, Heart, AddressCard, ChartLine } from '@styled-icons/fa-solid';
import { Bullseye } from "@styled-icons/fa-solid";
import { StyledIconBase } from '@styled-icons/styled-icon'
import Sidebar from './Sidebar';

const Body = styled.div`
`;

const IconStyler = styled.div`
  ${StyledIconBase} {
    width: ${props => props.width ? props.width : 26}px;
    height: ${props => props.height ? props.height : 26};
    color: ${ props => props.color ? props.color: "white"};


  }


`;
const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

const ColoredSection = styled.section`

  background-color:#66bfbf;
  color: #fff;
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


`;
const WhiteSection = styled.section`
  background:#fff;
`;
const PressSection = styled(ColoredSection)`
  padding-bottom: 3%;
  align-items:center;

`;
const PressLogo = styled.img`
  width: 18%;
  height: 18%;
  margin: 20px 20px 50px;
`;
const RowFix = styled(Row)`
  margin: 0 0px;
`;

const FeatureCol = styled(Col)`
  padding: 4.5%;

`;
const ContainerPadded = styled(Container)`
  padding: 5% 5%;
  text-align: center;

`;
const BigHeading = styled.h1`
  font-size: 5rem;
  line-height: 1.5;
  font-family: "Ubuntu";
  color: white;
  font-weight: bold;

`;
const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color:#8f8f8f;
  align-self: center;

`;
const TestimonalTitle = styled.h2`
  font-size: 3rem;
  color:#fff;
  line-height: 1.5;
  align-content: center;
  padding: 10px 50px;
  font-style: italic;
  `;


export default function HomePage() {
  const history = useHistory();

  return (

    <Body>

      <ColoredSection >

        <ContainerPadded fluid>

          <Row>

            <FeatureCol lg="6">
              <BigHeading>Adapt to a new place easy peasy.</BigHeading>

              <Button variant="info" onClick={() => {
                history.push("/user/login")
              }} >Log In</Button> &nbsp;

              <Button variant="info" onClick={() => history.push("/user/register")} >Sign Up</Button>

            </FeatureCol>

            <FeatureCol lg="6">

              <Lottie options= { defaultOptions } />
            </FeatureCol>

          </Row>
        </ContainerPadded>
      </ColoredSection>
      <WhiteSection id="services">

        <ContainerPadded fluid>

          <Row>
            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><CheckCircle /></IconStyler>
              <br/>
              <FeatureTitle>Easy to use.</FeatureTitle>
              <p>Get relocated.We'll take care of everything.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><Bullseye /></IconStyler>
              <br />
           <FeatureTitle>Efficient</FeatureTitle>
              <p>Get highest number of services for lowest cost possible.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><Heart /></IconStyler>
              <br />
              <FeatureTitle>Relax</FeatureTitle>
              <p>Sit back , we'll do the dirty work.</p>
            </FeatureCol>
          </Row>


        </ContainerPadded>
      </WhiteSection>
      <ColoredSection>
      <br/>
      <br/>

        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
            </Carousel.Caption>
              <TestimonalTitle>"I had to shift from Bangalore to Hyderabad. Thanks to Locaft , it was easy to know about this place."</TestimonalTitle>
              <p style={{'text-align':'center'}}>Nishant, Pune</p>
          </Carousel.Item>
          <Carousel.Item >
            <Carousel.Caption>
            </Carousel.Caption>
              <TestimonalTitle>"Relocation took me 3 months previously , but thanks to Locaft , everything was done within 3 days."</TestimonalTitle>
              <p style={{'text-align': 'center'}}>Mani, Hyderabad</p>
          </Carousel.Item>

        </Carousel>

      </ColoredSection>
      <PressSection>
        <ContainerPadded fluid>

          <BigHeading>Our Partners</BigHeading>
          <PressLogo src="/indigo_optimized.jpg" alt="indigo-brand" />
          <PressLogo src="/avasa_optmized.jpg" alt="avassa-brand" />
          <PressLogo src="/vrl_optmized.jpg" alt="vrl-brand" />

        </ContainerPadded>
      </PressSection>
      <WhiteSection id="about-us">

        <ContainerPadded fluid>

          <Row>
            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><AddressCard /></IconStyler>
              <br />
              <FeatureTitle>About Us</FeatureTitle>
              <p>Adapting to a new place is always hard in any phase of life. We aim to make it easy. </p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><Bullseye /></IconStyler>
              <br />
              <FeatureTitle>Vision</FeatureTitle>
              <p>Bringing all the basic amenities to the new place before your arrival.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><ChartLine /></IconStyler>
              < br/>
              <FeatureTitle>Mission</FeatureTitle>
              <p>Getting adapted and familiar to the new place made easy.</p>
            </FeatureCol>
          </Row>
        </ContainerPadded>
      </WhiteSection>



      <ColoredSection>

        <ContainerPadded fluid>
          <Row>
            <FeatureCol lg="12">

          <BigHeading>check us out</BigHeading>
          <img width="200px" src="google-play-badge.png"></img>
          &nbsp;
          <img width="160px" src="apple_badge.svg" ></img>
          </FeatureCol>
          </Row>
        </ContainerPadded>

      </ColoredSection>
      <Sidebar logout="{logout}" />
      <NavBar />

      <div id="footer">
        <Footer />
      </div>



    </Body>
  );
}

