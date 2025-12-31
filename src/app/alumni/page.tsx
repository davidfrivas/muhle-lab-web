import { PageBanner, TeamMember } from '@/components'
import { getAllAlumni, getAlumniList, getGlobalSettings } from '@/lib/content'
import { withBasePath } from '@/lib/utils'

// Convert markdown to HTML
function processMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      if (url.startsWith('/')) {
        return `<a href="${withBasePath(url)}">${linkText}</a>`
      }
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
    }) // [text](url) links
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>') // ***bold italic***
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold**
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // *italic*
    .replace(/\+\/-/g, '<sup>+/-</sup>') // +/- superscript
    .replace(/<sup>/g, '<sup>') // preserve existing sup tags
    .replace(/<\/sup>/g, '</sup>')
    .replace(/\n\n/g, '</p><p>') // paragraph breaks
    .replace(/\n/g, '<br/>') // line breaks
}

export const metadata = {
  title: 'Alumni',
  description: 'Former members of the Muhle Lab research team.',
}

export default async function AlumniPage() {
  const global = getGlobalSettings()
  const allAlumni = getAllAlumni()
  const alumniList = getAlumniList()

  // Separate featured and list-only alumni
  const featuredAlumni = allAlumni.filter((alumni) => alumni.isFeatured)

  return (
    <>
      <PageBanner
        variant="alumni"
        title="Alumni"
        backgroundImage={global?.images?.alumniBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {/* Featured Alumni with full profiles */}
        {featuredAlumni.map((alumni, index) => (
          <div key={alumni._sys.filename}>
            <TeamMember
              name={alumni.name}
              role={`${alumni.role} (${alumni.yearsActive})`}
              image={alumni.image}
              bio={alumni.bio ? <div dangerouslySetInnerHTML={{ __html: processMarkdown(alumni.bio) }} /> : undefined}
              socialLinks={alumni.socialLinks}
              currentPosition={alumni.currentPosition}
              isEven={index % 2 === 1}
            />
            <hr className="page-break" />
          </div>
        ))}

        {/* List-only Alumni */}
        {alumniList.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Lab Alumni
            </h2>
            <div className="alumni-list grid grid-cols-1 md:grid-cols-2 gap-4">
              {alumniList.map((alumni, index) => (
                <div key={index} className="mb-4">
                  <p>
                    <span className="font-semibold">{alumni.name}</span>{' '}
                    ({alumni.yearsActive})
                    <br />
                    <i className="text-gray-600">
                      {alumni.role}
                      {alumni.affiliation && `, ${alumni.affiliation}`}
                    </i>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
