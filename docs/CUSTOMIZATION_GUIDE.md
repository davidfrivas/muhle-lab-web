# Customization Guide

How to customize this template for your own research lab.

---

## Overview

This guide is for labs who want to use this website template. It covers:
- Initial setup
- Branding customization
- Content structure changes
- Advanced modifications

---

## Prerequisites

To customize this template, you'll need:
- A GitHub account
- Basic familiarity with Git (or GitHub's web interface)
- 30-60 minutes for initial setup

**Optional (for advanced customization):**
- Node.js installed locally
- Code editor (VS Code recommended)
- Basic knowledge of React/TypeScript

---

## Initial Setup

### Step 1: Create Your Repository

**Option A: Use as Template (Recommended)**
1. Go to the original repository on GitHub
2. Click **"Use this template"** button
3. Name your repository (e.g., `smith-lab-website`)
4. Choose public or private
5. Click **"Create repository from template"**

**Option B: Fork the Repository**
1. Click **"Fork"** on the original repository
2. This creates a copy in your GitHub account

### Step 2: Set Up TinaCloud

1. Go to [app.tina.io](https://app.tina.io)
2. Sign in with GitHub
3. Click **"Add a Project"**
4. Select your new repository
5. Copy the **Client ID** and **Token**

### Step 3: Configure GitHub Secrets

1. Go to your repository on GitHub
2. Settings → Secrets and variables → Actions
3. Click **"New repository secret"**
4. Add these secrets:

| Name | Value |
|------|-------|
| `TINA_CLIENT_ID` | (paste your Client ID) |
| `TINA_TOKEN` | (paste your Token) |

### Step 4: Enable GitHub Pages

1. Go to Settings → Pages
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. Save

### Step 5: Update the CNAME

Edit the `CNAME` file:
```
yourlabname.org
```
Or delete it to use `username.github.io/repo-name`

---

## Branding Customization

### Lab Name and Logo

1. Go to Admin → Site Settings
2. Update **Lab Information**:
   - Lab Name: "Smith Lab"
   - Tagline: "Computational Neuroscience"
   - Mission Statement: Your lab's mission

The header shows: **Smith** Lab (bold first word)

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  // Your brand colors
  'lab-dark': '#1E1926',      // Dark background (footer, nav)
  'lab-purple': '#9A89B4',    // Accent color (hover states)
  'lab-link': '#0000FF',      // Link color
  'lab-link-hover': '#2C6676', // Link hover color
  'lab-date': '#389CB7',      // Date/tag color
}
```

**Finding your colors:**
- Use your institution's brand colors
- Or generate a palette at [coolors.co](https://coolors.co)

### Banner Images

1. Upload new banner images to `public/images/`
2. Go to Admin → Site Settings → Banner Images
3. Select your images for each page

**Recommended sizes:**
- Banners: 2000x800px minimum
- Use images that work with dark overlay

---

## Content Structure

### Team Members

The default roles are:
- Principal Investigator
- Postdoctoral Researcher
- Research Assistant
- Graduate Researcher
- Undergraduate Researcher
- Lab Manager
- Visiting Scientist

**To change roles:**
Edit `tina/config.ts`, find the team collection:

```typescript
{
  type: 'string',
  name: 'role',
  options: [
    'Principal Investigator',
    'Associate Professor',  // Add your own
    'Assistant Professor',
    // ... more options
  ],
}
```

### Adding New Content Types

To add a new collection (e.g., "Publications"):

1. Edit `tina/config.ts`
2. Add a new collection:

```typescript
{
  name: 'publications',
  label: 'Publications',
  path: 'content/publications',
  format: 'mdx',
  fields: [
    { type: 'string', name: 'title', label: 'Title', required: true },
    { type: 'string', name: 'authors', label: 'Authors' },
    { type: 'string', name: 'journal', label: 'Journal' },
    { type: 'datetime', name: 'date', label: 'Publication Date' },
    { type: 'string', name: 'doi', label: 'DOI' },
    { type: 'string', name: 'pubmedId', label: 'PubMed ID' },
  ],
}
```

3. Create the page at `src/app/publications/page.tsx`
4. Add navigation link in `Header.tsx`

---

## Page Modifications

### Adding a New Page

1. Create folder: `src/app/your-page/`
2. Create file: `src/app/your-page/page.tsx`

```tsx
import { PageBanner } from '@/components/layout'

export const metadata = {
  title: 'Your Page | Lab Name',
}

export default function YourPage() {
  return (
    <>
      <PageBanner variant="default" title="Your Page" />
      <main className="wrapper page-content">
        <h1>Your Content Here</h1>
      </main>
    </>
  )
}
```

3. Add to navigation in `Header.tsx`

### Removing a Page

1. Delete the folder from `src/app/`
2. Remove the navigation link from `Header.tsx`
3. Remove the collection from `tina/config.ts` if applicable

### Changing Navigation

Edit `src/components/layout/Header.tsx`:

```tsx
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team', dropdown: [
    { label: 'Members', href: '/team' },
    { label: 'Alumni', href: '/alumni' },
  ]},
  { label: 'Research', href: '/research' },
  // Add or remove items here
]
```

---

## Contact Form Setup

### Using FormSubmit.co (Default)

1. Go to [formsubmit.co](https://formsubmit.co)
2. Enter your email address
3. Copy the endpoint URL
4. Update Admin → Site Settings → Contact → Form Endpoint

### Alternative: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form endpoint in settings

---

## Analytics Setup

### Google Analytics

1. Create a property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Update Admin → Site Settings → Analytics → Google Analytics ID

---

## Domain Setup

### Using a Custom Domain

1. Buy a domain (Namecheap, Google Domains, etc.)
2. Update the `CNAME` file in the repository:
   ```
   yourlabname.org
   ```
3. Configure DNS:
   - Add a CNAME record pointing to `username.github.io`
   - Or A records pointing to GitHub's IPs

### DNS Configuration

| Type | Host | Value |
|------|------|-------|
| CNAME | www | username.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

---

## Local Development

For advanced customization, run the site locally:

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

```bash
# Clone your repository
git clone https://github.com/yourusername/your-lab-website
cd your-lab-website

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your TinaCloud credentials

# Start development server
npm run dev
```

Open http://localhost:3000

### Making Changes

1. Edit files in your code editor
2. Changes appear instantly (hot reload)
3. Test on the admin at http://localhost:3000/admin
4. Commit and push when ready

---

## Deployment

### Automatic Deployment

Every push to `main` triggers:
1. GitHub Actions workflow
2. Build process
3. Deployment to GitHub Pages

### Manual Deployment

If needed, trigger manually:
1. Go to Actions tab on GitHub
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

---

## Troubleshooting

### Build fails after customization

**Check:**
1. No syntax errors in TypeScript files
2. All required fields have values
3. Image paths are correct

**View logs:**
1. Go to Actions tab
2. Click the failed workflow
3. Expand the failed step

### Styles not applying

1. Check Tailwind class names are correct
2. Rebuild after changing `tailwind.config.js`
3. Clear browser cache

### Content not loading

1. Check TinaCloud connection
2. Verify environment variables
3. Check content file format

---

## Getting Help

### Documentation

- [TinaCMS Docs](https://tina.io/docs/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Support

- Open an issue on the template repository
- Join TinaCMS Discord
- Check Stack Overflow

---

## Checklist

Before launching your lab website:

- [ ] Updated lab name and info
- [ ] Changed brand colors
- [ ] Added team members
- [ ] Added research content
- [ ] Updated contact information
- [ ] Configured analytics
- [ ] Set up custom domain
- [ ] Tested on mobile
- [ ] Reviewed all pages

---

*Good luck with your lab website!*
