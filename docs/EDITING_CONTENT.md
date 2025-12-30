# Editing Content

This guide covers advanced tips for editing content using TinaCMS.

---

## The Visual Editor

TinaCMS provides a visual editor for rich text content like biographies, descriptions, and blog posts.

### Toolbar Options

| Icon | Function | Keyboard Shortcut |
|------|----------|-------------------|
| **B** | Bold | Ctrl+B / Cmd+B |
| *I* | Italic | Ctrl+I / Cmd+I |
| U̲ | Underline | Ctrl+U / Cmd+U |
| 🔗 | Insert Link | Ctrl+K / Cmd+K |
| 📷 | Insert Image | - |
| • | Bullet List | - |
| 1. | Numbered List | - |
| " | Block Quote | - |
| H1-H3 | Headings | - |

### Formatting Text

#### Bold and Italic
1. Highlight the text
2. Click the formatting button or use keyboard shortcut
3. The text updates immediately

#### Creating Links

**External links:**
1. Highlight the text to link
2. Click the link icon (🔗)
3. Enter the full URL: `https://example.com`
4. Click "Add"

**Internal links:**
1. Highlight the text
2. Click the link icon
3. Use relative paths: `/contact` or `/news/post-name`
4. Click "Add"

**Removing a link:**
1. Click on the linked text
2. Click the link icon
3. Click "Remove"

---

## Gene Names and Scientific Notation

### Italicizing Gene Names

Gene names should be italicized (e.g., *CHD8*, *Chd8*).

**Method 1: Editor**
1. Type the gene name
2. Highlight it
3. Click the italic button

**Method 2: Direct Entry**
When the editor supports Markdown:
```
*CHD8* is associated with autism spectrum disorder.
```

### Superscript Notation

For genetic notation like Chd8⁺/⁻:

**In the editor:**
Type: `Chd8<sup>+/-</sup>`

The site will render this as: Chd8⁺/⁻

**Common notations:**
| What You Type | What It Shows |
|---------------|---------------|
| `Chd8<sup>+/-</sup>` | Chd8⁺/⁻ |
| `Chd8<sup>+/+</sup>` | Chd8⁺/⁺ |
| `Chd8<sup>-/-</sup>` | Chd8⁻/⁻ |
| `H3K4<sup>me3</sup>` | H3K4ᵐᵉ³ |

---

## Working with Images

### Uploading Images

1. Click on the image field
2. Click "Upload"
3. Select file from your computer
4. Wait for upload to complete
5. The image preview will appear

### Image Requirements

| Content Type | Recommended Size | Aspect Ratio |
|--------------|------------------|--------------|
| Profile photos | 400x400px | 1:1 (square) |
| News featured | 1200x700px | ~3:1.75 |
| Carousel images | 800x800px | 1:1 (square) |
| Research figures | 800px width | Variable |
| Logos | 400px width | Variable |

### Image Best Practices

✅ **Before uploading:**
- Resize to recommended dimensions
- Compress to reduce file size
- Use descriptive file names

✅ **After uploading:**
- Always add alt text for accessibility
- Verify image displays correctly

### Supported Formats
- JPEG (.jpg, .jpeg) - Best for photos
- PNG (.png) - Best for logos, diagrams
- GIF (.gif) - For animations (research figures)
- WebP (.webp) - Modern format, smaller size

---

## Managing Different Content Types

### Team Members

**Adding a member:**
See [Adding Team Members](ADDING_TEAM_MEMBERS.md)

**Reordering members:**
1. Open each member
2. Adjust the "Display Order" number
3. Save each one
4. Lower numbers appear first

**Removing a member:**
1. Consider moving to Alumni first
2. Or delete if no longer relevant

### Research Projects

**Structure:**
- Each project has a heading (research question)
- Description with rich text
- A main figure with caption
- Layout choice (image left or right)

**Writing research descriptions:**
- Start with the research question
- Explain the approach briefly
- Describe expected outcomes
- Keep technical terms accessible

### Funding Sources

**Required fields:**
- Project title
- Program name
- Funding organization
- PI name
- Description
- Status (Active/Past)

**Logo sizes:**
- Small: For inline logos
- Medium: Default size
- Large: For prominent display

---

## Site Settings

Access via Admin → Site Settings

### Lab Information
- **Lab Name:** Displayed in header and footer
- **Tagline:** Appears on homepage banner
- **Mission Statement:** Homepage section content

### Contact Information
- **Email:** Contact email for the lab
- **Form Endpoint:** FormSubmit.co endpoint for contact form

### Banner Images
Each page can have its own banner image:
- Homepage banner
- Team page banner
- Research page banner
- etc.

### Analytics
- **Google Analytics ID:** Format: G-XXXXXXXXXX
- Used for tracking website traffic

---

## Drafts and Publishing

### Creating Drafts

To save work without publishing:
1. Create or edit content
2. Leave "Published" unchecked
3. Save

The content will only be visible in the admin panel.

### Publishing Content

When ready to go live:
1. Open the draft
2. Check "Published"
3. Save

### Scheduling Posts

TinaCMS doesn't have built-in scheduling, but you can:
1. Create the post as a draft
2. Set the publication date to the future date
3. Publish when that date arrives

---

## Version History

TinaCMS saves content to Git, which means:
- Every save creates a version
- You can view history on GitHub
- Changes can be reverted if needed

### Viewing History

1. Go to your GitHub repository
2. Navigate to the content file
3. Click "History" to see changes

### Reverting Changes

Contact your webmaster to revert to a previous version.

---

## Collaboration Tips

### Multiple Editors

When multiple people edit the site:
- Communicate about who's editing what
- Avoid editing the same item simultaneously
- Save frequently

### Review Process

For important changes:
1. Make the edit
2. Save as draft (if possible)
3. Ask a colleague to review
4. Publish when approved

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl/Cmd + S | Save |
| Ctrl/Cmd + B | Bold |
| Ctrl/Cmd + I | Italic |
| Ctrl/Cmd + K | Insert link |
| Ctrl/Cmd + Z | Undo |
| Ctrl/Cmd + Shift + Z | Redo |

---

## Troubleshooting

### Content not saving?
- Check internet connection
- Try refreshing the page
- Log out and log back in

### Formatting issues?
- Clear the formatting and reapply
- Try a different browser
- Contact webmaster for complex issues

### Images not displaying?
- Check the file format
- Verify the upload completed
- Try re-uploading

---

*Need more help? See [Troubleshooting](TROUBLESHOOTING.md) or contact your webmaster.*
