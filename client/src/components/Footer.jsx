import { motion } from 'framer-motion';
import { GitFork, Link, MessageCircleMore, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: GitFork, url: 'https://github.com/Im-Rahul-Panchal' },
    { name: 'LinkedIn', icon: Link, url: 'https://linkedin.com/in/rahul-panchal28' },
    { name: 'Twitter', icon: MessageCircleMore, url: 'https://twitter.com/rahulasync' },
  ];

  return (
    <footer className="py-12 md:py-16 px-4 sm:px-6 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8 md:space-y-10">
          
          {/* Social Icons */}
          <div className="flex gap-5 sm:gap-6 md:gap-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={24} className="sm:size-[26px] md:size-[28px]" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-zinc-500 text-xs sm:text-sm px-2">
            <p>
              © {new Date().getFullYear()} Rahul Panchal. All rights reserved.
            </p>

            <p className="mt-2 flex flex-wrap items-center justify-center gap-2 leading-relaxed">
              Built with 
              <Heart size={14} className="text-red-500 fill-current sm:size-[16px]" />
              <span className="whitespace-nowrap">
                React + Tailwind + Framer Motion
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;