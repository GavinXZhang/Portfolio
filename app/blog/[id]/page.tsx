import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'

interface BlogPost {
  title: string
  content: string
  date: string
  readTime: string
  category: string
}

// This would typically come from a database or CMS
const blogPosts: Record<string, BlogPost> = {
  '1': {
    title: 'Getting Started with Next.js and TypeScript',
    content: `
      # Getting Started with Next.js and TypeScript

      Next.js and TypeScript are a powerful combination for building modern web applications.
      In this post, we'll explore how to get started with both technologies.

      ## Why Next.js?

      Next.js provides a great developer experience with features like:
      - Server-side rendering
      - Static site generation
      - API routes
      - File-based routing

      ## Why TypeScript?

      TypeScript adds static typing to JavaScript, which helps catch errors early
      and provides better IDE support.

      ## Getting Started

      1. Create a new Next.js project with TypeScript:
      \`\`\`bash
      npx create-next-app@latest my-app --typescript
      \`\`\`

      2. Start the development server:
      \`\`\`bash
      cd my-app
      npm run dev
      \`\`\`

      ## Conclusion

      Next.js and TypeScript are excellent tools for building modern web applications.
      They provide a great developer experience and help create maintainable code.
    `,
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Web Development'
  },
  // Add more blog posts as needed
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="text-primary-600 dark:text-primary-400">{post.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-8">
            {post.title}
          </h1>
          <div className="markdown-content">
            {post.content}
          </div>
        </motion.article>
      </div>
    </div>
  )
} 