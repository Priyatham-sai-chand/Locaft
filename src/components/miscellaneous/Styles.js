import styled from 'styled-components'


const Button = styled.a`

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
export { Button };