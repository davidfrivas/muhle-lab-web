import { defineConfig } from 'tinacms'

// TinaCMS Configuration
// This file defines how TinaCMS connects to your content
// and what collections are available for editing

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true'

export default defineConfig({
  // Branch to use for content (defaults to main)
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main',

  // TinaCloud credentials (get these from app.tina.io)
  // These are only required for production builds
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  // Local mode for development and testing
  ...(isLocal ? { contentApiUrlOverride: '/api/tina/gql' } : {}),

  // Build configuration
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  // Media configuration - where uploaded images go
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  // Content schema - defines all editable content types
  schema: {
    collections: [
      // ===== TEAM MEMBERS =====
      {
        name: 'team',
        label: 'Team Members',
        path: 'content/team',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return values?.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'new-member'
            },
          },
        },
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Full Name',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'credentials',
            label: 'Credentials',
            description: 'e.g., "M.D., Ph.D." or "B.A."',
          },
          {
            type: 'string',
            name: 'role',
            label: 'Role/Position',
            required: true,
            options: [
              'Principal Investigator',
              'Postdoctoral Researcher',
              'Research Assistant',
              'Graduate Researcher',
              'Undergraduate Researcher',
              'Lab Manager',
              'Visiting Scientist',
              'Other',
            ],
          },
          {
            type: 'image',
            name: 'image',
            label: 'Profile Photo',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'bio',
            label: 'Biography',
            required: true,
            isBody: true,
          },
          {
            type: 'object',
            name: 'socialLinks',
            label: 'Social Media Links',
            fields: [
              { type: 'string', name: 'linkedin', label: 'LinkedIn URL' },
              { type: 'string', name: 'github', label: 'GitHub URL' },
              { type: 'string', name: 'twitter', label: 'Twitter/X URL' },
              { type: 'string', name: 'orcid', label: 'ORCID URL' },
              { type: 'string', name: 'googleScholar', label: 'Google Scholar URL' },
              { type: 'string', name: 'email', label: 'Email Address' },
            ],
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
            description: 'Lower numbers appear first. PI should be 1.',
            required: true,
          },
        ],
      },

      // ===== ALUMNI =====
      {
        name: 'alumni',
        label: 'Alumni',
        path: 'content/alumni',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return values?.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'new-alumni'
            },
          },
        },
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Full Name',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'role',
            label: 'Role in Lab',
            required: true,
          },
          {
            type: 'string',
            name: 'yearsActive',
            label: 'Years in Lab',
            required: true,
            description: 'e.g., "2020-2023"',
          },
          {
            type: 'string',
            name: 'affiliation',
            label: 'Affiliation During Time in Lab',
            description: 'e.g., "Barnard College" or "Columbia University"',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Profile Photo (optional)',
          },
          {
            type: 'rich-text',
            name: 'bio',
            label: 'Biography',
            isBody: true,
          },
          {
            type: 'string',
            name: 'currentPosition',
            label: 'Current Position',
            description: 'e.g., "PhD student at MIT"',
          },
          {
            type: 'object',
            name: 'socialLinks',
            label: 'Social Media Links',
            fields: [
              { type: 'string', name: 'linkedin', label: 'LinkedIn URL' },
              { type: 'string', name: 'github', label: 'GitHub URL' },
            ],
          },
          {
            type: 'boolean',
            name: 'isFeatured',
            label: 'Featured Alumni',
            description: 'Featured alumni display with full profile and photo',
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
          },
        ],
      },

      // ===== NEWS POSTS =====
      {
        name: 'news',
        label: 'News Posts',
        path: 'content/news',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              const date = values?.date ? new Date(values.date).toISOString().split('T')[0] : ''
              const title = values?.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'new-post'
              return date ? `${date}-${title}` : title
            },
          },
          router: ({ document }) => `/news/${document._sys.filename}`,
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publication Date',
            required: true,
            ui: {
              dateFormat: 'D MMMM YYYY',
            },
          },
          {
            type: 'image',
            name: 'featuredImage',
            label: 'Featured Image',
            required: true,
          },
          {
            type: 'string',
            name: 'featuredImageAlt',
            label: 'Featured Image Description',
            required: true,
            description: 'Describe the image for accessibility',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Short Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            required: true,
            isBody: true,
          },
          {
            type: 'object',
            name: 'carousel',
            label: 'Image Carousel',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.alt || 'Carousel Image',
              }),
            },
            fields: [
              {
                type: 'image',
                name: 'src',
                label: 'Image',
                required: true,
              },
              {
                type: 'string',
                name: 'alt',
                label: 'Image Description',
                required: true,
              },
            ],
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
            description: 'Unpublished posts are only visible in the editor',
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured on Homepage',
            description: 'Show this post in the Latest News section',
          },
        ],
      },

      // ===== RESEARCH PROJECTS =====
      {
        name: 'research',
        label: 'Research Projects',
        path: 'content/research',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Project Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'heading',
            label: 'Research Question',
            required: true,
            description: 'The main question this project addresses',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'rich-text',
            name: 'description',
            label: 'Description',
            required: true,
            isBody: true,
          },
          {
            type: 'object',
            name: 'figure',
            label: 'Main Figure',
            fields: [
              { type: 'image', name: 'src', label: 'Image', required: true },
              { type: 'string', name: 'alt', label: 'Alt Text', required: true },
              { type: 'string', name: 'caption', label: 'Caption' },
              { type: 'boolean', name: 'isAnimated', label: 'Is GIF/Animated' },
            ],
          },
          {
            type: 'string',
            name: 'layout',
            label: 'Layout Style',
            required: true,
            options: [
              { value: 'image-left', label: 'Image on Left' },
              { value: 'image-right', label: 'Image on Right' },
            ],
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
            required: true,
            description: 'Lower numbers appear first',
          },
          {
            type: 'boolean',
            name: 'isActive',
            label: 'Active Project',
            description: 'Inactive projects are hidden',
          },
        ],
      },

      // ===== FUNDING SOURCES =====
      {
        name: 'funding',
        label: 'Funding Sources',
        path: 'content/funding',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'projectTitle',
            label: 'Project Title',
            required: true,
            isTitle: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'programTitle',
            label: 'Program Title',
            required: true,
          },
          {
            type: 'string',
            name: 'fundingSource',
            label: 'Funding Organization',
            required: true,
          },
          {
            type: 'string',
            name: 'fundingSourceUrl',
            label: 'Funding Source Website',
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Organization Logo',
            required: true,
          },
          {
            type: 'string',
            name: 'logoSize',
            label: 'Logo Size',
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
          {
            type: 'string',
            name: 'principalInvestigator',
            label: 'Principal Investigator',
            required: true,
          },
          {
            type: 'string',
            name: 'coPrincipalInvestigator',
            label: 'Co-Principal Investigator',
          },
          {
            type: 'rich-text',
            name: 'description',
            label: 'Project Description',
            required: true,
            isBody: true,
          },
          {
            type: 'string',
            name: 'status',
            label: 'Funding Status',
            required: true,
            options: [
              { value: 'active', label: 'Active' },
              { value: 'past', label: 'Past' },
              { value: 'pending', label: 'Pending' },
            ],
          },
          {
            type: 'number',
            name: 'order',
            label: 'Display Order',
            required: true,
          },
        ],
      },

      // ===== GLOBAL SETTINGS =====
      {
        name: 'global',
        label: 'Site Settings',
        path: 'content/global',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            type: 'object',
            name: 'labInfo',
            label: 'Lab Information',
            fields: [
              { type: 'string', name: 'name', label: 'Lab Name', required: true },
              { type: 'string', name: 'tagline', label: 'Tagline' },
              { type: 'string', name: 'missionHeading', label: 'Mission Heading' },
              {
                type: 'string',
                name: 'missionStatement',
                label: 'Mission Statement',
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            type: 'object',
            name: 'affiliation',
            label: 'Institutional Affiliation',
            fields: [
              { type: 'string', name: 'institution', label: 'Primary Institution' },
              { type: 'string', name: 'department', label: 'Department' },
            ],
          },
          {
            type: 'object',
            name: 'address',
            label: 'Physical Address',
            fields: [
              { type: 'string', name: 'building', label: 'Building Name' },
              { type: 'string', name: 'room', label: 'Room Number' },
              { type: 'string', name: 'street', label: 'Street Address' },
              { type: 'string', name: 'city', label: 'City' },
              { type: 'string', name: 'state', label: 'State' },
              { type: 'string', name: 'zip', label: 'ZIP Code' },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact Information',
            fields: [
              { type: 'string', name: 'email', label: 'Contact Email' },
              { type: 'string', name: 'formEndpoint', label: 'Contact Form Endpoint' },
            ],
          },
          {
            type: 'object',
            name: 'map',
            label: 'Google Maps',
            fields: [
              {
                type: 'string',
                name: 'embedUrl',
                label: 'Google Maps Embed URL',
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            type: 'object',
            name: 'analytics',
            label: 'Analytics',
            fields: [
              { type: 'string', name: 'googleAnalyticsId', label: 'Google Analytics ID' },
            ],
          },
          {
            type: 'object',
            name: 'images',
            label: 'Banner Images',
            fields: [
              { type: 'image', name: 'homeBanner', label: 'Homepage Banner Image' },
              { type: 'image', name: 'teamBanner', label: 'Team Page Banner' },
              { type: 'image', name: 'alumniBanner', label: 'Alumni Page Banner' },
              { type: 'image', name: 'researchBanner', label: 'Research Page Banner' },
              { type: 'image', name: 'newsBanner', label: 'News Page Banner' },
              { type: 'image', name: 'fundingBanner', label: 'Funding Page Banner' },
              { type: 'image', name: 'contactBanner', label: 'Contact Page Banner' },
              { type: 'image', name: 'missionBackground', label: 'Mission Statement Background' },
            ],
          },
        ],
      },

      // ===== RESEARCH OVERVIEW =====
      {
        name: 'researchOverview',
        label: 'Research Overview',
        path: 'content/research-overview',
        format: 'mdx',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Section Title',
            required: true,
            isTitle: true,
          },
          {
            type: 'rich-text',
            name: 'content',
            label: 'Overview Content',
            required: true,
            isBody: true,
          },
          {
            type: 'object',
            name: 'figures',
            label: 'Overview Figures',
            list: true,
            fields: [
              { type: 'image', name: 'src', label: 'Image', required: true },
              { type: 'string', name: 'alt', label: 'Alt Text', required: true },
              { type: 'string', name: 'caption', label: 'Caption' },
              {
                type: 'string',
                name: 'position',
                label: 'Position',
                options: ['inline', 'left', 'right', 'full-width'],
              },
            ],
          },
        ],
      },
    ],
  },
})
