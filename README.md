# Chasing What Is Real Productions

Website project for Chasing What Is Real Productions - Authentic storytelling through visual media.

## Technology Stack

- **Framework:** React 18 + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **UI Components:** Headless UI (optional)
- **Linting:** ESLint + Prettier
- **Accessibility:** ESLint JSX A11y Plugin
- **Analytics:** Google Analytics 4 (react-ga4)
- **Deployment:** Vercel

## Project Structure

```
/
  ├─ public/
  │    ├─ images/
  │    ├─ videos/
  │    └─ favicon.ico
  ├─ src/
  │    ├─ components/
  │    │     ├─ Header.jsx
  │    │     ├─ Footer.jsx
  │    │     ├─ HeroSection.jsx
  │    │     ├─ Gallery.jsx
  │    │     └─ ContactForm.jsx
  │    ├─ pages/
  │    │     ├─ index.jsx   (Home)
  │    │     ├─ about.jsx
  │    │     ├─ services.jsx
  │    │     ├─ portfolio.jsx
  │    │     ├─ blog.jsx
  │    │     └─ contact.jsx
  │    ├─ styles/
  │    │     └─ globals.css
  │    ├─ utils/
  │    │     └─ analytics.js
  │    └─ data/
  │          └─ seo.json
  ├─ .cursor/
  │    └─ rules/
  │          ├─ brand.mdc
  │          ├─ prd.mdc
  │          ├─ design.mdc
  │          ├─ copy.mdc
  │          ├─ page.mdc
  │          └─ tech.mdc
  ├─ package.json
  ├─ tailwind.config.js
  ├─ .eslintrc.js
  ├─ .eslintrc.a11y.js
  ├─ .prettierrc
  ├─ vercel.json
  └─ README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
Replace `G-XXXXXXXXXX` with your Google Analytics Measurement ID.

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm start` - Preview production build locally
- `npm run lint` - Run ESLint and auto-fix issues
- `npm run lint:check` - Run ESLint without auto-fixing (for CI)
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without fixing
- `npm run a11y` - Run accessibility linting checks
- `npm test` - Placeholder test script (currently no-op)

## Code Quality

### Linting
The project uses ESLint with React, React Hooks, and JSX A11y plugins for code quality and accessibility.

### Formatting
Prettier is configured for consistent code formatting. Run `npm run format` before committing.

### Accessibility
Accessibility checks are enforced through ESLint JSX A11y plugin. Run `npm run a11y` for strict accessibility validation.

## Analytics

Google Analytics 4 is integrated via `react-ga4`. Page views are automatically tracked on route changes. Custom events can be tracked using the `trackEvent` function from `src/utils/analytics.js`.

## Deployment

### Automated Deployment (CI/CD)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yaml`) that automatically:
1. Runs linting and formatting checks
2. Runs accessibility checks
3. Builds the project
4. Deploys to Vercel on push to `main` branch

#### Setup GitHub Actions for Vercel

1. **Get Vercel credentials:**
   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token and copy it
   - Go to your project settings → General
   - Copy your `Project ID` and `Organization ID`

2. **Add GitHub Secrets:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your Vercel organization ID
     - `VERCEL_PROJECT_ID`: Your Vercel project ID

3. **Push to main branch:**
   - The workflow will automatically trigger on push to `main`
   - Check the Actions tab in GitHub to monitor deployment status

### Manual Deployment to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect the Vite configuration
4. Add environment variables in Vercel dashboard:
   - `VITE_GA_MEASUREMENT_ID`: Your Google Analytics Measurement ID
5. Deploy!

The `vercel.json` configuration file is included for optimal Vercel deployment.

### Local Build and Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm start
```

The build output will be in the `dist/` directory.

## Content Management

### Adding Blog Posts

1. **Create a new blog post file:**
   - Create a new file in `src/pages/blog/` directory
   - Use kebab-case for the filename (e.g., `wildlife-expedition-2025.jsx`)
   - Follow the structure of `freshwater-fishing-expedition-2025.jsx`

2. **Add route in `src/main.jsx`:**
   ```jsx
   import NewPost from './pages/blog/wildlife-expedition-2025'
   
   // In Routes:
   <Route path="/blog/wildlife-expedition-2025" element={<NewPost />} />
   ```

3. **Add to blog listing in `src/pages/blog.jsx`:**
   - Add a new entry to the `blogPosts` array with:
     - `id`: Unique identifier
     - `title`: Post title
     - `category`: Category tag (e.g., "Wildlife Expeditions")
     - `date`: Publication date (YYYY-MM-DD format)
     - `image`: Hero image path (`/images/blog/your-image.jpg`)
     - `excerpt`: Short description
     - `slug`: Route path matching your route

4. **Add images/videos:**
   - Place hero images in `public/images/blog/`
   - Place video files in `public/videos/blog/`
   - Reference them using absolute paths starting with `/`

5. **Update SEO metadata:**
   - Add page-specific SEO data in `src/data/seo.json` if needed
   - Include JSON-LD structured data using the `JsonLd` component

### Adding Portfolio Items

1. **Edit `src/pages/portfolio.jsx`:**
   - Add new items to the `portfolioItems` array
   - Each item should have:
     ```jsx
     {
       id: 'unique-id',
       category: 'Stills' | 'Video Highlights' | 'Hunting Expeditions' | 'Freshwater Fishing Adventures' | 'Wildlife Expeditions',
       type: 'image' | 'video',
       src: '/images/portfolio/your-image.jpg' or '/videos/portfolio/your-video.mp4',
       alt: 'Descriptive alt text for accessibility',
       caption: 'Caption text displayed below the item',
     }
     ```

2. **Add media files:**
   - Images: Place in `public/images/portfolio/`
   - Videos: Place in `public/videos/portfolio/`
   - Use descriptive filenames

3. **Update structured data:**
   - The portfolio page automatically generates ImageObject and VideoObject structured data
   - Ensure your media files have proper alt text and captions for SEO

### Updating SEO Metadata

1. **Page-level SEO:**
   - Edit `src/data/seo.json` to update titles, descriptions, and keywords
   - The structure maps route paths to metadata objects

2. **Structured Data (JSON-LD):**
   - Use the `JsonLd` component from `src/components/JsonLd.jsx`
   - Use helper functions from `src/utils/structuredData.js`:
     - `createVideoObject()` - For video content
     - `createImageObject()` - For individual images
     - `createStructuredGallery()` - For portfolio galleries

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yaml`) runs automatically on push to `main`:

1. **Lint and Build Job:**
   - Checks out code
   - Sets up Node.js 18
   - Installs dependencies (`npm ci`)
   - Runs linting checks (`npm run lint:check`)
   - Checks code formatting (`npm run format:check`)
   - Runs accessibility checks (`npm run a11y`)
   - Builds the project (`npm run build`)
   - Uploads build artifacts

2. **Deploy Job:**
   - Only runs if lint-and-build succeeds
   - Only runs on `main` branch
   - Deploys to Vercel production using the Vercel GitHub Action

### Troubleshooting CI/CD

- **Build fails:** Check the Actions tab in GitHub for detailed error logs
- **Deployment fails:** Verify Vercel secrets are correctly set in GitHub repository settings
- **Linting errors:** Run `npm run lint` locally to fix issues before pushing

## License

Copyright © Chasing What Is Real Productions. All rights reserved.

