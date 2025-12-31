# Muhle Lab Website

Website for the Muhle Lab at the New York State Psychiatric Institute | Columbia University.

**Live Site:** [muhlelab.org](https://muhlelab.org)

## Quick Start

### Prerequisites

- Node.js 18 or later
- npm (comes with Node.js)

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

This starts:
- **Website:** http://localhost:3000
- **TinaCMS Admin:** http://localhost:3000/admin (visual editor for content)
- **TinaCMS Data Layer:** runs on port 9000 (internal, no need to access directly)

### Building for Production

```bash
# Build static site (no TinaCloud required)
npm run export

# Or with TinaCloud integration (requires TINA_CLIENT_ID and TINA_TOKEN)
npm run build
```

The static files are output to the `out/` directory.

### For Content Editors

1. Run `npm install` then `npm run dev`
2. Go to http://localhost:3000/admin
3. Edit content through the visual interface
4. Save changes (automatically commits to Git)

## Tech Stack

- Next.js 14
- TinaCMS
- Tailwind CSS
- GitHub Pages

---

## TinaCloud Setup (Cloud Editing)

To enable editing from anywhere (not just locally), set up TinaCloud:

### 1. Create TinaCloud Project

1. Go to [app.tina.io](https://app.tina.io)
2. Sign in with GitHub
3. Click "Create a new project" and select this repository
4. Copy your **Client ID** from the project overview

### 2. Generate API Token

1. In TinaCloud, go to **Configuration** → **Tokens**
2. Click "Generate Token"
3. Copy the token (you won't see it again)

### 3. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:
   - `TINA_CLIENT_ID`: Your Client ID from step 1
   - `TINA_TOKEN`: Your token from step 2

### 4. Update Site URL

1. In TinaCloud dashboard, update the **Site URL** to your production URL
2. For GitHub Pages: `https://yourusername.github.io/muhle-lab-web`

### 5. Access Cloud Editor

Once configured, edit content at: `https://yourusername.github.io/muhle-lab-web/admin`

---

## Documentation

See `docs/SETUP.md` for detailed setup instructions and `docs/pdf/` for the complete user guide.
