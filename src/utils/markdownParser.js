// Simple frontmatter parser for browser environment
export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    return { data: {}, content }
  }
  
  const [, frontmatter, markdownContent] = match
  const data = {}
  
  // Parse YAML-like frontmatter
  const lines = frontmatter.split('\n')
  let inAuthor = false
  
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    
    // Handle author object
    if (trimmed === 'author:') {
      inAuthor = true
      data.author = {}
      continue
    }
    
    // Handle author properties
    if (inAuthor && (trimmed.startsWith('name:') || trimmed.startsWith('role:'))) {
      const [key, ...valueParts] = trimmed.split(':')
      const value = valueParts.join(':').trim().replace(/['"]/g, '')
      data.author[key.trim()] = value
      continue
    }
    
    // Reset author flag for other keys
    if (inAuthor && trimmed.includes(':') && !trimmed.startsWith('name:') && !trimmed.startsWith('role:')) {
      inAuthor = false
    }
    
    // Handle regular key-value pairs
    if (trimmed.includes(':')) {
      const [key, ...valueParts] = trimmed.split(':')
      const keyName = key.trim()
      let value = valueParts.join(':').trim()
      
      // Skip if this is the author key (already handled above)
      if (keyName === 'author') {
        continue
      }
      
      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        const arrayContent = value.slice(1, -1)
        data[keyName] = arrayContent
          .split(',')
          .map(item => item.trim().replace(/^["']|["']$/g, ''))
          .filter(item => item.length > 0)
        continue
      }
      
      // Handle other values
      value = value.replace(/^["']|["']$/g, '') // Remove quotes
      
      // Handle boolean values
      if (value === 'true') {
        data[keyName] = true
      } else if (value === 'false') {
        data[keyName] = false
      } else if (!isNaN(value) && value !== '') {
        data[keyName] = Number(value)
      } else {
        data[keyName] = value
      }
    }
  }
  
  return { data, content: markdownContent.trim() }
}