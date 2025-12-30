# Getting Started with Your Lab Website

Welcome! This guide will help you get started with editing your lab website. No coding knowledge is required.

---

## What is TinaCMS?

TinaCMS is a visual content management system that lets you edit your website through a user-friendly interface, similar to editing a document in Word or Google Docs.

**Key benefits:**
- ✅ No coding required
- ✅ Visual editing - see changes as you make them
- ✅ Changes are saved to GitHub (version history)
- ✅ Free for small teams (2 users)

---

## Accessing the Admin Panel

### Step 1: Go to the Admin URL

Open your browser and go to:
```
https://muhlelab.org/admin
```

### Step 2: Log In with GitHub

1. Click the **"Login with GitHub"** button
2. If prompted, authorize TinaCMS to access the repository
3. You'll be redirected to the admin dashboard

> **Note:** You must be a collaborator on the GitHub repository to log in. Contact your lab's webmaster if you need access.

---

## The Admin Dashboard

Once logged in, you'll see the main dashboard with these sections:

### Collections (Left Sidebar)

| Collection | What It Contains |
|------------|------------------|
| **Team Members** | Current lab members with photos and bios |
| **Alumni** | Former lab members |
| **News Posts** | Lab news, events, announcements |
| **Research Projects** | Research aims and descriptions |
| **Funding Sources** | Grants and funding information |
| **Site Settings** | Lab name, address, contact info |

### Main Content Area

When you select a collection, you'll see:
- A list of existing items
- A "Create New" button to add new content

---

## Making Your First Edit

Let's walk through editing an existing team member:

### Step 1: Select the Collection
Click **"Team Members"** in the left sidebar.

### Step 2: Choose an Item
Click on a team member's name to open their profile.

### Step 3: Make Changes
You'll see a form with fields like:
- **Name** - Edit the full name
- **Credentials** - Edit degrees (M.D., Ph.D., etc.)
- **Role** - Select from dropdown
- **Profile Photo** - Click to upload a new image
- **Biography** - Rich text editor for the bio

### Step 4: Save Your Changes
Click the **"Save"** button in the top right corner.

### Step 5: Wait for Deployment
After saving:
1. TinaCMS commits your changes to GitHub
2. GitHub Actions automatically rebuilds the site
3. This takes about 2-3 minutes
4. Refresh the live site to see your changes

---

## Understanding the Editor

### Rich Text Editor

The biography and description fields use a rich text editor with these formatting options:

| Button | What It Does |
|--------|--------------|
| **B** | Bold text |
| *I* | Italic text (use for gene names like *CHD8*) |
| Link icon | Add a hyperlink |
| Image icon | Insert an image |
| List icons | Bulleted or numbered lists |

### Image Uploads

When uploading images:
1. Click the image field
2. Click "Upload"
3. Select an image from your computer
4. The image is stored in the `/public/uploads/` folder

**Image recommendations:**
- Profile photos: 400x400px minimum, square aspect ratio
- News images: 1200x700px minimum, 16:9 aspect ratio
- File formats: JPEG or PNG
- Maximum size: 5MB

---

## Content Types Overview

### Team Members
Each team member has:
- Name and credentials
- Role (PI, Research Assistant, etc.)
- Profile photo
- Biography
- Social links (LinkedIn, GitHub)
- Display order

### News Posts
Each news post has:
- Title
- Publication date
- Featured image
- Content (supports rich text)
- Optional image carousel
- Published/Featured toggles

### Research Projects
Each project has:
- Title and research question
- Description
- Figure with caption
- Layout style (image left or right)
- Display order

### Funding Sources
Each funding source has:
- Project title
- Program name
- Organization logo
- PI information
- Description
- Status (Active/Past)

---

## Tips for Success

### Before You Start
1. ✅ Have your content ready (text, images)
2. ✅ Optimize images before uploading
3. ✅ Know which section you're editing

### While Editing
1. ✅ Save frequently (use the Save button)
2. ✅ Use the preview to check your work
3. ✅ Don't close the browser tab while saving

### After Editing
1. ✅ Wait 2-3 minutes for the site to rebuild
2. ✅ Refresh the live site to see changes
3. ✅ Check on both desktop and mobile

---

## Getting Help

### Common Issues

**Can't log in?**
- Make sure you're a GitHub collaborator
- Try clearing browser cache
- Use a different browser

**Changes not appearing?**
- Wait 2-3 minutes for deployment
- Check GitHub Actions for build status
- Clear browser cache and refresh

**Image not uploading?**
- Check file size (max 5MB)
- Use JPEG or PNG format
- Try a different browser

### Contact

For help with the website:
- Check the [Troubleshooting Guide](TROUBLESHOOTING.md)
- Ask your lab's webmaster
- Open an issue on GitHub

---

## Next Steps

Now that you're familiar with the basics:

1. **[Adding Team Members](ADDING_TEAM_MEMBERS.md)** - Add new lab members
2. **[Publishing News](PUBLISHING_NEWS.md)** - Share lab updates
3. **[Editing Content](EDITING_CONTENT.md)** - Advanced editing tips

---

*Welcome to your new website! Happy editing!*
