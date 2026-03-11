import { motion } from 'framer-motion';

const education = [
  {
    icon: 'fas fa-university',
    title: 'BCA (Bachelor of Computer Applications)',
    place: 'IILM University, Greater Noida',
    year: '2nd Year',
  },
  {
    icon: 'fas fa-school',
    title: 'Senior Secondary (12th)',
    place: 'Kendriya Vidyalaya, Agra Cantt',
    year: null,
  },
  {
    icon: 'fas fa-school',
    title: 'Secondary (10th)',
    place: 'Kendriya Vidyalaya, Agra Cantt',
    year: null,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-graduation-cap"></i> Education
        </motion.h2>
        <motion.div
          className="education-timeline"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {education.map((edu) => (
            <motion.div key={edu.title} className="edu-item" variants={item}>
              <motion.div
                className="edu-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <i className={edu.icon}></i>
              </motion.div>
              <div className="edu-content">
                <h3>{edu.title}</h3>
                <p className="edu-place">{edu.place}</p>
                {edu.year && <p className="edu-year">{edu.year}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
