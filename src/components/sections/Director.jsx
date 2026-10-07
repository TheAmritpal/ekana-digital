import { motion } from 'framer-motion';
import { 
  FaQuoteLeft, FaLinkedin, FaTwitter, FaEnvelope, 
  FaAward, FaGlobe, FaBriefcase, FaRegGem,
  FaCheckCircle
} from 'react-icons/fa';
import { FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';
import { MdOutlineVerified } from 'react-icons/md';
import Badge from '../ui/Badge';
import abhishekPhoto from '../../assets/abhishekpandey.png';


const Director = () => {
  const achievements = [
    { icon: <FiTarget />, label: '10+ Years Experience' },
    { icon: <FaGlobe />, label: 'Global Reach' },
    { icon: <FiTrendingUp />, label: '500+ Projects' },
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
            <span className="gradient-text">Director</span>
          </h2>
        </motion.div>
        
        {/* Director Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/10 via-pink/10 to-gold/10 rounded-2xl blur-2xl" />
          
          <div className="relative bg-gradient-to-br from-gold/5 via-pink/5 to-gold/5 border border-line rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-2xl shadow-gold/5">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="relative flex-shrink-0"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold to-pink flex items-center justify-center text-4xl font-black text-black shadow-xl shadow-gold/20">
                <img src={abhishekPhoto} alt="Abhishek Pandey" className="w-full h-full rounded-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green border-2 border-card animate-pulse" />
            </motion.div>
            
            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <FaQuoteLeft className="text-gold/20 text-2xl mb-1" />
              <h3 className="text-2xl font-bold">Abhishek Pandey</h3>
              <p className="text-gold text-[11px] font-semibold mt-0.5">Director — EKANA FILMS</p>
              
              <p className="text-[13px] text-muted mt-3 leading-relaxed">
                Leading social media management, digital marketing, music distribution and OTT/app growth with a focus on practical, measurable results.
              </p>
              
              {/* Achievements */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-3">
                {achievements.map((item, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-1.5 text-[9px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/40"
                  >
                    <span className="text-gold/70">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
              
              {/* Social Links */}
              {/* <div className="flex gap-1.5 justify-center md:justify-start mt-3 pt-3 border-t border-white/5">
                {[
                  { icon: <FaLinkedin />, label: 'LinkedIn' },
                  { icon: <FaTwitter />, label: 'Twitter' },
                  { icon: <FaEnvelope />, label: 'Email' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <span className="text-xs">{social.icon}</span>
                  </motion.a>
                ))}
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Director;