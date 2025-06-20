# Deployment Guide

This document explains how to deploy Srishty Chandra's portfolio website to GitHub Pages.

## Prerequisites

1. **GitHub Repository**: Create a repository named `sris96.github.io` (replace `sris96` with the actual GitHub username)
2. **Repository Settings**: Ensure the repository is public (required for GitHub Pages on free accounts)

## Setup Instructions

### 1. Repository Setup

1. Create a new repository on GitHub named `sris96.github.io`
2. Push this code to the repository:

```bash
git init
git add .
git commit -m "Initial commit: Srishty Chandra portfolio website"
git branch -M main
git remote add origin https://github.com/sris96/sris96.github.io.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to the `main` branch

### 3. Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the repository root with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in repository settings

## Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Trigger**: Automatically run on every push to the `main` branch
2. **Build**: Install dependencies and build the Vue.js application
3. **Deploy**: Deploy the built files to GitHub Pages

### Workflow Features

- ✅ Automatic deployment on push to main
- ✅ Manual deployment trigger available
- ✅ Optimized build with code splitting
- ✅ Concurrent deployment protection
- ✅ Modern Node.js (v18) environment

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Build Configuration

The Vite configuration includes:

- **Base Path**: Set to `/` for user GitHub Pages site
- **Output Directory**: `dist/`
- **Code Splitting**: Separates vendor libraries for better caching
- **Minification**: Uses Terser for optimal bundle size
- **Asset Optimization**: Optimized asset handling

## Deployment URL

Once deployed, the website will be available at:
- **Primary URL**: `https://sris96.github.io`
- **GitHub Pages URL**: `https://sris96.github.io` (same for user sites)

## Troubleshooting

### Common Issues

1. **404 Error**: Check that the repository name matches the pattern `username.github.io`
2. **Build Fails**: Ensure all dependencies are listed in `package.json`
3. **Routing Issues**: Vue Router is configured for history mode, which works with GitHub Pages
4. **Assets Not Loading**: Verify the base path in `vite.config.ts` is set to `/`

### Workflow Debugging

To debug deployment issues:

1. Check the **Actions** tab in your GitHub repository
2. Review the workflow logs for any errors
3. Ensure GitHub Pages is enabled in repository settings
4. Verify the `GITHUB_TOKEN` has the necessary permissions

## Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (using gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

## Security Considerations

- The workflow uses minimal required permissions
- No sensitive data is exposed in the build process
- All dependencies are from trusted sources
- HTTPS is enforced by default on GitHub Pages

## Performance Optimizations

The build includes:

- Code splitting for vendor libraries
- Asset optimization and compression  
- Modern JavaScript output
- Optimized Vue.js production build
- Efficient caching strategies

## Support

For deployment issues:
1. Check GitHub Actions logs
2. Review GitHub Pages documentation
3. Ensure repository settings are correct
4. Verify domain configuration (if using custom domain)