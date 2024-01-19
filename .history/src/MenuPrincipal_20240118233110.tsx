import * as React from 'react';
import { AppBar, Box,Toolbar,IconButton , Typography, Menu,  Container, Button,MenuItem    } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './img/TaborLogo.png';

const pages = ['Reuniones', 'Contenido', 'Contacto'];

const MenuPrincipal: React.FunctionComponent = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  

    return(
        <AppBar position="static" style={{backgroundColor:'#222061'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
              <IconButton>
                <img alt="Logo" src={Logo} style={{height:'6rem', width:'6rem'}}/>
              </IconButton>


            
          
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
  
          
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default MenuPrincipal;