import { PageBanner, NewsCard } from '@/components'
import { getAllNewsPosts, getGlobalSettings } from '@/lib/content'

export const metadata = {
  title: 'News',
  description: 'Latest news and updates from the Muhle Lab.',
}

export default async function NewsPage() {
  const global = getGlobalSettings()
  const allNews = getAllNewsPosts()

  // Filter published posts
  const publishedNews = allNews.filter((post) => post.published !== false)

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
              {publishedNews.map((post) => (
                <NewsCard
                  key={post._sys.filename}
                  slug={post._sys.filename}
                  title={post.title}
                  date={post.date}
                  featuredImage={post.featuredImage}
                  featuredImageAlt={post.featuredImageAlt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
