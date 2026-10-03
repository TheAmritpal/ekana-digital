import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaInstagram, FaYoutube, FaTwitter, FaLinkedin,
  FaSpotify, FaApple, FaFacebook, FaGlobe,
  FaRegSmile, FaCheckCircle, FaArrowRight,
  FaRocket, FaUsers, FaStar, FaMusic,
  FaTv, FaBullhorn, FaPalette, FaChartLine,
  FaExternalLinkAlt, FaPlay, FaAndroid,
  FaApple as FaAppleIcon,
  FaUserCheck
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdPeople, MdOutlineDashboard, MdVerified } from 'react-icons/md';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

// ✅ Account/Artist photos
import kaeshariPhoto from '../assets/keshari.jpeg';
import nilamPhoto from '../assets/nilam.jpeg';
import samarPhoto from '../assets/samar.jpeg';
import kkPhoto from '../assets/kk.jpeg';
import abhiPhoto from '../assets/abhi.jpeg';
import kaluPhoto from '../assets/kalu.jpeg';
import parmodPhoto from '../assets/pramod.jpeg';
import batohiPhoto from '../assets/batohi.png';
import monuPhoto from '../assets/monu.png';
import aniketPhoto from '../assets/aniket.png';
import gautamPhoto from '../assets/gautam.png';
import sonaPhoto from '../assets/sona.png';
import anchalPhoto from '../assets/anchal.png';

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
    { id: 'artists', label: 'Artists' },
    { id: 'social', label: 'Social Media' },
    { id: 'music', label: 'Music' },
    { id: 'ott', label: 'OTT & App' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const portfolioItems = [
    // ✅ ARTISTS / ACCOUNTS WE MANAGE
    {
      id: 1,
      category: 'artists',
      title: 'Kesari Lal',
      subtitle: 'Artist • Performer',
      description: 'Social media management, content creation and audience growth.',
      icon: <FaUserCheck />,
      photo: kaeshariPhoto,
      tags: ['Instagram', 'Facebook', 'YouTube'],
    },
    {
      id: 2,
      category: 'artists',
      title: 'Nilam Giri',
      subtitle: 'Artist • Creator',
      description: 'Complete social media handling including reels and community management.',
      icon: <FaUserCheck />,
      photo: nilamPhoto,
      tags: ['Instagram', 'YouTube', 'Facebook'],
    },
    {
      id: 3,
      category: 'artists',
      title: 'Samar',
      subtitle: 'Artist • Musician',
      description: 'Music distribution, promotion and social media growth strategy.',
      icon: <FaUserCheck />,
      photo: samarPhoto,
      tags: ['Spotify', 'Instagram', 'YouTube'],
    },
    {
      id: 4,
      category: 'artists',
      title: 'KK',
      subtitle: 'Artist • Performer',
      description: 'Social media management, content strategy and brand collaborations.',
      icon: <FaUserCheck />,
      photo: kkPhoto,
      tags: ['Instagram', 'Facebook', 'TikTok'],
    },
    {
      id: 5,
      category: 'artists',
      title: 'Parmod',
      subtitle: 'Artist • Creator',
      description: 'Content creation, posting schedule and community engagement.',
      icon: <FaUserCheck />,
      photo: parmodPhoto,
      tags: ['Instagram', 'YouTube', 'Facebook'],
    },
    {
      id: 6,
      category: 'artists',
      title: 'Kalu',
      subtitle: 'Artist • Entertainer',
      description: 'Social media growth, content planning and audience analytics.',
      icon: <FaUserCheck />,
      photo: kaluPhoto,
      tags: ['Instagram', 'TikTok', 'YouTube'],
    },
    {
      id: 7,
      category: 'artists',
      title: 'Abhishek',
      subtitle: 'Artist • Creator',
      description: 'Full social media management, content creation and growth.',
      icon: <FaUserCheck />,
      photo: abhiPhoto,
      tags: ['Instagram', 'YouTube', 'Facebook'],
    },

    // ✅ OTHER SERVICES / PROJECTS — now with photos too
    {
      id: 8,
      category: 'music',
      title: 'Batohi Babu',
      subtitle: 'Artist • Music Producer',
      description: 'Full music distribution across Spotify, Apple Music, JioSaavn, and more.',
      icon: <FaSpotify />,
      photo: batohiPhoto,
      tags: ['Spotify', 'Apple Music', 'JioSaavn'],
    },
    {
      id: 9,
      category: 'ott',
      title: 'Monu Albela',
      subtitle: 'Streaming • Entertainment',
      description: 'Complete OTT platform management including content catalog and subscriptions.',
      icon: <FaTv />,
      photo: monuPhoto,
      tags: ['OTT', 'Android', 'iOS'],
    },
    {
      id: 10,
      category: 'marketing',
      title: 'Aniket Pandey',
      subtitle: 'Brand • Business',
      description: 'Performance marketing campaigns across Meta, Google, and YouTube.',
      icon: <FaBullhorn />,
      photo: aniketPhoto,
      tags: ['Meta Ads', 'Google Ads', 'YouTube'],
    },
    {
      id: 11,
      category: 'music',
      title: 'Gautam Singh',
      subtitle: 'Artist • Music Producer',
      description: 'Full music distribution across Spotify, Apple Music, JioSaavn, and more.',
      icon: <FaSpotify />,
      photo: gautamPhoto,
      tags: ['Spotify', 'Apple Music', 'JioSaavn'],
    },
    {
      id: 12,
      category: 'ott',
      title: 'Sona Singh',
      subtitle: 'Streaming • Entertainment',
      description: 'Complete OTT platform management including content catalog and subscriptions.',
      icon: <FaTv />,
      photo: sonaPhoto,
      tags: ['OTT', 'Android', 'iOS'],
    },
    {
      id: 13,
      category: 'marketing',
      title: 'Anchal Singh',
      subtitle: 'Brand • Business',
      description: 'Performance marketing campaigns across Meta, Google, and YouTube.',
      icon: <FaBullhorn />,
      photo: anchalPhoto,
      tags: ['Meta Ads', 'Google Ads', 'YouTube'],
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
            Explore some of our recent projects and success stories from across the FILMS ecosystem.
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
              {/* ✅ Icon OR Photo Section */}
              {item.photo ? (
                <div className="w-full h-72 rounded-xl overflow-hidden bg-gradient-to-br from-gold/15 via-pink/15 to-gold/15 mb-3 relative">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="flex items-center justify-center w-full h-full text-4xl font-black text-white/10">${item.title.charAt(0)}</span>`;
                    }}
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-xl mb-3 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                  {item.icon}
                </div>
              )}

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