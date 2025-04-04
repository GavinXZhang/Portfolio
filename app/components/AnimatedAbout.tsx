'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL']
  },
  {
    category: 'Frontend Development',
    items: ['React', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'Material UI']
  },
  {
    category: 'Backend & Cloud',
    items: ['Node.js', 'Express', 'Django', 'AWS', 'Firebase', 'Docker']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis']
  }
]

export default function AnimatedAbout() {
  return (
    <>
      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I&apos;m a passionate Software Engineer with a strong foundation in Computer Science
          and a deep interest in building scalable, user-centric applications. My journey
          in software development has been driven by a desire to create innovative solutions
          that make a real impact.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          With experience in both frontend and backend development, I specialize in
          creating responsive, efficient web applications using modern technologies.
          I&apos;m particularly interested in cloud architecture, system design, and
          building performant user interfaces.
        </p>
      </motion.div>

      {/* Skills Section */}
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {skillGroup.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Professional Experience
        </h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Data Science Intern
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Flare Therapeutics, Cambridge, MA • Jan. 2024 - Oct. 2024</p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed and implemented a scalable data processing pipeline using R and RStudio for scRNA-seq datasets, enabling analysis for over 30 cancer studies and saving $5,000 in external service costs</li>
              <li>Streamlined codebase organization and documentation for bio-analysis applications, enhancing maintainability and readability</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Software Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Boston Children&apos;s Hospital X BU Spark!, Boston, MA • Sep. 2023 - Dec. 2023</p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Designed and implemented a save progress feature using React and Strapi, leading to a 20% increase in return users</li>
              <li>Developed a specialized decision tree application using MongoDB and Strapi for ALS patients</li>
              <li>Led Agile development with a team of 3 engineers, ensuring effective communication and goal-setting</li>
              <li>Showcased the website at BU&apos;s Demo Day, attracting interest from over 100+ attendees</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Data Science Intern
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Flare Therapeutics, Cambridge, MA • Jun. 2023 - Sep. 2023</p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Enhanced data processing efficiency by developing custom scripts for 10 sc-RNA sequencing datasets using RStudio</li>
              <li>Optimized workflows for a 50-member company through Linux systems and AWS cloud services, improving efficiency by 20%</li>
              <li>Published as second author, with research presented at American Association for Respiratory Care (AARC) conference</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  )
} 