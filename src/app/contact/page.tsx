import { PageBanner, ContactForm } from '@/components'
import { getGlobalSettings } from '@/lib/content'

export const metadata = {
  title: 'Contact',
  description: 'Contact the Muhle Lab at Columbia University.',
}

export default async function ContactPage() {
  const global = getGlobalSettings()

  const address = global?.address

  return (
    <>
      <PageBanner
        variant="contact"
        title="Contact"
        backgroundImage={global?.images?.contactBanner}
      />

      <div className="wrapper page-content py-12 md:py-16">
        {/* Contact Form Section - matching original layout */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          <div className="max-w-[400px]">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed">
              We are actively recruiting undergraduates, graduate students, and
              postdoctoral scientists! If you are interested in learning more
              about our research or getting involved yourself, please fill out
              the contact form.
            </p>
          </div>
          <div className="max-w-[600px] px-6 md:px-12">
            <ContactForm />
          </div>
        </div>

        {/* Location Section - matching original design with 350x350 dark box */}
        <div className="flex flex-wrap justify-center">
          {/* Dark styled box for location info - exact original: 350x350px */}
          <div
            className="bg-lab-dark text-white p-6 box-border"
            style={{ width: '350px', height: '350px' }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Our Location
            </h2>
            <div className="text-sm leading-relaxed space-y-0">
              <p>{global?.affiliation?.institution || 'New York State Psychiatric Institute'}</p>
              <p>{address?.building || 'Herbert Pardes Building'}, {address?.room || 'Room 4935'}</p>
              <p>{address?.street || '1051 Riverside Dr'}</p>
              <p>{address?.city || 'New York'}, {address?.state || 'NY'} {address?.zip || '10032'}</p>
            </div>
          </div>
          {/* Map - matching original min-width: 350px */}
          <div style={{ minWidth: '350px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.3321538283117!2d-73.94331492357791!3d40.84263002914556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f69bcc12d9ad%3A0x96c98a3ac1d964b8!2sHerbert%20Pardes%20Building!5e0!3m2!1sen!2sus!4v1703900000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lab Location Map"
            />
          </div>
        </div>
      </div>
    </>
  )
}
