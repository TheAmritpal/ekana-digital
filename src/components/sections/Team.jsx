import { motion } from 'framer-motion';
import { 
  FaStar, FaRegSmile,
} from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import Badge from '../ui/Badge';
import abhishekPhoto from '../../assets/abhishekpandey.png';
import dileepPhoto from '../../assets/dileepthakur.png';
import rahulKPhoto from '../../assets/rahulkushwaha.png';
import khushiPhoto from '../../assets/khushi.png';
import rahulPPhoto from '../../assets/rahulpandey.png';


const Team = () => {
  const members = [
    {
      initials: 'AP',
      name: 'Abhishek Pandey',
      role: 'Director',
      description: 'Overall FILMS strategy, social media, marketing, music distribution and OTT/app management.',
      expertise: ['Strategy', 'Leadership', 'Growth'],
      photo: abhishekPhoto,
    },
    {
      initials: 'DT',
      name: 'Dileep Thakur',
      role: 'Creative & Design',
      description: 'Posters, thumbnails, social creatives and campaign artwork.',
      expertise: ['Design', 'Branding', 'UI/UX'],
      photo: dileepPhoto,
    },
    {
      initials: 'RK',
      name: 'Rahul Kushwaha',
      role: 'Video & Reels',
      description: 'Reels, shorts, promotional videos and platform-ready content.',
      expertise: ['Editing', 'Animation', 'Production'],
      photo: rahulKPhoto,
    },
    {
      initials: 'KS',
      name: 'Khushi Singh',
      role: 'Social & Support',
      description: 'Posting, scheduling, notifications, community support and daily operations.',
      expertise: ['Community', 'Engagement', 'Analytics'],
      photo: khushiPhoto,
    },
    {
      initials: 'RP',
      name: 'Rahul Pandey',
      role: 'Account Manager',
      description: 'Client communication, account handling, project coordination and relationship management.',
      expertise: ['Client Relations', 'Coordination', 'Management'],
      photo: rahulPPhoto,
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="team" className="py-16 md:py-20 border-y border-white/5 bg-gradient-to-b from-black/30 to-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[300px] h-[300px] bg-pink/5 rounded-full blur-3xl" />
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
            <MdPeople className="inline mr-1" /> The Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mt-3 mb-2">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-sm text-muted">
            <FaRegSmile className="inline mr-1" /> Meet the people behind EKANA FILMS.
          </p>
        </motion.div>
        
        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-line rounded-xl p-5 text-center hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Avatar with Original Photo */}
              <div className="relative inline-block">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gold to-pink flex items-center justify-center text-2xl font-black text-black group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ring-2 ring-white/10">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="flex items-center justify-center w-full h-full text-black font-black text-2xl">${member.initials}</span>`;
                      }}
                    />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                </div>
                <div className="absolute -bottom-1 right-2 w-3 h-3 rounded-full bg-green border-2 border-card animate-pulse" />
              </div>
              
              {/* Info */}
              <h3 className="font-bold text-sm mt-3 group-hover:text-gold transition-colors">
                {member.name}
              </h3>
              <p className="text-gold text-[10px] font-semibold">{member.role}</p>
              
              <p className="text-[11px] text-muted mt-2 leading-relaxed">{member.description}</p>
              
              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                {member.expertise.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/40 flex items-center gap-1"
                  >
                    <FaStar className="text-gold/40 text-[6px]" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;