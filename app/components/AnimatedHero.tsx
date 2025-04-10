'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

export default function AnimatedHero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold text-black">
                <TypeAnimation
                  sequence={[
                    'Hello there! My name is Wei Xuan Zhang.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0}
                />
              </h1>
              <div className="h-16 sm:h-20">
                <TypeAnimation
                  sequence={[
                    'Software Engineer',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  className="text-2xl sm:text-3xl text-gray-800"
                  repeat={Infinity}
                />
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-gray-800">
              Building digital experiences that make a difference
            </p>
            <div className="flex space-x-4">
              <Link
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                View Resume
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-[400px] mx-auto"
          >
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-gray-100">
              <Image
                src="/profile.jpg"
                alt="Wei Xuan Zhang"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 