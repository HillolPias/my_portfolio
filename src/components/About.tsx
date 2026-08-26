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
        "Building LLM-powered products with LangChain, LangGraph, RAG pipelines, tool use, and multi-agent systems — from OpenAI and Gemini APIs to full product integration, with LangSmith for tracing.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary dark:text-primary-light" />,
      title: "Cloud Deployment & DevOps",
      description:
        "Test-gated CI/CD pipelines with GitHub Actions and Docker — a failing test blocks both the build and the release. Deployed on Vercel, Render, and Railway, with working familiarity in AWS and system design fundamentals like caching, load balancing, and CDNs.",
    },
  ];

  const coreStack = {
    "AI / LLM": [
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Embeddings",
      "ChromaDB",
      "Multi-Agent Systems",
      "ReAct Agents",
      "LangSmith",
      "OpenAI API",
      "Gemini API",
    ],
    "Full-Stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js/Express",
      "FastAPI",
      "REST API",
      "Socket.IO",
    ],
    "Data & Infra": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "GitHub Actions CI/CD",
    ],
    "Testing & Quality": ["pytest", "Test-Gated Deployments"],
  };

  const systemDesignFamiliarity = [
    "Redis",
    "Load Balancing",
    "CDNs",
    "Message Queues",
    "AWS",
  ];

  const aiProjects = [
    {
      project: "Support Ops Copilot — Multi-Agent Customer Support System",
      tech: [
        "LangGraph",
        "RAG",
        "FastAPI",
        "OpenAI API",
        "ChromaDB",
        "MCP",
        "Next.js",
      ],
      points: [
        "Built a LangGraph multi-agent pipeline (triage → RAG → draft → guardrail → human approval → MCP execution) with genuine human-in-the-loop control via interrupt(), blocking any customer-facing action until human sign-off.",
        "Guardrails & security: independent LLM-as-judge guardrail + rule-based safety checks (prompt-injection detection, credential leakage) that auto-escalates any response failing verification instead of sending it",
        "Offline eval harness gates CI on GitHub Actions, catching real regressions before they shipped.",
        "Integrated a real MCP client-server tool-calling architecture (not a mocked schema): a standalone MCP server exposed over stdio, with the action-executor calling it via the actual protocol handshake. ",
        "Instrumented per-node token usage and latency across the pipeline, surfaced via the API for cost-per-resolution analysis. ",
        "Applied cost-aware model routing (gpt-4o-mini for triage/guardrail, gpt-4o for drafting) and shipped via a documented small-team Git workflow (feature branches, PR reviews, CI-gated merges).",
      ],
    },
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
        "Built a full CI/CD pipeline (GitHub Actions): an automated pytest suite against an ephemeral Postgres instance gates both Docker image builds (Docker Hub) and production deploys (Render).",
        "Diagnosed and resolved LLM tool-selection ambiguity and argument-mapping errors in the agent's tool-calling logic using LangSmith traces — failures invisible to standard error handling, since the agent returned confident but incorrect answers rather than throwing exceptions.",
        "Containerised with Docker and Docker Compose (healthchecks, named volumes, service networking) for reproducible local development.",
        "Built a custom-designed Next.js/TypeScript frontend with a live-streaming chat UI.",
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
              hands-on experience in LangChain, LangGraph, RAG pipelines
              (ChromaDB), tool use, AI agents (ReAct), multi-agent systems, and
              LangSmith tracing across the OpenAI and Gemini APIs. On the
              backend, I work with PostgreSQL and async SQLAlchemy, and ship
              through test-gated CI/CD pipelines (GitHub Actions, Docker). I
              also bring working familiarity with system design fundamentals —
              caching, load balancing, CDNs, message queues — and cloud
              architecture on AWS, applied in design discussions rather than
              production deployment so far.
            </p>
          </motion.div>

          {/* Journey — image paired with a short narrative only */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 md:items-start mb-20">
            <motion.div
              variants={itemVariants}
              className="md:sticky md:mt-16 space-y-4 md:space-y-8"
            >
              <div className="relative w-full h-64 md:h-[380px] rounded-xl overflow-hidden ring-1 ring-dark/10 dark:ring-light/10 shadow-lg">
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

              <div className="rounded-xl border border-dark/10 dark:border-light/10 px-5 py-4">
                <p className="font-semibold">Hillol Das Pias</p>
                <p className="text-sm text-dark/60 dark:text-light/60">
                  AI-Native Full-Stack Engineer · Dhaka, Bangladesh · Open to
                  Remote
                </p>
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
                I started as a self-taught developer in 2015 — freelancing,
                reading docs, learning by shipping. That grew into full-stack
                roles where I've architected APIs, built CMS platforms,
                integrated payments, and deployed cloud-ready applications. I've
                worked the full stack: Next.js/React UIs, Node.js/Express and
                FastAPI backends, PostgreSQL, MySQL, and MongoDB, with some
                Java/Spring Boot microservices along the way — plus real-time
                systems with Socket.IO and CI/CD pipelines (Docker, GitHub
                Actions) where a failing test blocks both the build and the
                release, not just in theory. More recently I've gone deep on the
                AI layer — LangChain, LangGraph orchestration, RAG (ChromaDB),
                tool use, and multi-agent systems across the OpenAI and Gemini
                APIs, traced end-to-end with LangSmith — built and shipped, not
                just studied. I also bring working familiarity with system
                design fundamentals — caching, load balancing, CDNs, message
                queues, read replicas, and AWS — which I can speak to in depth
                but haven't yet deployed in production.
              </p>
            </motion.div>
          </div>

          {/* Core stack — grouped by category */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-semibold mb-6">Core Stack</h3>

            <div className="space-y-6">
              {Object.entries(coreStack).map(([category, skills]) => (
                <div key={category}>
                  <p className="text-xs font-medium uppercase tracking-wider text-dark/40 dark:text-light/40 mb-2.5">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full border border-dark/15 dark:border-light/15 bg-dark/[0.03] dark:bg-light/[0.03] text-sm text-dark/80 dark:text-light/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* System design — familiarity tier, visually distinct */}
            <div className="mt-8 pt-6 border-t border-dark/10 dark:border-light/10">
              <p className="text-xs font-medium uppercase tracking-wider text-dark/40 dark:text-light/40 mb-1">
                System Design
              </p>
              <p className="text-xs text-dark/40 dark:text-light/40 mb-2.5">
                Familiarity — applied in design discussions, not yet in
                production
              </p>
              <div className="flex flex-wrap gap-2.5">
                {systemDesignFamiliarity.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full border border-dashed border-dark/15 dark:border-light/15 text-sm text-dark/45 dark:text-light/45"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured AI projects — cards */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">
              Featured AI Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {aiProjects.map((p, index) => {
                // Check if this is the 3rd item in a 3-item array
                const isLastOdd =
                  index === aiProjects.length - 1 &&
                  aiProjects.length % 2 !== 0;

                return (
                  <div
                    key={p.project}
                    className={`rounded-xl border border-dark/10 dark:border-light/10 p-6 space-y-4 ${isLastOdd ? "md:col-start-2 md:col-span-2" : "md:col-span-2"}`}
                  >
                    <h4 className="text-lg font-semibold">{p.project}</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-md bg-dark/5 dark:bg-light/5 text-dark/60 dark:text-light/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2 text-sm text-dark/70 dark:text-light/70 list-disc list-inside">
                      {p.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.div>

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
