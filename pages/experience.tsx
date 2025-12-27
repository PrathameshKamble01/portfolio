import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Experience: NextPage = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full-Stack Developer',
      company: 'TECHNOPROJECT CO., LTD.',
      period: 'Present',
      type: 'Full-time',
      location: 'Matsue, Shimane, Japan',
      description: 'Developing secure backend systems and full-stack applications with international exposure',
      responsibilities: [
        'Designed and developed a secure backend system using Spring Boot with a Backend-For-Frontend (BFF) architecture for structured API communication between frontend and database',
        'Implemented enterprise-level API security with Keycloak, OAuth2, OIDC, JWT, and RBAC',
        'Worked in a Japanese professional environment conducting all communications in Japanese',
        'Gained hands-on experience in enterprise-level API security, authentication flows, and scalable backend architecture'
      ],
      technologies: ['Spring Boot', 'Java', 'Keycloak', 'OAuth2', 'JWT', 'RBAC', 'BFF Architecture', 'REST APIs']
    },
    {
      id: 2,
      title: 'Android Developer',
      company: 'ENOVATE-IT OUTSOURCING PVT. LTD.',
      period: 'Jan 2025 – Oct 2025',
      type: 'Full-time',
      location: 'Pune, Maharashtra, India',
      description: 'Building scalable backend services and Android applications for warehouse operations',
      responsibilities: [
        'Developed scalable backend services using Spring Boot and PostgreSQL',
        'Built Android warehousing application using Kotlin, MVVM architecture, and HILT dependency injection',
        'Implemented JWT authentication and GitLab integration for secure and efficient delivery',
        'Collaborated with cross-functional teams to deliver production-ready Android applications'
      ],
      technologies: ['Kotlin', 'Android', 'MVVM', 'HILT', 'Spring Boot', 'PostgreSQL', 'JWT', 'GitLab']
    },
    {
      id: 3,
      title: 'Intern',
      company: 'GO-LIVE FASTER',
      period: 'Feb 2022 – Aug 2022',
      type: 'Internship',
      location: 'Pune, Maharashtra, India',
      description: 'Quality assurance and testing for banking applications',
      responsibilities: [
        'Contributed to quality assurance of banking applications for clients (Santander, UMB)',
        'Executed functional testing and validated compliance with project requirements',
        'Ensured software quality and reliability through systematic testing procedures',
        'Collaborated with development teams to identify and resolve issues'
      ],
      technologies: ['Quality Assurance', 'Functional Testing', 'Banking Applications', 'Compliance Testing']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
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
        <title>Experience | Prathamesh Kamble</title>
        <meta name='description' content='Professional experience of Prathamesh Kamble - Full Stack Developer with expertise in Spring Boot, React, Android Kotlin, and international experience in Japan.' />
        <meta name='keywords' content='Prathamesh Kamble experience, Full Stack Developer, Technoproject Co., Ltd., Spring Boot, Android' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <motion.main
        className='min-h-screen max-w-4xl mx-auto px-4 py-12'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className='text-4xl font-bold mb-8'
          variants={itemVariants}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Professional Experience
        </motion.h1>

        <motion.div className='space-y-8' variants={containerVariants}>
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                <div>
                  <motion.h2
                    className='text-2xl font-semibold mb-1'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {exp.title}
                  </motion.h2>
                  <motion.p
                    className='text-lg text-blue-600 dark:text-blue-400 mb-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.company}
                  </motion.p>
                  <motion.p
                    className='text-sm text-gray-500 dark:text-gray-400 mb-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.period} • {exp.type} • {exp.location}
                  </motion.p>
                </div>
                <motion.div
                  className='mt-2 md:mt-0'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === 'Full-time'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {exp.type}
                  </span>
                </motion.div>
              </div>

              <motion.p
                className='text-gray-700 dark:text-gray-300 mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {exp.description}
              </motion.p>

              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className='text-lg font-medium mb-2'>Key Responsibilities:</h3>
                <ul className='list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400'>
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className='text-lg font-medium mb-2'>Technologies Used:</h3>
                <div className='flex flex-wrap gap-2'>
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + idx * 0.05, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-2xl font-semibold mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div
            className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className='text-lg font-semibold mb-2'>Master of Computer Applications (MCA)</h3>
                <p className='text-blue-600 dark:text-blue-400 mb-1'>Indira College of Engineering and Management</p>
                <p className='text-sm text-gray-500'>2023 – 2025 | Pune, MH | CGPA: 7.96</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className='text-lg font-semibold mb-2'>Bachelor of Computer Applications (BCA)</h3>
                <p className='text-blue-600 dark:text-blue-400 mb-1'>Brihan Maharashtra College of Commerce</p>
                <p className='text-sm text-gray-500'>2019 – 2022 | Pune, MH | CGPA: 7.30</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='mt-8 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block mr-4'
          >
            <Link href='/projects' className='btn-primary'>View Projects</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block'
          >
            <Link href='/contact' className='btn-outline'>Get In Touch</Link>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  )
}

export default Experience