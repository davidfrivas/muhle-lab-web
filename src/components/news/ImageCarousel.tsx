'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import clsx from 'clsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
}

export function ImageCarousel({
  images,
  className,
  autoplayDelay = 5000,
  showNavigation = true,
  showPagination = true,
}: ImageCarouselProps) {
  if (!images || images.length === 0) {
    return null;
  }

  // If only one image, just display it without carousel
  if (images.length === 1) {
    return (
      <div className={clsx('w-full', className)}>
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  return (
    <div className={clsx('w-full', className)}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation}
        loop={true}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
