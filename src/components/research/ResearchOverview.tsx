import React from 'react';
import { Figure } from '../ui/Figure';
import clsx from 'clsx';

export interface OverviewFigure {
  src: string;
  alt: string;
  caption?: string | null;
  position?: 'inline' | 'left' | 'right' | 'full-width' | string | null;
}

export interface ResearchOverviewProps {
  title?: string | null;
  content?: React.ReactNode;
  figures?: (OverviewFigure | null)[] | null;
  className?: string;
}

export function ResearchOverview({
  title,
  content,
  figures,
  className,
}: ResearchOverviewProps) {
  // Filter out null figures and separate by position for layout
  const validFigures = figures?.filter((f): f is OverviewFigure => f !== null) || [];
  const inlineFigures = validFigures.filter(
    (f) => f.position === 'inline' || !f.position
  );
  const floatLeftFigures = validFigures.filter((f) => f.position === 'left');
  const floatRightFigures = validFigures.filter((f) => f.position === 'right');
  const fullWidthFigures = validFigures.filter((f) => f.position === 'full-width');

  return (
    <section className={clsx('py-8', className)}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-lab-dark mb-6">
          {title}
        </h2>
      )}

      {/* Main content area with floated figures */}
      <div className="prose-lab clearfix">
        {/* Float left figures */}
        {floatLeftFigures?.map((figure, index) => (
          <Figure
            key={`left-${index}`}
            src={figure.src}
            alt={figure.alt}
            caption={figure.caption}
            position="left"
            className="max-w-xs md:max-w-sm"
          />
        ))}

        {/* Float right figures */}
        {floatRightFigures?.map((figure, index) => (
          <Figure
            key={`right-${index}`}
            src={figure.src}
            alt={figure.alt}
            caption={figure.caption}
            position="right"
            className="max-w-xs md:max-w-sm"
          />
        ))}

        {/* Content */}
        {content}
      </div>

      {/* Inline figures (displayed as a grid if multiple) */}
      {inlineFigures && inlineFigures.length > 0 && (
        <div
          className={clsx(
            'mt-8',
            inlineFigures.length > 1 && 'grid gap-6 md:grid-cols-2'
          )}
        >
          {inlineFigures.map((figure, index) => (
            <Figure
              key={`inline-${index}`}
              src={figure.src}
              alt={figure.alt}
              caption={figure.caption}
            />
          ))}
        </div>
      )}

      {/* Full-width figures */}
      {fullWidthFigures?.map((figure, index) => (
        <Figure
          key={`full-${index}`}
          src={figure.src}
          alt={figure.alt}
          caption={figure.caption}
          position="full-width"
          className="mt-8"
        />
      ))}
    </section>
  );
}

export default ResearchOverview;
