import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, url: "https://github.com/HillolPias" },
    {
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/hillol-das-pias-56454bb1/",
    },
    { icon: <Twitter size={18} />, url: "https://x.com/HD_Pias" },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-light-accent dark:bg-dark-accent py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-1/2 bottom-0 right-0 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <a
                href="#home"
                className="text-2xl font-bold text-primary dark:text-primary-light mb-4 inline-block"
              >
                Hillol Das Pias
              </a>
              <p className="text-dark/70 dark:text-light/70 mb-6">
                Creating elegant solutions to complex problems through clean,
                maintainable code and intuitive user interfaces.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-dark/20 dark:border-light/20 hover:bg-dark/5 dark:hover:bg-light/5 transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary-light transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-dark/70 dark:text-light/70 mb-4">
                Subscribe to my newsletter for the latest updates and insights.
              </p>
              <form className="flex md:flex-col lg:flex-row" >
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg md:rounded-t-lg md:rounded-b-none lg:rounded-l-lg lg:rounded-r-none flex-grow bg-light dark:bg-dark border border-dark/10 dark:border-light/10 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                />
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-r-lg md:rounded-b-lg md:rounded-t-none lg:rounded-r-lg lg:rounded-l-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>

          <div className="border-t border-dark/10 dark:border-light/10 pt-6 text-center text-dark/70 dark:text-light/70">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Hillol Das Pias. Made with{" "}
              <Heart size={16} className="text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
