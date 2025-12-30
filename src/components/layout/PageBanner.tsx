'use client';

import React from 'react';
import clsx from 'clsx';

type BannerVariant =
  | 'home'
  | 'team'
  | 'alumni'
  | 'research'
  | 'news'
  | 'funding'
  | 'contact'
  | 'news-post';

export interface PageBannerProps {
  variant: BannerVariant;
  title?: string | null;
  backgroundImage?: string | null;
  children?: React.ReactNode;
}

const variantConfig: Record<BannerVariant, {
  backgroundImage?: string;
  displayTitle: string;
  height: string;
}> = {
  home: {
    backgroundImage: '/images/banners/home-banner.jpg',
    displayTitle: 'Muhle Lab',
    height: 'h-screen',
  },
  team: {
    backgroundImage: '/images/banners/team-banner.jpg',
    displayTitle: 'Our Team',
    height: 'h-[50vh] min-h-[400px]',
  },
  alumni: {
    backgroundImage: '/images/banners/team-banner.jpg',
    displayTitle: 'Alumni',
    height: 'h-[50vh] min-h-[400px]',
  },
  research: {
    backgroundImage: '/images/banners/research-banner.jpg',
    displayTitle: 'Research',
    height: 'h-[50vh] min-h-[400px]',
  },
  news: {
    backgroundImage: '/images/banners/news-banner.jpg',
    displayTitle: 'News',
    height: 'h-[50vh] min-h-[400px]',
  },
  funding: {
    backgroundImage: '/images/banners/funding-banner.jpg',
    displayTitle: 'Funding',
    height: 'h-[50vh] min-h-[400px]',
  },
  contact: {
    backgroundImage: '/images/banners/contact-banner.jpg',
    displayTitle: 'Contact',
    height: 'h-[50vh] min-h-[400px]',
  },
  'news-post': {
    backgroundImage: '/images/banners/news-banner.jpg',
    displayTitle: '',
    height: 'h-[40vh] min-h-[300px]',
  },
};

export default function PageBanner({
  variant,
  title,
  backgroundImage,
  children
}: PageBannerProps) {
  const config = variantConfig[variant];
  const displayTitle = title || config.displayTitle;
  const isHome = variant === 'home';
  // Use provided backgroundImage or fall back to variant default
  const bgImage = backgroundImage || config.backgroundImage;

  return (
    <section
      className={clsx(
        'relative w-full flex items-center justify-center',
        config.height
      )}
    >
      {/* Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div
        className={clsx(
          'absolute inset-0',
          isHome
            ? 'bg-black/40'
            : 'bg-black/50'
        )}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        {isHome ? (
          <div className="flex flex-col items-center">
            <h1
              className={clsx(
                'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
                'font-light tracking-wider',
                'animate-fade-in-slow'
              )}
            >
              <span className="font-bold">Muhle</span>
              <span className="font-light"> Lab</span>
            </h1>
            <p
              className={clsx(
                'mt-6 text-lg sm:text-xl md:text-2xl',
                'font-light tracking-wide',
                'animate-fade-in-slow',
                'max-w-2xl'
              )}
            >
              Advancing Research in Autism Spectrum Disorder
            </p>
            {children && (
              <div className="mt-8 animate-slide-down">
                {children}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1
              className={clsx(
                'text-3xl sm:text-4xl md:text-5xl',
                'font-bold uppercase tracking-widest',
                'animate-fade-in-fast'
              )}
            >
              {displayTitle}
            </h1>
            {children && (
              <div className="mt-6">
                {children}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
