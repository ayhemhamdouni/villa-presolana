import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  useTheme,
} from '@mui/material';
import { content } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Rooms = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];
  const rooms = t.roomsList || [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
          {t.rooms.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {t.rooms.subtitle}
        </Typography>
        <Divider sx={{ mt: 3, width: '60%', mx: 'auto' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {rooms.map((room) => (
          <Box
            key={room.id}
            sx={{
              flex: '1 1 280px',
              maxWidth: 350,
              minWidth: 240,
              display: 'flex',
            }}
          >
            <Card
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={room.image}
                alt={room.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" gutterBottom>{room.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flex: 1, mb: 2 }}>
                  {room.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                  <Typography variant="body2" fontWeight="bold">
                    {t.rooms.capacity}: {room.capacity}
                  </Typography>
                  <Typography variant="h6" color="secondary.main">{room.price}</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2 }}
                  href={`tel:${content.phone}`}
                >
                  {t.rooms.book}
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

export default Rooms;