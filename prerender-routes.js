// Routes to prerender for SEO
import { getAllBlogPosts } from './src/utils/blog-node.js'

// Get all blog post slugs
const blogPosts = getAllBlogPosts()
const blogRoutes = blogPosts.map(post => `/blog/${post.slug}`)

export const prerenderRoutes = [
  '/',
  '/about',
  '/resume',
  '/blog',
  '/contact',
  // Add all blog post routes
  ...blogRoutes
]