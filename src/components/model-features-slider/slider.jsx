import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/autoplay';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import './slider.scss';

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
            spaceBetween={20}
            slidesPerView={1}
            className='features-slider'
        >
            {features.map((feature) => (
                <SwiperSlide key={feature.name}>
                    <div className='feature-item'>
                        <img className='features-image' src={feature.image} alt={feature.name} />
                        <h4 className='features-name'>{feature.name}</h4>
                        <p className='features-description'>{feature.description}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
