import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CodeBracketIcon, ServerIcon, CircleStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Skills: NextPage = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Keycloak', level: 75 },
        { name: 'JWT/OAuth2', level: 85 }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Angular', level: 70 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Android Kotlin', level: 85 },
        { name: 'MVVM Architecture', level: 80 },
        { name: 'HILT', level: 75 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitLab', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Android Studio', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'NLP', level: 65 }
      ]
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CP-2024',
      description: 'Foundational knowledge of AWS Cloud concepts, services, and terminology'
    },
    {
      title: 'Java Programming Certification',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'UDEMY-JAVA-2023',
      description: 'Comprehensive Java programming skills and best practices'
    },
    {
      title: 'JLPT N3 (Japanese Language Proficiency)',
      issuer: 'Japan Foundation',
      date: '2024',
      credentialId: 'JLPT-N3-2024',
      description: 'Intermediate Japanese language proficiency for professional communication'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const getProficiencyColor = (level: number) => {
    if (level >= 85) return 'bg-green-500'
    if (level >= 75) return 'bg-primary'
    if (level >= 65) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getProficiencyLabel = (level: number) => {
    if (level >= 85) return 'Expert'
    if (level >= 75) return 'Advanced'
    if (level >= 65) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <>
      <Head>
        <title>Skills & Certifications | Prathamesh Kamble</title>
        <meta name='description' content='Technical skills and certifications of Prathamesh Kamble - Full Stack Developer proficient in Spring Boot, React, Android Kotlin, and modern web technologies.' />
        <meta name='keywords' content='Prathamesh Kamble skills, Spring Boot developer, Android Kotlin, React, Full Stack certifications' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <motion.main
        className='min-h-screen max-w-6xl mx-auto px-4 py-12'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className='text-center mb-12'
          variants={itemVariants}
        >
          <motion.h1
            className='text-4xl font-bold mb-4'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Skills & Certifications
          </motion.h1>
          <motion.p
            className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A comprehensive overview of my technical expertise and professional certifications
            in full-stack development and enterprise technologies.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl font-semibold mb-8'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-8'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className='text-xl font-semibold mb-6 flex items-center gap-3'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className='w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center' >
                    {category.title === 'Frontend Development' && <CodeBracketIcon className='w-5 h-5 text-white' />}
                    {category.title === 'Backend Development' && <ServerIcon className='w-5 h-5 text-white' />}
                    {category.title === 'Databases & Tools' && <CircleStackIcon className='w-5 h-5 text-white' />}
                    {category.title === 'Platforms & Frameworks' && <WrenchScrewdriverIcon className='w-5 h-5 text-white' />}
                  </div>
                  {category.title}
                </motion.h3>
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className='flex justify-between items-center mb-2'>
                        <span className='font-medium'>{skill.name}</span>
                        <span className='text-sm text-gray-500'>{getProficiencyLabel(skill.level)}</span>
                      </div>
                      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                        <motion.div
                          className={`h-2 rounded-full ${getProficiencyColor(skill.level)}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.2 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl font-semibold mb-8'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300'
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className='flex items-start justify-between mb-4'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className='text-lg font-semibold mb-1'>{cert.title}</h3>
                    <p className='text-primary dark:text-primary font-medium'>{cert.issuer}</p>
                  </motion.div>
                  <motion.span
                    className='text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {cert.date}
                  </motion.span>
                </div>
                <motion.p
                  className='text-gray-600 dark:text-gray-300 mb-3'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {cert.description}
                </motion.p>
                <motion.p
                  className='text-sm text-gray-500'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className='font-medium'>Credential ID:</span> {cert.credentialId}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Additional Skills */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl font-semibold mb-8'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Additional Expertise
          </motion.h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Testing',
                description: 'Manual API Testing, Postman, Debugging & Log Analysis'
              },
              {
                title: 'DevOps',
                description: 'Docker, CI/CD, Version Control (Git)'
              },
              {
                title: 'Soft Skills',
                description: 'Problem Solving, Team Collaboration, Agile Development'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300'
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className='text-lg font-semibold mb-2'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p
                  className='text-gray-600 dark:text-gray-300'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className='text-gray-600 dark:text-gray-300 mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Always learning and exploring new technologies
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href='/contact' className='btn-primary'>Discuss a Project</Link>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  )
}

export default Skills