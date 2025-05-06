import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <Code className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: "Web Development",
      description: "Building responsive, accessible, and performant websites and web applications with modern technologies."
    },
    {
      icon: <Palette className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide an exceptional user experience."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: "Performance Optimization",
      description: "Enhancing website performance for faster load times and improved user satisfaction."
    }
  ];

  return (
    <section id="about" className="py-24 bg-light-accent dark:bg-dark-accent relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-1/2 top-0 left-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
              I'm a passionate developer with a strong focus on creating elegant solutions that solve real-world problems. With over 1.5 years of experience, I've worked on a wide range of projects across various industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative w-full h-64 md:h-96 mb-6 rounded-xl overflow-hidden">
                <motion.img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={inView ? { scale: 1 } : { scale: 1.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-dark/70 dark:text-light/70">
                I started my journey as a self-taught developer, learning through countless hours of tutorials, documentation, and building projects. My curiosity and passion for technology have been the driving forces behind my growth.
              </p>
              <p className="text-dark/70 dark:text-light/70">
                Over the years, I've honed my skills in various technologies and frameworks, always staying at the forefront of innovation. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <p className="text-dark/70 dark:text-light/70">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </motion.div>
          </div>
          
          <motion.h3 
            variants={itemVariants} 
            className="text-2xl font-semibold mb-8 text-center"
          >
            What I Offer
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-light dark:bg-dark shadow-md hover:shadow-lg transition-shadow duration-300 border border-dark/10 dark:border-light/10"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10 dark:bg-primary-light/10 inline-block">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-dark/70 dark:text-light/70">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;