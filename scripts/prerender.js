#!/usr/bin/env node

// Prerender script for static SEO
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getAllBlogPosts } from '../src/utils/blog-node.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distPath = resolve(__dirname, '../dist')
const indexPath = resolve(distPath, 'index.html')

// Ensure dist directory exists
if (!existsSync(distPath)) {
  console.error('Error: dist directory not found. Run "npm run build" first.')
  process.exit(1)
}

// Read the base index.html
const baseHtml = readFileSync(indexPath, 'utf-8')

// Routes to prerender
const staticRoutes = ['/', '/about', '/resume', '/blog', '/contact']
const blogPosts = getAllBlogPosts()
const blogRoutes = blogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  meta: {
    title: post.seo?.title || `${post.title} | Srishty Chandra Blog`,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || `${post.tags.join(', ')}, Srishty Chandra`,
    ogTitle: post.seo?.ogTitle || post.title,
    ogDescription: post.seo?.ogDescription || post.excerpt,
    ogImage: post.seo?.ogImage || post.coverImage || 'https://srishtychandra.com/srishty-chandra-profile.jpg',
    canonicalUrl: `https://srishtychandra.com/blog/${post.slug}`
  }
}))

// Route configurations
const routeConfigs = {
  '/': {
    title: 'Srishty Chandra - Research Professional & Economics Specialist',
    description: 'Srishty Chandra is a research professional specializing in economics, international trade, data analysis, and policy research.',
    keywords: 'Srishty Chandra, economics researcher, data analyst, international trade expert',
    canonicalUrl: 'https://srishtychandra.com/'
  },
  '/about': {
    title: 'About Srishty Chandra | Economics Researcher & Data Analyst',
    description: 'Learn about Srishty Chandra\'s background in economics, international trade research, and data analysis expertise.',
    keywords: 'Srishty Chandra, about, economics background, research experience',
    canonicalUrl: 'https://srishtychandra.com/about'
  },
  '/resume': {
    title: 'Resume - Srishty Chandra | Economics & Research Professional',
    description: 'Professional resume of Srishty Chandra showcasing experience in economics research, data analysis, and international trade.',
    keywords: 'Srishty Chandra resume, CV, economics qualifications, research experience',
    canonicalUrl: 'https://srishtychandra.com/resume'
  },
  '/blog': {
    title: 'Economics Blog by Srishty Chandra | Research & Analysis',
    description: 'Insights on economics, international trade, market analysis, and policy research by Srishty Chandra.',
    keywords: 'economics blog, Srishty Chandra articles, research insights, market analysis',
    canonicalUrl: 'https://srishtychandra.com/blog'
  },
  '/contact': {
    title: 'Contact Srishty Chandra | Economics Research Consultant',
    description: 'Get in touch with Srishty Chandra for economics research, data analysis, and consulting opportunities.',
    keywords: 'contact Srishty Chandra, economics consultant, research collaboration',
    canonicalUrl: 'https://srishtychandra.com/contact'
  }
}

// Function to inject meta tags
function injectMetaTags(html, meta) {
  const ogImage = meta.ogImage || 'https://srishtychandra.com/srishty-chandra-profile.jpg'
  
  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
  
  // Update or add meta tags
  const metaTags = [
    { name: 'description', content: meta.description },
    { name: 'keywords', content: meta.keywords },
    { property: 'og:title', content: meta.ogTitle || meta.title },
    { property: 'og:description', content: meta.ogDescription || meta.description },
    { property: 'og:url', content: meta.canonicalUrl },
    { property: 'og:image', content: ogImage },
    { name: 'twitter:title', content: meta.ogTitle || meta.title },
    { name: 'twitter:description', content: meta.ogDescription || meta.description },
    { name: 'twitter:image', content: ogImage }
  ]
  
  metaTags.forEach(tag => {
    const attribute = tag.name ? 'name' : 'property'
    const regex = new RegExp(`<meta ${attribute}="${tag[attribute]}"[^>]*>`)
    const newTag = `<meta ${attribute}="${tag[attribute]}" content="${tag.content}">`
    
    if (regex.test(html)) {
      html = html.replace(regex, newTag)
    } else {
      // Add before closing head tag
      html = html.replace('</head>', `    ${newTag}\n  </head>`)
    }
  })
  
  // Update or add canonical link
  const canonicalRegex = /<link rel="canonical"[^>]*>/
  const canonicalTag = `<link rel="canonical" href="${meta.canonicalUrl}">`
  
  if (canonicalRegex.test(html)) {
    html = html.replace(canonicalRegex, canonicalTag)
  } else {
    html = html.replace('</head>', `    ${canonicalTag}\n  </head>`)
  }
  
  return html
}

// Process static routes
console.log('🔧 Prerendering static routes...')
staticRoutes.forEach(route => {
  if (route === '/') {
    // Update index.html in place
    const updatedHtml = injectMetaTags(baseHtml, routeConfigs[route])
    writeFileSync(indexPath, updatedHtml)
    console.log(`✅ Updated: /index.html`)
  } else {
    // Create directory and index.html for other routes
    const routePath = resolve(distPath, route.slice(1))
    if (!existsSync(routePath)) {
      mkdirSync(routePath, { recursive: true })
    }
    
    const updatedHtml = injectMetaTags(baseHtml, routeConfigs[route])
    writeFileSync(resolve(routePath, 'index.html'), updatedHtml)
    console.log(`✅ Created: ${route}/index.html`)
  }
})

// Process blog routes
console.log('\n🔧 Prerendering blog routes...')
blogRoutes.forEach(({ path, meta }) => {
  const routePath = resolve(distPath, path.slice(1))
  if (!existsSync(routePath)) {
    mkdirSync(routePath, { recursive: true })
  }
  
  const updatedHtml = injectMetaTags(baseHtml, meta)
  writeFileSync(resolve(routePath, 'index.html'), updatedHtml)
  console.log(`✅ Created: ${path}/index.html`)
})

console.log('\n✨ Prerendering complete!')