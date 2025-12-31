import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { withBasePath } from '@/lib/utils';

export interface NewsCardProps {
  title: string;
  date: string | Date;
  featuredImage?: string | null;
  image?: string | null;
  slug: string;
  featuredImageAlt?: string | null;
  imageAlt?: string | null;
  excerpt?: string | null;
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

export function NewsCard({
  title,
  date,
  featuredImage,
  image,
  slug,
  featuredImageAlt,
  imageAlt,
  excerpt,
  className,
}: NewsCardProps) {
  // Support both prop names for flexibility
  const imgSrc = featuredImage || image || '';
  const imgAlt = featuredImageAlt || imageAlt || title;
  return (
    <article className={clsx('group', className)}>
      <Link href={`/news/${slug}`} className="block">
        {/* Image with aspect ratio */}
        <div className="relative overflow-hidden aspect-news mb-4">
          <img
            src={withBasePath(imgSrc)}
            alt={imgAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Date */}
        <time
          dateTime={typeof date === 'string' ? date : date.toISOString()}
          className="block text-lab-date text-sm font-medium mb-2"
        >
          {formatDate(date)}
        </time>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-lab-dark transition-colors duration-200 group-hover:text-lab-purple">
          {title}
        </h3>

        {/* Optional excerpt */}
        {excerpt && (
          <p className="mt-2 text-gray-600 text-sm line-clamp-2">
            {excerpt}
          </p>
        )}
      </Link>
    </article>
  );
}

export default NewsCard;
