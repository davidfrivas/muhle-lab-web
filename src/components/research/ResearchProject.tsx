import React from 'react';
import { Figure } from '../ui/Figure';
import clsx from 'clsx';

export interface ResearchFigure {
  src: string;
  alt: string;
  caption?: string | null;
  isAnimated?: boolean | null;
}

export interface ResearchProjectData {
  title: string;
  heading: string;
  description: React.ReactNode;
  figure?: ResearchFigure;
  layout?: 'image-left' | 'image-right';
  order?: number;
  isActive?: boolean;
}

export interface ResearchProjectProps {
  heading?: string | null;
  description?: React.ReactNode;
  figure?: ResearchFigure | null;
  layout?: 'image-left' | 'image-right';
  className?: string;
}

export function ResearchProject({
  heading,
  description,
  figure,
  layout,
  className,
}: ResearchProjectProps) {
  const effectiveLayout = layout || 'image-left';
  const isImageLeft = effectiveLayout === 'image-left';

  return (
    <section className={clsx('py-8', className)}>
      <div
        className={clsx(
          'flex flex-col gap-8',
          'lg:flex-row lg:items-start',
          !isImageLeft && 'lg:flex-row-reverse'
        )}
      >
        {/* Figure */}
        {figure && (
          <div className="flex-shrink-0 w-full lg:w-2/5">
            <Figure
              src={figure.src}
              alt={figure.alt}
              caption={figure.caption}
              isAnimated={figure.isAnimated}
              className="w-full"
              imageClassName="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div className={clsx('flex-1', figure && 'lg:w-3/5')}>
          <h3 className="text-xl md:text-2xl font-semibold text-lab-dark mb-4">
            {heading}
          </h3>
          <div className="prose-lab">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchProject;
