import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "web",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: "https://images.pexels.com/photos/3912368/pexels-photo-3912368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Firebase", "Redux"],
    category: "mobile",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 3,
    title: "Financial Planning Platform",
    description: "A web platform for financial planning, budgeting, and investment tracking with interactive visualizations.",
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    category: "web",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 4,
    title: "Travel Blog",
    description: "A travel blog with interactive maps, photo galleries, and travel guides for various destinations.",
    image: "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Gatsby", "GraphQL", "Styled Components"],
    category: "web",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 5,
    title: "AI Chatbot Assistant",
    description: "An AI-powered chatbot that provides customer support, answers questions, and helps with tasks.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "NLP", "React"],
    category: "ai",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 6,
    title: "Real Estate Marketplace",
    description: "A platform for buying, selling, and renting properties with virtual tours and neighborhood insights.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB"],
    category: "web",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
    { id: "ai", name: "AI" }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-1/2 bottom-0 right-0 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise in various technologies.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white dark:bg-primary-light dark:text-dark' 
                    : 'bg-light-accent dark:bg-dark-accent hover:bg-primary/10 dark:hover:bg-primary-light/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="rounded-xl overflow-hidden bg-light dark:bg-dark shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-dark/10 dark:border-light/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-dark/70 dark:text-light/70 mb-4 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium hover:text-primary dark:hover:text-primary-light transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium hover:text-primary dark:hover:text-primary-light transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-dark/20 dark:border-light/20 rounded-lg hover:bg-dark/5 dark:hover:bg-light/5 transition-colors duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;