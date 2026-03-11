import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.png';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const photoVariants = {
  initial: { scale: 0.8, opacity: 0, rotate: -10 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14, delay: 0.4 },
  },
};

export default function Home() {
  const handleResumeClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      alert(
        'Add your resume PDF to the project and set href="resume.pdf" on the Download Resume button to enable download.'
      );
    }
  };

  return (
    <section id="home" className="home">
      <motion.div
        className="home-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="home-greeting" variants={item}>
          Hello, I'm
        </motion.p>
        <motion.h1 className="home-name" variants={item}>
          Jay Dixit
        </motion.h1>
        <motion.p className="home-tagline" variants={item}>
          BCA Student · Aspiring Software & App Developer
        </motion.p>
        <motion.p className="home-intro" variants={item}>
          Building the future one line of code at a time. Passionate about web
          development and creating impactful applications.
        </motion.p>
        <motion.div className="home-buttons" variants={item}>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const contact = document.getElementById('contact');
              if (contact) {
                const top = contact.getBoundingClientRect().top + window.scrollY - 60;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-paper-plane" /> Hire Me
          </motion.a>
          <motion.a
            href="#"
            className="btn btn-secondary"
            id="downloadResume"
            onClick={handleResumeClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="fas fa-download" /> Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="home-image-wrapper"
        variants={photoVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="home-photo home-photo--image"
          aria-label="Jay Dixit professional photo"
          animate={{
            y: [0, -8, 0],
            boxShadow: [
              '0 0 40px rgba(88, 166, 255, 0.3)',
              '0 0 60px rgba(88, 166, 255, 0.4)',
              '0 0 40px rgba(88, 166, 255, 0.3)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img src={profilePhoto} alt="Jay Dixit" className="home-photo-img" />
        </motion.div>
      </motion.div>
    </section>
  );
}
