import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import colors from "../../helpers/colors";
function AboutHeader() {
  return (
    <Box
      sx={{
        backgroundColor: colors.defaultBg,
        padding: "5vh 10vw",
        color: colors.textLight,
        marginTop: { xs: "5vh", md: "8vh" },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: "3rem",
              marginBottom: "2vh",
              color: colors.primary,
            }}
          >
            Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", lineHeight: 1.6, color: colors.primary }}
          >
            The mission of the Radboud healthy data consortium is to disseminate
            research software for the benefit of society. To this end, we
            provide a uniform interface to software projects that disseminate
            the latest advances in AI while ensuring high quality in terms of
            coding standards, documentation and examples. Our secondary aim is
            to foster collaboration between AI researchers and users of AI
            methodology, and acknowledge the important contribution of AI
            researchers to enable advances in society.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              padding: "1vh 2vw",
            }}
            alt="Radboud Universiteit"
            src="https://mercatorlaunch.nl/wp-content/uploads/2020/01/combinatielogo_universiteit_a_engels_cmyk_2.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutHeader;
