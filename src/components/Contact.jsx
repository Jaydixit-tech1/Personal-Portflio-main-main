import { motion } from 'framer-motion';

const links = [
  {
    href: 'mailto:jaydixit2056@gmail.com',
    icon: 'fas fa-envelope',
    label: 'Email',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/jay-dixit-196ba52ba/',
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://github.com/Jaydixit-tech1',
    icon: 'fab fa-github',
    label: 'GitHub',
    external: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const linkItem = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-envelope"></i> Contact
        </motion.h2>
        <motion.div
          className="contact-links"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="contact-link"
              title={link.label}
              variants={linkItem}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              whileHover={{
                scale: 1.05,
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 17 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
