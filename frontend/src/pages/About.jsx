// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
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

  const experiences = [
    {
      title: 'AI/ML Developer Intern',
      company: 'TechCorp Solutions',
      period: '2024 - Present',
      description: 'Working on machine learning models and AI applications using Python, TensorFlow, and cloud technologies.',
    },
    {
      title: 'Data Analyst intern',
      company: 'Head Field Solutions Pvt. Ltd. ',
      period: 'Feb 2025 - May 2025',
      description: 'Conducted end-to-end data research and visual reporting using SQL and Excel,delivered insights using tools like Zoom, Apollo,improved data-driven decision-making and presented results to internal stakeholders',
    },
    {
      title: 'Frontend Developer trainee',
      company: 'CodingKart',
      period: 'July 2024 - Sept 2024',
      description: 'Designed and implemented dynamic UI components using React, integrated REST APIs to fetch and display real-time data, and optimized performance for seamless user experience.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Jagran Lakecity University',
      period: '2021 - 2025',
      description: 'Graduated with honors, specialized in Artificial Intelligence and Machine Learning.',
    },
  ];

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
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know me better - my journey, experience, and what drives me in the world of technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="card p-6 h-fit">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Apoorva
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Computer Science Student
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Indore, Madhya Pradesh
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      apoorvasinghsomvanshi@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      +91 9098900855
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="card p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Story
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I'm a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning 
                    at Jagran Lakecity University. My journey in technology began with a curiosity about how AI can 
                    solve real-world problems, which led me to pursue a degree in Computer Science.
                  </p>
                  <p>
                    Throughout my academic career, I've worked on diverse projects ranging from machine learning models 
                    to web applications. I believe in writing clean, maintainable code and creating intelligent solutions 
                    that are both innovative and practical.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new AI technologies, contributing 
                    to open-source projects, or participating in hackathons and coding competitions.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Experience
                  </h3>
                </div>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="card p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.school}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {edu.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 