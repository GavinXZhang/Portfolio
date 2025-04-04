'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'BU Market Place',
    description: 'Android marketplace app for BU students featuring dynamic UI with Stateful and Lazy Columns, Firebase integration, and Jetpack libraries. Improved app performance by 30% and increased user engagement by 25%.',
    image: '/project1.jpg',
    technologies: ['Kotlin', 'Android Studio', 'Firebase', 'Jetpack', 'Retrofit'],
    github: 'https://github.com/GavinXZhang/Bu-Market-Place',
    demo: 'https://github.com/GavinXZhang/Bu-Market-Place',
    category: 'mobile'
  },
  {
    id: 2,
    title: 'AI Personal Assistant',
    description: 'Personal productivity website using Django to track To-Do&apos;s and generate daily summaries using ChatGPT integration. Features 3 models (Event, Reminders, Call Logs) with CRUD operations.',
    image: '/project2.jpg',
    technologies: ['Django', 'Python', 'ChatGPT API', 'Heroku', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ai-assistant',
    demo: 'https://ai-assistant-demo.herokuapp.com',
    category: 'web'
  },
  {
    id: 3,
    title: 'Personal Website',
    description: 'Responsive portfolio built with Next.js, TypeScript, and Tailwind CSS, featuring dynamic project filtering, Firebase backend, blog/contact forms, SEO optimization, dark mode, and lazy loading.',
    image: '/project3.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vercel'],
    github: 'https://github.com/GavinXZhang/Portfolio',
    demo: 'https://your-portfolio.vercel.app',
    category: 'web'
  },
  {
    id: 4,
    title: 'Task Manager',
    description: 'Full-stack task manager using React and Node.js, featuring secure Firebase authentication, optimized PostgreSQL queries, and Docker containerization. Deployed on GCP Cloud Run with CI/CD pipelines.',
    image: '/project4.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'GCP', 'Firebase'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager-demo.com',
    category: 'web'
  }
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A collection of my work and personal projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                {/* Project image will go here */}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 