import { client } from '@/tina/__generated__/client'
import { PageBanner, TeamMember } from '@/components'

export const metadata = {
  title: 'Alumni',
  description: 'Former members of the Muhle Lab research team.',
}

export default async function AlumniPage() {
  // Fetch global settings for banner image
  const globalResponse = await client.queries.global({
    relativePath: 'settings.json',
  })
  const global = globalResponse.data.global

  // Fetch all alumni
  const alumniResponse = await client.queries.alumniConnection({
    sort: 'order',
  })
  const allAlumni = alumniResponse.data.alumniConnection.edges || []

  // Sort by order field
  const sortedAlumni = [...allAlumni].sort((a, b) => {
    const orderA = a?.node?.order ?? 999
    const orderB = b?.node?.order ?? 999
    return orderA - orderB
  })

  // Separate featured and list-only alumni
  const featuredAlumni = sortedAlumni.filter((edge) => edge?.node?.isFeatured)
  const listAlumni = sortedAlumni.filter((edge) => !edge?.node?.isFeatured)

  return (
    <>
      <PageBanner
        variant="alumni"
        title="Alumni"
        backgroundImage={global?.images?.alumniBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {/* Featured Alumni with full profiles */}
        {featuredAlumni.map((edge, index) => {
          const alumni = edge?.node
          if (!alumni) return null

          return (
            <div key={alumni._sys.filename}>
              <TeamMember
                name={alumni.name}
                role={`${alumni.role} (${alumni.yearsActive})`}
                image={alumni.image}
                bio={alumni.bio}
                socialLinks={alumni.socialLinks}
                currentPosition={alumni.currentPosition}
                isEven={index % 2 === 1}
              />
              <hr className="page-break" />
            </div>
          )
        })}

        {/* List-only Alumni */}
        {listAlumni.length > 0 && (
          <>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Lab Alumni
            </h2>
            <div className="alumni-list grid grid-cols-1 md:grid-cols-2 gap-4">
              {listAlumni.map((edge) => {
                const alumni = edge?.node
                if (!alumni) return null

                return (
                  <div key={alumni._sys.filename} className="mb-4">
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
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}
