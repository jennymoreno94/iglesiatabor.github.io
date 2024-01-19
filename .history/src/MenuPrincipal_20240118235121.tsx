import * as React from 'react';
import { AppBar, Box,Toolbar,IconButton , Typography, Menu,  Container, Button,MenuItem ,Tooltip   } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './img/TaborLogo.png';
import Avatar from '@mui/material/Avatar';
import YouTube from '@mui/icons-material/YouTube';


const pages = ['Reuniones', 'Contenido', 'Contacto'];

const MenuPrincipal: React.FunctionComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

    return(
        <AppBar position="static" style={{backgroundColor:'#222061'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
              <IconButton>
                <img alt="Logo" src={Logo} style={{height:'6rem', width:'6rem'}}/>
              </IconButton>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
        

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton aria-label="youtube" href='https://www.youtube.com/@ejercitotabor'
               
              >
              <YouTube />
          </IconButton>
              
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
            </Menu>
          </Box>   
          
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default MenuPrincipal;