import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Divider, Modal, IconButton, useTheme, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Gallery = () => {
  const theme = useTheme();
  const { lang } = useLanguage();
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Use translated gallery images
  const galleryImages = t.galleryImages || [];

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>
          {t.gallery.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {t.gallery.subtitle}
        </Typography>
        <Divider sx={{ mt: 3, width: '60%', mx: 'auto' }} />
      </Box>

      <Box sx={{ maxWidth: '1000px', mx: 'auto', position: 'relative' }}>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          loop={true}
          style={{ padding: '20px 0' }}
        >
          {galleryImages.map((img) => (
            <SwiperSlide key={img.id} style={{ width: '80%', maxWidth: '500px' }}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
                onClick={() => handleOpen(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                  <Typography variant="subtitle1" fontWeight={600}>{img.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{img.category}</Typography>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box
          className="swiper-button-prev-custom"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: 'rgba(0,0,0,0.6)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.9)' },
            fontSize: '1.5rem',
            userSelect: 'none',
          }}
        >
          ‹
        </Box>
        <Box
          className="swiper-button-next-custom"
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: 'rgba(0,0,0,0.6)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.9)' },
            fontSize: '1.5rem',
            userSelect: 'none',
          }}
        >
          ›
        </Box>
      </Box>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '90vw', maxHeight: '90vh', bgcolor: 'background.paper', boxShadow: 24, borderRadius: 2, p: 1, outline: 'none' }}>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'rgba(0,0,0,0.6)', color: 'white', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}>
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <>
              <img src={selectedImage.url} alt={selectedImage.title} style={{ maxWidth: '100%', maxHeight: '80vh', display: 'block', margin: '0 auto', borderRadius: 4 }} />
              <Typography variant="subtitle1" align="center" sx={{ mt: 1, fontWeight: 600 }}>{selectedImage.title}</Typography>
            </>
          )}
        </Box>
      </Modal>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">{t.gallery.click}</Typography>
      </Box>
    </motion.div>
  );
};

export default Gallery;