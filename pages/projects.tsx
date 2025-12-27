import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projects = [
	{
		id: 1,
		title: 'Laptop Comparison Website',
		description:
			'A secure web platform for comparing laptops with enterprise-level API security. Features BFF architecture, Keycloak authentication, and comprehensive product comparison tools.',
		techStack: [
			'Spring Boot',
			'OpenAPI Specification',
			'Keycloak',
			'OAuth2',
			'JWT',
			'RBAC',
			'BFF Architecture',
		],
		github: 'https://github.com/PrathameshKamble01/laptop-comparison',
		demo: '',
		featured: true,
		category: 'Full Stack Application',
	},
	{
		id: 2,
		title: 'Warehouse Management Android Application',
		description:
			'A production-ready Android application for warehouse operations with modern architecture. Includes MVVM pattern, HILT dependency injection, Firebase integration, and GitLab collaboration.',
		techStack: [
			'Kotlin',
			'Android',
			'MVVM',
			'HILT',
			'Firebase',
			'GitLab',
		],
		github: 'https://github.com/PrathameshKamble01/warehouse-android',
		demo: '',
		featured: true,
		category: 'Mobile Application',
	},
	{
		id: 3,
		title: 'Cinescope - Movie Recommendation System',
		description:
			'A full-stack movie recommendation platform with secure authentication and personalized suggestions. Built with modern web technologies and scalable backend architecture.',
		techStack: ['Spring Boot', 'ReactJS', 'PostgreSQL', 'JWT', 'REST APIs'],
		github: 'https://github.com/PrathameshKamble01/cinescope',
		demo: '',
		featured: false,
		category: 'Web Application',
	},
	{
		id: 4,
		title: 'ICEM-PRAT Chatbot',
		description:
			'An AI-powered chatbot for college admissions and student queries. Uses PyTorch and NLP for intelligent conversation handling and information retrieval.',
		techStack: ['PyTorch', 'NLP', 'Deep Learning', 'Python', 'Web Integration'],
		github: 'https://github.com/PrathameshKamble01/icem-prat-chatbot',
		demo: '',
		featured: false,
		category: 'AI/ML Project',
	},
]

const Projects: NextPage = () => {
	const featuredProjects = projects.filter((project) => project.featured)
	const otherProjects = projects.filter((project) => !project.featured)

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<>
			<Head>
				<title>Projects | Mohit Jakhotra</title>
				<meta
					name='description'
					content='Portfolio of projects by Prathamesh Kamble - Full Stack Developer. Featuring laptop comparison website, warehouse Android app, and movie recommendation system.'
				/>
				<meta
					name='keywords'
					content='Prathamesh Kamble projects, Spring Boot, Android Kotlin, React applications, Full Stack projects'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Navbar />
			<motion.main
				className='min-h-screen max-w-6xl mx-auto px-4 py-12'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<motion.div className='text-center mb-12' variants={itemVariants}>
					<motion.h1
						className='text-4xl font-bold mb-4'
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						My Projects
					</motion.h1>
					<motion.p
						className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						A showcase of my work in full-stack development, Android applications, and AI projects
						<br className='hidden sm:inline' />
						solving real-world problems with modern technologies.
					</motion.p>
				</motion.div>

				{/* Featured Projects */}
				<motion.section
					className='mb-12'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.h2
						className='text-2xl font-semibold mb-6'
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						viewport={{ once: true }}
					>
						Featured Projects
					</motion.h2>
					<motion.div
						className='grid grid-cols-1 lg:grid-cols-2 gap-8'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
					>
						{featuredProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
							>
								<div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-primary/20 dark:border-primary-dark'>
									<div className='flex justify-between items-start mb-4'>
										<span className='bg-primary/10 dark:bg-primary-dark text-primary dark:text-white px-3 py-1 rounded-full text-sm font-medium'> 
											{project.category}
										</span>
										{project.featured && (
											<span className='bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium'>
												Featured
											</span>
										)}
									</div>
									<ProjectCard project={project} />
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Other Projects */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.h2
						className='text-2xl font-semibold mb-6'
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						viewport={{ once: true }}
					>
						Other Projects
					</motion.h2>
					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
					>
						{otherProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
							>
								<div className='mb-2'>
									<span className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium'>
										{project.category}
									</span>
								</div>
								<ProjectCard project={project} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				<motion.div
					className='mt-12 text-center'
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
						Interested in collaborating on a project?
					</motion.p>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link href='/contact' className='btn-primary'>
							Let&apos;s Work Together
						</Link>
					</motion.div>
				</motion.div>
			</motion.main>
			<Footer />
		</>
	)
}

export default Projects
