import React from "react";
import styled from "styled-components";
import file_icon from "../../Assets/Icons/file_icon.svg";
import folder_icon from "../../Assets/Icons/folder_icon.svg";
import close_icon from "../../Assets/Icons/close_icon.svg";
import { Link } from "react-router-dom";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledFileIcon = styled.img`
  height: 50px;
`;
const StyledCloseIcon = styled.img`
  position: absolute;
  height: 10px;
  top: -4px;
  right: -4px;
  cursor: pointer;
`;
const StyledTitle = styled(Link)`
  font-size: 8px;
  max-width: 45px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  margin-top: 6px;
  height: 30px;
  cursor: pointer;
  overflow: hidden;
  overflow-wrap: break-word;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fifth};
`;

const File = ({ name, type, id }) => {
  const handleDelete = () => {
    //delete
  };
  const path = ""; // to fill
  return (
    <StyledBox>
      <StyledCloseIcon
        src={close_icon}
        alt="close_icon"
        onClick={handleDelete}
      />
      <StyledFileIcon
        to={path}
        src={type === "folder" ? folder_icon : file_icon}
        alt="file_icon"
      />
      <StyledTitle children={name} />
    </StyledBox>
  );
};
export default File;
