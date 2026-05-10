// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// interface Skill {
//   name: string;
//   level: number;
//   color: string;
// }

// const Skills: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   const frontend: Skill[] = [
//     { name: "Next.js", level: 85, color: "#000000" },
//     { name: "React", level: 90, color: "#61DAFB" },
//     { name: "JavaScript", level: 85, color: "#F7DF1E" },
//     { name: "TypeScript", level: 80, color: "#3178C6" },
//     { name: "Tailwind CSS", level: 85, color: "#1572B6" },
//     { name: "Zustand", level: 90, color: "#453F39" },
//     { name: "Shadcn UI", level: 85, color: "#000000" },
//     { name: "Framer Motion", level: 90, color: "#E34F26" },
//     { name: "Figma/Illustrator", level: 85, color: "#F24E1E" },
//   ];

//   const backend: Skill[] = [
//     { name: "Node.js", level: 85, color: "#339933" },
//     { name: "Express", level: 90, color: "#373737" },
//     { name: "Python", level: 85, color: "#7B7FB5" },
//     { name: "FastAPI", level: 90, color: "#00694A" },
//     { name: "Java", level: 80, color: "#E34F26" },
//     { name: "Spring Boot", level: 80, color: "#6DB33F" },
//     { name: "PostgreSQL/MongoDB/MySQL", level: 85, color: "#336791" },
//     { name: "Supabase/Firebase", level: 85, color: "#44D093" },
//     { name: "NextAuth/Clerk", level: 80, color: "#BD30E5" },
//   ];

//   const other: Skill[] = [
//     { name: "Git/GitHub", level: 95, color: "#F05032" },
//     { name: "strapi (CMS)", level: 85, color: "#4945ff" },
//     { name: "Neon DB", level: 85, color: "#34d59a" },
//     { name: "Arcjet", level: 80, color: "#000000" },
//     { name: "Socket.IO", level: 85, color: "#21af90" },
//     { name: "Stripe", level: 80, color: "#4285F4" },
//     { name: "Vercel", level: 90, color: "#000000" },
//     { name: "Zod", level: 80, color: "#3C9CD7" },
//     { name: "Docker & Containerization", level: 80, color: "#0886AB" },
//   ];

//   const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
//     return (
//       <motion.div variants={itemVariants} className="mb-4">
//         <div className="flex justify-between mb-1">
//           <span className="text-sm font-medium">{skill.name}</span>
//           <span className="text-sm font-medium">{skill.level}%</span>
//         </div>
//         <div className="w-full h-2 bg-light-accent dark:bg-dark-accent rounded-full overflow-hidden">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
//             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//             className="h-full rounded-full"
//             style={{
//               backgroundColor: skill.color,
//               opacity: 0.8,
//             }}
//           />
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <section
//       id="skills"
//       className="py-24 bg-light-accent dark:bg-dark-accent relative"
//     >
//       <div className="absolute inset-0 z-0">
//         <div className="absolute -inset-1/2 bottom-0 left-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 md:px-12 relative z-10">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="max-w-6xl mx-auto"
//         >
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Skills & Expertise
//             </h2>
//             <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
//             <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
//               Here's a comprehensive overview of my technical skills and
//               expertise across various domains.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <motion.div variants={itemVariants}>
//               <h3 className="text-xl font-semibold mb-6 text-center">
//                 Frontend Development
//               </h3>
//               <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
//                 {frontend.map((skill, index) => (
//                   <SkillBar key={index} skill={skill} />
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <h3 className="text-xl font-semibold mb-6 text-center">
//                 Backend Development
//               </h3>
//               <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
//                 {backend.map((skill, index) => (
//                   <SkillBar key={index} skill={skill} />
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <h3 className="text-xl font-semibold mb-6 text-center">
//                 Other Skills
//               </h3>
//               <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
//                 {other.map((skill, index) => (
//                   <SkillBar key={index} skill={skill} />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // ── NEW: AI & LLM column (leads the section) ──────────────────
  const ai: Skill[] = [
    { name: "LangChain", level: 90, color: "#1C7C54" },
    { name: "LangGraph", level: 85, color: "#0F6E56" },
    { name: "RAG Pipelines", level: 85, color: "#16A34A" },
    { name: "Tool Use / Agents", level: 85, color: "#15803D" },
    { name: "Anthropic API", level: 85, color: "#C2692A" },
    { name: "OpenAI API", level: 90, color: "#10A37F" },
    { name: "Prompt Engineering", level: 85, color: "#7C3AED" },
    { name: "LangSmith", level: 90, color: "#D97706" },
  ];

  // ── Frontend: removed Figma/Illustrator ───────────────────────
  const frontend: Skill[] = [
    { name: "Next.js", level: 85, color: "#000000" },
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "JavaScript", level: 85, color: "#F7DF1E" },
    { name: "TypeScript", level: 80, color: "#3178C6" },
    { name: "Tailwind CSS", level: 85, color: "#1572B6" },
    { name: "Zustand", level: 90, color: "#453F39" },
    { name: "Shadcn UI", level: 85, color: "#000000" },
    { name: "Framer Motion", level: 90, color: "#E34F26" },
  ];

  // ── Backend: removed Supabase/Firebase & NextAuth/Clerk ───────
  const backend: Skill[] = [
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "Express", level: 90, color: "#373737" },
    { name: "Python", level: 85, color: "#7B7FB5" },
    { name: "FastAPI", level: 90, color: "#00694A" },
    { name: "Java", level: 80, color: "#E34F26" },
    { name: "Spring Boot", level: 80, color: "#6DB33F" },
    { name: "PostgreSQL/MongoDB/MySQL", level: 85, color: "#336791" },
    { name: "Socket.IO", level: 85, color: "#21af90" },
  ];

  // ── Other: removed Arcjet & Zod, added GitHub Actions ─────────
  const other: Skill[] = [
    { name: "Git/GitHub", level: 95, color: "#F05032" },
    { name: "GitHub Actions", level: 85, color: "#2088FF" },
    { name: "Docker", level: 80, color: "#0886AB" },
    { name: "Vercel / Railway", level: 90, color: "#000000" },
    { name: "Strapi (CMS)", level: 85, color: "#4945ff" },
    { name: "Neon DB", level: 85, color: "#34d59a" },
    { name: "Stripe", level: 80, color: "#4285F4" },
    { name: "Supabase", level: 80, color: "#44D093" },
  ];

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
      <motion.div variants={itemVariants} className="mb-4">
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
              opacity: 0.8,
            }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="py-24 bg-light-accent dark:bg-dark-accent relative"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-1/2 bottom-0 left-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
              Here's a comprehensive overview of my technical skills and
              expertise across various domains.
            </p>
          </motion.div>

          {/* 4-column grid — AI & LLM leads */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Column 1 — AI & LLM (new, leads) */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-center">
                AI &amp; LLM
              </h3>
              <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
                {ai.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Column 2 — Frontend */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Frontend Development
              </h3>
              <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
                {frontend.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Column 3 — Backend */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Backend Development
              </h3>
              <div className="p-6 rounded-xl bg-light dark:bg-dark shadow-md">
                {backend.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Column 4 — Other Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Other Skills
              </h3>
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
