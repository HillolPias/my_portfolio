import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Led a team of 5 developers in building a cloud-based SaaS platform",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Integrated third-party APIs and payment gateways",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      location: "Boston, MA",
      period: "2017 - 2019",
      description: [
        "Built responsive websites using React and Next.js",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Reduced page load times by 50% through optimization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-light-accent dark:bg-dark-accent relative">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
              My professional journey and the valuable experience I've gained along the way.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 md:pl-0"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 text-primary dark:text-primary-light mb-2">
                      <Briefcase size={18} />
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-dark/70 dark:text-light/70 mb-2">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-dark/70 dark:text-light/70">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-medium mb-3">{experience.company}</h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-dark/70 dark:text-light/70">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index !== experiences.length - 1 && (
                  <div className="absolute left-4 md:left-1/3 top-full w-px h-8 bg-primary/20 dark:bg-primary-light/20" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;