import { client } from '@/tina/__generated__/client'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageBanner, NewsPostContent, ImageCarousel } from '@/components'

interface NewsPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const newsResponse = await client.queries.newsConnection()
  const allNews = newsResponse.data.newsConnection.edges || []

  return allNews
    .filter((edge) => edge?.node)
    .map((edge) => ({
      slug: edge!.node!._sys.filename,
    }))
}

export async function generateMetadata({
  params,
}: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const response = await client.queries.news({
      relativePath: `${slug}.mdx`,
    })
    const post = response.data.news

    return {
      title: post.title,
      description: post.excerpt || `${post.title} - Muhle Lab News`,
    }
  } catch {
    return {
      title: 'News Post',
      description: 'Muhle Lab News',
    }
  }
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params

  let post
  try {
    const response = await client.queries.news({
      relativePath: `${slug}.mdx`,
    })
    post = response.data.news
  } catch {
    notFound()
  }

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
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className="w-full h-auto mb-8 rounded-lg"
              />
            )}

            {/* Post Content */}
            <div className="prose-lab">
              <NewsPostContent content={post.body} />
            </div>

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
