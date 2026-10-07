
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaInstagram, FaFacebook,
  FaArrowRight, FaPhone,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ ONLY Instagram & Facebook, each with separate path
  const socialIcons = [
    { 
      icon: <FaInstagram />, 
      label: 'Instagram', 
      color: 'hover:text-pink-500',
      href: 'https://www.instagram.com/ekanafilms/' 
    },
    { 
      icon: <FaFacebook />, 
      label: 'Facebook', 
      color: 'hover:text-blue-500',
      href: 'https://www.facebook.com/ekanafilms' 
    },
  ];

  const services = [
    { name: 'Social Media Management', href: '/services' },
    { name: 'Music Distribution', href: '/services' },
    { name: 'OTT & App Management', href: '/services' },
    { name: 'FILMS Marketing', href: '/services' },
    { name: 'Content Creation', href: '/services' },
    { name: 'Analytics & Growth', href: '/services' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { icon: <MdEmail />, label: 'Email', value: 'abhishekdigital@ekanafilms.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 8087431062' },
    { icon: <MdLocationOn />, label: 'Location', value: 'Mumbai, India' },
    { icon: <MdAccessTime />, label: 'Working Hours', value: 'Mon-Fri 9AM-6PM' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-black/30 to-[#0a0a0a]">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ['0%', '100%', '0%'],
            y: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -left-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: ['100%', '0%', '100%'],
            y: ['100%', '0%', '100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -right-1/2 w-[500px] h-[500px] bg-pink/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-pink flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform duration-300">
                ED
              </div>
              <div>
                <h3 className="text-2xl font-black">
                  EKANA <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink">FILMS</span>
                </h3>
                <span className="text-xs text-muted tracking-wider uppercase">FILMS Ecosystem</span>
              </div>
            </Link>
            
            <p className="text-muted text-sm leading-relaxed max-w-md">
              Social Media • Music Distribution • OTT & App • Marketing — 
              One connected FILMS ecosystem for creators, artists, and brands worldwide.
            </p>
            
            {/* Social Icons — ONLY Instagram & Facebook with separate paths */}
            <div className="flex flex-wrap gap-2 mt-6">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 ${social.color} hover:border-gold/30 transition-all duration-300 group relative`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-black/90 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mt-6 p-4 rounded-xl bg-gradient-to-r from-gold/5 to-pink/5 border border-white/5"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/30 to-pink/30 border-2 border-black flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold">Trusted by 500+</div>
                <div className="text-xs text-muted">Creators & Brands</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gold" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={service.href} 
                    className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-gold/50 group-hover:text-gold transition-colors">
                      <FaArrowRight className="text-xs" />
                    </span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-pink" />
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={item.href} 
                    className="text-sm text-white/50 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-green" />
              Get in Touch
            </h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold/20 to-pink/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted">{info.label}</div>
                    <div className="text-sm font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

           
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted"
        >
          {/* ✅ Copyright with Powered by Nitar Infotech */}
          <span>
            © {currentYear} EKANA FILMS. All rights reserved. | Powered by{' '}
            <a
              href="https://nitar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold to-pink hover:opacity-80 transition-opacity"
            >
              Nitar Infotech
            </a>
          </span>

          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span className="w-0.5 h-3 rounded-full bg-white/10" />
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          
          <span>Social • Music • OTT • Marketing</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;