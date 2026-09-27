import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, FiX, FiTrendingUp, FiMusic, 
  FiTv, FiBarChart2, FiUsers, FiUser, FiMail,
  FiInstagram, FiYoutube, FiTwitter, FiLinkedin
} from 'react-icons/fi';
import { FaSpotify, FaApple } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services', icon: <FiTrendingUp /> },
    { name: 'Portfolio', href: '/portfolio', icon: <FiUsers /> },
    { name: 'Team', href: '/team', icon: <FiUsers /> },
    { name: 'About', href: '/about', icon: <FiUser /> },
    { name: 'Contact', href: '/contact', icon: <FiMail /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/40' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-pink blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <span className="relative text-xl md:text-2xl font-black tracking-tight">
                EKANA <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink">DIGITAL</span>
              </span>
            </motion.div>
            <motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold to-pink"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl flex items-center gap-2 ${
                  isActive(link.href)
                    ? 'text-gold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-gold/10 to-pink/10 rounded-xl border border-gold/20"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-gradient-to-r from-gold to-pink text-black px-6 py-2.5 rounded-xl font-bold hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 relative overflow-hidden group"
            >
              <Link to="/contact" className="relative z-10 flex items-center gap-2">
                Let's Talk
                <FiMail className="text-sm" />
              </Link>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors group"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? 
                <FiX className="text-2xl text-gold" /> : 
                <FiMenu className="text-2xl text-white/70 group-hover:text-white" />
              }
            </motion.div>
            {!isOpen && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/10 to-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? 'bg-gradient-to-r from-gold/10 to-pink/10 text-gold border border-gold/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-gold">{link.icon}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 pt-4 border-t border-white/5 space-y-3"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-gold to-pink text-black px-6 py-3.5 rounded-xl font-bold hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 flex items-center justify-center gap-2">
                    <FiMail /> Let's Talk
                  </button>
                </Link>
                
                <div className="flex justify-center gap-4 pt-2">
                  {[FiInstagram, FiYoutube, FiTwitter, FiLinkedin].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    >
                      <Icon className="text-sm" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;