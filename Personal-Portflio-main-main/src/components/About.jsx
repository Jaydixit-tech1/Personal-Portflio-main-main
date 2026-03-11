import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-user"></i> About Me
        </motion.h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p>
            I'm <strong>Jay Dixit</strong>, a second-year BCA student at{' '}
            <strong>IILM University, Greater Noida</strong>. I completed my 10th
            and 12th from <strong>Kendriya Vidyalaya, Agra Cantt</strong>, and
            have been passionate about technology ever since.
          </p>
          <p>
            My goal is to become a <strong>Software & App Developer</strong>. I
            love coding, problem-solving, and building projects that make a
            difference. From web development to data analysis and dashboards, I
            enjoy learning new technologies and applying them in real-world
            projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
