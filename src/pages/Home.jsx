import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Button,
  Paper,
  Rating,
  Container,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { content } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Home = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];

  // Now rooms, reviews, amenities come from translations
  const rooms = t.roomsList || [];
  const reviews = t.reviews || [];
  const amenities = t.amenities || [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          backgroundImage: 'url(/ext3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 4,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
          <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2 }}>{t.hero.title}</Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>{t.hero.subtitle}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 3 }}>
            <Rating value={content.rating} precision={0.5} readOnly sx={{ color: '#ffb300' }} />
            <Typography variant="h6">{content.rating} ★ ({content.reviewsCount} reviews)</Typography>
          </Box>
          <Button variant="contained" color="secondary" size="large" href="/rooms" sx={{ fontWeight: 'bold', px: 4, py: 1.5 }}>
            {t.cta.book}
          </Button>
        </Box>
      </Box>

      {/* Testimonials Carousel – translated */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>{t.home.testimonialsTitle}</Typography>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          style={{ paddingBottom: '30px' }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
                <Rating value={review.rating} precision={0.5} readOnly sx={{ color: '#ffb300' }} />
                <Typography variant="body1" sx={{ my: 2, fontStyle: 'italic' }}>"{review.text}"</Typography>
                <Typography variant="subtitle2" fontWeight="bold">– {review.name}</Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Amenities – translated */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
          {amenities.map((amenity, idx) => (
            <Paper key={idx} elevation={2} sx={{ p: 2, minWidth: 100, flex: '1 1 120px', maxWidth: 150, textAlign: 'center' }}>
              <Typography variant="body1">{amenity}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Rooms Preview – translated */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>{t.home.roomsTitle}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {rooms.map((room) => (
            <Box key={room.id} sx={{ flex: '1 1 250px', maxWidth: 350, minWidth: 200, display: 'flex' }}>
              <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img" height="200" image={room.image} alt={room.name} sx={{ objectFit: 'cover' }} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{room.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{room.description}</Typography>
                  <Typography variant="body2" fontWeight="bold">{room.price} – {room.capacity}</Typography>
                  <Button variant="contained" color="secondary" size="small" href="/rooms" sx={{ mt: 2 }}>{t.home.bookButton}</Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* CTA */}
      <Box sx={{ bgcolor: theme.palette.primary.main, color: 'white', py: 6, borderRadius: 2 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>{t.home.welcome}</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>{t.home.desc}</Typography>
          <Button variant="contained" color="secondary" size="large" href="/contact" sx={{ fontWeight: 'bold' }}>{t.cta.contact}</Button>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Home;