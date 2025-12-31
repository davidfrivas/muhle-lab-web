'use client'

import { TinaMarkdown, type TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface NewsPostContentProps {
  content: TinaMarkdownContent | null | undefined
}

export default function NewsPostContent({ content }: NewsPostContentProps) {
  if (!content) {
    return null
  }

  return (
    <div className="prose prose-lg max-w-none">
      <TinaMarkdown content={content} />
    </div>
  )
}
