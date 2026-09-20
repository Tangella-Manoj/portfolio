# 🚀 Quick Start Guide

Get your portfolio running in **under 5 minutes**.

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit: http://localhost:5173
```

That's it! Your portfolio is now running locally.

---

## 📝 Before Deploying

### 1. Add Your Resume (2 minutes)

Place your resume PDF in:
```
public/documents/Tangella_Manoj_Resume.pdf
```

Or rename your file to match, or update the link in:
```typescript
// src/app/components/portfolio/Navigation.tsx
href="/documents/YOUR_RESUME_NAME.pdf"
```

### 2. Update GitHub URLs (1 minute)

Edit `src/constants/projects.ts`:
```typescript
githubUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPO'
```

### 3. Update Social Links (1 minute)

Edit `src/constants/personal.ts`:
```typescript
social: [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/YOUR_USERNAME',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME',
  },
]
```

---

## 🎨 Customization (Optional)

### Update Your Name/Email

Edit `src/constants/personal.ts`:
```typescript
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  // ... rest
};
```

### Add/Remove Projects

Edit `src/constants/projects.ts`:
```typescript
export const projects = [
  {
    id: 'unique-id',
    title: 'Your Project',
    description: 'What it does',
    impact: 'Key metrics',
    tags: ['Tech', 'Stack'],
    githubUrl: 'https://github.com/...',
  },
];
```

### Update Experience

Edit `src/constants/experience.ts`:
```typescript
export const experiences = [
  {
    id: 'company-role',
    company: 'Company Name',
    role: 'Your Role',
    // ... rest
  },
];
```

---

## 🚀 Deploy to Production

### Option A: Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Your site will be live at:** `https://your-project.vercel.app`

### Option B: Netlify

```bash
# Build
npm run build

# Go to app.netlify.com
# Drag and drop the 'dist' folder
```

### Option C: Cloudflare Pages

1. Push code to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect repository
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

---

## 🔍 Check Your Work

### Development Checks

```bash
# 1. Build succeeds
npm run build

# 2. No TypeScript errors
# Check the terminal output

# 3. Preview production build
npm run preview
# Visit: http://localhost:4173
```

### Visual Checks

Open in browser and verify:
- [ ] Navigation works (click all links)
- [ ] Resume downloads correctly
- [ ] GitHub links open
- [ ] Email link opens mail client
- [ ] Animations are smooth
- [ ] Mobile responsive (resize browser)

### Performance Check

```bash
# Analyze bundle size
npm run analyze
```

**Target:** Main bundle < 150KB gzipped ✅

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails with TypeScript errors

**Solution:**
Check `src/constants/` files match the types in `src/types/portfolio.ts`

### Issue: Fonts not loading

**Solution:**
Verify font imports in `src/main.tsx`:
```typescript
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
```

### Issue: Resume link 404

**Solution:**
1. Check file exists: `public/documents/Tangella_Manoj_Resume.pdf`
2. Check file name matches exactly (case-sensitive)
3. Restart dev server

---

## 📚 Next Steps

Once deployed:

1. **SEO**
   - Submit sitemap to Google Search Console
   - Add site to Bing Webmaster Tools

2. **Analytics**
   - Add Google Analytics
   - Or use Plausible (privacy-friendly)

3. **Monitoring**
   - Set up Sentry for error tracking
   - Monitor Web Vitals

4. **Content**
   - Update experience as you grow
   - Add new projects
   - Keep resume current

---

## 💡 Pro Tips

1. **Update regularly** - Keep content fresh every 2-3 months
2. **Monitor performance** - Run Lighthouse audits quarterly
3. **A/B test** - Try different taglines, see what resonates
4. **Get feedback** - Ask peers to review before applying
5. **Keep learning** - Add new tech to skills as you master them

---

## 🆘 Need Help?

- **Email:** tangellamanoj9@gmail.com
- **Issues:** Open a GitHub issue
- **Docs:** Read `PROJECT_ANALYSIS.md` for deep dive

---

**Time to deploy:** ~10 minutes

**You're all set!** 🎉

*Remember: This portfolio got you here. Now make it yours and land that dream job!*
