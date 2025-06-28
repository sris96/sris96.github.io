import fs from 'fs/promises'
import mammoth from 'mammoth'

async function convertDocxToMarkdown() {
  try {
    const docxPath = './Rising consumption amid reduced saving. how will india navigate further balancing both the aspects..docx'
    const buffer = await fs.readFile(docxPath)
    
    const result = await mammoth.convertToMarkdown({ buffer })
    
    console.log('Conversion complete!')
    if (result.messages.length > 0) {
      console.log('Messages:', result.messages)
    }
    
    // Create a filename-friendly version of the title
    const filename = 'rising-consumption-amid-reduced-saving'
    const outputPath = `./src/content/blog/${filename}.md`
    
    // Add frontmatter to the markdown
    const frontmatter = `---
title: "Rising consumption amid reduced saving: how will India navigate further balancing both the aspects?"
date: "${new Date().toISOString().split('T')[0]}"
excerpt: "An analysis of India's economic challenge in balancing rising consumption with reduced savings rates."
category: "Economics"
tags: ["India", "Economy", "Savings", "Consumption", "Policy"]
author: "Srishty Chandra"
---

`
    
    const fullContent = frontmatter + result.value
    
    await fs.writeFile(outputPath, fullContent)
    console.log(`Markdown file created at: ${outputPath}`)
    
  } catch (error) {
    console.error('Error converting file:', error)
  }
}

convertDocxToMarkdown()