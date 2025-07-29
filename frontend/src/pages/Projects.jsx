import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5001/api/projects');
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
        // Fallback to static data if API fails
        setProjects([
          {
            id: 1,
            title: 'AI Legal Document Agent',
            description: 'An AI-powered agent that classifies legal document clauses and answers questions about uploaded documents. Supports PDF, DOCX, TXT, JSON, and image files with OCR and NLP capabilities.',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop',
            technologies: ['Python', 'FastAPI', 'React', 'NLP', 'OCR', 'LLM'],
            githubUrl: 'https://github.com/apoorva-18/AI_Legal_Bot',
            liveUrl: 'https://github.com/apoorva-18/AI_Legal_Bot',
            featured: true,
          },
          {
            id: 2,
            title: 'SerenitySpace - Mental Health Platform',
            description: 'A comprehensive mental health platform featuring AI chatbot support, mood tracking, group sessions, challenges, and community forums. Built with Python Flask backend and modern web technologies.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
            technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'MongoDB', 'AI Chatbot'],
            githubUrl: 'https://github.com/apoorva-18/SerenitySpace',
            liveUrl: 'https://github.com/apoorva-18/SerenitySpace ',
            featured: true,
          },
          {
            id: 3,
            title: 'Data Analysis Dashboard',
            description: 'A comprehensive data visualization dashboard that analyzes and presents insights from large datasets using interactive charts and graphs.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
            technologies: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Streamlit'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            featured: false,
          },
          {
            id: 4,
            title: 'Portfolio Website',
            description: 'A responsive portfolio website built with modern web technologies and featuring smooth animations and dark mode.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
            technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            featured: false,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-600 dark:text-primary-400" />
          <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge 
              and learning experience in my journey as a developer.
            </p>
          </motion.div>

          {error && (
            <motion.div variants={itemVariants} className="text-center mb-8">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </motion.div>
          )}

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter(project => project.featured)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} featured />
                ))}
            </div>
          </motion.div>

          {/* All Projects */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              All Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`card overflow-hidden ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 