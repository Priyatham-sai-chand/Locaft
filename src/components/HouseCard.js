import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    display:block;
`;
const Tick = styled.input.attrs(props => ({
    type: "radio",
    name: "radiobtn"

}))`

`;
const Overlay = styled.div`
  position: block;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  margin-top: -90px;
`;


const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 4px 4px 5px 5px rgba(0,0,0,0.01), -2px -2px 5px 5px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
  position: relative;

   & .card_image  ${Image}  {
      width: inherit;
      height:inherit;
      border-radius: 40px;
      box-shadow: none;
      object-fit:cover;
  }

  & .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
  box-shadow: none;
  color: #fff;
}


& .card_tick {
    content:'asdf';
    border-radius: 0px 0px 40px 40px;
    margin-top: -90px;
    height: 40px;
    color: white;
}
&:hover {

box-shadow: 2px 2px 5px 5px rgba(0,0,0,0.22), -2px -2px 5px 5px rgba(0,0,0,0.11);


}
&:hover .overlay{
    opacity: 1;

}
`;



const HouseCard = (props) => {

    return (


        <Card>
            <Card className="card_image"> <Image src={props.img} alt="asdf" /></Card>
            <Card className="card_title">
                <p>Card Title</p>
            </Card>
        </Card>


    );



}
export default HouseCard;