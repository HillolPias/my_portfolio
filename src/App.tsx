import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const loading = false;
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
    
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-screen w-full flex items-center justify-center overflow-x-hidden"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300 overflow-x-hidden"
          >
            <Navbar />
            <main className="overflow-x-hidden">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;