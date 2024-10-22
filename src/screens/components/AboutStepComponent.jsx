import { Box, Grid, IconButton, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import colors from "../../helpers/colors";

function AboutStepComponent({heading, desc}) {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <IconButton
          sx={{
            color: colors.accent,
            fontSize: "48px",
            marginBottom: "1vh",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: "48px" }} />
        </IconButton>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 600 }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", maxWidth: "300px" }}
        >
         {desc}
        </Typography>
      </Box>
    </Grid>
  );
}

export default AboutStepComponent;
