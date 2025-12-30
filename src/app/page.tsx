import Link from 'next/link'
import { PageBanner, NewsCard } from '@/components'
import { getAllNewsPosts, getGlobalSettings } from '@/lib/content'

export const metadata = {
  title: 'Muhle Lab',
  description:
    'The Muhle Lab, led by Dr. Rebecca Muhle, is a part of the New York State Psychiatric Institute and Columbia University Department of Psychiatry.',
}

export default async function HomePage() {
  const global = getGlobalSettings()
  const allNews = getAllNewsPosts()

  // Get featured news posts
  const featuredNews = allNews
    .filter((post) => post.featured && post.published !== false)
    .slice(0, 2)

  return (
    <>
      <PageBanner
        variant="home"
        backgroundImage={global?.images?.homeBanner}
      >
        <div className="banner-content home">
          <div className="banner-text">
            <div className="welcome animate-slide-down">Welcome to the</div>
            <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold animate-fade-in-fast">
              {global?.labInfo?.name || 'Muhle Lab'}
            </h1>
            <div className="text-lg md:text-2xl mt-4 animate-fade-in-slow">
              {global?.labInfo?.tagline || 'Molecular Genomics & Neurodevelopment'}
            </div>
          </div>
        </div>
      </PageBanner>

      {/* Mission Statement Section */}
      <section
        className="py-16 md:py-24 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: global?.images?.missionBackground
            ? `linear-gradient(rgba(30, 25, 38, 0.85), rgba(30, 25, 38, 0.85)), url(${global.images.missionBackground})`
            : 'linear-gradient(to right, #1E1926, #2d2540)',
        }}
      >
        <div className="wrapper">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              {global?.labInfo?.missionHeading ||
                'Bridging the gap between molecular genetics and psychiatry'}
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8 opacity-90">
              {global?.labInfo?.missionStatement ||
                'We aim to uncover genetic pathways that increase the likelihood of neurodevelopmental disorders such as autism by utilizing high-throughput genomics methods and exploring the effects of disruptions in these genetic pathways using mouse and human model systems.'}
            </p>
            <Link
              href="/research"
              className="btn btn-outline-white inline-block"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="latest-news home">
            <div className="news-boxes">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                Latest News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {featuredNews.map((post) => (
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
              <Link href="/news" className="btn btn-outline inline-block">
                See all news
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
