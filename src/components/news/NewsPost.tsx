import React from 'react';
import { ImageCarousel, CarouselImage } from './ImageCarousel';
import clsx from 'clsx';
import { withBasePath } from '@/lib/utils';

export interface NewsPostProps {
  title: string;
  date: string | Date;
  featuredImage: string;
  featuredImageAlt?: string;
  content: React.ReactNode;
  carousel?: CarouselImage[];
  className?: string;
}

function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function NewsPost({
  title,
  date,
  featuredImage,
  featuredImageAlt,
  content,
  carousel,
  className,
}: NewsPostProps) {
  const hasCarousel = carousel && carousel.length > 0;

  return (
    <article className={clsx('max-w-news mx-auto', className)}>
      {/* Header */}
      <header className="mb-8">
        <time
          dateTime={typeof date === 'string' ? date : date.toISOString()}
          className="block text-lab-date text-lg font-medium mb-4"
        >
          {formatDate(date)}
        </time>
        <h1 className="text-3xl md:text-4xl font-bold text-lab-dark">
          {title}
        </h1>
      </header>

      {/* Featured Image or Carousel */}
      <div className="mb-8">
        {hasCarousel ? (
          <ImageCarousel images={carousel} />
        ) : (
          <img
            src={withBasePath(featuredImage)}
            alt={featuredImageAlt || title}
            className="w-full h-auto object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="prose-lab">
        {content}
      </div>
    </article>
  );
}

export default NewsPost;
