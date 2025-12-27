import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LightBulbIcon, HeartIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About: NextPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Head>
        <title>About Me | Prathamesh Kamble</title>
        <meta name='description' content='About Prathamesh Kamble - Full Stack Developer with international experience in Japan, specializing in Spring Boot, React, and Android development.' />
        <meta name='keywords' content='Prathamesh Kamble, Full Stack Developer, Spring Boot, React, Android Kotlin, Japan' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <motion.main
        className='min-h-screen max-w-4xl mx-auto px-4 py-12'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className='mb-12' variants={itemVariants}>
          <motion.h1
            className='text-4xl font-bold mb-6'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className='prose prose-lg dark:prose-invert max-w-none'
            variants={itemVariants}
          >
            <motion.p
              className='text-xl leading-relaxed mb-6'
              variants={itemVariants}
            >
              I&apos;m a Software Engineer with full-stack development experience and international exposure through the METI Internship Program in Japan, where I worked as a Full-Stack Developer at Technoproject Co., Ltd. (Matsue, Shimane).
            </motion.p>

            <motion.h2
              className='text-2xl font-semibold mt-8 mb-4'
              variants={itemVariants}
            >
              My Expertise
            </motion.h2>
            <motion.p variants={itemVariants}>
              I specialize in backend development using Java and Spring Boot, with hands-on experience in BFF architecture, RESTful APIs, and secure authentication/authorization using Keycloak (OAuth2, OIDC, JWT, RBAC). I&apos;ve also worked on the frontend using Angular and React, and previously built production-ready Android applications using Kotlin, MVVM, and HILT.
            </motion.p>

            <motion.p variants={itemVariants}>
              A key strength of mine is working in a Japanese professional environment, as my internship was conducted entirely in Japanese, supported by JLPT N3 proficiency.
            </motion.p>

            <motion.h2
              className='text-2xl font-semibold mt-8 mb-4'
              variants={itemVariants}
            >
              Career Goals
            </motion.h2>
            <motion.p variants={itemVariants}>
              I&apos;m open to full-time software engineering opportunities where I can contribute to backend, full-stack, or platform development and grow long-term within a collaborative team.
            </motion.p>

            <motion.h2
              className='text-2xl font-semibold mt-8 mb-4'
              variants={itemVariants}
            >
              Core Values
            </motion.h2>
            
            {/* Illustrations Section */}
            <motion.div 
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-8'
              variants={itemVariants}
            >
              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <LightBulbIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Innovation</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Always exploring new technologies and creative solutions.</p>
              </motion.div>

              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <HeartIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Passion</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Driven by love for clean code and meaningful impact.</p>
              </motion.div>

              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <RocketLaunchIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Growth</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Continuous learning and pushing boundaries forward.</p>
              </motion.div>

              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold mb-2'>Collaboration</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Building together with teams and communities.</p>
              </motion.div>
            </motion.div>

            <div className='mt-8 text-center'>
              <Link href='/experience' className='btn-primary mr-4'>View My Experience</Link>
              <Link href='/projects' className='btn-outline'>See My Projects</Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  )
}

export default About
