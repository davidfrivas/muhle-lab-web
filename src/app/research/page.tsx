import { PageBanner, ResearchOverview, ResearchProject } from '@/components'
import { getAllResearchProjects, getResearchOverview, getGlobalSettings } from '@/lib/content'

export const metadata = {
  title: 'Research',
  description:
    'Learn about the research projects and goals of the Muhle Lab, focusing on CHD8 and autism spectrum disorder.',
}

export default async function ResearchPage() {
  const global = getGlobalSettings()
  const researchOverview = getResearchOverview()
  const activeProjects = getAllResearchProjects()

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
              content={<div dangerouslySetInnerHTML={{ __html: researchOverview.content.replace(/\n/g, '<br/>') }} />}
              figures={researchOverview.figures}
            />
            <hr className="page-break" />
          </>
        )}

        {/* Research Projects Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Research Projects
        </h2>

        {activeProjects.map((project, index) => (
          <div key={project._sys.filename}>
            <ResearchProject
              heading={project.heading}
              description={<div dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br/>') }} />}
              figure={project.figure}
              layout={project.layout}
            />
            {index < activeProjects.length - 1 && (
              <hr className="my-12 border-t border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
