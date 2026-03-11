import { motion } from 'framer-motion';

const projects = [
  {
    icon: 'fas fa-utensils',
    title: 'SwiftBites Food Delivery Website',
    desc: 'A full-stack food delivery platform with ordering, cart, and user flows. Built with a modern, responsive front-end and Node.js backend.',
    tags: ['HTML', 'CSS', 'JS', 'Node.js'],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Nike Sales Dashboard',
    desc: 'Interactive sales analytics dashboard with visualizations for key metrics. Developed using Python, Dash, and Plotly.',
    tags: ['Python', 'Dash', 'Plotly'],
  },
  {
    icon: 'fas fa-film',
    title: 'Movie Recommendation Project',
    desc: 'Recommends movies using data from TMDb and OMDB APIs. Data processing and analysis done with Pandas.',
    tags: ['TMDb', 'OMDB', 'Pandas'],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-laptop-code"></i> Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {projects.map((proj) => (
            <motion.article
              key={proj.title}
              className="project-card"
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.99 }}
            >
              <motion.div
                className="project-icon"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <i className={proj.icon}></i>
              </motion.div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
