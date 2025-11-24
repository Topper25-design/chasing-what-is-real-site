# Deployment Guide: GitHub & Vercel Setup

## ✅ Step 1: Create GitHub Repository

1. **Go to GitHub:**
   - Visit [github.com](https://github.com) and sign in
   - Click the **"+"** icon in the top right corner
   - Select **"New repository"**

2. **Repository Settings:**
   - **Repository name:** `chasing-what-is-real-site` (or your preferred name)
   - **Description:** "Website for Chasing What Is Real Productions"
   - **Visibility:** Choose **Private** or **Public**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **"Create repository"**

3. **Copy the repository URL:**
   - GitHub will show you a URL like: `https://github.com/yourusername/chasing-what-is-real-site.git`
   - Copy this URL

## ✅ Step 2: Push Code to GitHub

Run these commands in your terminal (replace `YOUR_REPO_URL` with the URL you copied):

```bash
git remote add origin YOUR_REPO_URL
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/yourusername/chasing-what-is-real-site.git
git push -u origin main
```

If prompted, enter your GitHub username and password (or use a Personal Access Token).

## ✅ Step 3: Link Repository to Vercel

### Option A: Import via Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com) and sign in (or create an account)
   - Click **"Add New..."** → **"Project"**

2. **Import Repository:**
   - Click **"Import Git Repository"**
   - If you haven't connected GitHub, click **"Connect GitHub"** and authorize Vercel
   - Find your repository (`chasing-what-is-real-site`) in the list
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (should auto-detect)
   - **Output Directory:** `dist` (should auto-detect)
   - **Install Command:** `npm install` (should auto-detect)

4. **Environment Variables:**
   - Click **"Environment Variables"**
   - Add: `VITE_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` (your Google Analytics ID)
   - Click **"Add"**

5. **Deploy:**
   - Click **"Deploy"**
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked to link to existing project, select **"No"** for first deployment
   - Vercel will auto-detect your Vite configuration

4. **Set Environment Variables:**
   ```bash
   vercel env add VITE_GA_MEASUREMENT_ID
   ```
   - Enter your Google Analytics Measurement ID when prompted

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## ✅ Step 4: Automatic Deployments

Once linked, Vercel will automatically:
- **Deploy** your site whenever you push to the `main` branch
- **Create preview deployments** for pull requests
- **Update** your production site automatically

## 🔧 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `vercel.json` configuration is correct

### Environment Variables Not Working
- Make sure variables start with `VITE_` prefix for Vite projects
- Redeploy after adding environment variables

### Routing Issues
- The `vercel.json` file includes rewrites for React Router
- All routes should redirect to `index.html` for client-side routing

## 📝 Next Steps

1. **Custom Domain (Optional):**
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Monitor Deployments:**
   - Check Vercel dashboard for deployment status
   - View analytics and performance metrics

3. **Update Site:**
   - Make changes locally
   - Commit and push to GitHub
   - Vercel will automatically deploy the changes

---

**Your website is now live! 🎉**

