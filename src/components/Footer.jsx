import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <AppBar 
            position="static" 
            component="footer" 
            sx={{ 
                backgroundColor: '#007bff', 
                padding: '0.5rem', 
                marginTop: 'auto', 
                bottom: 0, 
                width: '100%' 
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Typography variant="body2" color="white">
                        © {new Date().getFullYear()} Mis rutas
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;

