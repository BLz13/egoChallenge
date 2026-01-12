import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/autoplay';
import './slider.scss';

import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider({ features }) {
  if (!features || features.length === 0) {
    return <div>No features available</div>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      keyboard
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={false}
      watchOverflow={true}
      spaceBetween={20}
      slidesPerView={'auto'}            // important: let CSS control slide width
      centeredSlides={true}            // center active slides
      centeredSlidesBounds={true}      // keep group centered when slidesPerView is 'auto'
      className="features-slider"
      breakpoints={{
        0: {
          // mobile: single slide full width
          slidesPerView: 1,
          spaceBetween: 12,
        },
        640: {
          // small tablets: auto width cards (1.5 visible approx.)
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        900: {
          // desktop: auto width cards so two look centered
          slidesPerView: 'auto',
          spaceBetween: 24,
        },
        1200: {
          // large desktop: show slightly more spacing
          slidesPerView: 'auto',
          spaceBetween: 28,
        },
      }}
    >
      {features.map((feature) => (
        <SwiperSlide key={feature.name} className="feature-slide">
          <div className="feature-item">
            <img className="features-image" src={feature.image} alt={feature.name} />
            <h4 className="features-name">{feature.name}</h4>
            <p className="features-description">{feature.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
