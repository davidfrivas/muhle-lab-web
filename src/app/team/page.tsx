import { client } from '@/tina/__generated__/client'
import Link from 'next/link'
import { PageBanner, TeamMember } from '@/components'

export const metadata = {
  title: 'Members',
  description: 'Meet the members of the Muhle Lab research team.',
}

export default async function TeamPage() {
  // Fetch global settings for banner image
  const globalResponse = await client.queries.global({
    relativePath: 'settings.json',
  })
  const global = globalResponse.data.global

  // Fetch all team members
  const teamResponse = await client.queries.teamConnection({
    sort: 'order',
  })
  const teamMembers = teamResponse.data.teamConnection.edges || []

  // Sort by order field
  const sortedMembers = [...teamMembers].sort((a, b) => {
    const orderA = a?.node?.order ?? 999
    const orderB = b?.node?.order ?? 999
    return orderA - orderB
  })

  return (
    <>
      <PageBanner
        variant="team"
        title="Members"
        backgroundImage={global?.images?.teamBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {sortedMembers.map((edge, index) => {
          const member = edge?.node
          if (!member) return null

          return (
            <div key={member._sys.filename}>
              <TeamMember
                name={member.name}
                credentials={member.credentials}
                role={member.role}
                image={member.image}
                bio={member.bio}
                socialLinks={member.socialLinks}
                isEven={index % 2 === 1}
              />
              {index < sortedMembers.length - 1 && (
                <hr className="page-break" />
              )}
            </div>
          )
        })}
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
