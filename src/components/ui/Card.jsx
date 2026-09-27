import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`bg-card border border-line rounded-xl p-5 ${hover ? 'hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;