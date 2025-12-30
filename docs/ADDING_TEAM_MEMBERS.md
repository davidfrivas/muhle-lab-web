# Adding Team Members

This guide walks you through adding a new member to your lab's team page.

---

## Before You Begin

Have the following ready:
- [ ] Full name and credentials
- [ ] Role/position
- [ ] Profile photo (square, at least 400x400px)
- [ ] Brief biography (1-2 paragraphs)
- [ ] Social media links (optional)

---

## Step-by-Step Guide

### Step 1: Open the Admin Panel

1. Go to `https://muhlelab.org/admin`
2. Log in with GitHub

### Step 2: Navigate to Team Members

1. In the left sidebar, click **"Team Members"**
2. You'll see a list of current team members

### Step 3: Create a New Member

1. Click the **"Create New"** button (top right)
2. A blank form will appear

### Step 4: Fill in the Information

#### Basic Information

| Field | What to Enter | Example |
|-------|---------------|---------|
| **Full Name** | First and last name | "Jane Smith" |
| **Credentials** | Academic degrees | "Ph.D." or "M.D., Ph.D." |
| **Role** | Select from dropdown | "Research Assistant" |
| **Display Order** | Number for position (lower = first) | 3 |

#### Profile Photo

1. Click the **Profile Photo** field
2. Click **"Upload"**
3. Select the image from your computer
4. Wait for upload to complete

**Photo tips:**
- Use a square image (1:1 aspect ratio)
- Minimum size: 400x400 pixels
- Professional headshot preferred
- JPEG or PNG format

#### Biography

Use the rich text editor to write the bio:

```
Jane Smith is a research assistant in the Muhle Lab, where she focuses on
studying the molecular mechanisms of *CHD8* in neural development. She
received her undergraduate degree from Columbia University.
```

**Formatting tips:**
- Use *italics* for gene names (e.g., *CHD8*, *Chd8*)
- For superscripts like Chd8⁺/⁻, type it as: Chd8<sup>+/-</sup>
- Keep bios to 1-2 paragraphs
- Include education and research focus

#### Social Links (Optional)

Expand the **Social Media Links** section and add:

| Field | Format |
|-------|--------|
| LinkedIn | `https://linkedin.com/in/username` |
| GitHub | `https://github.com/username` |
| Twitter/X | `https://twitter.com/username` |
| ORCID | `https://orcid.org/0000-0000-0000-0000` |

### Step 5: Save

1. Review all information
2. Click the **"Save"** button
3. Wait for confirmation message

### Step 6: Verify on Live Site

1. Wait 2-3 minutes for deployment
2. Go to `https://muhlelab.org/team`
3. Verify the new member appears correctly

---

## Setting Display Order

The **Display Order** field controls where the member appears on the page:

| Order | Typical Use |
|-------|-------------|
| 1 | Principal Investigator |
| 2-5 | Senior staff / Postdocs |
| 6-10 | Research Assistants |
| 11-20 | Graduate Students |
| 21+ | Undergraduate Researchers |

**Example:** If you want a new research assistant to appear after existing members numbered 6 and 7, set their order to 8.

---

## Moving Members to Alumni

When a team member leaves the lab:

### Option 1: Update Status (Recommended)

1. Open the team member's profile
2. Look for an "Active" toggle (if available)
3. Turn it off
4. Save

### Option 2: Create Alumni Entry

1. Note all information from the team member
2. Delete the team member entry
3. Go to **Alumni** collection
4. Create a new alumni entry with:
   - Same name and photo
   - Years active (e.g., "2021-2024")
   - Current position (e.g., "PhD Student at MIT")
   - Set **Featured** to true for prominent display

---

## Common Issues

### Image not displaying correctly?

- **Wrong aspect ratio:** Crop to square (1:1)
- **Too small:** Use at least 400x400px
- **Format issue:** Convert to JPEG or PNG

### Bio formatting looks wrong?

- Don't use double line breaks between paragraphs
- Use the editor's paragraph button for new paragraphs
- For italics, highlight text and click the *I* button

### Name showing incorrectly?

- Check for extra spaces
- Credentials should be in the separate field
- Example: Name = "Jane Smith", Credentials = "Ph.D."

---

## Example: Adding a New Undergraduate

Here's a complete example:

```yaml
Full Name: Alex Johnson
Credentials: (leave empty for undergrads)
Role: Undergraduate Researcher
Profile Photo: alex-johnson.jpg (uploaded)
Display Order: 25

Biography:
Alex Johnson is an undergraduate student at Barnard College, majoring in
Neuroscience and Behavior. In the Muhle Lab, Alex is investigating the
behavioral phenotypes of *Chd8*+/- mice using novel cognitive assessment
paradigms.

Social Links:
- LinkedIn: https://linkedin.com/in/alexjohnson
```

---

## Checklist

Before clicking Save:

- [ ] Name is spelled correctly
- [ ] Photo is uploaded and visible
- [ ] Bio is proofread
- [ ] Gene names are italicized
- [ ] Display order is set
- [ ] Social links work (test them)

---

*Need more help? See [Troubleshooting](TROUBLESHOOTING.md) or contact your webmaster.*
