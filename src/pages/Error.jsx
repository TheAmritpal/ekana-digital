import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHome, FaArrowLeft, FaSearch, 
  FaRegSmile, FaRocket, FaGlobe
} from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Error = () => {
  const suggestions = [
    { icon: <FaHome />, text: 'Go to Homepage', href: '/' },
    { icon: <FaArrowLeft />, text: 'Go Back', href: '#', onClick: () => window.history.back() },
    { icon: <FaSearch />, text: 'Search Services', href: '/services' },
    { icon: <FaGlobe />, text: 'View Portfolio', href: '/portfolio' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Badge variant="gold" className="text-[10px] tracking-wider">
            <FiAlertTriangle className="inline mr-1" /> Error 404
          </Badge>
        </motion.div>

        {/* Big 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative"
        >
          <div className="text-8xl sm:text-9xl md:text-[10rem] font-black text-white/5 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl sm:text-7xl md:text-8xl font-black gradient-text">
              404
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-black mt-4 mb-2"
        >
          Oops! Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm text-muted max-w-md mx-auto leading-relaxed"
        >
          <FaRegSmile className="inline mr-1 text-gold" />
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        {/* Quick Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-6"
        >
          {suggestions.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={item.onClick}
              className="group bg-card border border-line rounded-xl p-4 text-center hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="text-gold text-xl mb-1 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[10px] text-white/60 group-hover:text-white transition-colors">
                {item.text}
              </span>
            </Link>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mt-6"
        >
          <Link to="/">
            <Button size="default">
              <FaHome /> Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="default">
              <FaRocket /> Need Help?
            </Button>
          </Link>
        </motion.div>

        {/* Fun Fact / Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 pt-6 border-t border-white/5"
        >
          <p className="text-[10px] text-muted flex items-center justify-center gap-1">
            <span className="text-gold">✦</span>
            Don't worry, we'll help you find what you're looking for.
            <span className="text-gold">✦</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Error;