import AnimatedHero from './components/AnimatedHero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHero />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Get to know me better
            </p>
          </div>
          <div className="mt-16 prose dark:prose-invert max-w-3xl mx-auto">
            <p>
              I am a passionate Software Engineer with a strong foundation in both front-end and back-end development.
              My journey in tech is driven by a desire to create meaningful solutions that make a difference.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Here are some of my recent works
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* BU Market Place Project */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/project1.jpg"
                  alt="BU Market Place"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  BU Market Place
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Android marketplace app for BU students featuring dynamic UI with Stateful and Lazy Columns, Firebase integration, and Jetpack libraries.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    Kotlin
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    Android Studio
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    Firebase
                  </span>
                </div>
                <div className="mt-6">
                  <a
                    href="https://github.com/GavinXZhang/Bu-Market-Place"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Education
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              My academic journey
            </p>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Boston University */}
              <div className="flex items-start">
                <div className="w-24 h-24 mr-6 flex-shrink-0">
                  <Image
                    src="/bu-logo.png"
                    alt="Boston University Logo"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900">Boston University</div>
                    <time className="text-sm font-semibold uppercase text-black">2020-2025</time>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-medium">Boston, MA</p>
                    <p className="mt-1">Bachelor of Science in Computer Science, Minor in Entrepreneurship</p>
                    <p className="mt-2">Expected Graduation: January 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
