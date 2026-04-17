import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Panchal_Resume.pdf';
    link.click();
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        const offset = 70; // slightly reduced for mobile
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-2xl bg-black/70 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <motion.a
            href="#"
            className="text-lg sm:text-2xl font-bold tracking-tight sm:tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            whileHover={{ scale: 1.08 }}
          >
            Rahul Panchal
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:w-0 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}

            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              Resume
            </motion.button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 sm:p-3 cursor-pointer rounded-lg hover:bg-white/10 transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-3xl bg-black/90 border-t border-white/10"
          >
            <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6 text-base sm:text-lg">
              
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="block text-zinc-300 hover:text-white py-2 transition"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  handleDownloadResume();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-base"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Download size={18} />
                Download Resume
              </motion.button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;