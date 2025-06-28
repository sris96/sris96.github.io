import mammoth from 'mammoth'

export async function parseDocxToMarkdown(file) {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.convertToMarkdown({ arrayBuffer })
    
    if (result.messages.length > 0) {
      console.warn('Conversion warnings:', result.messages)
    }
    
    return {
      markdown: result.value,
      messages: result.messages
    }
  } catch (error) {
    console.error('Error parsing .docx file:', error)
    throw error
  }
}

export async function parseDocxToHtml(file) {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.convertToHtml({ arrayBuffer })
    
    if (result.messages.length > 0) {
      console.warn('Conversion warnings:', result.messages)
    }
    
    return {
      html: result.value,
      messages: result.messages
    }
  } catch (error) {
    console.error('Error parsing .docx file:', error)
    throw error
  }
}