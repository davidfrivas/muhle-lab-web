import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageBanner, ImageCarousel } from '@/components'
import { getNewsPost, getNewsSlugs } from '@/lib/content'
import { withBasePath } from '@/lib/utils'

// Convert markdown to HTML
function processMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      // Check if it's an internal link (starts with /)
      if (url.startsWith('/')) {
        return `<a href="${withBasePath(url)}">${linkText}</a>`
      }
      // External link
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
    }) // [text](url) links
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>') // ***bold italic***
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold**
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // *italic*
    .replace(/\+\/-/g, '<sup>+/-</sup>') // +/- superscript
    .replace(/\n\n/g, '</p><p>') // paragraph breaks
    .replace(/\n/g, '<br/>') // line breaks
}

interface NewsPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getNewsSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getNewsPost(slug)

  if (!post) {
    return {
      title: 'News Post',
      description: 'Muhle Lab News',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || `${post.title} - Muhle Lab News`,
  }
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params
  const post = getNewsPost(slug)

  if (!post) {
    notFound()
  }

  // Format date
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <>
      {/* News post uses white/minimal banner */}
      <PageBanner variant="news-post" />

      <div className="wrapper page-content py-12 md:py-16">
        <article className="news-blog-post max-w-news mx-auto">
          <header className="mb-8">
            <h3 className="text-lab-date text-lg mb-2">{formattedDate}</h3>
            <h2 className="text-3xl md:text-4xl font-bold">{post.title}</h2>
          </header>

          <div className="blog-post-entry">
            {/* Featured Image */}
            {post.featuredImage && (
              <img
                src={withBasePath(post.featuredImage)}
                alt={post.featuredImageAlt || post.title}
                className="w-full h-auto mb-8 rounded-lg"
              />
            )}

            {/* Post Content */}
            <div className="prose-lab" dangerouslySetInnerHTML={{ __html: processMarkdown(post.body) }} />

            {/* Image Carousel */}
            {post.carousel && post.carousel.length > 0 && (
              <div className="mt-12">
                <ImageCarousel
                  images={post.carousel.map((img) => ({
                    src: img?.src || '',
                    alt: img?.alt || '',
                  }))}
                />
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  )
}
