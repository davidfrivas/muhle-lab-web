import { client } from '@/tina/__generated__/client'
import { PageBanner, NewsCard } from '@/components'

export const metadata = {
  title: 'News',
  description: 'Latest news and updates from the Muhle Lab.',
}

export default async function NewsPage() {
  // Fetch global settings for banner image
  const globalResponse = await client.queries.global({
    relativePath: 'settings.json',
  })
  const global = globalResponse.data.global

  // Fetch all news posts
  const newsResponse = await client.queries.newsConnection({
    sort: 'date',
    last: 100,
  })
  const allNews = newsResponse.data.newsConnection.edges || []

  // Filter published posts and sort by date (newest first)
  const publishedNews = [...allNews]
    .filter((edge) => edge?.node?.published !== false)
    .sort((a, b) => {
      const dateA = a?.node?.date ? new Date(a.node.date).getTime() : 0
      const dateB = b?.node?.date ? new Date(b.node.date).getTime() : 0
      return dateB - dateA
    })

  return (
    <>
      <PageBanner
        variant="news"
        title="News"
        backgroundImage={global?.images?.newsBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        <div className="latest-news">
          <div className="news-boxes">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Latest News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedNews.map((edge) => {
                const post = edge?.node
                if (!post) return null

                return (
                  <NewsCard
                    key={post._sys.filename}
                    slug={post._sys.filename}
                    title={post.title}
                    date={post.date}
                    featuredImage={post.featuredImage}
                    featuredImageAlt={post.featuredImageAlt}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
