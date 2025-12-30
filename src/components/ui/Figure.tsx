import React from 'react';
import clsx from 'clsx';

export interface FigureProps {
  src: string;
  alt: string;
  caption?: string | null;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  position?: 'inline' | 'left' | 'right' | 'full-width';
  isAnimated?: boolean | null;
}

const positionClasses = {
  inline: '',
  left: 'float-left mr-6 mb-4',
  right: 'float-right ml-6 mb-4',
  'full-width': 'w-full',
};

export function Figure({
  src,
  alt,
  caption,
  className,
  imageClassName,
  captionClassName,
  position = 'inline',
  isAnimated = false,
}: FigureProps) {
  return (
    <figure
      className={clsx(
        'my-4',
        positionClasses[position],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          'max-w-full h-auto',
          imageClassName
        )}
        loading={isAnimated ? 'eager' : 'lazy'}
      />
      {caption && (
        <figcaption
          className={clsx(
            'mt-2 text-sm text-gray-600',
            captionClassName
          )}
          dangerouslySetInnerHTML={{ __html: caption.replace(/\*(.*?)\*/g, '<i>$1</i>') }}
        />
      )}
    </figure>
  );
}

export default Figure;
