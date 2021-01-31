import React from "react";
import styled from "styled-components";

export const StyledBtn = styled.button`
  padding: 1.2em 3.8em;
  font-size: ${({ size }) => size * 2.5}px;
  background: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return theme.colors.primary;
      case "secoundary":
        return theme.colors.secoundary;
    }
  }};
  color: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return theme.colors.secoundary;
      case "secoundary":
        return theme.colors.primary;
    }
  }};

  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border: none;
  letter-spacing: 0.5px;

  -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.27);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.27);

  :active {
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(2px);
  }
`;

const Button = ({ text, size = 4, type = "secoundary", click }) => {
  return <StyledBtn children={text} size={size} type={type} onClick={click} />;
};
export default Button;
