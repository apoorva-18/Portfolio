import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 40 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 40 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Firebase', level: 80 },
        { name: 'Docker', level: 65 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'Mobile UI/UX', level: 70 },
        { name: 'App Store Deployment', level: 65 },
      ],
    },
    {
      title: 'Design & Tools',
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: 'Figma', level: 45 },
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Webpack', level: 70 },
        { name: 'Jest', level: 75 },
      ],
    },
    {
      title: 'Other Technologies',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'GraphQL', level: 70 },
        { name: 'WebSockets', level: 65 },
        { name: 'PWA', level: 75 },
        { name: 'SEO', level: 70 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Security Best Practices', level: 75 },
      ],
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
              Skills & Technologies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's an overview of the technologies and tools I work with. I'm constantly 
              learning and expanding my skill set to stay current with industry trends.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-primary-600 dark:text-primary-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card p-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I believe in continuous learning. I'm currently 
                exploring new frameworks, tools, and methodologies to enhance my development 
                capabilities and deliver better solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 