import React, { useState } from "react";
import tick_icon from "../../Assets/Icons/tick_icon.svg";
import drop_icon from "../../Assets/Icons/drop_icon.svg";
import plus_icon from "../../Assets/Icons/plus_icon.svg";
import minus_icon from "../../Assets/Icons/minus_icon.svg";
import styled from "styled-components";

//style
export const StyledMainBox = styled.div`
  width: 100%;
`;
export const StyledLabel = styled.label`
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 600;
`;
export const StyledBox = styled.div`
  position: relative;
  margin: 10px 0 5px 0;
`;
export const StyledInput = styled.input`
  height: 31px;
  width: 100%;
  padding-left: 6px;
  padding-right: 30px;
  font-size: 9px;
  border-radius: 1px;
  border: 1px solid #e3e3e3;
  background: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.third};
`;
export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 6px 30px 6px 6px;
  font-size: 9px;
  border-radius: 1px;
  border: 1px solid #e3e3e3;
  background: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.third};
`;
export const StyledSelect = styled.select`
  height: 31px;
  width: 100%;
  padding-left: 6px;
  padding-right: 30px;
  font-size: 9px;
  border-radius: 1px;
  border: 1px solid #e3e3e3;
  background: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.third};

  appearance: none;
  background-image: url(${({ isFocused }) =>
    isFocused ? drop_icon : tick_icon});
  background-repeat: no-repeat, repeat;
  background-position: right 11px top 50%, 0 0;
  cursor: pointer;
`;
export const StyledIcon = styled.img`
  position: absolute;
  right: 11px;
  top: 8px;
  cursor: pointer;
  visibility: ${({ isFocused }) => (isFocused ? "hidden" : "visible")};
`;
export const StyledMinusIcon = styled(StyledIcon)`
  right: 30px;
`;
export const StyledText = styled.p`
  visibility: ${({ isValid }) => (isValid ? "hidden" : "visible")};
  font-size: 9px;
  color: red;
`;
//

const Input = ({ change, type, name, id, options }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (val) => {
    //validation if ok then fn below
    //change();
  };
  const handleNumberInput = (e) => {
    const name = e.target.name;

    name === "plus"
      ? setInputValue(inputValue + 1)
      : setInputValue(inputValue - 1);

    handleChange(inputValue);
  };

  return (
    <StyledMainBox>
      <StyledLabel htmlFor={id}>label name</StyledLabel>

      {(() => {
        switch (type) {
          case "textarea":
            return (
              <StyledBox>
                <StyledTextarea
                  id={id}
                  name={name}
                  isFocused={isFocused}
                  onChange={(e) => handleChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <StyledIcon
                  src={tick_icon}
                  alt="tick_icon"
                  isFocused={isFocused}
                />
              </StyledBox>
            );
          case "select":
            return (
              <StyledBox>
                <StyledSelect
                  name={name}
                  isFocused={isFocused}
                  onChange={(e) => handleChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                >
                  {options?.map(({ val, id }) => (
                    <option key={id} value={val} children={val} />
                  ))}
                </StyledSelect>
              </StyledBox>
            );
          case "number":
            return (
              <StyledBox>
                <StyledInput
                  type="number"
                  name={name}
                  value={inputValue}
                  isFocused={isFocused}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <StyledIcon
                  src={plus_icon}
                  alt="plus_icon"
                  name="plus"
                  onClick={(e) => handleNumberInput(e)}
                />
                <StyledMinusIcon
                  src={minus_icon}
                  alt="minus_icon"
                  name="minus"
                  onClick={(e) => handleNumberInput(e)}
                />
              </StyledBox>
            );
          default:
            return (
              <StyledBox>
                <StyledInput
                  id={id}
                  name={name}
                  type="text"
                  isFocused={isFocused}
                  onChange={(e) => handleChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <StyledIcon
                  src={tick_icon}
                  alt="tick_icon"
                  isFocused={isFocused}
                />
              </StyledBox>
            );
        }
      })()}

      <StyledText isValid={isValid}>
        To jest tekst informujacy o nie poprawnej walidacji.
      </StyledText>
    </StyledMainBox>
  );
};
export default Input;
