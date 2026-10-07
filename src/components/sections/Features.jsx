import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle, FaRocket, FaUsers, FaGlobe, 
  FaInstagram, FaSpotify, FaTv, FaBullhorn,
  FaPalette, FaChartLine, FaArrowRight
} from 'react-icons/fa';
import { MdOutlineDashboard, MdOutlineIntegrationInstructions } from 'react-icons/md';
import { FiZap, FiShield, FiTrendingUp } from 'react-icons/fi';
import Badge from '../ui/Badge';

const Features = () => {
  const features = [
    { 
      icon: <FaInstagram />, 
      text: 'Creator & singer social accounts',
    },
    { 
      icon: <FaSpotify />, 
      text: 'Music distribution & releases',
    },
    { 
      icon: <FaTv />, 
      text: 'OTT + App operations together',
    },
    { 
      icon: <FaBullhorn />, 
      text: 'Meta / Google / YouTube Ads',
    },
    { 
      icon: <FaPalette />, 
      text: 'Content & creative production',
    },
    { 
      icon: <FaChartLine />, 
      text: 'Analytics & growth reporting',
    },
  ];

  const stats = [
    { value: '500+', label: 'Active Clients', icon: <FaUsers /> },
    { value: '10K+', label: 'Content Created', icon: <FaRocket /> },
    { value: '50+', label: 'Countries Served', icon: <FaGlobe /> },
  ];

  const highlights = [
    { icon: <FiZap />, text: 'Fast Growth' },
    { icon: <FiShield />, text: 'Secure Platform' },
    { icon: <FiTrendingUp />, text: 'Scalable Solutions' },
    { icon: <MdOutlineIntegrationInstructions />, text: 'Easy Integration' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-gradient-to-b from-black/30 to-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gold" className="text-[10px] tracking-wider">
              <MdOutlineDashboard className="inline mr-1" />
              One Connected System
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-3 leading-tight">
              Social + Music + OTT + <span className="gradient-text">Marketing.</span>
            </h2>
            
            <p className="text-sm text-muted leading-relaxed max-w-md">
              We connect your social presence, music releases, OTT/app audience and paid marketing into one coordinated digital growth system.
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mt-4">
              {highlights.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="inline-flex items-center gap-1.5 text-[10px] bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-full text-white/60"
                >
                  <span className="text-gold">{item.icon}</span>
                  {item.text}
                </motion.span>
              ))}
            </div>
            
            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-5 mt-6 pt-5 border-t border-white/5"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-base group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">{stat.value}</div>
                    <div className="text-[9px] text-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-6"
            >
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition-colors duration-300 group"
              >
                Explore Our Services
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card border border-line rounded-lg p-3.5 flex items-center gap-2.5 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
              >
                {/* Icon with gold background */}
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-xs flex-shrink-0 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                  {feature.icon}
                </div>
                
                <span className="text-[11px] font-medium leading-tight text-white/80 group-hover:text-white transition-colors">
                  {feature.text}
                </span>
                
                {/* Hover arrow */}
                <FaArrowRight className="absolute right-2.5 text-[8px] text-gold/0 group-hover:text-gold/70 transition-all duration-300 group-hover:translate-x-0.5" />
                
                {/* Hover glow */}
                <div className="absolute -inset-px rounded-lg bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center mt-10 pt-6 border-t border-white/5"
        >
          <p className="text-[11px] text-muted">
            Ready to scale your digital presence? 
            <Link to="/contact" className="ml-1.5 text-gold hover:text-white transition-colors font-semibold">
              Get started today →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;