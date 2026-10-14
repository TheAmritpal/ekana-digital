

import { motion } from 'framer-motion';
import { 
  FaQuoteLeft, FaLinkedin, FaTwitter, FaEnvelope, 
  FaAward, FaGlobe, FaBriefcase, FaRegGem,
  FaCheckCircle
} from 'react-icons/fa';
import { FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';
import { MdOutlineVerified } from 'react-icons/md';
import Badge from '../ui/Badge';

// ✅ Photos
import abhishekPhoto from '../../assets/Abhishek.png';
import rahulPPhoto from '../../assets/rahulpandey.png';

const Director = () => {
  const directorAchievements = [
    { icon: <FiTarget />, label: '10+ Years Experience' },
    { icon: <FaGlobe />, label: 'Global Reach' },
    { icon: <FiTrendingUp />, label: '500+ Projects' },
  ];

  const managerAchievements = [
    { icon: <FiTarget />, label: 'Client Relations' },
    { icon: <FaGlobe />, label: 'Global Clients' },
    { icon: <FiTrendingUp />, label: '500+ Accounts' },
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-[400px] h-[400px] bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/3 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <Badge variant="gold" className="text-[10px] tracking-wider">
            <FaRegGem className="inline mr-1" /> Leadership
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">
            <span className="gradient-text">Our Leadership</span>
          </h2>
        </motion.div>

        {/* ✅ Two Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* ================= DIRECTOR CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/10 via-pink/10 to-gold/10 rounded-2xl blur-2xl" />
            
            <div className="relative h-full bg-gradient-to-br from-gold/5 via-pink/5 to-gold/5 border border-line rounded-2xl p-6 md:p-8 flex flex-col items-center gap-5 shadow-2xl shadow-gold/5">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="relative flex-shrink-0"
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold to-pink flex items-center justify-center text-4xl font-black text-black shadow-xl shadow-gold/20">
                  <img src={abhishekPhoto} alt="Abhishek Pandey" className="w-full h-full rounded-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green border-2 border-card animate-pulse" />
              </motion.div>
              
              {/* Content */}
              <div className="text-center flex-1 flex flex-col">
                <FaQuoteLeft className="text-gold/20 text-2xl mb-1 mx-auto" />
                <h3 className="text-xl font-bold">Abhishek Pandey</h3>
                <p className="text-gold text-[11px] font-semibold mt-0.5">Director — EKANA FILMS</p>
                
                <p className="text-[13px] text-muted mt-3 leading-relaxed">
Leading digital strategy, social media management, digital marketing, music distribution and OTT/app growth with a focus on practical, measurable results.                </p>
                
                {/* Achievements */}
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {directorAchievements.map((item, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center gap-1.5 text-[9px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/40"
                    >
                      <span className="text-gold/70">{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= ACCOUNT MANAGER CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/10 via-pink/10 to-gold/10 rounded-2xl blur-2xl" />
            
            <div className="relative h-full bg-gradient-to-br from-gold/5 via-pink/5 to-gold/5 border border-line rounded-2xl p-6 md:p-8 flex flex-col items-center gap-5 shadow-2xl shadow-gold/5">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -3 }}
                className="relative flex-shrink-0"
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold to-pink flex items-center justify-center text-4xl font-black text-black shadow-xl shadow-gold/20">
                  <img src={rahulPPhoto} alt="Rahul Pandey" className="w-full h-full rounded-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green border-2 border-card animate-pulse" />
              </motion.div>
              
              {/* Content */}
              <div className="text-center flex-1 flex flex-col">
                <FaQuoteLeft className="text-gold/20 text-2xl mb-1 mx-auto" />
                <h3 className="text-xl font-bold">Rahul Pandey</h3>
                <p className="text-gold text-[11px] font-semibold mt-0.5">Account Manager — EKANA FILMS</p>
                
                <p className="text-[13px] text-muted mt-3 leading-relaxed">
                  Managing client relationships, coordinating projects and ensuring smooth communication between clients and our creative team for consistent results.
                </p>
                
                {/* Achievements */}
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {managerAchievements.map((item, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center gap-1.5 text-[9px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/40"
                    >
                      <span className="text-gold/70">{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Director;