# Vercel Deployment Guide

This guide will help you deploy your SOSA Travelz website to Vercel.

## Prerequisites

1. A GitHub account (free)
2. A Vercel account (free) - Sign up at [vercel.com](https://vercel.com)

## Step 1: Prepare Your Project

Your project is already configured with:
- ✅ `vercel.json` - Vercel configuration file
- ✅ Build script in `package.json`
- ✅ HashRouter (works perfectly with static hosting)

## Step 2: Push to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SOSA Travelz website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Important**: Make sure these are in your `.gitignore`:
- `node_modules/`
- `dist/`
- `.env` (if you have sensitive data)

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for beginners)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in (or sign up with GitHub)

2. **Import Project**: 
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository

3. **Configure Project**:
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-fill)
   - **Output Directory**: `dist` (should auto-fill)
   - **Install Command**: `npm install` (should auto-fill)

4. **Environment Variables** (if needed):
   - If you have any API keys, add them here
   - For now, you can skip this

5. **Deploy**: Click "Deploy" button

6. **Wait for Build**: Vercel will:
   - Install dependencies
   - Run the build command
   - Deploy your site

7. **Get Your Link**: Once deployed, you'll get a URL like:
   - `https://sosa-travelz.vercel.app`
   - You can customize the domain name in settings

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

5. **For production deployment**:
   ```bash
   vercel --prod
   ```

## Step 4: Customize Your Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (if you have one)
4. Or use the free `.vercel.app` domain provided

## Step 5: Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches (for testing)

## Troubleshooting

### Build Fails

1. **Check build logs** in Vercel dashboard
2. **Common issues**:
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Fix in your code
   - Missing environment variables → Add in Vercel dashboard

### Images Not Loading

1. Make sure images are in the `Public` folder
2. Use paths starting with `/` (e.g., `/images/...`)
3. Check that image files are committed to Git

### Routing Issues

- Your app uses HashRouter (`#`), so routing should work fine
- If you switch to BrowserRouter later, you'll need the rewrite rules in `vercel.json` (already included)

### Environment Variables

If you need to add environment variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Quick Deploy Checklist

- [ ] Code is pushed to GitHub
- [ ] `vercel.json` is in the project root
- [ ] `package.json` has build script
- [ ] All images are in `Public` folder
- [ ] No sensitive data in code (use environment variables)
- [ ] Test build locally: `npm run build`

## After Deployment

1. **Share your link**: `https://your-project.vercel.app`
2. **Monitor**: Check Vercel dashboard for analytics
3. **Update**: Just push to GitHub, Vercel auto-deploys!

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**Your site will be live at**: `https://your-project-name.vercel.app`

Enjoy your deployed website! 🚀

