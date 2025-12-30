import Link from 'next/link'
import { PageBanner, TeamMember } from '@/components'
import { getAllTeamMembers, getGlobalSettings } from '@/lib/content'

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
              bio={<div dangerouslySetInnerHTML={{ __html: member.bio.replace(/\n/g, '<br/>') }} />}
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
