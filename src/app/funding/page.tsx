import { client } from '@/tina/__generated__/client'
import { PageBanner, FundingSource } from '@/components'

export const metadata = {
  title: 'Funding',
  description: 'Funding sources supporting the research of the Muhle Lab.',
}

export default async function FundingPage() {
  // Fetch global settings for banner image
  const globalResponse = await client.queries.global({
    relativePath: 'settings.json',
  })
  const global = globalResponse.data.global

  // Fetch all funding sources
  const fundingResponse = await client.queries.fundingConnection({
    sort: 'order',
  })
  const allFunding = fundingResponse.data.fundingConnection.edges || []

  // Sort by order field
  const sortedFunding = [...allFunding].sort((a, b) => {
    const orderA = a?.node?.order ?? 999
    const orderB = b?.node?.order ?? 999
    return orderA - orderB
  })

  // Separate active and past funding
  const activeFunding = sortedFunding.filter(
    (edge) => edge?.node?.status === 'active'
  )
  const pastFunding = sortedFunding.filter(
    (edge) => edge?.node?.status === 'past'
  )

  return (
    <>
      <PageBanner
        variant="funding"
        title="Funding"
        backgroundImage={global?.images?.fundingBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {/* Active Funding Sources */}
        {activeFunding.map((edge, index) => {
          const funding = edge?.node
          if (!funding) return null

          return (
            <div key={funding._sys.filename}>
              <FundingSource
                projectTitle={funding.projectTitle}
                programTitle={funding.programTitle}
                fundingSource={funding.fundingSource}
                fundingSourceUrl={funding.fundingSourceUrl}
                logo={funding.logo}
                logoSize={funding.logoSize as 'small' | 'medium' | 'large'}
                principalInvestigator={funding.principalInvestigator}
                coPrincipalInvestigator={funding.coPrincipalInvestigator}
                description={funding.description}
              />
              {index < activeFunding.length - 1 && (
                <hr className="page-break" />
              )}
            </div>
          )
        })}

        {/* Past Funding Section */}
        {pastFunding.length > 0 && (
          <>
            <hr className="page-break" />
            <div className="funding-status-badge mb-8">
              <hr />
              <span>Past funding</span>
            </div>

            {pastFunding.map((edge, index) => {
              const funding = edge?.node
              if (!funding) return null

              return (
                <div key={funding._sys.filename}>
                  <FundingSource
                    projectTitle={funding.projectTitle}
                    programTitle={funding.programTitle}
                    fundingSource={funding.fundingSource}
                    fundingSourceUrl={funding.fundingSourceUrl}
                    logo={funding.logo}
                    logoSize={funding.logoSize as 'small' | 'medium' | 'large'}
                    principalInvestigator={funding.principalInvestigator}
                    coPrincipalInvestigator={funding.coPrincipalInvestigator}
                    description={funding.description}
                  />
                  {index < pastFunding.length - 1 && (
                    <hr className="page-break" />
                  )}
                </div>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}
