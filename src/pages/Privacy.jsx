import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaLock, FaUserShield, FaCookieBite, 
  FaShareAlt, FaDatabase, FaChild, FaClock, 
  FaUserCheck, FaSyncAlt, FaEnvelope, FaMapMarkerAlt,
  FaRegSmile, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import { MdPrivacyTip, MdSecurity } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Privacy = () => {
  const sections = [
    {
      icon: <FaUserShield />,
      title: '1. Information We Collect',
      content: [
        'We may collect information that you voluntarily provide to us when you:',
        '• Contact us through our website',
        '• Submit a business enquiry',
        '• Request information about our services',
        '• Communicate with us by email, phone, or other communication channels',
        '',
        'The information may include:',
        '• Name',
        '• Email address',
        '• Phone number',
        '• Company or organization name',
        '• Business requirements',
        '• Project-related information',
        '• Any other information you choose to provide',
        '',
        'We may also automatically collect limited technical information such as:',
        '• IP address',
        '• Browser type',
        '• Device type',
        '• Operating system',
        '• Website pages visited',
        '• Date and time of visits',
        '• General website usage information',
      ],
    },
    {
      icon: <FaDatabase />,
      title: '2. How We Use Information',
      content: [
        'We may use the information we collect to:',
        '• Respond to enquiries and requests',
        '• Provide information about our services',
        '• Communicate regarding business or project requirements',
        '• Provide and manage our services',
        '• Improve our website and services',
        '• Understand website usage and performance',
        '• Maintain website security',
        '• Comply with applicable legal and regulatory requirements',
        '',
        'We do not use personal information for purposes unrelated to the reason it was provided unless permitted or required by applicable law.',
      ],
    },
    {
      icon: <FaCookieBite />,
      title: '3. Cookies and Analytics',
      content: [
        'Our website may use cookies and similar technologies to improve website functionality, understand website traffic, and analyze how visitors use our website.',
        '',
        'We may use third-party analytics or advertising services where applicable. These services may collect information according to their own privacy policies.',
        '',
        'You can control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.',
      ],
    },
    {
      icon: <FaShareAlt />,
      title: '4. Sharing of Information',
      content: [
        'We do not sell or rent your personal information.',
        '',
        'We may share information with trusted service providers or technology partners when necessary to operate our website, provide services, communicate with users, analyze website performance, or comply with legal obligations.',
        '',
        'We may also disclose information when required by law, legal process, or a valid governmental request.',
      ],
    },
    {
      icon: <FaLock />,
      title: '5. Data Security',
      content: [
        'We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.',
        '',
        'However, no method of transmission or electronic storage can be guaranteed to be completely secure.',
      ],
    },
    {
      icon: <FaShareAlt />,
      title: '6. Third-Party Websites',
      content: [
        'Our website may contain links to third-party websites, platforms, or services.',
        '',
        'We are not responsible for the privacy practices, content, or security of third-party websites. We recommend reviewing the privacy policies of those websites before providing personal information.',
      ],
    },
    {
      icon: <FaChild />,
      title: "7. Children's Privacy",
      content: [
        'Our website and services are not specifically directed toward children.',
        '',
        'We do not knowingly collect personal information from children through our website. If you believe that a child has provided personal information to us, please contact us so that we can take appropriate action.',
      ],
    },
    {
      icon: <FaClock />,
      title: '8. Data Retention',
      content: [
        'We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, to provide services, maintain business records, resolve disputes, comply with legal obligations, or protect our legitimate interests.',
      ],
    },
    {
      icon: <FaUserCheck />,
      title: '9. Your Rights',
      content: [
        'Depending on applicable law, you may have rights regarding your personal information, including requesting access, correction, or deletion of certain information.',
        '',
        'To make a privacy-related request, please contact us using the details below.',
      ],
    },
    {
      icon: <FaSyncAlt />,
      title: '10. Changes to This Privacy Policy',
      content: [
        'We may update this Privacy Policy from time to time to reflect changes in our services, website, technology, or applicable legal requirements.',
        '',
        'Any updated version will be published on this page with a revised effective date.',
      ],
    },
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <Badge variant="gold" className="text-[10px] tracking-wider">
            <MdPrivacyTip className="inline mr-1" /> Legal
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-sm text-muted">
            At Ekana Films, we respect your privacy and are committed to protecting the personal information that you share with us through our website, ekanafilms.com.
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-card border border-line rounded-xl p-6 md:p-8 mb-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0">
              <FaShieldAlt />
            </div>
            <p className="text-sm text-muted leading-relaxed">
              This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or contact us regarding our services.
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.03, duration: 0.5 }}
              className="bg-card border border-line rounded-xl p-6 md:p-8 hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-base md:text-lg font-bold">{section.title}</h2>
              </div>
              <div className="space-y-2 pl-0 md:pl-13">
                {section.content.map((line, i) => (
                  <p
                    key={i}
                    className={`text-sm leading-relaxed ${
                      line.startsWith('•')
                        ? 'text-white/60 pl-4'
                        : line === ''
                        ? 'h-2'
                        : 'text-muted'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gradient-to-r from-gold/5 to-pink/5 border border-white/5 rounded-xl p-6 md:p-8 mt-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg">
              <FaEnvelope />
            </div>
            <h2 className="text-base md:text-lg font-bold">11. Contact Us</h2>
          </div>
          <p className="text-sm text-muted mb-4">
            If you have any questions regarding this Privacy Policy or how your information is handled, please contact us:
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gold text-sm" />
              <span className="text-sm text-white/80">Ekana Films, Mumbai, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gold text-sm" />
              <a href="mailto:abhishekdigital@ekanafilms.com" className="text-sm text-white/80 hover:text-gold transition-colors">
                abhishekdigital@ekanafilms.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdSecurity className="text-gold text-sm" />
              <span className="text-sm text-white/80">Website: ekanafilms.com</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center max-w-2xl mx-auto pt-8 mt-8 border-t border-white/5"
        >
          <p className="text-xs text-muted mb-4 flex items-center justify-center gap-1">
            <FaCheckCircle className="text-green text-xs" />
            Your privacy is important to us
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/contact" size="default">
              Contact Us <FaArrowRight className="text-sm" />
            </Button>
            <Button variant="outline" size="default" href="/terms">
              View Terms
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;