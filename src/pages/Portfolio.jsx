import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaInstagram, FaYoutube, FaTwitter, FaLinkedin,
  FaSpotify, FaApple, FaFacebook, FaGlobe,
  FaRegSmile, FaCheckCircle, FaArrowRight,
  FaRocket, FaUsers, FaStar, FaMusic,
  FaTv, FaBullhorn, FaPalette, FaChartLine,
  FaExternalLinkAlt, FaPlay, FaAndroid,
  FaApple as FaAppleIcon
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdPeople, MdOutlineDashboard, MdVerified } from 'react-icons/md';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Clients' },
    { icon: <FaRocket />, value: '1200+', label: 'Projects' },
    { icon: <FaStar />, value: '4.9', label: 'Rating' },
    { icon: <FaGlobe />, value: '50+', label: 'Countries' },
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'social', label: 'Social Media' },
    { id: 'music', label: 'Music' },
    { id: 'ott', label: 'OTT & App' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'social',
      title: 'Kalpana Patowary',
      subtitle: 'Singer • Artist',
      description: 'Complete social media management including Instagram, Facebook, and YouTube.',
      icon: <FaMusic />,
      tags: ['Instagram', 'YouTube', 'Facebook'],
      stats: [
        { label: 'Followers', value: '50K+' },
        { label: 'Engagement', value: '8.5%' },
        { label: 'Posts', value: '200+' },
      ],
    },
    {
      id: 2,
      category: 'music',
      title: 'Music Distribution',
      subtitle: 'Artist • Music Producer',
      description: 'Full music distribution across Spotify, Apple Music, JioSaavn, and more.',
      icon: <FaSpotify />,
      tags: ['Spotify', 'Apple Music', 'JioSaavn'],
      stats: [
        { label: 'Streams', value: '2.5M+' },
        { label: 'Platforms', value: '10+' },
        { label: 'Artists', value: '50+' },
      ],
    },
    {
      id: 3,
      category: 'ott',
      title: 'OTT Platform',
      subtitle: 'Streaming • Entertainment',
      description: 'Complete OTT platform management including content catalog and subscriptions.',
      icon: <FaTv />,
      tags: ['OTT', 'Android', 'iOS'],
      stats: [
        { label: 'Users', value: '100K+' },
        { label: 'Content', value: '500+' },
        { label: 'Revenue', value: '$2M+' },
      ],
    },
    {
      id: 4,
      category: 'marketing',
      title: 'Digital Marketing',
      subtitle: 'Brand • Business',
      description: 'Performance marketing campaigns across Meta, Google, and YouTube.',
      icon: <FaBullhorn />,
      tags: ['Meta Ads', 'Google Ads', 'YouTube'],
      stats: [
        { label: 'Reach', value: '10M+' },
        { label: 'Conversions', value: '5K+' },
        { label: 'ROI', value: '300%' },
      ],
    },
    {
      id: 5,
      category: 'social',
      title: 'Creator Brand',
      subtitle: 'Influencer • Content Creator',
      description: 'Social media growth and content strategy for a top creator.',
      icon: <FaInstagram />,
      tags: ['Instagram', 'TikTok', 'YouTube'],
      stats: [
        { label: 'Growth', value: '+200%' },
        { label: 'Engagement', value: '12%' },
        { label: 'Reach', value: '5M+' },
      ],
    },
    {
      id: 6,
      category: 'music',
      title: 'Music Label',
      subtitle: 'Record Label • Music Company',
      description: 'Music distribution and promotion for an independent music label.',
      icon: <FaAppleIcon />,
      tags: ['Distribution', 'Promotion', 'Playlisting'],
      stats: [
        { label: 'Artists', value: '20+' },
        { label: 'Releases', value: '100+' },
        { label: 'Streams', value: '5M+' },
      ],
    },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

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
            <MdVerified className="inline mr-1" /> Our Work
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-sm text-muted">
            Explore some of our recent projects and success stories from across the digital ecosystem.
          </p>
        </motion.div>

        {/* Stats - Clean no boxes */}
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

        {/* Filter Categories - Clean pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[10px] px-4 py-1.5 rounded-full transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gold text-black font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Clean cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="group bg-card border border-line rounded-xl p-4 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Icon Section - Uniform gold */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-xl mb-3 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                {item.icon}
              </div>

              {/* Title & Subtitle */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gold text-[10px] font-semibold">{item.subtitle}</p>
                </div>
                <FaExternalLinkAlt className="text-white/20 text-xs group-hover:text-gold group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
              </div>

              {/* Description */}
              <p className="text-[11px] text-muted mt-2 leading-relaxed">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="text-[8px] bg-white/5 px-2 py-0.5 rounded-full text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/5">
                {item.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xs font-bold text-white/80">{stat.value}</div>
                    <div className="text-[8px] text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Clean */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaRocket className="text-gold" />
            <h3 className="text-base font-bold">Ready to Start a Project?</h3>
          </div>
          <p className="text-xs text-muted mb-3">
            Let's create something amazing together. We'd love to hear about your project.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/contact" size="small">
              Get in Touch <FaArrowRight className="text-xs" />
            </Button>
            <Button variant="outline" size="small" href="/services">
              View Services
            </Button>
          </div>
          <p className="text-[9px] text-muted mt-3 flex items-center justify-center gap-1">
            <FaCheckCircle className="text-green text-[9px]" />
            Trusted by 500+ clients worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;