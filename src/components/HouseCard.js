import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    display:block;
    width: inherit;
    height: inherit;
      border-radius: 40px;
      box-shadow: none;
      object-fit:cover;
`;
const Tick = styled.input.attrs(props => ({
    type: "radio",
    name: "radiobtn"

}))`

`;
const Hover = styled.div`
    height: inherit;
    width: inherit;
    opacity: 0;
    transition: opacity 350ms ease;
    position: absolute;
`;
const Overlay = styled.div`
  height: inherit;
  width: inherit;
  transition: black 350ms ease;
  background-color: transparent;
  border-radius: 40px;
  position: absolute;
  display: flex;
    align-items: center;
    justify-content: center;


`;
const CardTitle = styled.h2`
  margin-top: 10px;
  margin-left: 10px;
  font-family: sans-serif;
  box-shadow: none;
  color: #fff;




`;

const Paragraph = styled.p`

  margin-top: 10px;
  margin-left: 10px;
color: #fff;


`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  box-shadow: 4px 4px 5px 5px rgba(0,0,0,0.01), -2px -2px 5px 5px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  background-image: url("${props => props.img ? props.img : "vrl.jpg"}");
  background-size: cover;

  &:hover ${Overlay} {
    background-color: rgba(0,0,0,0.5);
  }
  &:hover ${CardTitle}, :hover ${Paragraph}{
    transform: translate3d(0,0,0);
  }
  &:hover ${Hover}{
    opacity: 1;

  }
`;



const HouseCard = (props) => {

    return (
        <Card img = {props.img}>
            <Overlay>
                <Hover>
                    <CardTitle>{props.title ? props.title : "asdf"}</CardTitle>
                    <Paragraph>{props.desc ? props.desc: "zxcv"}</Paragraph>
                </Hover>
            </Overlay>
        </Card>


    );



}
export default HouseCard;