import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import colors from "../../helpers/colors";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8vh",
        padding: "2vh 10vw",
        backgroundColor: "#f5f5f5",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        gap: { xs: 3, md: 6 },
      }}
    >
      <Box
        component="img"
        src="https://www.healthvalley.nl/media/u25bgwv1/radboud-universiteit-logo.png"
        alt="Donders Logo"
        sx={{
          width: { xs: "80%", md: "40%" }, 
          maxWidth: "800px", 
          borderRadius: "8px",
        }}
      />

      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" }, 
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: colors.primary, 
            marginBottom: "1rem",
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "2rem", md: "3rem" }, 
          }}
        >
          Welcome to Radboud Healthy Data
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555", 
            lineHeight: "1.6",
            marginBottom: "1.5rem",
            fontSize: { xs: "1rem", md: "1.25rem" }, 
          }}
        >
          Quis irure voluptate velit mollit do occaecat aliqua esse aute id
          aliqua excepteur consequat. Quis irure voluptate velit mollit do
          occaecat aliqua esse aute id aliqua excepteur consequat. Quis irure
          voluptate velit mollit do occaecat aliqua esse aute id aliqua
          excepteur consequat.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" }, 
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.primary,
              color: "white",
              padding: "10px 20px",
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)", 
              "&:hover": {
                backgroundColor: colors.accent,
              },
            }}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: colors.primary,
              borderColor: colors.primary,
              padding: "10px 20px",
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: colors.primary,
                color: "white",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
