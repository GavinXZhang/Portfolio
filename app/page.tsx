import AnimatedHero from './components/AnimatedHero'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHero />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
            {/* Project cards will go here */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                {/* Project image will go here */}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Project Name
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Brief description of the project and its key features.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    React
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    TypeScript
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>
    </div>
  )
}
