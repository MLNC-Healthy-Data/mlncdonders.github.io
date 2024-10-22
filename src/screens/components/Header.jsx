import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import getColors from "../../helpers/colors";

function Header() {
  const colors = getColors()
  
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8vh",
        padding: "2vh 10vw",
        gap: { xs: 3, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h5"
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
            onClick={() => navigate("/about")}
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

        </Box>
      </Box>
      <Box
        component="img"
        src="https://mercatorlaunch.nl/wp-content/uploads/2020/01/combinatielogo_universiteit_a_engels_cmyk_2.png"
        alt="Radboud Logo"
        sx={{
          width: { xs: "80%", md: "40%" },
          maxWidth: "800px",
          marginLeft: "1vw",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
}

export default Header;
