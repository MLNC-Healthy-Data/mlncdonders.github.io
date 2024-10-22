import React from "react";
import colors from "../../helpers/colors";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
function Footer() {
  const theme = useTheme();

  const customTextLight = theme.palette.custom.customTextLight;
  const customPrimary = theme.palette.custom.customPrimary;
  return (
    <div
      style={{
        width: "100vw",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: customPrimary,
        padding: "3vh 10vw",
        color: "white",
      }}
    >
     
      © Radboud Healthy Data Consortium
    </div>
  );
}

export default Footer;
