import { motion } from 'framer-motion';
import { 
  FaLinkedin, FaTwitter, FaEnvelope, FaStar,
  FaRegSmile, FaCheckCircle, FaArrowRight,
  FaRocket, FaUsers, FaGlobe, FaAward,
  FaInstagram, FaYoutube
} from 'react-icons/fa';
import { FiBriefcase, FiTrendingUp, FiAward } from 'react-icons/fi';
import { MdPeople, MdOutlineVerified } from 'react-icons/md';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Team = () => {
  const teamMembers = [
    {
      initials: 'AP',
      name: 'Abhishek Pandey',
      role: 'Founder & Director',
      description: 'Overall digital strategy, social media, marketing, music distribution and OTT/app management.',
      expertise: ['Strategy', 'Leadership', 'Growth'],
      experience: '10+ Years',
    },
    {
      initials: 'CD',
      name: 'Creative Designer',
      role: 'Head of Design',
      description: 'Posters, thumbnails, social creatives and campaign artwork.',
      expertise: ['Design', 'Branding', 'UI/UX'],
      experience: '6+ Years',
    },
    {
      initials: 'VE',
      name: 'Video Editor',
      role: 'Video Production Lead',
      description: 'Reels, shorts, promotional videos and platform-ready content.',
      expertise: ['Editing', 'Animation', 'Production'],
      experience: '5+ Years',
    },
    {
      initials: 'SM',
      name: 'Social Media Executive',
      role: 'Social Media Manager',
      description: 'Posting, scheduling, notifications, community support and daily operations.',
      expertise: ['Community', 'Engagement', 'Analytics'],
      experience: '4+ Years',
    },
    {
      initials: 'MK',
      name: 'Marketing Strategist',
      role: 'Digital Marketing Lead',
      description: 'Campaign strategy, ad management, performance marketing and growth hacking.',
      expertise: ['Marketing', 'Ads', 'Growth'],
      experience: '7+ Years',
    },
    {
      initials: 'AK',
      name: 'Content Writer',
      role: 'Content Lead',
      description: 'Copywriting, blog posts, social captions, and brand storytelling.',
      expertise: ['Writing', 'Storytelling', 'SEO'],
      experience: '4+ Years',
    },
  ];

  const stats = [
    { icon: <FaUsers />, value: '6+', label: 'Team Members' },
    { icon: <FaRocket />, value: '1200+', label: 'Projects Delivered' },
    { icon: <FaGlobe />, value: '50+', label: 'Countries Served' },
    { icon: <FaAward />, value: '4.9', label: 'Client Rating' },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaYoutube />, label: 'YouTube' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaLinkedin />, label: 'LinkedIn' },
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
            <MdPeople className="inline mr-1" /> Our Team
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3">
            Meet the <span className="gradient-text">Team</span>
          </h1>
          <p className="text-sm text-muted">
            We're a passionate group of creators, strategists, and innovators dedicated to helping brands grow.
          </p>
        </motion.div>

        {/* Stats - Clean, no boxes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12 text-center"
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

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="bg-card border border-line rounded-xl p-5 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-pink flex items-center justify-center text-xl font-black text-black group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green border-2 border-card" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold group-hover:text-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold text-[10px] font-semibold">{member.role}</p>
                  <p className="text-[10px] text-muted flex items-center gap-1 mt-0.5">
                    <FiBriefcase className="text-[8px]" />
                    {member.experience}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[11px] text-muted mt-3 leading-relaxed">
                {member.description}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {member.expertise.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/40 flex items-center gap-0.5"
                  >
                    <FaStar className="text-gold/30 text-[5px]" />
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-1.5 mt-3 pt-3 border-t border-white/5">
                {[FaLinkedin, FaTwitter, FaEnvelope].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <Icon className="text-[9px]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="bg-card border border-line rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaRocket className="text-gold text-lg" />
              <h3 className="text-base font-bold">Join Our Team</h3>
            </div>
            <p className="text-xs text-muted mb-3">
              We're always looking for talented people to join our growing team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/contact" size="small">
                View Openings <FaArrowRight className="text-xs" />
              </Button>
              <Button variant="outline" size="small" href="/contact">
                Get in Touch
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-[10px] text-muted mb-2">Connect with us</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label={social.label}
              >
                <span className="text-xs">{social.icon}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-[9px] text-muted mt-3 flex items-center justify-center gap-1">
            <FaCheckCircle className="text-green text-[9px]" />
            We're building something amazing together
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;