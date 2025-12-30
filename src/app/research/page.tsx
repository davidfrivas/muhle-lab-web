import { PageBanner, ResearchOverview, ResearchProject } from '@/components'
import { getAllResearchProjects, getResearchOverview, getGlobalSettings } from '@/lib/content'

export const metadata = {
  title: 'Research',
  description:
    'Learn about the research projects and goals of the Muhle Lab, focusing on CHD8 and autism spectrum disorder.',
}

// Simple markdown to HTML conversion for italics and superscript
function processMarkdown(text: string): string {
  return text
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><i>$1</i></strong>') // ***bold italic***
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold**
    .replace(/\*(.*?)\*/g, '<i>$1</i>') // *italic*
    .replace(/\+\/-/g, '<sup>+/-</sup>') // +/- superscript
    .replace(/<sup>/g, '<sup>') // preserve existing sup tags
    .replace(/<\/sup>/g, '</sup>')
    .replace(/\n\n/g, '</p><p>') // paragraph breaks
    .replace(/\n/g, '<br/>') // line breaks
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
              sections={researchOverview.sections}
              processMarkdown={processMarkdown}
            />
            <hr className="page-break my-12" />
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
              description={<div dangerouslySetInnerHTML={{ __html: processMarkdown(project.description) }} />}
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
