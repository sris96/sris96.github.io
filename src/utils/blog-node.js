import { readFileSync, readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { parseFrontmatter } from './markdownParser.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const blogDir = resolve(__dirname, '../content/blog')

// Node.js compatible version of getAllBlogPosts
export function getAllBlogPosts() {
  const posts = []
  
  try {
    const files = readdirSync(blogDir).filter(file => file.endsWith('.md'))
    
    for (const file of files) {
      const filePath = resolve(blogDir, file)
      const content = readFileSync(filePath, 'utf-8')
      const { data, content: markdownContent } = parseFrontmatter(content)
      
      posts.push({
        ...data,
        content: markdownContent,
        slug: file.replace('.md', '')
      })
    }
  } catch (error) {
    console.warn('Warning: Could not read blog directory:', error.message)
    return []
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

// Get a single blog post by slug
export function getBlogPostBySlug(slug) {
  const posts = getAllBlogPosts()
  return posts.find(post => post.slug === slug)
}