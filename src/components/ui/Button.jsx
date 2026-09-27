import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', size = 'default', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer';
  
  const sizes = {
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
    small: 'px-4 py-2 text-xs',
  };
  
  const variants = {
    primary: 'bg-gradient-to-r from-gold to-[#e6a322] text-black hover:shadow-lg hover:shadow-gold/25 hover:scale-105',
    secondary: 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105',
    outline: 'border-2 border-gold/50 text-white hover:bg-gold/10 hover:border-gold hover:scale-105',
    glow: 'bg-gradient-to-r from-gold to-pink text-black hover:shadow-xl hover:shadow-pink/20 hover:scale-105',
  };
  
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default Button;