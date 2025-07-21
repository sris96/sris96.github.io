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
  let inSeo = false
  let inStructuredData = false
  let structuredDataLines = []
  
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    
    // Handle author object
    if (trimmed === 'author:') {
      inAuthor = true
      inSeo = false
      inStructuredData = false
      data.author = {}
      continue
    }
    
    // Handle SEO object
    if (trimmed === 'seo:') {
      inSeo = true
      inAuthor = false
      inStructuredData = false
      data.seo = {}
      continue
    }
    
    // Handle structured data
    if (trimmed === 'structuredData:') {
      inStructuredData = true
      inAuthor = false
      inSeo = false
      structuredDataLines = []
      continue
    }
    
    // Handle author properties
    if (inAuthor && (trimmed.startsWith('name:') || trimmed.startsWith('role:'))) {
      const [key, ...valueParts] = trimmed.split(':')
      const value = valueParts.join(':').trim().replace(/['"]/g, '')
      data.author[key.trim()] = value
      continue
    }
    
    // Handle SEO properties
    if (inSeo && trimmed.includes(':')) {
      const [key, ...valueParts] = trimmed.split(':')
      const keyName = key.trim()
      let value = valueParts.join(':').trim().replace(/^['"]|['"]$/g, '')
      
      // Handle arrays in SEO
      if (value.startsWith('[') && value.endsWith(']')) {
        const arrayContent = value.slice(1, -1)
        data.seo[keyName] = arrayContent
          .split(',')
          .map(item => item.trim().replace(/^['"]|['"]$/g, ''))
          .filter(item => item.length > 0)
      } else {
        data.seo[keyName] = value
      }
      continue
    }
    
    // Handle structured data (collect as JSON)
    if (inStructuredData) {
      structuredDataLines.push(line)
      continue
    }
    
    // Reset flags for other top-level keys
    if (trimmed.includes(':') && !trimmed.startsWith('  ')) {
      inAuthor = false
      inSeo = false
      if (inStructuredData) {
        // Parse collected structured data
        try {
          const jsonStr = structuredDataLines.join('\n').trim()
          if (jsonStr) {
            data.structuredData = JSON.parse(jsonStr)
          }
        } catch (e) {
          console.warn('Failed to parse structured data:', e)
        }
        inStructuredData = false
        structuredDataLines = []
      }
    }
    
    // Handle regular key-value pairs
    if (trimmed.includes(':')) {
      const [key, ...valueParts] = trimmed.split(':')
      const keyName = key.trim()
      let value = valueParts.join(':').trim()
      
      // Skip if this is a special key (already handled above)
      if (keyName === 'author' || keyName === 'seo' || keyName === 'structuredData') {
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
  
  // Final check for structured data
  if (inStructuredData && structuredDataLines.length > 0) {
    try {
      const jsonStr = structuredDataLines.join('\n').trim()
      if (jsonStr) {
        data.structuredData = JSON.parse(jsonStr)
      }
    } catch (e) {
      console.warn('Failed to parse structured data:', e)
    }
  }
  
  return { data, content: markdownContent.trim() }
}