import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaRegSmile, FaCheckCircle, FaPaperPlane,
  FaInstagram, FaYoutube, FaTwitter, 
  FaLinkedin, FaSpotify, FaApple, FaFacebook,
  FaArrowRight, FaClock, FaUsers, FaRocket,
  FaGlobe, FaStar, FaShieldAlt
} from 'react-icons/fa';
import { FiSend, FiMapPin } from 'react-icons/fi';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 12345 67890', href: 'https://wa.me/911234567890' },
    { icon: <FaEnvelope />, label: 'Email', value: 'contact@ekana.com', href: 'mailto:contact@ekana.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: <FiMapPin />, label: 'Location', value: 'Mumbai, India', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaYoutube />, label: 'YouTube' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaLinkedin />, label: 'LinkedIn' },
    { icon: <FaSpotify />, label: 'Spotify' },
    { icon: <FaApple />, label: 'Apple Music' },
    { icon: <FaFacebook />, label: 'Facebook' },
  ];

  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Clients' },
    { icon: <FaRocket />, value: '1200+', label: 'Projects' },
    { icon: <FaGlobe />, value: '50+', label: 'Countries' },
    { icon: <FaStar />, value: '4.9', label: 'Rating' },
  ];

  const quickOptions = [
    'General Inquiry',
    'Project Collaboration',
    'Partnership',
    'Support'
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
            <FaRegSmile className="inline mr-1" /> Get in Touch
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-sm text-muted">
            Have a project in mind? Reach out and let's create something amazing together.
          </p>
        </motion.div>

        {/* Stats - Clean, no boxes */}
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Info (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">Contact Information</h3>
            
            {/* Contact Items - Clean, no boxes */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.label === 'Location' ? '_blank' : '_self'}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg group-hover:scale-110 transition-all duration-300">
                  {info.icon}
                </div>
                <div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">{info.label}</div>
                  <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Quick Options - Clean */}
            <div>
              <h4 className="text-xs text-muted uppercase tracking-wider mb-2">Quick Connect</h4>
              <div className="flex flex-wrap gap-2">
                {quickOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({ ...formData, subject: option })}
                    className="text-[10px] bg-white/5 hover:bg-gold/10 border border-white/10 px-3 py-1.5 rounded-full text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Social Links - Clean */}
            <div>
              <h4 className="text-xs text-muted uppercase tracking-wider mb-2">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form (3 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-line rounded-xl p-6 md:p-8">
              <h3 className="text-sm font-semibold mb-4">Send us a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-green/10 flex items-center justify-center text-green text-2xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-lg font-bold mt-4">Message Sent!</h3>
                  <p className="text-sm text-muted mt-2">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-muted block mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <label className="text-xs text-muted block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted block mb-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="General Inquiry"
                        className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-muted block mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your project..."
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-white/10 text-white/50 cursor-not-allowed'
                        : 'bg-gold text-black hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend /> Send Message
                      </>
                    )}
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-[10px] text-muted">
                    <span className="flex items-center gap-1">
                      <FaCheckCircle className="text-green text-[10px]" />
                      Secure
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-gold/50 text-[10px]" />
                      Response in 24hrs
                    </span>
                    <span className="flex items-center gap-1">
                      <FaShieldAlt className="text-gold/50 text-[10px]" />
                      Privacy Guaranteed
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;