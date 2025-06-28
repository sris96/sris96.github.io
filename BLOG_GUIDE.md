# Blog Management Guide for Non-Technical Users

This guide explains how to add, edit, and manage blog posts on your portfolio website without any technical knowledge.

## How the Blog System Works

Your blog posts are stored as simple text files with a `.md` extension in the `src/content/blog/` folder. These files contain:
1. **Metadata** (at the top) - information about the post like title, date, category
2. **Content** (below) - the actual blog post written in a simple format called Markdown

## Adding a New Blog Post

### Step 1: Create a New File
1. Navigate to `src/content/blog/` folder
2. Create a new file with a descriptive name like `003-your-blog-title.md`
3. Always start the filename with a number (like 003, 004, etc.) to keep them organized

### Step 2: Add Metadata
At the very top of your file, add this template and fill in your information:

```markdown
---
id: 3
title: "Your Blog Post Title"
excerpt: "A brief summary of your blog post that appears on the blog listing page. Keep it 1-2 sentences."
category: "Economic Research"
date: "December 25, 2023"
readTime: "5 min read"
tags: ["Tag1", "Tag2", "Tag3"]
author:
  name: "Srishty Chandra"
  role: "Your Role for this Post"
coverImage: "https://example.com/your-image.jpg"
imageCredit: "Creator: Name | Credit: Source | Copyright: © Year Company"
featured: true
---
```

**Important notes:**
- Keep the three dashes (`---`) at the beginning and end
- Use a unique `id` number (increment from the last post)
- Choose from existing categories: "Economic Research", "International Trade", "Data Analysis", "Policy Insights", "Market Trends", "Academia"
- Date format: "Month Day, Year"
- `coverImage`: URL to a cover image for your article (optional)
- `imageCredit`: Proper attribution for the cover image (required if using coverImage)
- `featured: true`: Makes this post appear prominently on the blog homepage (optional)

### Step 3: Write Your Content
Below the second `---`, write your blog post using these simple formatting rules:

#### Headers
```markdown
# Main Title (appears automatically from metadata)
## Section Title
### Subsection Title
```

#### Paragraphs
Just write normally. Leave a blank line between paragraphs.

#### Bold and Italic
```markdown
**Bold text**
*Italic text*
```

#### Lists
```markdown
- First item
- Second item
- Third item

Or numbered:
1. First item
2. Second item
3. Third item
```

#### Quotes
```markdown
> "This creates a highlighted quote box"
```

#### Links
```markdown
[Link text](https://example.com)
```

#### Tables
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |
```

### Step 4: Save and Publish
1. Save your file
2. The website will automatically include your new blog post
3. It will appear on the blog page at `/blog`
4. Individual post will be accessible at `/blog/[your-id-number]`

## Editing Existing Posts

1. Find the post file in `src/content/blog/`
2. Open it and make your changes
3. You can edit both the metadata (top section) and content
4. Save the file

## Deleting Posts

Simply delete the `.md` file from the `src/content/blog/` folder.

## Making a Post Featured

Add `featured: true` to the metadata section:

```markdown
---
id: 9
title: "Your Title"
excerpt: "Your excerpt"
category: "International Trade"
date: "December 15, 2023"
readTime: "8 min read"
featured: true
tags: ["Tag1", "Tag2"]
author:
  name: "Srishty Chandra"
  role: "Industry Analyst"
---
```

## Tips for Writing Good Blog Posts

### Metadata Tips
- **Title**: Keep it descriptive but concise (under 60 characters)
- **Excerpt**: Write a compelling summary that makes people want to read more
- **Category**: Be consistent with existing categories
- **Tags**: Use 3-5 relevant tags that help with searching
- **Read Time**: Estimate based on ~200 words per minute

### Content Tips
- Start with a strong introduction that sets context
- Use headers to break up long sections
- Include quotes to highlight important insights
- Add lists to make information scannable
- End with key takeaways or conclusions

### SEO-Friendly Writing
- Use your main keywords naturally in the title and first paragraph
- Include relevant subheadings
- Write clear, concise sentences
- Add internal links to other blog posts when relevant

## Sample Blog Post Structure

```markdown
---
id: 4
title: "Understanding Economic Indicators"
excerpt: "A comprehensive guide to interpreting key economic indicators and their impact on policy decisions."
category: "Economic Research"
date: "January 15, 2024"
readTime: "7 min read"
tags: ["Economics", "Indicators", "Policy", "Analysis"]
author:
  name: "Srishty Chandra"
  role: "Economic Researcher"
---

# Understanding Economic Indicators

Introduction paragraph that hooks the reader and explains what they'll learn.

## What Are Economic Indicators?

Explanation of the topic...

## Key Types of Indicators

### Leading Indicators
- Employment data
- Stock market performance
- Consumer confidence

### Lagging Indicators
- GDP growth
- Unemployment rate
- Inflation rate

## Real-World Applications

Examples and case studies...

> "Economic indicators are the compass that guides policy decisions in uncertain times."

## Conclusion

Summarize key points and provide actionable insights...
```

## Converting Word Documents to Blog Posts

If you have articles written in Microsoft Word (.docx format), you can convert them to blog posts:

### Using the Conversion Script
1. Place your .docx file in the project root folder
2. Open `convertDocx.js` and update the file path to match your document
3. Run the conversion: `node convertDocx.js`
4. The script will create a markdown file in `src/content/blog/` with proper metadata
5. Review and edit the generated file as needed

### What the Script Does
- Converts Word document content to markdown format
- Adds proper blog post metadata (title, date, author, etc.)
- Preserves text formatting (bold, italic, headings, lists)
- Creates a URL-friendly filename

## Blog Sharing Features

Each blog post automatically includes a comprehensive sharing section with:

### Social Media Sharing
- **Twitter**: Shares with article title and excerpt
- **LinkedIn**: Professional network sharing
- **Facebook**: Social media sharing
- **WhatsApp**: Mobile-friendly sharing with full text

### Additional Features
- **Copy Link**: Copies article URL to clipboard
- **URL Display**: Shows the full article link for manual sharing
- **Visual Feedback**: Confirms when link is copied successfully

### How It Works
The sharing buttons automatically:
1. Get the current article URL
2. Include the article title and excerpt in social posts
3. Open sharing dialogs in new windows
4. Provide fallback support for older browsers

## Getting Help

If you encounter any issues:
1. Check that your metadata format exactly matches the template
2. Ensure there are no missing quotes or colons in the metadata
3. Make sure the `id` number is unique
4. Verify the file is saved in the correct folder: `src/content/blog/`
5. For .docx conversion issues, check that mammoth package is installed: `npm install mammoth`

## Available Categories

- Economic Research
- International Trade  
- Data Analysis
- Policy Insights
- Market Trends
- Academia

Choose the most appropriate category for your post to help readers find related content.