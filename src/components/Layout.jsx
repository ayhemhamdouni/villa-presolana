import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { lang, changeLanguage } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr'; // Italian and English are LTR
  }, [lang]);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.rooms, path: '/rooms' },
    { label: t.nav.gallery, path: '/gallery' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerOpen(open);
  };

  const handleLanguageChange = (event, newLang) => {
    if (newLang !== null) changeLanguage(newLang);
  };

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar>
          <Box
  component={Link}
  to="/"
  sx={{
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
  }}
>
  <img
    src="/favicon.png"
    alt="Villa Presolana"
    style={{ height: '36px', width: 'auto', display: 'block' }}
  />
</Box>

          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLanguageChange}
            size="small"
            sx={{
              mr: 2,
              '& .MuiToggleButton-root': {
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '0.7rem',
                px: 1,
                py: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  borderColor: 'white',
                },
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
              },
            }}
          >
            <ToggleButton value="en">EN</ToggleButton>
            <ToggleButton value="it">IT</ToggleButton>
          </ToggleButtonGroup>

          {isMobile ? (
            <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button key={item.path} color="inherit" component={Link} to={item.path} sx={{ mx: 0.5 }}>
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Villa Presolana</Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} component={Link} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ minHeight: '80vh' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Outlet />
        </Container>
      </Box>

    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 4 }}>
  <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
    <Button
      variant="outlined"
      color="secondary"
      href="/contact"
      sx={{ mb: 2, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' } }}
    >
      {t.cta.book}
    </Button>
    <Typography variant="body2">
      © {new Date().getFullYear()} Villa Presolana – {t.footer.rights}
    </Typography>
  </Container>
</Box>
    </>
  );
};

export default Layout;