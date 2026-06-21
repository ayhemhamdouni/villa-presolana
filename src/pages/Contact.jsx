import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Divider, Paper, Button, useTheme } from '@mui/material';
import { Phone, LocationOn, Email } from '@mui/icons-material';
import { content } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
          {t.contact.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {t.contact.subtitle}
        </Typography>
        <Divider sx={{ mt: 3, width: '60%', mx: 'auto' }} />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'stretch' }}>
        {/* Left: Info */}
        <Box sx={{ flex: '1 1 40%', minWidth: '280px', display: 'flex' }}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn color="secondary" />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">{t.contact.address}</Typography>
                  <Typography variant="body2" color="text.secondary">{content.address}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone color="secondary" />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">{t.contact.phone}</Typography>
                  <Typography variant="body2" color="text.secondary">
                   <a href={`tel:${content.phone}`} style={{ color: theme.palette.secondary.main, textDecoration: 'none' }}>
  {content.phone}
</a>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email color="secondary" />
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">{t.contact.email}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    <a href={`mailto:${content.email}`} style={{ color: theme.palette.secondary.main, textDecoration: 'none' }}>
  {content.email}
</a>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="body2" color="text.secondary">{t.contact.note}</Typography>
                <Button variant="contained" color="secondary" href="tel:{content.phone}" startIcon={<Phone />} sx={{ mt: 2, fontWeight: 'bold' }}>
                  {t.cta.book}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Right: Map */}
        <Box sx={{ flex: '1 1 50%', minWidth: '300px', minHeight: '400px', display: 'flex' }}>
          <Paper elevation={2} sx={{ p: 1, borderRadius: 2, overflow: 'hidden', width: '100%', display: 'flex' }}>
            <iframe
              src={content.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px', flex: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Villa Presolana location"
            ></iframe>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Contact;