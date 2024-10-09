import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import colors from "../../helpers/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const pages = ["Projects", "About", "People"];

function Navbar() {
  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleNavigate = (page) => {
    const lowerPage = page.toLowerCase()
    navigate(`/${lowerPage}`)
    console.log(lowerPage);
    
  }
 const logoUrl = 'https://www.ru.nl/sites/default/files/2023-08/RU_logo_NL_wit.png'
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        style={{
          backgroundColor: "rgba(183,44,21, 0.9)", 
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", 
          backdropFilter: "blur(10px)", 
        }}
        position="fixed" 
      >
        <Container style={{ width: "100vw", padding: "0 2vw" }} maxWidth="xl">
          <Toolbar disableGutters>
            
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                fontSize: "22px", 
                color: "#fff", 
                textDecoration: "none",
                transition: "color 0.3s",
                "&:hover": {
                  color: colors.accent, 
                },
              }}
            >
              Radboud Healthy Data
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: colors.primary,
                        transition: "color 0.3s",
                        "&:hover": {
                          color: colors.accent,
                        },
                      }}
                      onClick={() => handleNavigate(page)}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 600,
                color: "white",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Radboud Healthy Data
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavigate(page)}

                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                    fontWeight: 500,
                    textTransform: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: colors.accent, 
                      transform: "scale(1.05)", 
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default Navbar;
