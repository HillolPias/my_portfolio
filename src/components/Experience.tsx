import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: { duration: 0.5 },
    },
  };

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "SwaPE IT Solutions",
      location: "Remote",
      period: "December 2023-Present",
      description: [
        "Architected and shipped production web apps using Next.js (App Router), Node.js, React, and Python (FastAPI) services, with fully responsive UIs via Tailwind CSS and Framer Motion.",
        "Integrated LLM APIs (OpenAI, Google Gemini) into client-facing features, gaining hands-on experience with prompt engineering and AI-powered product flows.",
        "Led system design decisions and defined scalable architecture patterns across multiple client projects.",
        "Improved code quality through automated tooling, linting, peer reviews, and performance profiling.",
        "Integrated third-party services and APIs, reducing development time by establishing reusable integration patterns.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Raj IT Solutions Ltd.",
      location: "Remote/On-site",
      period: "November 2021-December 2023",
      description: [
        "Built RESTful APIs with Next.js and Node.js (Express), and Python (FastAPI): implemented real-time features using Socket.IO, serving concurrent users without performance degradation.",
        "Developed and maintained microservices using Java (Spring Boot), ensuring high availability and horizontal scalability.",
        "Integrated Strapi headless CMS enabling non-technical stakeholders to manage content without developer intervention.",
        "Established CI/CD pipelines with Docker, cutting deployment time significantly and reducing production incidents.",
      ],
    },
    // {
    //   title: "Chief Executive Officer (CEO)",
    //   company: "LearnOn - Online Education Platform",
    //   location: "Rajshahi, Bangladesh",
    //   period: "January 2021-July 2022",
    //   description: [
    //     "Video Editing and Animation(Adobe Premier Pro, After Effects etc.)",
    //     "Content Creation, Script Writing & Monitoring Team Activities",
    //     "Graphic Design(Adobe Illustrator, InDesign, Photoshop, Canva etc.)",
    //     "Sound Designing(Adobe Audition etc.)",
    //     "Human Resource Management, Planning & Budgeting",
    //     "Managing Social Media and SEO",
    //   ],
    // },

    {
      title: "Freelance Full-Stack Developer",
      company: "Independent (Self-Learning & Projects)",
      location: "Dhaka, Bangladesh",
      period: "October 2015-present",
      description: [
        {
          project: "Ledger — AI Agent Task & Project Manager",
          tech: [
            "Next.js",
            "FastAPI",
            "async SQLAlchemy",
            "PostgreSQL",
            "LangGraph",
            "ChromaDB",
            "LangSmith",
          ],
          points: [
            "Built a ReAct-style AI agent (LangGraph) with 17 tools for CRUD operations and RAG-based semantic search (ChromaDB), streaming responses token-by-token; traced end-to-end in LangSmith.",
            "Designed async REST API (FastAPI, SQLAlchemy 2.0) with Alembic migrations, deployed on PostgreSQL (Neon).",
            "Built full CI/CD pipeline (GitHub Actions): automated pytest suite against ephemeral Postgres gates both Docker image builds (Docker Hub) and production deploys (Render).",
            "Diagnosed and resolved LLM tool-selection ambiguity and argument-mapping errors in the agent's tool-calling logic using LangSmith traces — failures invisible to standard error handling, since the agent returned confident but incorrect answers rather than throwing exceptions.",
            "Containerized with Docker + Docker Compose for reproducible local development.",
            "Built a custom-designed Next.js/TypeScript frontend with live-streaming chat UI.",
          ],
        },
        {
          project: "Cookmind — AI Recipe Generator",
          tech: [
            "Next.js",
            "React",
            "Google Gemini API",
            "Strapi",
            "PostgreSQL",
            "Clerk",
            "Arcjet",
          ],
          points: [
            "Built an AI recipe generator that analyses a photo of a user's ingredients via the Google Generative AI (Gemini) API and returns tailored, ready-to-cook recipes.",
            "Implemented drag-and-drop ingredient photo upload and PDF export of generated recipes.",
            "Implemented Clerk-based authentication and Arcjet bot/rate-limit protection on a Next.js frontend, backed by a Strapi headless CMS on PostgreSQL.",
          ],
        },
        "Delivered e-commerce and booking systems using Node.js, React, and Next.js with Stripe payment integration, role-based access control, and RESTful APIs.",
        "Designed and optimized PostgreSQL, MongoDB, and MySQL databases for scalable, production-ready applications.",
      ],
    },
    {
      title: "Graphic Designer",
      company: "Cloudville(Social Managing Company)",
      location: "Dhaka, Bangladesh",
      period: "January 2020-October 2021",
      description: [
        "Designed digital assets and social media content; developed strong visual communication and client-facing skills directly applicable to frontend UI work.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-light-accent dark:bg-dark-accent relative"
    >
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
              My professional journey and the valuable experience I've gained
              along the way.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 md:pl-0"
              >
                <div className="flex flex-col md:items-start md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-start gap-2 text-primary dark:text-primary-light mb-2">
                      <Briefcase size={18} className="mt-1" />
                      <h3 className="text-xl font-semibold">
                        {experience.title}
                      </h3>
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
                    <h4 className="text-lg font-medium mb-3">
                      {experience.company}
                    </h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => {
                        // ✅ Case 1: Normal string
                        if (typeof item === "string") {
                          return (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-dark/70 dark:text-light/70"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light flex-shrink-0" />
                              {item}
                            </li>
                          );
                        }

                        // ✅ Case 2: Object with points
                        if (typeof item === "object") {
                          return (
                            <li key={idx} className="space-y-2">
                              {/* Project Title */}
                              <div className="flex items-start gap-2">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light flex-shrink-0" />
                                <p className="font-medium text-dark dark:text-light">
                                  {item.project}{" "}
                                  <span className="text-sm text-dark/50 dark:text-light/50">
                                    ({item.tech.join(" · ")})
                                  </span>
                                </p>
                              </div>

                              {/* Sub points */}
                              <ul className="ml-5 space-y-1 border-l border-primary/20 pl-3">
                                {item.points.map((point, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-dark/70 dark:text-light/70"
                                  >
                                    <span className="mt-2 w-1 h-1 rounded-full bg-primary/70 flex-shrink-0" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        }

                        return null;
                      })}
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
