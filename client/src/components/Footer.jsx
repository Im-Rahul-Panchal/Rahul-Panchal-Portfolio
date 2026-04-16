import { motion } from 'framer-motion';
import { GitFork, Link, MessageCircleMore, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: GitFork, url: 'https://github.com/Im-Rahul-Panchal' },
    { name: 'LinkedIn', icon: Link, url: 'https://linkedin.com/in/rahul-panchal28' },
    { name: 'Twitter', icon: MessageCircleMore, url: 'https://twitter.com/rahulasync' },
  ];

  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-10">
          {/* Social Icons */}
          <div className="flex gap-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Rahul Panchal. All rights reserved.</p>
            <p className="mt-2 flex items-center justify-center gap-2">
              Built with <Heart size={16} className="text-red-500 fill-current" /> using React + Tailwind + Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;