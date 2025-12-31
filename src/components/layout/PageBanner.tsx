'use client';

import React from 'react';
import clsx from 'clsx';
import { withBasePath } from '@/lib/utils';

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
    backgroundImage: '/images/lab-pic-2022.jpg',
    displayTitle: 'Muhle Lab',
    height: 'min-h-[70vh]',
  },
  team: {
    backgroundImage: '/images/lab-pic-2022.jpg',
    displayTitle: 'Our Team',
    height: 'py-24',
  },
  alumni: {
    backgroundImage: '/images/lab-pic-2021.JPG',
    displayTitle: 'Alumni',
    height: 'py-24',
  },
  research: {
    backgroundImage: '/images/nissl-banner.jpg',
    displayTitle: 'Research',
    height: 'py-24',
  },
  news: {
    backgroundImage: '/images/ihc-brain.jpg',
    displayTitle: 'News',
    height: 'py-24',
  },
  funding: {
    backgroundImage: '/images/estrous.jpeg',
    displayTitle: 'Funding',
    height: 'py-24',
  },
  contact: {
    backgroundImage: '/images/sackler.jpeg',
    displayTitle: 'Contact',
    height: 'py-24',
  },
  'news-post': {
    displayTitle: '',
    height: 'py-16',
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
          style={{ backgroundImage: `url(${withBasePath(bgImage)})` }}
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
          <div className="flex flex-col items-center py-16 md:py-24">
            {/* Welcome text - aligned left like original */}
            <div
              className={clsx(
                'text-sm md:text-base uppercase font-extralight tracking-wider',
                'self-start animate-slide-down'
              )}
            >
              Welcome to the
            </div>
            {/* Main title */}
            <h1
              className={clsx(
                'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
                'font-light uppercase tracking-wider',
                'animate-fade-in-fast'
              )}
            >
              Muhle Lab
            </h1>
            {/* Subtitle */}
            <p
              className={clsx(
                'text-sm md:text-base uppercase font-light tracking-wider',
                'animate-fade-in-slow',
                'mb-4'
              )}
            >
              Molecular Genomics & Neurodevelopment
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
