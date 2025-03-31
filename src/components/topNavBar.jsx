import React from 'react';
import { Adb, SupervisedUserCircle } from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography} from '@mui/material';


function TopBar() {
    return (
      <Container maxWidth="lg">
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <SupervisedUserCircle sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    paddingRight: '1rem',
                  }}
                >
                RHSuite
              </Typography>
                <Container sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1 }}>
                  <Button onRover sx={{ my: 2, color: 'white'}} href="/colab">
                    Colaboradores
                  </Button>
                  <Button sx={{ my: 2, color: 'white'}} href="/cg">
                    Cadastros Gerais
                  </Button>
                  <Button sx={{ my: 2, color: 'white'}} href="/holerite">
                    Holerite
                  </Button>

                </Container>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    );
    
};
export default TopBar;