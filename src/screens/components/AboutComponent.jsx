import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import colors from "../../helpers/colors";

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
        About
      </Typography>
      <Grid container spacing={4}>
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
              Section 1
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", maxWidth: "300px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
          </Box>
        </Grid>
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
              Section 2
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", maxWidth: "300px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
          </Box>
        </Grid>
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
              Section 3
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", maxWidth: "300px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutComponent;
