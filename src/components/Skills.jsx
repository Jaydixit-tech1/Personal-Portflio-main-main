import { motion } from 'framer-motion';

const skills = [
  { icon: 'fab fa-html5', name: 'HTML' },
  { icon: 'fab fa-css3-alt', name: 'CSS' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fab fa-java', name: 'Java' },
  { icon: 'fas fa-c', name: 'C' },
  { icon: 'fas fa-database', name: 'SQL' },
  { icon: 'fas fa-sitemap', name: 'Data Structures' },
  { icon: 'fab fa-aws', name: 'AWS Basics' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-code"></i> Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={card}
              whileHover={{
                scale: 1.08,
                y: -6,
                transition: { type: 'spring', stiffness: 400, damping: 17 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                <i className={skill.icon} />
              </motion.span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
