import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Divider,
  Paper,
  Button,
  useTheme,
} from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];

  const amenities = t.amenities || [];
  const attractions = t.attractions || [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
          {t.about.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {t.about.subtitle}
        </Typography>
        <Divider sx={{ mt: 3, width: '60%', mx: 'auto' }} />
      </Box>

      <Paper elevation={2} sx={{ p: 4, maxWidth: '800px', mx: 'auto', borderRadius: 2 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          {t.about.story}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Amenities</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {amenities.map((item) => (
            <Box key={item} sx={{ bgcolor: theme.palette.primary.main, color: 'white', px: 2, py: 0.5, borderRadius: 20, fontSize: '0.9rem' }}>
              {item}
            </Box>
          ))}
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Nearby Attractions</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {attractions.map((item) => (
            <Box key={item} sx={{ bgcolor: theme.palette.secondary.main, color: 'white', px: 2, py: 0.5, borderRadius: 20, fontSize: '0.9rem' }}>
              {item}
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" color="secondary" size="large" href="/contact" sx={{ fontWeight: 'bold' }}>
            {t.cta.contact}
          </Button>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default About;