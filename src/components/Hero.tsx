import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, FileDown } from "lucide-react";
import { cn } from "../lib/utils";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-1/2 top-0 right-0 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -inset-1/2 bottom-0 left-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-dark"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light text-sm font-medium inline-block">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Creating Beautiful Digital{" "}
              <span className="dark:text-purple-200/90 text-violet-900/50">
                Experiences
              </span>
            </h1>

            <p className="text-xl text-dark/70 dark:text-light/70 mb-8">
              I design and build exceptional digital experiences that are fast,
              accessible, and visually appealing.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-8">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300 text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/hillol-das-resume.pdf"
                download
                className="px-8 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-secondary-dark transition-colors duration-300 text-lg font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileDown size={20} />
                Download Resume
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4 mb-12">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-white dark:bg-dark border border-dark/20 dark:border-light/20 rounded-lg hover:bg-dark/5 dark:hover:bg-light/5 transition-colors duration-300 text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4 ">
              {[
                {
                  icon: <Github size={20} />,
                  url: "https://github.com/HillolPias",
                },
                {
                  icon: <Linkedin size={20} />,
                  url: "https://www.linkedin.com/in/hillol-das-pias-56454bb1/",
                },
                { icon: <Twitter size={20} />, url: "https://x.com/HD_Pias" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-dark/20 dark:border-light/20 hover:bg-dark/5 dark:hover:bg-light/5 transition-colors  bg-white dark:bg-dark"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.img
                src="/profile.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-3xl shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={handleScrollToAbout}
      >
        <ArrowDown className="text-dark/70 dark:text-light/70" />
      </motion.div>
    </section>
  );
};

export default Hero;
