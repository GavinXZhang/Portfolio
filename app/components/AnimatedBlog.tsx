'use client'

import { motion } from 'framer-motion'

export default function AnimatedBlog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
        Blog
      </h1>
      <div className="mt-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Stay tuned for upcoming articles and insights about software development.
        </p>
      </div>
    </motion.div>
  )
} 