import { PageBanner, FundingSource } from '@/components'
import { getAllFundingSources, getGlobalSettings } from '@/lib/content'

export const metadata = {
  title: 'Funding',
  description: 'Funding sources supporting the research of the Muhle Lab.',
}

export default async function FundingPage() {
  const global = getGlobalSettings()
  const allFunding = getAllFundingSources()

  // Separate active and past funding
  const activeFunding = allFunding.filter((f) => f.status === 'active')
  const pastFunding = allFunding.filter((f) => f.status === 'past')

  return (
    <>
      <PageBanner
        variant="funding"
        title="Funding"
        backgroundImage={global?.images?.fundingBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {/* Active Funding Sources */}
        {activeFunding.map((funding, index) => (
          <div key={funding._sys.filename}>
            <FundingSource
              projectTitle={funding.projectTitle}
              programTitle={funding.programTitle}
              fundingSource={funding.fundingSource}
              fundingSourceUrl={funding.fundingSourceUrl}
              logo={funding.logo}
              logoSize={funding.logoSize}
              principalInvestigator={funding.principalInvestigator}
              coPrincipalInvestigator={funding.coPrincipalInvestigator}
              description={<div dangerouslySetInnerHTML={{ __html: funding.description.replace(/\n/g, '<br/>') }} />}
            />
            {index < activeFunding.length - 1 && (
              <hr className="page-break" />
            )}
          </div>
        ))}

        {/* Past Funding Section */}
        {pastFunding.length > 0 && (
          <>
            <hr className="page-break" />
            <div className="funding-status-badge mb-8">
              <hr />
              <span>Past funding</span>
            </div>

            {pastFunding.map((funding, index) => (
              <div key={funding._sys.filename}>
                <FundingSource
                  projectTitle={funding.projectTitle}
                  programTitle={funding.programTitle}
                  fundingSource={funding.fundingSource}
                  fundingSourceUrl={funding.fundingSourceUrl}
                  logo={funding.logo}
                  logoSize={funding.logoSize}
                  principalInvestigator={funding.principalInvestigator}
                  coPrincipalInvestigator={funding.coPrincipalInvestigator}
                  description={<div dangerouslySetInnerHTML={{ __html: funding.description.replace(/\n/g, '<br/>') }} />}
                />
                {index < pastFunding.length - 1 && (
                  <hr className="page-break" />
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}
