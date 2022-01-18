import React from 'react'

import { Link } from 'react-router-dom';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import './Header.css'

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
    <AppBar position="static">
        <Container maxWidth="xl" className="navbar-principal">
            <Toolbar disableGutters>
                <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large" aria-label="account of current user" 
                        aria-controls="menu-appbar" aria-haspopup="true" 
                        onClick={handleOpenNavMenu} color="inherit" >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left'}}
                        open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' },}}
                    >
                        <MenuItem key='item' onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">Uhul</Typography>
                        </MenuItem>
                    </Menu>
                </Box>

                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Link className="navbar-link" to="/buscar-clientes">
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Buscar cliente
                        </Button>
                    </Link>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Configuracao">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar>GB</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} 
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted
                        transformOrigin={{vertical: 'top', horizontal: 'right'}}
                        open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">aaa</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
    );
}

export default Header
