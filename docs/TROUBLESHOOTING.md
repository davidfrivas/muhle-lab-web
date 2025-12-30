# Troubleshooting Guide

Common issues and how to fix them.

---

## Login Issues

### Can't log in to admin panel

**Symptoms:**
- Login button doesn't work
- Redirect fails
- Error message appears

**Solutions:**

1. **Check GitHub access**
   - You must be a collaborator on the repository
   - Ask your lab's webmaster to add you

2. **Try a different browser**
   - Chrome, Firefox, or Safari recommended
   - Clear cookies and try again

3. **Check browser extensions**
   - Disable ad blockers temporarily
   - Disable privacy extensions

4. **Clear browser cache**
   - Chrome: Settings → Privacy → Clear browsing data
   - Firefox: Settings → Privacy → Clear Data
   - Safari: Develop → Empty Caches

### Logged out unexpectedly

**Solutions:**
- Your session may have expired
- Log in again
- Check that you're connected to the internet

---

## Content Not Appearing

### Changes not showing on live site

**Wait for deployment:**
- Changes take 2-3 minutes to appear
- Check GitHub Actions for build status

**How to check build status:**
1. Go to your GitHub repository
2. Click "Actions" tab
3. Look for the most recent workflow run
4. Green checkmark = success
5. Red X = failed (see below)

### Build failed

**Common causes:**

1. **Invalid content format**
   - Check for missing required fields
   - Verify dates are in correct format

2. **Image issues**
   - Missing image file
   - Incorrect image path

3. **Syntax errors**
   - Usually caused by copy-pasting

**To fix:**
1. Check the error message in GitHub Actions
2. Open the problematic content
3. Fix the issue
4. Save again

### Content visible in admin but not on site

**Check these settings:**
- Is "Published" checked?
- Is the item marked as "Active"?
- Is the display order set?

---

## Image Problems

### Image won't upload

**Check file requirements:**
- Maximum size: 5MB
- Formats: JPEG, PNG, GIF, WebP
- No special characters in filename

**Solutions:**
1. Compress the image (use TinyPNG.com)
2. Convert to JPEG format
3. Rename file to remove special characters
4. Try a different browser

### Image displays incorrectly

**Wrong size or cropped:**
- Check recommended dimensions
- Crop image to correct aspect ratio before uploading

**Image not loading:**
- Clear browser cache
- Check internet connection
- Verify upload completed

### Image path broken

If you see a broken image icon:
1. Re-upload the image
2. Save the content again
3. Wait for deployment

---

## Formatting Issues

### Text looks different than expected

**Rich text issues:**
- Avoid pasting from Word (strips formatting)
- Use plain text first, then format

**Gene names not italic:**
1. Highlight the gene name
2. Click the italic button
3. Save

### Links not working

**Check the URL:**
- External: Must include `https://`
- Internal: Use `/page-name` format

**Examples:**
- ✅ `https://example.com`
- ✅ `/contact`
- ❌ `example.com` (missing https)
- ❌ `contact` (missing slash)

---

## Carousel Issues

### Carousel not showing

**Requirements:**
- At least 2 images
- All images have descriptions
- News post is published

**Check:**
1. Open the news post
2. Verify carousel images are uploaded
3. Each image has alt text
4. Save again

### Carousel images not advancing

**This is a frontend issue:**
- Clear browser cache
- Try a different browser
- Contact webmaster

---

## Performance Issues

### Admin panel slow

**Solutions:**
1. Close other browser tabs
2. Check internet connection
3. Clear browser cache
4. Try a different browser

### Site loading slowly

This may be caused by:
- Large images (optimize before uploading)
- Too many images on one page
- Contact webmaster for optimization

---

## Mobile Issues

### Site looks wrong on phone

**Check:**
- The site should be responsive
- If not, contact webmaster

### Admin panel on mobile

**Not recommended:**
- TinaCMS works best on desktop
- Some features may not work on mobile
- Use a computer for editing

---

## Contact Form Issues

### Form not sending

**Check:**
- FormSubmit.co endpoint is configured
- Email address is correct in settings

**Test:**
1. Fill out the form
2. Submit
3. Check spam folder
4. Check FormSubmit.co dashboard

### Spam messages

Contact webmaster to:
- Enable captcha
- Add spam filtering
- Update FormSubmit settings

---

## Emergency Procedures

### Need to revert changes

If you made a mistake and need to undo:

1. **Recent change:** Use GitHub's history
   - Go to repository on GitHub
   - Find the content file
   - View history
   - Revert to previous version

2. **Major issue:** Contact webmaster immediately

### Site is down

**Check:**
1. Is muhlelab.org accessible?
2. Check GitHub Pages status
3. Check GitHub Actions for failed builds

**If site is down:**
1. Don't panic
2. Contact webmaster
3. Provide details about recent changes

---

## Getting Help

### Before contacting help

Gather this information:
- What you were trying to do
- What happened instead
- Any error messages
- Browser and device used
- Screenshots if possible

### Who to contact

1. **Lab webmaster** - For most issues
2. **GitHub repository** - Open an issue
3. **TinaCMS support** - For CMS-specific issues (tina.io/docs)

---

## Quick Reference

| Problem | First Thing to Try |
|---------|-------------------|
| Can't log in | Check you're a collaborator |
| Changes not showing | Wait 2-3 minutes |
| Build failed | Check GitHub Actions |
| Image won't upload | Compress and rename |
| Formatting wrong | Clear and reformat |
| Site down | Contact webmaster |

---

*Still stuck? Open an issue on GitHub or contact your lab's webmaster.*
