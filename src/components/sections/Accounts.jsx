import { motion } from 'framer-motion';
import { 
  FaInstagram, FaFacebook, FaYoutube, FaGlobe, 
  FaSpotify, FaApple, FaTwitter, FaTiktok,
  FaSoundcloud, FaMusic, FaUserCheck
} from 'react-icons/fa';
import Badge from '../ui/Badge';

const Accounts = () => {
  const accounts = [
    {
      initials: 'KP',
      name: 'Kalpana Patowary',
      role: 'Singer • Artist',
      tags: ['@kalpana', 'YouTube'],
      socials: [
        { icon: <FaInstagram />, label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: <FaFacebook />, label: 'Facebook', color: 'hover:text-blue-500' },
        { icon: <FaYoutube />, label: 'YouTube', color: 'hover:text-red-500' },
        { icon: <FaSpotify />, label: 'Spotify', color: 'hover:text-green-500' },
      ],
    },
    {
      initials: 'CR',
      name: 'Creator Name',
      role: 'Creator • Influencer',
      tags: ['@creator', 'YouTube'],
      socials: [
        { icon: <FaInstagram />, label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: <FaTwitter />, label: 'Twitter', color: 'hover:text-blue-400' },
        { icon: <FaYoutube />, label: 'YouTube', color: 'hover:text-red-500' },
        { icon: <FaTiktok />, label: 'TikTok', color: 'hover:text-pink-400' },
      ],
    },
    {
      initials: 'AR',
      name: 'Artist Name',
      role: 'Artist • Music Producer',
      tags: ['@artist', 'Music'],
      socials: [
        { icon: <FaInstagram />, label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: <FaSpotify />, label: 'Spotify', color: 'hover:text-green-500' },
        { icon: <FaApple />, label: 'Apple Music', color: 'hover:text-gray-400' },
        { icon: <FaSoundcloud />, label: 'SoundCloud', color: 'hover:text-orange-500' },
      ],
    },
    {
      initials: 'BR',
      name: 'Brand / Company',
      role: 'Brand • Business',
      tags: ['@brand', 'Website'],
      socials: [
        { icon: <FaInstagram />, label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: <FaFacebook />, label: 'Facebook', color: 'hover:text-blue-500' },
        { icon: <FaGlobe />, label: 'Website', color: 'hover:text-gold' },
        { icon: <FaTwitter />, label: 'Twitter', color: 'hover:text-blue-400' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[500px] h-[500px] bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
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
          <Badge variant="pink" className="text-[10px] tracking-wider">
            <FaUserCheck className="inline mr-1" />
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-2">
            Artists & Accounts <span className="gradient-text">We Manage</span>
          </h2>
          <p className="text-sm text-muted">
            Demo profiles — actual client photos, names and social IDs can replace these.
          </p>
        </motion.div>
        
        {/* Accounts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-line rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Header with Initials */}
              <div className="h-36 bg-gradient-to-br from-gold/15 via-pink/15 to-gold/15 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-all duration-300"
                >
                  {account.initials}
                </motion.div>
                
                {/* Decorative dots */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink/30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                </div>
                
                <span className="absolute bottom-2 right-2 text-[8px] bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full text-white/40 border border-white/5">
                  DEMO
                </span>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-sm group-hover:text-gold transition-colors">
                  {account.name}
                </h3>
                <p className="text-gold text-[11px] font-semibold">{account.role}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
                  {account.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[9px] border border-white/10 px-2 py-0.5 rounded-full text-white/40 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Social Icons */}
                <div className="flex gap-1.5">
                  {account.socials.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 text-center border border-white/10 rounded-lg py-1.5 text-[10px] text-white/40 ${social.color} transition-all duration-300 flex items-center justify-center gap-1 hover:border-gold/30 hover:bg-white/5`}
                    >
                      <span className="text-[11px]">{social.icon}</span>
                      <span className="hidden md:inline">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default Accounts;