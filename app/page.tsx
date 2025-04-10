import AnimatedHero from './components/AnimatedHero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHero />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get to know me better
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Background</h3>
                <p className="text-gray-600">
                  I have recently graduated from Boston University with a Bachelor of Science in Computer Science. Coming from a first-generation immigrant family, I am passionate about using technology to improve the lives of others.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Current Focus</h3>
                <p className="text-gray-600">
                  I am currently looking for opportunities in software engineering and data scientist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
              Academics
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              My educational journey
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
                    <p className="mt-2">Graduated: January 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here are some of my recent works
            </p>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* BU Market Place Project */}
              <div className="flex items-start">
                <div className="w-24 h-24 mr-6 flex-shrink-0">
                  <Image
                    src="/project1.jpg"
                    alt="BU Market Place"
                    width={96}
                    height={96}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900">BU Market Place</div>
                  </div>
                  <div className="text-gray-600">
                    <p className="mt-1">Developed an Android marketplace app for BU students using Kotlin and Android Studio. Built a dynamic UI with Stateful and Lazy Columns, integrated Firebase for authentication and real-time data, and utilized Jetpack libraries and Retrofit for scalable architecture and API interactions. Improved app performance by 30% and increased user engagement by 25%.</p>
                    <div className="mt-4">
                      <a
                        href="https://github.com/GavinXZhang/Bu-Market-Place"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-600 hover:text-primary-500"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Personal Assistant */}
              <div className="flex items-start">
                <div className="w-24 h-24 mr-6 flex-shrink-0">
                  <Image
                    src="/project2.jpg"
                    alt="AI Personal Assistant"
                    width={96}
                    height={96}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xl font-bold text-gray-900">AI Personal Assistant</div>
                  </div>
                  <div className="text-gray-600">
                    <p className="mt-1">Developed a personal productivity website using Django to track my To-Do&apos;s and generate a summary of my day using ChatGPT integration. Designed 3 models (Event, Reminders, and Call Logs) with respective forms for CRUD operations. Deployed application onto Heroku for live accessibility.</p>
                    <div className="mt-4">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-600 hover:text-primary-500"
                      >
                        View Project →
                      </a>
                    </div>
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
