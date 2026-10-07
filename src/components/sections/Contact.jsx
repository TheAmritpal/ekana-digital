import { motion } from 'framer-motion';
import { 
  FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaClock, FaArrowRight, FaRegSmile,
  FaCheckCircle, FaRocket, FaPaperPlane
} from 'react-icons/fa';
import { FiMail, FiMessageCircle } from 'react-icons/fi';
import { MdOutlineAccessTime, MdLocationOn } from 'react-icons/md';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <FaWhatsapp />, 
      label: 'WhatsApp', 
      value: '+91 8087431062',
      href: 'https://wa.me/918087431062',
      description: 'Quick response'
    },
    { 
      icon: <FaEnvelope />, 
      label: 'Email', 
      value: 'abhishekdigital@ekanafilms.com',
      href: 'mailto:abhishekdigital@ekanafilms.com',
      description: 'We reply within 24 hours'
    },
    { 
      icon: <FaPhone />, 
      label: 'Phone', 
      value: '+91 8087431062',
      href: 'tel:+918087431062',
      description: 'Mon-Fri 9AM-6PM'
    },
    { 
      icon: <MdLocationOn />, 
      label: 'Location', 
      value: 'Mumbai, India',
      href: '#',
      description: 'Visit our office'
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-line rounded-2xl p-6 md:p-10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            {/* Header */}
            <Badge variant="gold" className="text-[10px] tracking-wider">
              <FaRegSmile className="inline mr-1" /> Let's Connect
            </Badge>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-3xl sm:text-4xl font-black mt-3 mb-2"
            >
              One team for your <span className="gradient-text">digital growth.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-sm text-muted max-w-2xl mx-auto"
            >
              <FaRocket className="inline mr-1 text-gold/50" />
              Creators, singers, music labels, OTT platforms and app businesses — let's build and grow your complete digital ecosystem.
            </motion.p>
            
            {/* Contact Cards - Clean no boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : '_self'}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 text-center"
                >
                  <div className="text-2xl text-gold mb-1 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div className="text-[9px] text-muted uppercase tracking-wider">{info.label}</div>
                  <div className="text-[11px] font-medium text-white/80 group-hover:text-white transition-colors">
                    {info.value}
                  </div>
                  <div className="text-[8px] text-muted mt-0.5">{info.description}</div>
                </motion.a>
              ))}
            </div>
            
            {/* CTA Buttons - Clean */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-wrap gap-3 justify-center mt-6"
            >
              <a 
                href="https://wa.me/918087431062" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gold text-black hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
              <a 
                href="mailto:abhishekdigital@ekanafilms.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <FiMail /> Email Us
              </a>
            </motion.div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-[10px] text-muted mt-4 flex items-center justify-center gap-1.5"
            >
              <FaCheckCircle className="text-green text-[10px]" />
              We respond within 24 hours
              <FaPaperPlane className="text-gold/50 text-[10px] ml-1" />
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;