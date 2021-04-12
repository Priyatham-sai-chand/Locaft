import React from "react";
import styled from 'styled-components';


export default function ErrorNotice(props) {
  const ErrorNotice = styled.div`
  margin: 1rem 0;
  border: 1px solid #e07c7c;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8d6d6;
  padding: 10px;
`;
  const ErrorMessage = styled.div`
color: #000000;
`;

  const ErrorButton = styled.a
    `
  color: red;
  position: relative;
  width: 20px;
  height: 20px;
  opacity: 0.3;

&:hover {
  opacity: 1;
}
&:before, &:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 19px;
  width: 2px;
  background-color: red;
}
&:before {
  transform: rotate(45deg);
}
&:after {
  transform: rotate(-45deg);
} 
    
`;
  return (
    <ErrorNotice>
      <ErrorMessage>{props.message}</ErrorMessage>
      <ErrorButton onClick={props.clearError}></ErrorButton>
    </ErrorNotice>
  );
}