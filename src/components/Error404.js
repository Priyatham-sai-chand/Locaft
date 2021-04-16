import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../lottie/box_error';

const Body = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,100,300,500');
  font-size: 100%;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  display:flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`

  position: relative;
  background-color: #66bfbf;
  text-align: center;


  `;
const Heading = styled.h1`
  padding-top: 15%;
  color: white;
  font-size: 4rem;
  margin: 0px;


  `;
const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

const Error404 = () => {
  return (
   <Body>
     <Container>
       <Heading>Error </Heading>
       <br />
       <Lottie height={500} width={500} options={defaultOptions} />
       </Container>



    </Body>




  );
}
export default Error404;