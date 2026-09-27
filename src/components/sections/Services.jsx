import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, FaMusic, FaTv, FaBullhorn, 
  FaPalette, FaChartLine, FaArrowRight,
  FaSpotify, FaApple, FaYoutube
} from 'react-icons/fa';
import Badge from '../ui/Badge';

const Services = () => {
  const services = [
    {
      icon: <FaInstagram />,
      title: 'Social Media Management',
      description: 'Complete account management for creators, singers, artists and brands.',
      features: ['Instagram / Facebook / YouTube', 'Content planning & posting', 'Reels, engagement & reporting', 'Creator & artist account growth'],
    },
    {
      icon: <FaMusic />,
      title: 'Music Distribution',
      description: 'Distribute and manage songs across digital music platforms.',
      features: ['Music release management', 'Spotify / Apple Music', 'YouTube Music & other platforms', 'Release promotion & campaigns'],
    },
    {
      icon: <FaTv />,
      title: 'OTT & App Management',
      description: 'OTT platform and its mobile/TV ecosystem managed together as one service.',
      features: ['OTT content & catalog', 'Android / iOS / Android TV', 'Subscriptions & monetization', 'Analytics, uploads & app growth'],
    },
    {
      icon: <FaBullhorn />,
      title: 'Ads & Digital Marketing',
      description: 'Performance campaigns designed around measurable business goals.',
      features: ['Meta Ads', 'Google Ads', 'YouTube Ads', 'App installs & subscription campaigns'],
    },
    {
      icon: <FaPalette />,
      title: 'Content & Creative',
      description: 'Creative production supporting social, music and marketing campaigns.',
      features: ['Posters & thumbnails', 'Reels & short videos', 'Captions, titles & hashtags', 'Campaign creatives'],
    },
    {
      icon: <FaChartLine />,
      title: 'Analytics & Growth',
      description: 'Performance tracking across social, music, ads and OTT/app.',
      features: ['Reach & engagement', 'Ad performance & CPA', 'Installs & subscriptions', 'Reporting & optimization'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-16 md:py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <Badge variant="gold" className="text-[10px] tracking-wider">
            ✦ Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-2">
            Four core services. <span className="gradient-text">One digital team.</span>
          </h2>
          <p className="text-sm text-muted">
            Social management, music distribution, OTT & app management, and digital marketing.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-line rounded-xl p-5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Icon - Unified Gold */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-base flex-shrink-0 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold leading-tight pt-0.5 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-xs text-muted leading-relaxed mb-3">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    viewport={{ once: true }}
                    className="text-[11px] text-white/60 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-xs text-muted mb-3">Need a custom solution?</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition-colors duration-300 group"
          >
            Let's talk about your project
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;