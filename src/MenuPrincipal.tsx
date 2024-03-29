import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./img/TaborLogo.png";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

const pages = ["Reuniones", "Contenido", "Contacto"];

const MenuPrincipal: React.FunctionComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" style={{ backgroundColor: "#222061" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton>
            <img
              alt="Logo"
              src={Logo}
              style={{ height: "6rem", width: "6rem" }}
            />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ "&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}}
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
                display: { xs: "block", md: "none"},
                
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  sx={{ "&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" ,"&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}}
                
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Youtube">
              <IconButton
                aria-label="youtube"
                href="https://www.youtube.com/@ejercitotabor"
                color="inherit"
                sx={{ "&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}}
                >
                  
                <YouTube />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Facebook">
              <IconButton
                aria-label="facebook"
                href="https://www.facebook.com/ejercitotabor/"
                color="inherit"
                sx={{ "&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}}
                >
                <Facebook />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Instagram">
              <IconButton
                aria-label="instagram"
                href="https://www.instagram.com/ejercitotabor/"
                color="inherit"
                sx={{ "&:hover": { backgroundColor: "rgb(223 74 74 / 20%)" ,color:"#d5444b"}}}
                >
                <Instagram />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MenuPrincipal;
