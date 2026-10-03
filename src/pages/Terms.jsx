import { motion } from 'framer-motion';
import { 
  FaBook, FaGlobe, FaCopyright, FaUsers, 
  FaInfoCircle, FaNetworkWired, FaBullhorn, 
  FaServer, FaLink, FaBalanceScale, FaSyncAlt,
  FaGavel, FaEnvelope, FaMapMarkerAlt,
  FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import { MdRule, MdSecurity } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Terms = () => {
  const sections = [
    {
      icon: <FaBook />,
      title: '1. About Our Services',
      content: [
        'Ekana Films provides digital media and entertainment-related services, which may include:',
        '• Social Media Management',
        '• Digital Marketing',
        '• Music Distribution',
        '• OTT & App Management',
        '• Online Advertising',
        '• Content & Creative Services',
        '• Digital Analytics and Growth Services',
        '',
        'The exact scope of services provided to a client may be agreed separately through written communication, proposals, quotations, agreements, or other applicable documentation.',
      ],
    },
    {
      icon: <FaGlobe />,
      title: '2. Website Use',
      content: [
        'You agree to use this website only for lawful purposes.',
        '',
        'You must not:',
        '• Use the website for unlawful activities',
        '• Attempt to gain unauthorized access to the website or its systems',
        '• Introduce malicious software or harmful code',
        '• Interfere with the operation or security of the website',
        '• Copy or misuse website content without permission',
        '• Use the website to infringe the rights of others',
      ],
    },
    {
      icon: <FaCopyright />,
      title: '3. Intellectual Property',
      content: [
        'Unless otherwise stated, the content available on this website, including text, logos, graphics, designs, photographs, layouts, and other materials, is owned by or licensed to Ekana Films.',
        '',
        'You may not reproduce, modify, distribute, publish, or commercially use our website content without prior written permission, except where permitted by applicable law.',
      ],
    },
    {
      icon: <FaUsers />,
      title: '4. Client Materials',
      content: [
        'When a client provides photographs, videos, music, artwork, logos, trademarks, documents, or other materials to Ekana Films, the client is responsible for ensuring that they have the necessary rights, permissions, and licenses to provide and use those materials.',
        '',
        'The client remains responsible for any third-party claims arising from materials supplied by the client.',
      ],
    },
    {
      icon: <FaInfoCircle />,
      title: '5. Service Information',
      content: [
        'Information about our services displayed on this website is provided for general informational purposes.',
        '',
        'Service availability, pricing, deliverables, timelines, and other commercial terms may vary depending on the specific project and may be agreed separately with the client.',
      ],
    },
    {
      icon: <FaNetworkWired />,
      title: '6. Third-Party Platforms',
      content: [
        'Our services may involve third-party platforms such as social media networks, advertising platforms, music streaming services, app stores, analytics platforms, and other digital services.',
        '',
        'These platforms operate independently and may change their policies, algorithms, requirements, availability, or functionality.',
        '',
        'Ekana Films does not guarantee that a third-party platform will approve, maintain, monetize, distribute, or promote any particular content, account, advertisement, application, or campaign.',
      ],
    },
    {
      icon: <FaBullhorn />,
      title: '7. Advertising and Marketing Results',
      content: [
        'Digital advertising and marketing performance may depend on various factors, including platform policies, audience behavior, competition, budgets, content quality, algorithms, and market conditions.',
        '',
        'Therefore, unless specifically agreed in writing, we do not guarantee a particular number of views, followers, subscribers, installations, leads, revenue, or other performance results.',
      ],
    },
    {
      icon: <FaServer />,
      title: '8. Website Availability',
      content: [
        'We aim to keep our website available and functional, but we do not guarantee that the website will always be available, uninterrupted, secure, or free from errors.',
        '',
        'We may modify, suspend, or discontinue any part of the website when necessary.',
      ],
    },
    {
      icon: <FaLink />,
      title: '9. External Links',
      content: [
        'Our website may contain links to third-party websites and services.',
        '',
        'These links are provided for convenience. Ekana Films does not control and is not responsible for the content, availability, security, or policies of third-party websites.',
      ],
    },
    {
      icon: <FaBalanceScale />,
      title: '10. Limitation of Liability',
      content: [
        'To the extent permitted by applicable law, Ekana Films will not be responsible for indirect, incidental, consequential, or special losses arising from the use of this website or reliance on information provided through the website.',
        '',
        'Nothing in these Terms is intended to exclude any liability that cannot legally be excluded under applicable law.',
      ],
    },
    {
      icon: <FaSyncAlt />,
      title: '11. Changes to These Terms',
      content: [
        'We may update these Terms & Conditions from time to time.',
        '',
        'Changes will become effective when the updated Terms are published on this page. We recommend reviewing this page periodically.',
      ],
    },
    {
      icon: <FaGavel />,
      title: '12. Governing Law',
      content: [
        'These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India.',
        '',
        'Any disputes shall be subject to the jurisdiction of the appropriate courts having jurisdiction over the applicable matter and location.',
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
            <MdRule className="inline mr-1" /> Legal
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-3">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-sm text-muted">
            Welcome to Ekana Films. These Terms & Conditions govern your use of the ekanafilms.com website and your interactions with Ekana Films regarding our services.
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
              <FaBook />
            </div>
            <p className="text-sm text-muted leading-relaxed">
              By accessing or using our website, you agree to these Terms & Conditions. Please read them carefully before using our services.
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
          transition={{ delay: 0.55, duration: 0.5 }}
          className="bg-gradient-to-r from-gold/5 to-pink/5 border border-white/5 rounded-xl p-6 md:p-8 mt-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-lg">
              <FaEnvelope />
            </div>
            <h2 className="text-base md:text-lg font-bold">13. Contact Us</h2>
          </div>
          <p className="text-sm text-muted mb-4">
            For questions regarding these Terms & Conditions, please contact:
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
          transition={{ delay: 0.65, duration: 0.4 }}
          className="text-center max-w-2xl mx-auto pt-8 mt-8 border-t border-white/5"
        >
          <p className="text-xs text-muted mb-4 flex items-center justify-center gap-1">
            <FaCheckCircle className="text-green text-xs" />
            Please review these terms carefully
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/contact" size="default">
              Contact Us <FaArrowRight className="text-sm" />
            </Button>
            <Button variant="outline" size="default" href="/privacy">
              View Privacy Policy
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;