import React from "react";
import styled from "styled-components/native";
import { lightTheme } from "../../constants/colors";

const Line = styled.View`
  width: 100%;
  height: 0.3px;
  background-color: ${lightTheme.separator};
`;

const Separator = () => {
  return <Line />;
};

export default Separator;
