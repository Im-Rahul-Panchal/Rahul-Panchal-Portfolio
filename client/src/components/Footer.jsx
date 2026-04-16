import { motion } from 'framer-motion';
import { GitBranch, Users, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: GitBranch,
      url: 'https://github.com/Im-Rahul-Panchal',
    },
    {
      name: 'LinkedIn',
      icon: Users,
      url: 'https://linkedin.com/in/rahul-panchal28',
    },
    {
      name: 'Twitter',
      icon: MessageCircle,
      url: 'https://twitter.com/rahulasync',
    },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center gap-2 flex-wrap justify-center">
              <span>© {new Date().getFullYear()} Rahul Panchal. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React + Tailwind
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

