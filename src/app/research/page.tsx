import { client } from '@/tina/__generated__/client'
import { PageBanner, ResearchOverview, ResearchProject } from '@/components'

export const metadata = {
  title: 'Research',
  description:
    'Learn about the research projects and goals of the Muhle Lab, focusing on CHD8 and autism spectrum disorder.',
}

export default async function ResearchPage() {
  // Fetch global settings for banner image
  const globalResponse = await client.queries.global({
    relativePath: 'settings.json',
  })
  const global = globalResponse.data.global

  // Fetch research overview
  let researchOverview = null
  try {
    const overviewResponse = await client.queries.researchOverview({
      relativePath: 'overview.mdx',
    })
    researchOverview = overviewResponse.data.researchOverview
  } catch {
    // Overview may not exist yet
  }

  // Fetch all research projects
  const researchResponse = await client.queries.researchConnection({
    sort: 'order',
  })
  const allProjects = researchResponse.data.researchConnection.edges || []

  // Filter active projects and sort by order
  const activeProjects = [...allProjects]
    .filter((edge) => edge?.node?.isActive !== false)
    .sort((a, b) => {
      const orderA = a?.node?.order ?? 999
      const orderB = b?.node?.order ?? 999
      return orderA - orderB
    })

  return (
    <>
      <PageBanner
        variant="research"
        title="Research"
        backgroundImage={global?.images?.researchBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {/* Research Overview Section */}
        {researchOverview && (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {researchOverview.title || 'Research Goals'}
            </h2>
            <ResearchOverview
              content={researchOverview.content}
              figures={researchOverview.figures}
            />
            <hr className="page-break" />
          </>
        )}

        {/* Research Projects Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Research Projects
        </h2>

        {activeProjects.map((edge, index) => {
          const project = edge?.node
          if (!project) return null

          return (
            <div key={project._sys.filename}>
              <ResearchProject
                heading={project.heading}
                description={project.description}
                figure={project.figure}
                layout={project.layout as 'image-left' | 'image-right'}
              />
              {index < activeProjects.length - 1 && (
                <hr className="my-12 border-t border-gray-300" />
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
