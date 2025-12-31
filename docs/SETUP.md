# TinaCMS Setup Guide

This guide will help you complete the TinaCMS setup for your lab website.

---

## Step 1: Create a TinaCloud Project

1. Go to [app.tina.io](https://app.tina.io) and sign in with GitHub
2. Click **"Create a new project"**
3. Select your repository (e.g., `muhle-lab-web`)
4. Copy your **Client ID** - you'll need this for the next steps

---

## Step 2: Local Development Setup

### Create Environment File

1. **Create a `.env.local` file** in the project root:
   ```bash
   touch .env.local
   ```

2. **Add your TinaCloud credentials:**
   ```env
   NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
   TINA_TOKEN=your-tina-token-here
   ```

   > **To get your TINA_TOKEN:**
   > - Go to your project in [app.tina.io](https://app.tina.io)
   > - Navigate to **Configuration** → **Tokens**
   > - Generate a new token

3. **Start the development server:**
   ```bash
   npm install
   npm run dev
   ```

4. **Access the admin panel:**
   - Open: `http://localhost:3000/admin`
   - Click **"Log in with GitHub"**
   - Authorize TinaCMS

---

## Step 3: Production Setup (GitHub Pages)

For production deployment, add secrets to your GitHub repository:

1. **Get your credentials from TinaCloud:**
   - Client ID: Found on your project overview page
   - Token: Generate in **Configuration** → **Tokens**

2. **Add GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Add these secrets:
     - `TINA_CLIENT_ID`: Your TinaCloud Client ID
     - `TINA_TOKEN`: Your TinaCloud Token

3. **Update Site URL in TinaCloud:**
   - In your TinaCloud dashboard, update the Site URL to your production URL
   - For GitHub Pages: `https://yourusername.github.io/repo-name`

---

## Step 4: Verify Setup

1. **Make a test edit:**
   - In the admin panel (`http://localhost:3000/admin`), navigate to any collection
   - Make a small change and click **"Save"**

2. **Verify the commit:**
   - Check your GitHub repository for a new commit from TinaCMS

---

## Troubleshooting

### Can't log in to admin panel?

- Check `.env.local` has correct `NEXT_PUBLIC_TINA_CLIENT_ID`
- Ensure Site URL in TinaCloud matches your development/production URL
- Clear browser cache or try incognito window
- Verify you're a collaborator on the repository

### "Client ID not found" error?

- Variable name must be `NEXT_PUBLIC_TINA_CLIENT_ID` (with NEXT_PUBLIC prefix)
- Restart dev server after changing `.env.local`

### Changes not saving?

- Check you're logged in (GitHub username visible in admin)
- Verify GitHub token has write permissions
- Check browser console for errors

### Development server won't start?

```bash
npm install
rm -rf .next
npm run dev
```

---

## Quick Start Checklist

- [ ] Create TinaCloud project and get Client ID
- [ ] Create `.env.local` with credentials
- [ ] Run `npm install && npm run dev`
- [ ] Visit `http://localhost:3000/admin` and log in
- [ ] Make a test edit to verify commits work
- [ ] Add GitHub secrets for production

---

## Documentation

See `docs/pdf/muhle-lab-cms-guide.pdf` for the complete user guide with screenshots.

---

## Resources

- **TinaCMS Documentation:** [https://tina.io/docs/](https://tina.io/docs/)
- **TinaCloud Dashboard:** [https://app.tina.io](https://app.tina.io)
