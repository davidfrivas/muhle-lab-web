import Link from 'next/link'
import { PageBanner, TeamMember } from '@/components'
import { getAllTeamMembers, getGlobalSettings } from '@/lib/content'
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
  title: 'Members',
  description: 'Meet the members of the Muhle Lab research team.',
}

export default async function TeamPage() {
  const global = getGlobalSettings()
  const teamMembers = getAllTeamMembers()

  return (
    <>
      <PageBanner
        variant="team"
        title="Members"
        backgroundImage={global?.images?.teamBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {teamMembers.map((member, index) => (
          <div key={member._sys.filename}>
            <TeamMember
              name={member.name}
              credentials={member.credentials}
              role={member.role}
              image={member.image}
              bio={<div dangerouslySetInnerHTML={{ __html: processMarkdown(member.bio) }} />}
              socialLinks={member.socialLinks}
              isEven={index % 2 === 1}
            />
            {index < teamMembers.length - 1 && (
              <hr className="page-break" />
            )}
          </div>
        ))}
      </div>

      {/* Alumni Link Section */}
      <Link href="/alumni" className="block">
        <div className="bg-lab-dark hover:bg-lab-purple transition-colors py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Alumni</h1>
        </div>
      </Link>
    </>
  )
}
