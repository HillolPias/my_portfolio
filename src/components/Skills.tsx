import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const frontend: Skill[] = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "JavaScript", level: 85, color: "#F7DF1E" },
    { name: "TypeScript", level: 80, color: "#3178C6" },
    { name: "CSS/SCSS", level: 85, color: "#1572B6" },
    { name: "HTML", level: 95, color: "#E34F26" },
    { name: "Next.js", level: 75, color: "#000000" }
  ];

  const backend: Skill[] = [
    { name: "Node.js", level: 80, color: "#339933" },
    { name: "Express", level: 75, color: "#000000" },
    { name: "MongoDB", level: 70, color: "#47A248" },
    { name: "PostgreSQL", level: 65, color: "#336791" },
    { name: "GraphQL", level: 60, color: "#E10098" },
    { name: "Firebase", level: 70, color: "#FFCA28" }
  ];

  const other: Skill[] = [
    { name: "Git", level: 85, color: "#F05032" },
    { name: "Docker", level: 65, color: "#2496ED" },
    { name: "CI/CD", level: 60, color: "#4285F4" },
    { name: "Figma", level: 75, color: "#F24E1E" },
    { name: "Agile/Scrum", level: 80, color: "#6DB33F" },
    { name: "TDD", level: 70, color: "#3C9CD7" }
  ];

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
      <motion.div 
        variants={itemVariants}
        className="mb-4"
      >
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{skill.name}</span>
          <span className="text-sm font-medium">{skill.level}%</span>
        </div>
        <div className="w-full h-2 bg-light-accent dark:bg-dark-accent rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ 
              backgroundColor: skill.color,
              opacity: 0.8
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-light-accent dark:bg-dark-accent relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-1/2 bottom-0 left-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
              Here's a comprehensive overview of my technical skills and expertise across various domains.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
              <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
                {frontend.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-center">Backend Development</h3>
              <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
                {backend.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-center">Other Skills</h3>
              <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
                {other.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;