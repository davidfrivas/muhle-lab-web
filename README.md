# Muhle Lab Website Management Guide

**Quick Start:** Go to [prose.io](https://prose.io) → Login with GitHub → Select `muhle-lab-web`

---

## Table of Contents

1. [Quick Reference](#quick-reference)
2. [First-Time Setup](#first-time-setup)
3. [Managing News](#managing-news)
4. [Managing Team](#managing-team)
5. [Managing Alumni](#managing-alumni)
6. [Managing Funding](#managing-funding)
7. [JSON Syntax Rules](#json-syntax-rules)
8. [Troubleshooting](#troubleshooting)

---

## Quick Reference

### Add News Post (3 Steps)

**Step 1: Create HTML File**
- Navigate to: `pages` → `news`
- Copy template: `_TEMPLATE-news-post.html`
- Click "New File" → Paste template
- Edit: title, date, content, images
- Save as: `YYYY-post-name.html`

**Step 2: Update news.json**
- Navigate to: `data` → `news.json`
- Add new entry at TOP:
```json
{
  "title": "Post Title",
  "date": "DD Month YYYY",
  "image": "../images/photo.jpg",
  "url": "./news/YYYY-post-name",
  "alt": "Image description"
},
```

**Step 3: Upload Images**
- Navigate to: `images` folder
- Click image icon 📷 → Upload your photos

---

### Add Team Member

File: `data` → `team.json`
```json
{
  "name": "Name",
  "credentials": "Ph.D.",
  "title": "Position",
  "bio": "Bio text...",
  "image": "../images/photo.jpg",
  "alt": "description",
  "social": []
},
```

---

### Add Alumni

**Featured Alumni (with photo & bio)**
File: `data` → `alumni.json` → `featured` array
```json
{
  "name": "Alumni Name",
  "title": "Position (YYYY-YYYY)",
  "bio": "Full bio...",
  "image": "../images/photo.jpg",
  "alt": "description",
  "social": []
},
```

**Alumni List (short entry)**
File: `data` → `alumni.json` → `alumniList` array
```json
{
  "name": "Name",
  "years": "YYYY-YYYY",
  "position": "Title, Institution"
},
```

---

### Add Funding

File: `data` → `funding.json` → `currentFunding` array
```json
{
  "title": "Grant Title",
  "programTitle": "Program Name",
  "fundingSource": "Funder",
  "fundingSourceUrl": "https://...",
  "pi": "PI Name",
  "copi": "",
  "description": "Description...",
  "logo": "../images/logo.png",
  "logoAlt": "Logo alt text",
  "logoClass": ""
},
```

---

## JSON Syntax Rules

**Always follow these rules:**

1. Each entry needs a comma AFTER it (except the last one)
2. Always use double quotes `"` not single `'`
3. **Escape quotes in text with backslash**: `\"like this\"`
   - Example: `"title": "Dr. Muhle's \"CHD8\" Research"`
4. Don't delete brackets: `{`, `}`, `[`, `]`

**Common Image Paths:**
- From `/pages` folder → `../images/photo.jpg`
- From `/pages/news` folder → `../../images/photo.jpg`
- From root folder → `./images/photo.jpg`

---

## First-Time Setup

### Getting Access (One-time only)

1. **Get GitHub Access**
   - You need a GitHub account (free at github.com)
   - Ask the lab website administrator to add you as a collaborator to the `muhle-lab-web` repository

2. **Access Prose.io**
   - Go to: [https://prose.io](https://prose.io)
   - Click **"Authorize on GitHub"**
   - Log in with your GitHub credentials
   - Grant Prose.io permission to access your repositories

3. **Find the Repository**
   - After authorization, you'll see a list of repositories
   - Click on `muhle-lab-web`

---

## Managing News

### Adding a News Post (Detailed)

#### Step 1: Create the News Post HTML File

1. Go to [prose.io](https://prose.io) and select the `muhle-lab-web` repository
2. Navigate to `pages` → `news`
3. Find the file named `_TEMPLATE-news-post.html`
4. Click on it to open
5. Copy all the content (Ctrl+A, then Ctrl+C)
6. Go back to the `news` folder
7. Click the **"New File"** button (looks like a + icon)
8. Paste the template content
9. **Edit the following parts:**
   - **Line 6**: Replace `POST TITLE HERE` with your actual title
   - **Line 33**: Replace `DD Month YYYY` with the date (e.g., "15 January 2024")
   - **Line 36**: Replace `Your News Post Title Here` with your title
   - **Line 40-41**: Replace image path and description
   - **Lines 44+**: Add your content paragraphs

10. **Save the file:**
    - Click the save icon in the top right
    - Name your file: `YYYY-your-post-name.html` (e.g., `2024-spring-conference.html`)
    - Add a commit message like: "Added news post about spring conference"
    - Click **"Commit"**

#### Step 2: Add Entry to news.json

1. Navigate back to the repository root
2. Go to `data` folder → Open `news.json`
3. Add your new entry **AT THE TOP** of the `posts` array (right after the opening `[`)
4. Use this format:

```json
{
  "title": "Your Post Title",
  "date": "DD Month YYYY",
  "image": "../images/your-image.jpg",
  "url": "./news/YYYY-your-post-name",
  "alt": "Description of the image"
},
```

5. **IMPORTANT**: Make sure to add a comma after the `}` (unless it's the last entry)
6. Save with a commit message: "Added YYYY-post-name to news listing"

#### Step 3: Upload Images

1. Navigate to the `images` folder
2. Click the image upload icon (📷)
3. Select and upload your images
4. Images should be:
   - JPG format for photos
   - Under 1MB if possible
   - Named with lowercase and hyphens: `lab-event-2024.jpg`

#### Optional: Adding an Image Carousel

If your post has multiple images, you can use the Swiper carousel:

1. In your HTML file, uncomment the carousel section (around line 50)
2. Add images like this:

```html
<div class="swiper-slide">
    <img src="../../images/image1.jpg" alt="Description">
</div>
<div class="swiper-slide">
    <img src="../../images/image2.jpg" alt="Description">
</div>
```

3. Keep the pagination and navigation buttons

---

## Managing Team

### Adding a New Team Member

1. Go to [prose.io](https://prose.io) → `muhle-lab-web` → `data`
2. Open `team.json`
3. Add a new entry to the `members` array:

```json
{
  "name": "Team Member Name",
  "credentials": "Ph.D., M.D.",
  "title": "Position Title",
  "bio": "Full biography paragraph here. Include research interests, education, and hobbies.",
  "image": "../images/member-photo.jpg",
  "alt": "picture of Team Member Name",
  "social": [
    {
      "type": "linkedin",
      "url": "https://www.linkedin.com/in/username/"
    },
    {
      "type": "github",
      "url": "https://github.com/username"
    }
  ]
}
```

4. **Important**: Add a comma after the previous entry
5. If no social links, use empty array: `"social": []`
6. Upload the member's photo to `/images/` folder
7. Save with commit message: "Added [Name] to team"

### Removing a Team Member

1. Open `team.json`
2. Find and delete the entire entry for that person (from `{` to `}`)
3. Check that commas are correct (last entry shouldn't have a comma)
4. Save with commit message: "Removed [Name] from team"

---

## Managing Alumni

### Adding a Featured Alumni Member

Featured alumni appear at the top of the alumni page with photos and full bios.

1. Go to [prose.io](https://prose.io) → `muhle-lab-web` → `data`
2. Open `alumni.json`
3. Find the `"featured"` section at the top
4. Add a new entry using this template:

```json
{
  "name": "Alumni Name",
  "title": "Position Title (YYYY-YYYY)",
  "bio": "Full biography text here...",
  "image": "../images/alumni-photo.jpg",
  "alt": "picture of Alumni Name",
  "social": [
    {
      "type": "linkedin",
      "url": "https://www.linkedin.com/in/username/"
    }
  ]
}
```

5. **Important**: Add a comma after the previous entry
6. For social links:
   - Use `"type": "linkedin"` for LinkedIn
   - Use `"type": "github"` for GitHub
   - Leave as empty array `[]` if no social links
7. Save with commit message: "Added [Name] to featured alumni"

### Adding to Alumni List

The alumni list is for shorter entries without photos.

1. Open `alumni.json` in Prose.io
2. Find the `"alumniList"` section (near the bottom)
3. Add a new entry:

```json
{
  "name": "Alumni Name",
  "years": "YYYY-YYYY",
  "position": "Position Title, Institution"
}
```

4. **Important**: Add a comma after the previous entry
5. Save with commit message: "Added [Name] to alumni list"

### Moving Current Team Member to Alumni

When a team member leaves:

1. **Add them to alumni.json** (featured or list section)
2. **Remove them from team.json**:
   - Open `data/team.json`
   - Find and delete their entire entry
   - Make sure JSON syntax is still valid (check commas)
3. Save both files
4. Their photos will still work if already in `/images/`

---

## Managing Funding

### Adding a New Funding Source

1. Go to [prose.io](https://prose.io) → `data` → `funding.json`
2. Add to the `currentFunding` array:

```json
{
  "title": "Full Grant Title",
  "programTitle": "Program or Award Name",
  "fundingSource": "Funding Organization",
  "fundingSourceUrl": "https://funder-website.org",
  "pi": "Principal Investigator Name",
  "copi": "Co-PI Name (leave empty if none)",
  "description": "Brief description of the research project and goals.",
  "logo": "../images/funder-logo.png",
  "logoAlt": "Funder organization logo",
  "logoClass": "optional-css-class"
}
```

3. Upload the funder's logo to `/images/`
4. Save with commit message: "Added [Grant Name] funding"

### Moving Funding to Past Funding

When a grant ends:

1. Open `funding.json`
2. Find the grant in `currentFunding` array
3. Cut the entire entry (copy and delete it)
4. Paste it into the `pastFunding` array
5. Make sure commas are correct
6. Save with commit message: "Moved [Grant Name] to past funding"

---

## Troubleshooting

### Common Issues and Solutions

**Problem**: Website shows "Unable to load news/team/funding"  
**Solution**: Check your JSON file for syntax errors (missing commas, brackets, or quotes). Use [JSONLint.com](https://jsonlint.com) to validate.

**Problem**: News post doesn't appear on news page  
**Solution**: Make sure you added it to news.json AND created the HTML file.

**Problem**: Images don't show up  
**Solution**: Double-check the image path:
- From `/pages/` → `../images/filename.jpg`
- From `/pages/news/` → `../../images/filename.jpg`
- Make sure the image was uploaded to `/images/` folder

**Problem**: Changes don't appear immediately  
**Solution**: It can take 1-2 minutes for GitHub Pages to rebuild. Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Problem**: JSON file won't save or shows syntax error with quotation marks in text  
**Solution**: If your text contains quotation marks (like "Dr. Muhle's research on CHD8"), you must escape them with a backslash:
- ❌ Wrong: `"bio": "Dr. Muhle's research on "CHD8" gene"`
- ✅ Correct: `"bio": "Dr. Muhle's research on \"CHD8\" gene"`
- ✅ Or use single quotes: `"bio": "Dr. Muhle's research on 'CHD8' gene"`

**Problem**: Accidentally deleted something important  
**Solution**: 
1. Go to GitHub repository
2. Click on the file
3. Click "History"
4. Find a previous version
5. Copy the old content back

### Validating JSON

If you're getting errors, validate your JSON:
1. Copy the entire contents of your JSON file
2. Go to [JSONLint.com](https://jsonlint.com)
3. Paste and click "Validate JSON"
4. It will show you exactly where the error is

---

## File Locations Reference

- **News posts**: `/pages/news/`
- **News data**: `/data/news.json`
- **Team data**: `/data/team.json`
- **Alumni data**: `/data/alumni.json`
- **Funding data**: `/data/funding.json`
- **Images**: `/images/`
- **News template**: `/pages/news/_TEMPLATE-news-post.html`

---

## Checklists

### Adding News Post
- [ ] Create HTML file from template
- [ ] Edit title, date, and content
- [ ] Upload images to /images folder
- [ ] Add entry to news.json (at the top)
- [ ] Save both files with commit messages
- [ ] Wait 2 minutes & check website

### Adding Team Member
- [ ] Upload photo to /images folder
- [ ] Add entry to team.json
- [ ] Include bio, title, and credentials
- [ ] Add social links if applicable
- [ ] Save with commit message
- [ ] Verify on website

### Moving Team Member to Alumni
- [ ] Upload photo if not already in /images
- [ ] Add entry to alumni.json (featured or list)
- [ ] Remove entry from team.json
- [ ] Save both files
- [ ] Verify on alumni page

### Adding Funding
- [ ] Upload logo to /images folder
- [ ] Add entry to funding.json
- [ ] Fill in all required fields
- [ ] Save with commit message
- [ ] Verify on website

---

## Tips for Success

### Working with JSON Files

- **Always check commas**: Each entry needs a comma after it, EXCEPT the last one
- **Keep the structure**: Don't delete `{`, `}`, `[`, or `]` brackets
- **Use double quotes**: Always use `"` not `'` for text
- **Escape quotation marks in text**: If your text contains quotes (like "Dr. Muhle's research on 'CHD8'"), you must escape them with a backslash: `\"CHD8\"`
  - Example: `"title": "Research on \"CHD8\" Gene"`
- **Test the site**: After making changes, visit your website to make sure it loads correctly

### Image Guidelines

- **Format**: Use JPG for photos, PNG for logos
- **Size**: Optimize images to be under 1MB when possible
- **Names**: Use lowercase with hyphens: `lab-photo-2024.jpg`
- **Alt text**: Always provide descriptive alt text for accessibility

---

## Getting Help

If something breaks or looks wrong:
1. Check that your JSON has matching brackets and proper commas
2. Make sure all quotes are closed and escaped if needed
3. Verify image paths are correct
4. Use JSONLint.com to validate your JSON
5. Contact the website administrator for help

### Submitting a GitHub Issue

If you encounter a persistent problem or bug:

1. **Go to the GitHub repository**:
   - Visit: https://github.com/davidfrivas/muhle-lab-web
   - Click on the **"Issues"** tab

2. **Create a new issue**:
   - Click the green **"New Issue"** button
   - Give it a descriptive title (e.g., "News page not loading" or "Image not displaying on team page")

3. **Provide details**:
   - **What you were trying to do**: "I was adding a news post about..."
   - **What happened**: "The page shows an error message"
   - **What you expected**: "The news post should appear on the news page"
   - **Screenshots**: Attach screenshots if helpful (drag & drop images)
   - **Which file(s)**: Mention which files you edited (e.g., "news.json")

4. **Submit the issue**:
   - Click **"Submit new issue"**
   - The repository administrator will be notified automatically

**Example Issue:**
```
Title: Unable to save alumni.json with quotation marks

Description:
I was trying to add a new featured alumni member with the bio:
"Dr. Smith's research on "CHD8" mutations"

When I try to save the file in Prose.io, I get a syntax error.

File: data/alumni.json
```

---

## Contact & Resources

- **Website**: https://davidfrivas.github.io/muhle-lab-web/
- **Repository**: https://github.com/davidfrivas/muhle-lab-web
- **Prose.io**: https://prose.io
- **JSON Validator**: https://jsonlint.com

---

**Last Updated**: December 2025  
**Version**: 1.0 