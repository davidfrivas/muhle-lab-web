import React from 'react';
import { NewsCard, NewsCardProps } from './NewsCard';
import clsx from 'clsx';

export interface NewsListProps {
  posts: Omit<NewsCardProps, 'className'>[];
  className?: string;
  columns?: 1 | 2 | 3;
}

export function NewsList({
  posts,
  className,
  columns = 3,
}: NewsListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div
      className={clsx(
        'grid gap-8',
        gridCols[columns],
        className
      )}
    >
      {posts.map((post) => (
        <NewsCard key={post.slug} {...post} />
      ))}
    </div>
  );
}

export default NewsList;
