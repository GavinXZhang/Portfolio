'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AnimatedHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
        Hi, I&apos;m <span className="text-primary-600 dark:text-primary-400">Wei Xuan Zhang</span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Software Engineer specializing in building exceptional digital experiences
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/resume.pdf"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          View Resume
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          View Projects
        </Link>
      </div>
    </motion.div>
  )
} 