

import { motion } from 'framer-motion';
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


const Portfolio = () => {
  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Clients' },
    { icon: <FaRocket />, value: '1200+', label: 'Projects' },
    { icon: <FaStar />, value: '4.9', label: 'Rating' },
    { icon: <FaGlobe />, value: '50+', label: 'Countries' },
  ];

  // ✅ Only photos - no category, no name, no subtitle, no description, no tags
  const portfolioItems = [
    { id: 1, photo: kaeshariPhoto, alt: 'Work 1' },
    { id: 2, photo: nilamPhoto, alt: 'Work 2' },
    { id: 3, photo: samarPhoto, alt: 'Work 3' },
    { id: 4, photo: kkPhoto, alt: 'Work 4' },
    { id: 5, photo: parmodPhoto, alt: 'Work 5' },
    { id: 6, photo: kaluPhoto, alt: 'Work 6' },
    { id: 7, photo: abhiPhoto, alt: 'Work 7' },
  
  ];

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

        {/* Portfolio Grid - Sirf Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="group bg-card border border-line rounded-xl p-4 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="w-full h-72 rounded-xl overflow-hidden bg-gradient-to-br from-gold/15 via-pink/15 to-gold/15 relative">
                <img
                  src={item.photo}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="flex items-center justify-center w-full h-full text-4xl font-black text-white/10">${item.alt.charAt(0)}</span>`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
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