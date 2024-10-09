import React from "react";
import CardComponent from "./CardComponent";
import colors from "../../helpers/colors";
import Grid from "@mui/material/Grid";

function CardsRow() {
  return (
    <div>
      <div
        style={{
          backgroundColor: colors.primaryTransparent,
          padding:"3vh 10vw",
          marginBottom:'5vh',
          color:"white",
          fontSize:"24px"
        }}
      >
        PROJECTS
      </div>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ padding: "5vh 10vw", backgroundColor: colors.textLight }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent />
        </Grid>
      
      </Grid>
    </div>
  );
}

export default CardsRow;
