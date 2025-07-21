import { marked } from 'marked'
import { parseFrontmatter } from './markdownParser.js'

// Import all markdown files from the blog directory
const blogFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

// Parse markdown files and extract metadata
export function getAllBlogPosts() {
  const posts = []
  
  for (const path in blogFiles) {
    const content = blogFiles[path]
    const { data, content: markdownContent } = parseFrontmatter(content)
    
    posts.push({
      ...data,
      content: markdownContent,
      slug: path.split('/').pop().replace('.md', '')
    })
  }
  
  // Sort by date (newest first) and then by id
  return posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    if (dateB.getTime() === dateA.getTime()) {
      return b.id - a.id
    }
    return dateB - dateA
  })
}

// Get a single blog post by ID
export function getBlogPostById(id) {
  const posts = getAllBlogPosts()
  return posts.find(post => post.id === parseInt(id))
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug) {
  const posts = getAllBlogPosts()
  return posts.find(post => post.slug === slug)
}

// Get featured posts
export function getFeaturedPosts() {
  const posts = getAllBlogPosts()
  return posts.filter(post => post.featured)
}

// Get posts by category
export function getPostsByCategory(category) {
  const posts = getAllBlogPosts()
  if (category === 'All') return posts
  return posts.filter(post => post.category === category)
}

// Get all unique categories
export function getAllCategories() {
  const posts = getAllBlogPosts()
  const categories = new Set(['All'])
  posts.forEach(post => categories.add(post.category))
  return Array.from(categories)
}

// Convert markdown to HTML
export function parseMarkdown(content) {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    mangle: false
  })
  
  return marked(content)
}

// Search posts by query
export function searchPosts(query, posts = null) {
  const allPosts = posts || getAllBlogPosts()
  const searchTerm = query.toLowerCase()
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.content.toLowerCase().includes(searchTerm)
  )
}