import { client } from '@/tina/__generated__/client'
import { PageBanner, ContactForm } from '@/components'

export const metadata = {
  title: 'Contact',
  description: 'Contact the Muhle Lab at Columbia University.',
}

export default async function ContactPage() {
  // Fetch global settings
  const globalResponse = await client.queries.global({
    relativePath: 'settings.json',
  })
  const global = globalResponse.data.global

  const address = global?.address
  const mapEmbedUrl = global?.map?.embedUrl

  return (
    <>
      <PageBanner
        variant="contact"
        title="Contact"
        backgroundImage={global?.images?.contactBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {/* Contact Form Section */}
        <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="contact-text">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              We are actively recruiting undergraduates, graduate students, and
              postdoctoral scientists! If you are interested in learning more
              about our research or getting involved yourself, please fill out
              the contact form.
            </p>
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>

        <hr className="page-break" />

        {/* Location Section */}
        <div className="location grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="location-text">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Location
            </h2>
            <div className="text-base leading-relaxed">
              <p>
                {global?.affiliation?.institution && (
                  <>
                    {global.affiliation.institution}
                    <br />
                  </>
                )}
                {address?.building && (
                  <>
                    {address.building}
                    {address.room && `, ${address.room}`}
                    <br />
                  </>
                )}
                {address?.street && (
                  <>
                    {address.street}
                    <br />
                  </>
                )}
                {address?.city && address?.state && address?.zip && (
                  <>
                    {address.city}, {address.state} {address.zip}
                  </>
                )}
              </p>
            </div>
          </div>
          <div id="map" className="w-full">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lab Location Map"
              />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12073.328615313247!2d-73.95331023276697!3d40.842630737551595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f69bcc12d9ad%3A0x96c98a3ac1d964b8!2sHerbert%20Pardes%20Building%2C%201051%20Riverside%20Dr%2C%20New%20York%2C%20NY%2010032!5e0!3m2!1sen!2sus!4v1658889628889!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lab Location Map"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
