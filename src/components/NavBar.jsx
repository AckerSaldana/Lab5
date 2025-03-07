import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#007bff', padding: '0.5rem' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', gap: '1.5rem' }}>
                <Typography variant="h4">Rutas</Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <NavLink 
                        to="/" 
                        style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/dashboard" 
                        style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="/profile" 
                        style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        Profile
                    </NavLink>
                    <NavLink 
                        to="/login" 
                        style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        Login
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

