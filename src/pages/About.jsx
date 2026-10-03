import { motion } from 'framer-motion';
import { 
  FaRocket, FaUsers, FaGlobe, FaStar, 
  FaCheckCircle, FaArrowRight, FaRegSmile,
  FaInstagram, FaFacebook,
  FaMusic,
  FaTv, FaBullhorn, FaPalette, FaChartLine,
  FaShieldAlt, FaAward, FaHandshake
} from 'react-icons/fa';
import { FiTarget, FiTrendingUp } from 'react-icons/fi';
import { MdOutlineDashboard, MdPeople } from 'react-icons/md';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

// ✅ Team photos
import abhishekPhoto from '../assets/abhishekpandey.png';
import dileepPhoto from '../assets/dileepthakur.png';
import rahulKPhoto from '../assets/rahulkushwaha.png';
import khushiPhoto from '../assets/khushi.png';
import rahulPPhoto from '../assets/rahulpandey.png';

const About = () => {
  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Active Clients' },
    { icon: <FaRocket />, value: '1200+', label: 'Projects Completed' },
    { icon: <FaGlobe />, value: '50+', label: 'Countries Served' },
    { icon: <FaStar />, value: '4.9', label: 'Client Rating' },
  ];

  const values = [
    { icon: <FaShieldAlt />, title: 'Trust & Transparency' },
    { icon: <FaRocket />, title: 'Innovation First' },
    { icon: <FaUsers />, title: 'Client-Centric' },
    { icon: <FaAward />, title: 'Excellence' },
  ];

  // ✅ ONLY Instagram & Facebook
  const socialLinks = [
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/ekanafilms/' },
    { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/ekanafilms' },
  ];

  // ✅ Updated team with photos and 5 members
  const teamMembers = [
    {
      initials: 'AP',
      name: 'Abhishek Pandey',
      role: 'Director',
      photo: abhishekPhoto,
    },
    {
      initials: 'DT',
      name: 'Dileep Thakur',
      role: 'Creative & Design',
      photo: dileepPhoto,
    },
    {
      initials: 'RK',
      name: 'Rahul Kushwaha',
      role: 'Video & Reels',
      photo: rahulKPhoto,
    },
    {
      initials: 'KS',
      name: 'Khushi Singh',
      role: 'Social & Support',
      photo: khushiPhoto,
    },
    {
      initials: 'RP',
      name: 'Rahul Pandey',
      role: 'Account Manager',
      photo: rahulPPhoto,
    },
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
            <FaRegSmile className="inline mr-1" /> About Us
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3">
            Who We <span className="gradient-text">Are</span>
          </h1>
          <p className="text-sm text-muted">
            EKANA FILMS is a team of passionate creators and strategists dedicated to helping brands grow in the FILMS world.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="p-2"
            >
              <div className="text-2xl text-gold mb-1">{stat.icon}</div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-[10px] text-muted uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-3xl mx-auto mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaHandshake className="text-gold text-xl" />
            <h2 className="text-xl font-bold">Our Story</h2>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Founded in 2020, EKANA FILMS was born from a vision to create a one-stop FILMS ecosystem 
            for creators, artists, and brands. Today, we serve clients across 50+ countries through 
            social media management, music distribution, OTT platform management, and FILMS marketing.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center p-4"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold text-xl mb-2">
              <FiTarget />
            </div>
            <h3 className="text-base font-bold mb-1">Our Mission</h3>
            <p className="text-sm text-muted leading-relaxed">
              To empower creators and brands with a connected FILMS ecosystem that drives growth and engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-center p-4"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold text-xl mb-2">
              <FaGlobe />
            </div>
            <h3 className="text-base font-bold mb-1">Our Vision</h3>
            <p className="text-sm text-muted leading-relaxed">
              To be the leading FILMS ecosystem partner for creators and brands worldwide.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
            <FaAward className="text-gold" />
            Our Values
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="p-3"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold text-lg mb-1">
                  {value.icon}
                </div>
                <p className="text-xs font-medium">{value.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
            <MdOutlineDashboard className="text-gold" />
            What We Do
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center">
            {[
              { icon: <FaInstagram />, label: 'Social Media' },
              { icon: <FaMusic />, label: 'Music Dist.' },
              { icon: <FaTv />, label: 'OTT & App' },
              { icon: <FaBullhorn />, label: 'Marketing' },
              { icon: <FaPalette />, label: 'Content' },
              { icon: <FaChartLine />, label: 'Analytics' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + index * 0.03 }}
                className="p-2"
              >
                <div className="text-2xl text-gold">{service.icon}</div>
                <p className="text-[10px] text-muted mt-0.5">{service.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ✅ Team — Updated with photos & 5 members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <h2 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <MdPeople className="text-gold" />
            Our Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="p-2 group"
              >
                <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gold to-pink flex items-center justify-center text-xl font-black text-black ring-2 ring-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="flex items-center justify-center w-full h-full text-black font-black text-xl">${member.initials}</span>`;
                    }}
                  />
                </div>
                <p className="text-sm font-medium mt-2 group-hover:text-gold transition-colors">
                  {member.name}
                </p>
                <p className="text-[10px] text-gold font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="text-center max-w-2xl mx-auto pt-6 border-t border-white/5"
        >
          <h3 className="text-base font-bold mb-3">Connect With Us</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label={social.label}
              >
                <span className="text-sm">{social.icon}</span>
              </motion.a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/contact" size="default">
              Get in Touch <FaArrowRight className="text-sm" />
            </Button>
            <Button variant="outline" size="default" href="/services">
              View Services
            </Button>
          </div>
          <p className="text-xs text-muted mt-3 flex items-center justify-center gap-1">
            <FaCheckCircle className="text-green text-xs" />
            Let's build something amazing together
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;