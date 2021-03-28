import styled from 'styled-components'
import { Link } from 'react-router-dom'
const FormCenter = styled.div`
  margin-bottom: 100px;

`;
const FormField = styled.div`

margin-bottom: 40px;
`;
const FormLabel = styled.div`
  display: block;
  text-transform: uppercase;
  font-size: 1.25em;
  color: #4C5D72;
  text-align: start;

`;
const FormInput = styled.input`

  width: 85%;
  background-color: transparent;
  border: none;
  color: #4C5D72;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: .9em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;

  &:placeholder {
    color: #616E7F;
  }
`;

const FormLink = styled(Link)`

  color: #66707D;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 5px;
  margin-left: 12px;

`;

const Button = styled.button`

    display: inline-block;
    margin: 15px auto;
    padding: 8px 20px;
    color: ${props => props.textcolor ? props.textcolor : "black"} !important;
    background: ${props => props.displaycolor ? props.displaycolor : "white"} ;
    border-radius: ${props => props.radius ? props.radius: "5"}px;
    border: 1px solid;
    border-color: ${props => props.radiuscolor ? props.radiuscolor : "black"};
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    &:hover {

    background: ${props => props.hovercolor ? props.hovercolor : "white"} ;
    color: ${props => props.hovertextcolor ? props.hovertextcolor : "black"}!important;

    }


`;
export { Button, FormCenter, FormField, FormLabel, FormInput, FormLink };