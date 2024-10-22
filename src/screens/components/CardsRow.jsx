import React from "react";
import CardComponent from "./CardComponent";
import colors from "../../helpers/colors";
import projects from "../../helpers/projects.json";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";

function CardsRow() {
  const theme = useTheme(); 
  const customPrimaryTransparent = theme.palette.custom.customPrimaryTransparent;
  const customTextLight = theme.palette.custom.customTextLight;

  return (
    <div>
      <div
        style={{
          backgroundColor: customPrimaryTransparent,
          padding: "3vh 10vw",
          marginBottom: "5vh",
          fontSize: "24px",
          color: customTextLight
        }}
      >
        PROJECTS
      </div>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ padding: "5vh 10vw",  }}
      >
        {projects.slice(0, 3).map((e) => (
          <Grid item xs={12} sm={6} md={4}>
            <CardComponent project={e} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CardsRow;
