import React from 'react';
import { Figure } from '../ui/Figure';
import clsx from 'clsx';
import { withBasePath } from '@/lib/utils';

export interface OverviewSection {
  type: 'text' | 'figure' | 'text-with-figure';
  content?: string;
  figure?: {
    src: string;
    alt: string;
    caption?: string;
    position?: 'left' | 'right' | 'full-width';
    credit?: string;
  };
  // For standalone figure sections
  src?: string;
  alt?: string;
  caption?: string;
  position?: 'left' | 'right' | 'full-width';
  credit?: string;
}

export interface ResearchOverviewProps {
  sections: OverviewSection[];
  processMarkdown: (text: string) => string;
  className?: string;
}

export function ResearchOverview({
  sections,
  processMarkdown,
  className,
}: ResearchOverviewProps) {
  return (
    <section className={clsx('research-overview', className)}>
      {sections.map((section, index) => {
        if (section.type === 'text') {
          return (
            <div
              key={index}
              className="prose-lab mb-6"
              dangerouslySetInnerHTML={{ __html: processMarkdown(section.content || '') }}
            />
          );
        }

        if (section.type === 'figure') {
          const isFullWidth = section.position === 'full-width';
          return (
            <figure key={index} className={clsx('my-6', isFullWidth && 'w-full')}>
              <img
                src={withBasePath(section.src || '')}
                alt={section.alt || ''}
                className="max-w-full h-auto"
              />
              {(section.caption || section.credit) && (
                <figcaption className="mt-2 text-sm text-gray-600">
                  {section.caption && (
                    <span dangerouslySetInnerHTML={{ __html: processMarkdown(section.caption) }} />
                  )}
                  {section.credit && (
                    <span className="block text-right text-gray-500">{section.credit}</span>
                  )}
                </figcaption>
              )}
            </figure>
          );
        }

        if (section.type === 'text-with-figure' && section.figure) {
          const isLeft = section.figure.position === 'left';
          return (
            <div key={index} className="clearfix mb-6">
              <Figure
                src={section.figure.src}
                alt={section.figure.alt}
                caption={section.figure.caption}
                position={section.figure.position || 'right'}
                className={clsx(
                  'max-w-[280px] md:max-w-[320px]',
                  isLeft ? 'float-left mr-6 mb-4' : 'float-right ml-6 mb-4'
                )}
              />
              <div
                className="prose-lab"
                dangerouslySetInnerHTML={{ __html: processMarkdown(section.content || '') }}
              />
            </div>
          );
        }

        return null;
      })}
    </section>
  );
}

export default ResearchOverview;
