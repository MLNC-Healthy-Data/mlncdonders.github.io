import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import colors from "../../helpers/colors";
import rbLogo from "../../assets/logo-rb.png"
function AboutHeader() {
  return (
    <Box
      sx={{
        backgroundColor: colors.primary,
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
              color: colors.textLight,
            }}
          >
            About Healthy Data
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", lineHeight: 1.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vehicula purus quis arcu commodo, non sodales justo varius. Duis
            vehicula felis quis justo euismod, eget rhoncus mauris malesuada.
            Sed convallis justo id tellus cursus posuere.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              backgroundColor:'#ffffff',
              padding:'1vh 2vw'
            }}
            alt="Radboud Universiteit"
            // src="https://www.ru.nl/sites/default/files/2023-08/RU_logo_NL_wit.png"
            src='https://mercatorlaunch.nl/wp-content/uploads/2020/01/combinatielogo_universiteit_a_engels_cmyk_2.png'
          />
          
          
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutHeader;
