# Muhle Lab Website

Website for the Muhle Lab at the New York State Psychiatric Institute | Columbia University.

**Live Site:** [muhlelab.org](https://muhlelab.org)

## Quick Start

### For Content Editors (Local)

```bash
npm install
npm run dev
```

Then go to [http://localhost:3000/admin](http://localhost:3000/admin) to edit content.

### For Developers

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the site.

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
