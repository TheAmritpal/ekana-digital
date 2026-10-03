import { motion } from 'framer-motion';
import { FaUserCheck } from 'react-icons/fa';
import Badge from '../ui/Badge';

// ✅ Import images
import kaeshariPhoto from '../../assets/keshari.jpeg';
import nilamPhoto from '../../assets/nilam.jpeg';
import samarPhoto from '../../assets/samar.jpeg';
import kkPhoto from '../../assets/kk.jpeg';
import abhiPhoto from '../../assets/abhi.jpeg';
import kaluPhoto from '../../assets/kalu.jpeg';
import ParmodPhoto from '../../assets/pramod.jpeg';

const Accounts = () => {
  const accounts = [
    {
      name: 'Kesari Lal',
      photo: kaeshariPhoto,
    },
    {
      name: 'Nilam Giri',
      photo: nilamPhoto,
    },
    {
      name: 'Samar',
      photo: samarPhoto,
    },
    {
      name: 'KK',
      photo: kkPhoto,
    },
      {
      name: 'Parmod',
      photo: ParmodPhoto,
    },
    {
      name: 'Kalu',
      photo: kaluPhoto,
    },
    {
      name: 'Abhishek',
      photo: abhiPhoto,
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

              {/* ✅ Name only */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-sm group-hover:text-gold transition-colors">
                  {account.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accounts;