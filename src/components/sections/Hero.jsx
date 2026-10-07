import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, FiPlay, FiTrendingUp, FiMusic, 
  FiMonitor, FiStar, FiZap, FiUsers, FiGlobe,
  FiBarChart2, FiTarget
} from 'react-icons/fi';
import { 
  MdOutlineDashboard, MdOutlineRocketLaunch, 
  MdSpeed 
} from 'react-icons/md';
import { FaUsers, FaGlobe as FaGlobeSolid, FaRocket } from 'react-icons/fa';
import Badge from '../ui/Badge';

const Hero = () => {
  const stats = [
    { icon: <FiTrendingUp />, value: '360°', label: 'FILMS Management' },
    { icon: <FiMusic />, value: 'Music', label: 'Distribution' },
    { icon: <FiMonitor />, value: 'OTT + App', label: 'Management' },
  ];

  const features = [
    { icon: <FiZap />, text: 'Fast Growth' },
    { icon: <FaUsers />, text: 'Expert Team' },
    { icon: <FaGlobeSolid />, text: 'Global Reach' },
  ];

  const dashboardStats = [
    { label: 'Total Reach', value: '2.5M+', icon: <FiTrendingUp />, change: '+12%' },
    { label: 'Campaigns', value: '120+', icon: <FaRocket />, change: '+8%' },
    { label: 'Growth Rate', value: '+67%', icon: <FiBarChart2 />, change: '+5%' },
  ];

  return (
    <section className="min-h-screen flex items-center pt-32 relative overflow-hidden pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-pink/5 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/3 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="gold" className="mb-5 text-xs tracking-wider">
                <MdOutlineRocketLaunch className="inline mr-1" />
                Social • Music • OTT • Marketing
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
            >
              Your Digital
              <br />
              business. <span className="gradient-text">Managed.</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center gap-3 mt-3"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-gold fill-gold text-sm" />
                ))}
              </div>
              <span className="text-xs text-muted">Trusted by 500+ creators</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base text-muted max-w-lg mt-4 leading-relaxed"
            >
              EKANA FILMS manages social media, distributes music, handles OTT & apps, 
              and runs performance marketing campaigns for creators and brands worldwide.
            </motion.p>
            
            {/* Fixed Buttons - No nested <a> tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm bg-gold text-black hover:shadow-lg hover:shadow-gold/25 hover:scale-105 transition-all duration-300"
              >
                Start a Project <FiArrowRight className="text-sm" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <FiPlay className="text-sm" /> View Services
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/5"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2.5 group">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-base group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-base">{stat.value}</div>
                    <div className="text-[10px] text-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Feature Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-5"
            >
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1.5 text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/60"
                >
                  <span className="text-gold/70">{feature.icon}</span>
                  {feature.text}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* Right Content - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring', bounce: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-gold/10 via-pink/10 to-gold/10 rounded-2xl blur-2xl animate-pulse" />
              
              <div className="relative bg-card border border-line rounded-2xl p-5 shadow-2xl shadow-gold/5">
                <div className="bg-gradient-to-br from-gold/5 via-pink/5 to-gold/5 rounded-xl p-5 min-h-[350px] relative overflow-hidden">
                  {/* Animated gradient orbs */}
                  <motion.div
                    animate={{
                      x: ['0%', '100%', '0%'],
                      y: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-[200px] h-[200px] bg-pink/20 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      x: ['100%', '0%', '100%'],
                      y: ['100%', '0%', '100%'],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute -top-1/2 -left-1/2 w-[180px] h-[180px] bg-gold/20 rounded-full blur-3xl"
                  />
                  
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-2">
                      <MdOutlineDashboard className="text-gold text-lg" />
                      <span className="font-bold text-sm">EKANA FILMS</span>
                    </div>
                    <span className="text-green bg-green/10 px-3 py-1 rounded-full text-[10px] font-semibold animate-pulse">
                      <MdSpeed className="inline mr-1 text-[10px]" />
                      Live Growth
                    </span>
                  </div>
                  
                  {/* Chart Bars */}
                  <div className="h-40 flex items-end gap-1.5 mt-10 relative z-10">
                    {[35, 48, 43, 65, 59, 84, 100].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ 
                          delay: 0.6 + index * 0.08, 
                          duration: 0.6,
                          type: 'spring',
                          bounce: 0.3
                        }}
                        className="flex-1 bg-gradient-to-t from-gold to-pink rounded-t-lg relative group"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 + index * 0.08 }}
                          className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {height}%
                        </motion.div>
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] text-white/20">
                          {index + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-3 mt-10 relative z-10">
                    {dashboardStats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.08 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/10 hover:border-gold/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gold text-lg">{stat.icon}</span>
                          <span className="text-[9px] text-green">{stat.change}</span>
                        </div>
                        <div className="text-[9px] text-muted uppercase tracking-wider">{stat.label}</div>
                        <div className={`text-base font-bold ${stat.label === 'Growth Rate' ? 'text-green' : 'text-white'} group-hover:scale-105 transition-transform`}>
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;