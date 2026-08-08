import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrainCircuitIcon, Code, Rocket } from "lucide-react";

const About: React.FC = () => {
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
        delayChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: <Code className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: "Full-Stack Development",
      description:
        "End-to-end web apps using Next.js, React, TypeScript, Node.js/Express, and FastAPI — from API design to containerised deployment.",
    },
    {
      icon: (
        <BrainCircuitIcon className="w-6 h-6 text-primary dark:text-primary-light" />
      ),
      title: "AI & LLM Integration",
      description:
        "Building LLM-powered products with LangChain, LangGraph, RAG pipelines, tool use, and multi-agent systems — from Anthropic, OpenAI, and Gemini APIs to full product integration, with LangSmith for tracing.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: "Cloud Deployment & DevOps",
      description:
        "CI/CD pipelines with GitHub Actions, Docker, and deployments on Vercel, Render, Railway, and AWS — plus system design fundamentals like caching, load balancing, and CDNs for production-ready services.",
    },
  ];

  return (
    <section
      id="about"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
              AI-native full-stack engineer with 4.5+ years of experience
              building production web applications and LLM-powered products. I
              specialise in Next.js, React, Node.js/Express, and FastAPI — with
              hands-on experience in LangChain, LangGraph, RAG pipelines, tool
              use, AI agents (ReAct), multi-agent systems, and LangSmith tracing
              across the Anthropic, OpenAI, and Gemini APIs. I also bring
              working knowledge of system design fundamentals — caching, load
              balancing, CDNs, message queues — and cloud deployment on AWS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative w-full h-64 md:h-96 mb-3 rounded-xl overflow-hidden mt-16">
                <motion.img
                  src="/hillol-profile-pic.jpeg"
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
                I started as a self-taught developer in 2015 — freelancing,
                reading docs, learning by shipping. That grew into full-stack
                roles where I've architected APIs, built CMS platforms,
                integrated payments, and deployed cloud-ready applications.
              </p>
              <p className="text-dark/70 dark:text-light/70">
                I've worked the full stack: React UIs, Node.js/Express and
                FastAPI backends, PostgreSQL, MySQL, and MongoDB, with some
                backend microservices work in Java/Spring Boot along the way.
                More recently I've gone deep on the AI layer — LangChain,
                LangGraph orchestration and state machines, RAG pipelines with
                vector embeddings, tool use and function calling, multi-agent
                systems, and LangSmith for tracing and debugging — built and
                shipped, not just studied. I also bring working knowledge of
                system design fundamentals — caching with Redis, load balancing,
                CDNs, message queues, read replicas, object storage — and
                deploying to AWS.
              </p>
              <p className="text-dark/70 dark:text-light/70">
                Core stack: React · Next.js · TypeScript · Node.js/Express ·
                FastAPI · REST API · PostgreSQL · MySQL · MongoDB ·
                LangChain/LangGraph · RAG · Vector Embeddings · Multi-Agent
                Systems · LangSmith · Orchestration · Docker · System Design
                (Redis, Load Balancing, CDN) · AWS
              </p>
              <p className="text-dark/70 dark:text-light/70">
                Two projects I'm proudest of: Ledger, a LangGraph-orchestrated
                ReAct agent that reasons over 17 tools, grounds answers in live
                database retrieval via RAG, and streams responses token-by-token
                with full LangSmith tracing — FastAPI/async SQLAlchemy backend,
                Next.js frontend. And Cookmind, an AI recipe generator that
                turns a photo of your ingredients into ready-to-cook recipes
                using Google's Gemini API. Open to remote roles at AI-product
                companies where I can own the full stack and the LLM integration
                layer.
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
                <p className="text-dark/70 dark:text-light/70">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
