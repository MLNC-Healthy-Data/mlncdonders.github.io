import React from "react";
import { Grid, Typography, Box, Avatar } from "@mui/material";
import colors from "../../helpers/colors";
import ContactMailIcon from "@mui/icons-material/ContactMail";
function AboutContact() {
  return (
    <Box
      sx={{
        padding: "5vh 10vw",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        marginTop: { xs: "5vh", md: "0" },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="h6" color={colors.textDark}>
            <strong>Name:</strong> Çelik, M.Y. (Muammer Yiğit)
          </Typography>
          <Typography variant="h6" color={colors.textDark}>
            <strong>Email:</strong> muammeryigit.celik@donders.ru.nl
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              flexDirection: "column",
              height: "100%",
              textAlign: "end",
            }}
          >
            <ContactMailIcon
              sx={{ fontSize: { xs: 100, md: 150 }, color: colors.primaryTransparent }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutContact;
