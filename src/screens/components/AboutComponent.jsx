import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import colors from "../../helpers/colors";
import AboutStepComponent from "./AboutStepComponent";

function AboutComponent() {
  return (
    <Box
      sx={{
        backgroundColor: colors.primaryTransparent,
        padding: "5vh 10vw",
        color: colors.textLight,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          color: colors.textLight,
          marginBottom: "3vh",
        }}
      >
        Contributing to RHD
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textAlign: "center",
          color: colors.textLight,
          marginBottom: "3vh",
        }}
      >
        To contribute to the RHD Software Platform a number of steps need to be
        followed:
      </Typography>
      <Grid container spacing={4}>
        <AboutStepComponent
          heading={"1 - Project Name"}
          desc={
            "The official name of your project."
          }
        ></AboutStepComponent>
        <AboutStepComponent
          heading={"2 - Project URL"}
          desc={
            "The URL to your project's website, GitHub repository, or relevant online resource."
          }
        ></AboutStepComponent>
        <AboutStepComponent
          heading={"3 - Description"}
          desc={
            "A concise summary highlighting the key aspects and scope of your project."
          }
        ></AboutStepComponent>
        <AboutStepComponent
          heading={"4 - Objectives"}
          desc={"The primary goals your project aims to achieve."}
        ></AboutStepComponent>
        <AboutStepComponent
          heading={"5 - Methodology"}
          desc={
            "The approach, tools, and techniques used to execute the project."
          }
        ></AboutStepComponent>
        <AboutStepComponent
          heading={"6 - Contributors"}
          desc={
            "The people or teams involved in developing and supporting the project."
          }
        ></AboutStepComponent>
      </Grid>
    </Box>
  );
}

export default AboutComponent;
