import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaInstagram, FaMusic, FaTv, FaBullhorn, 
  FaPalette, FaChartLine, FaArrowRight,
  FaCheckCircle, FaRocket, FaUsers, FaGlobe,
  FaSpotify, FaApple, FaYoutube, FaFacebook,
  FaRegSmile, FaStar
} from 'react-icons/fa';
import { FiTarget, FiTrendingUp } from 'react-icons/fi';
import { MdOutlineDashboard, MdVerified } from 'react-icons/md';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Happy Clients' },
    { icon: <FaRocket />, value: '1200+', label: 'Projects Done' },
    { icon: <FaGlobe />, value: '50+', label: 'Countries' },
    { icon: <FaStar />, value: '4.9', label: 'Rating' },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'social', label: 'Social Media' },
    { id: 'music', label: 'Music' },
    { id: 'ott', label: 'OTT & App' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const services = [
    {
      id: 1,
      category: 'social',
      title: 'Social Media Management',
      description: 'Complete account management for creators, singers, artists and brands.',
      icon: <FaInstagram />,
      features: [
        'Instagram / Facebook / YouTube management',
        'Content planning & posting',
        'Reels, engagement & reporting',
        'Creator & artist account growth'
      ],
      platforms: ['Instagram', 'Facebook', 'YouTube'],
    },
    {
      id: 2,
      category: 'music',
      title: 'Music Distribution',
      description: 'Distribute and manage songs across digital music platforms worldwide.',
      icon: <FaMusic />,
      features: [
        'Music release management',
        'Spotify / Apple Music / JioSaavn',
        'YouTube Music & other platforms',
        'Release promotion & campaigns'
      ],
      platforms: ['Spotify', 'Apple Music', 'YouTube Music'],
    },
    {
      id: 3,
      category: 'ott',
      title: 'OTT & App Management',
      description: 'OTT platform and its mobile/TV ecosystem managed together as one service.',
      icon: <FaTv />,
      features: [
        'OTT content & catalog management',
        'Android / iOS / Android TV',
        'Subscriptions & monetization',
        'Analytics, uploads & app growth'
      ],
      platforms: ['Android', 'iOS', 'Android TV'],
    },
    {
      id: 4,
      category: 'marketing',
      title: 'Ads & Digital Marketing',
      description: 'Performance campaigns designed around measurable business goals.',
      icon: <FaBullhorn />,
      features: [
        'Meta Ads management',
        'Google Ads campaigns',
        'YouTube Ads optimization',
        'App installs & subscription campaigns'
      ],
      platforms: ['Meta', 'Google', 'YouTube'],
    },
    {
      id: 5,
      category: 'social',
      title: 'Content & Creative',
      description: 'Creative production supporting social, music and marketing campaigns.',
      icon: <FaPalette />,
      features: [
        'Posters & thumbnails design',
        'Reels & short videos editing',
        'Captions, titles & hashtags',
        'Campaign creatives production'
      ],
      platforms: ['Design', 'Video', 'Copywriting'],
    },
    {
      id: 6,
      category: 'marketing',
      title: 'Analytics & Growth',
      description: 'Performance tracking across social, music, ads and OTT/app.',
      icon: <FaChartLine />,
      features: [
        'Reach & engagement tracking',
        'Ad performance & CPA analysis',
        'Installs & subscriptions metrics',
        'Reporting & optimization'
      ],
      platforms: ['Analytics', 'Reporting', 'Optimization'],
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

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
    <section className="min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <Badge variant="gold" className="text-[10px] tracking-wider">
            <MdOutlineDashboard className="inline mr-1" /> Our Services
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3">
            What We <span className="gradient-text">Offer</span>
          </h1>
          <p className="text-sm text-muted">
            Comprehensive digital solutions to help you grow your brand and reach your audience.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-10 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <div className="text-2xl text-gold mb-1">{stat.icon}</div>
              <div className="text-lg font-bold">{stat.value}</div>
              <div className="text-[9px] text-muted uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-[10px] px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gold text-black font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-card border border-line rounded-xl p-5 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-xl mb-3 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-[11px] text-muted mt-1.5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-3 space-y-1.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-[10px] text-white/60 flex items-start gap-1.5">
                    <FaCheckCircle className="text-gold/60 text-[10px] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Platforms */}
              <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-white/5">
                {service.platforms.map((platform, idx) => (
                  <span key={idx} className="text-[8px] bg-white/5 px-2 py-0.5 rounded-full text-white/40">
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaRocket className="text-gold" />
            <h3 className="text-base font-bold">Need a Custom Solution?</h3>
          </div>
          <p className="text-xs text-muted mb-3">
            We tailor our services to meet your specific needs and goals.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/contact" size="small">
              Get a Quote <FaArrowRight className="text-xs" />
            </Button>
            <Button variant="outline" size="small" href="/portfolio">
              View Portfolio
            </Button>
          </div>
          <p className="text-[9px] text-muted mt-3 flex items-center justify-center gap-1">
            <FaCheckCircle className="text-green text-[9px]" />
            Free consultation for all new clients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;