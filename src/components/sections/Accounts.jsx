


import { motion } from 'framer-motion';
import { FaUserCheck, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Badge from '../ui/Badge';

// ✅ Import images
import kaeshariPhoto from '../../assets/keshari.jpeg';
import nilamPhoto from '../../assets/nilam.jpeg';
import samarPhoto from '../../assets/samar.jpeg';
import kkPhoto from '../../assets/kk.jpeg';
import abhiPhoto from '../../assets/abhi.jpeg';
import kaluPhoto from '../../assets/kalu.jpeg';
import ParmodPhoto from '../../assets/pramod.jpeg';

import batohiPhoto from '../../assets/batohi.png';
import monuPhoto from '../../assets/monu.png';
import aniketPhoto from '../../assets/aniket.png';
import gautamPhoto from '../../assets/gautam.png';
import sonaPhoto from '../../assets/sona.png';
import anchalPhoto from '../../assets/anchal.png';

const Accounts = () => {
  // ✅ Add category + social links for each account
  const accounts = [
    {
      name: 'Monu Albela',
      category: 'Singer • Artist',
      photo: monuPhoto,
      instagram: 'https://www.instagram.com/singer_monu_albela/',
      facebook: 'https://www.facebook.com/singermonualbela',
      youtube: 'https://www.youtube.com/@monualbelajunction',
    },
    {
      name: 'Anchal Singh',
      category: 'Creator • Influencer',
      photo: anchalPhoto,
      instagram: 'https://www.instagram.com/anchal74080/',
      facebook: 'https://www.facebook.com/profile.php?id=61580048400129',
      youtube: 'https://www.youtube.com/',
    },
    {
      name: 'Ankit Pandey',
      category: 'Creator • Influencer',
      photo: aniketPhoto,
      instagram: 'https://www.instagram.com/ankit_pandeyji583/',
      facebook: 'https://www.facebook.com/ankit.pandeyji.583',
      youtube: 'https://www.youtube.com/',
    },
    {
      name: 'Sona Singh',
      category: 'Creator • Influencer',
      photo: sonaPhoto,
      instagram: 'https://www.instagram.com/sona__singh_11_/',
      facebook: 'https://www.facebook.com/',
      youtube: 'https://www.youtube.com/',
    },
    {
      name: 'Gautam Singh',
      category: 'Singer',
      photo: gautamPhoto,
      instagram: 'https://www.instagram.com/singer_gautam_singh.999/',
      facebook: 'https://www.facebook.com/profile.php?id=100013731486677',
      youtube: 'https://www.youtube.com/',
    },
    {
      name: 'Batohi Babu बटोही बाबू',
      category: 'Vlogger',
      photo: batohiPhoto,
      instagram: 'https://www.instagram.com/batohibabu/',
      facebook: 'https://www.facebook.com/profile.php?id=100093939917600',
      youtube: 'https://www.youtube.com/',
    },
    // {
    //   name: 'Abhishek',
    //   category: 'Artist • Creator',
    //   photo: abhiPhoto,
    //   instagram: 'https://www.instagram.com/',
    //   facebook: 'https://www.facebook.com/',
    //   youtube: 'https://www.youtube.com/',
    // },
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
        </motion.div>

        {/* Accounts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-line rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              {/* ✅ Image */}
              <div className="h-48 bg-gradient-to-br from-gold/15 via-pink/15 to-gold/15 flex items-center justify-center relative overflow-hidden">
                <img
                  src={account.photo}
                  alt={account.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="flex items-center justify-center w-full h-full text-4xl font-black text-white/10">${account.name.charAt(0)}</span>`;
                  }}
                />
              </div>

              {/* ✅ Name + Category + Social Links */}
              <div className="p-4 text-center">
                {/* Name */}
                <h3 className="font-bold text-sm group-hover:text-gold transition-colors">
                  {account.name}
                </h3>

                {/* Category */}
                <p className="text-gold text-[10px] font-semibold mt-0.5">
                  {account.category}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  <a
                    href={account.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${account.name} Instagram`}
                    className="w-7 h-7 rounded-full bg-white/5 hover:bg-gold/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <FaInstagram className="text-xs" />
                  </a>
                  <a
                    href={account.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${account.name} Facebook`}
                    className="w-7 h-7 rounded-full bg-white/5 hover:bg-gold/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <FaFacebook className="text-xs" />
                  </a>
                  <a
                    href={account.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${account.name} YouTube`}
                    className="w-7 h-7 rounded-full bg-white/5 hover:bg-gold/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  >
                    <FaYoutube className="text-xs" />
                  </a>
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