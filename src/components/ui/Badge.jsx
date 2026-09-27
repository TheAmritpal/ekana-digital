const Badge = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'border-white/10 text-muted',
    gold: 'border-gold/30 text-gold bg-gold/5',
    pink: 'border-pink/30 text-pink bg-pink/5',
    green: 'border-green/30 text-green bg-green/5',
  };
  
  return (
    <span className={`inline-block border rounded-full px-4 py-1.5 text-xs tracking-wider font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;