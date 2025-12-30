# Muhle Lab Website

A modern, content-managed website for the Muhle Lab at the New York State Psychiatric Institute | Columbia University. Built with Next.js and TinaCMS for easy visual editing by non-technical users.

🌐 **Live Site:** [muhlelab.org](https://muhlelab.org)

---

## ✨ Features

- **Visual Content Editing** - Edit content directly through TinaCMS with live preview
- **No Coding Required** - Team members can update content without any technical knowledge
- **Automatic Deployment** - Changes are automatically published when saved
- **Mobile Responsive** - Looks great on all devices
- **Fast & Modern** - Built with Next.js 14 for optimal performance

---

## 📖 Quick Start for Content Editors

### Accessing the Editor

1. Go to **[muhlelab.org/admin](https://muhlelab.org/admin)**
2. Click **"Log in with GitHub"**
3. You'll be taken to the visual editor

### Common Tasks

| Task | Where to Go |
|------|-------------|
| Add a team member | Admin → Team Members → Create New |
| Post lab news | Admin → News Posts → Create New |
| Update research | Admin → Research Projects |
| Edit lab info | Admin → Site Settings |

### Detailed Guides

See the `docs/` folder for step-by-step guides:

- 📘 [Getting Started](docs/GETTING_STARTED.md) - First-time setup
- 👥 [Adding Team Members](docs/ADDING_TEAM_MEMBERS.md)
- 📰 [Publishing News](docs/PUBLISHING_NEWS.md)
- ✏️ [Editing Content](docs/EDITING_CONTENT.md)
- 🔧 [Troubleshooting](docs/TROUBLESHOOTING.md)

---

## 🏗️ For Developers

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** TinaCMS with TinaCloud
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages via GitHub Actions

### Local Development

```bash
# Clone the repository
git clone https://github.com/davidfrivas/muhle-lab-web.git
cd muhle-lab-web

# Install dependencies
npm install

# Create .env file with TinaCloud credentials
cp .env.example .env
# Edit .env with your TINA_CLIENT_ID and TINA_TOKEN

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the CMS.

### Project Structure

```
muhle-lab-web/
├── content/           # MDX and JSON content files
│   ├── team/          # Team member profiles
│   ├── alumni/        # Alumni profiles
│   ├── news/          # News posts
│   ├── research/      # Research projects
│   ├── funding/       # Funding sources
│   └── global/        # Site settings
├── public/
│   └── images/        # All media files
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   └── styles/        # Global CSS
├── tina/              # TinaCMS configuration
├── docs/              # Documentation
└── .github/workflows/ # GitHub Actions deployment
```

### Build Commands

```bash
npm run dev      # Development with TinaCMS
npm run build    # Production build
npm run export   # Static export for GitHub Pages
```

---

## 🧪 Using This as a Template

Want to use this template for your own lab? See the [Customization Guide](docs/CUSTOMIZATION_GUIDE.md).

### Quick Setup

1. Use this repository as a template on GitHub
2. Set up TinaCloud at [app.tina.io](https://app.tina.io)
3. Add GitHub secrets: `TINA_CLIENT_ID` and `TINA_TOKEN`
4. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
5. Update content through the admin panel

---

## 🔒 Security

- Content is stored in Git (version controlled)
- Authentication via GitHub OAuth
- Only repository collaborators can edit content

---

## 📞 Support

- **Lab Members:** Contact the webmaster or open an issue
- **Technical Issues:** [Open a GitHub issue](https://github.com/davidfrivas/muhle-lab-web/issues)
- **TinaCMS Help:** [TinaCMS Documentation](https://tina.io/docs/)

---

## 📄 License

This project is for the Muhle Lab at NYSPI/Columbia University.

