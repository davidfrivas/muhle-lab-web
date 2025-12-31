import Link from 'next/link'
import { PageBanner, NewsCard } from '@/components'
import { getAllNewsPosts, getGlobalSettings } from '@/lib/content'
import { withBasePath } from '@/lib/utils'

export const metadata = {
  title: 'Muhle Lab',
  description:
    'The Muhle Lab, led by Dr. Rebecca Muhle, is a part of the New York State Psychiatric Institute and Columbia University Department of Psychiatry.',
}

export default async function HomePage() {
  const global = getGlobalSettings()
  const allNews = getAllNewsPosts()

  // Get featured news posts (or latest 2 if no featured)
  let featuredNews = allNews
    .filter((post) => post.featured && post.published !== false)
    .slice(0, 2)

  // Fallback to latest 2 posts if no featured posts
  if (featuredNews.length === 0) {
    featuredNews = allNews
      .filter((post) => post.published !== false)
      .slice(0, 2)
  }

  return (
    <>
      <PageBanner
        variant="home"
        backgroundImage={global?.images?.homeBanner}
      />

      {/* Mission Statement Section - matching original with gwb.jpg background */}
      <section
        className="py-16 md:py-24 text-white bg-black bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgb(6 4 21 / 79%), rgb(0 0 0 / 51%)), url(${withBasePath('/images/gwb.jpg')})`,
          backgroundPosition: '35% center',
        }}
      >
        <div className="wrapper flex flex-col justify-center items-center">
          <div className="max-w-[40rem] text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              {global?.labInfo?.missionHeading ||
                'Bridging the gap between molecular genetics and psychiatry'}
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8 font-light">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            <h2 className="text-2xl md:text-3xl font-semibold col-span-full justify-self-start">
              Latest News
            </h2>
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
            <Link href="/news" className="btn btn-outline inline-block col-span-full justify-self-center">
              See all news
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
