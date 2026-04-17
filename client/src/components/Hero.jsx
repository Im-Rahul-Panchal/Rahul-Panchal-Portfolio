import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  const techIcons = ['⚛️', '📱', '🚀', '💻', '⚡', '🎨', '🌐', '🔥'];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Panchal_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-15 sm:pt-20 bg-[#0a0a0a]">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(59,130,246,0.15),transparent_50%)] bg-[radial-gradient(at_70%_70%,rgba(168,85,247,0.15),transparent_50%)]" />
      
      {/* Floating Icons */}
      {techIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl sm:text-5xl opacity-20 sm:opacity-30 pointer-events-none"
          initial={{ 
            x: Math.random() * window.innerWidth * 0.8,
            y: Math.random() * window.innerHeight * 0.8,
            scale: 0.6 + Math.random() * 0.8
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, (Math.random() - 0.5) * 80, 0],
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 12 + Math.random() * 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${15 + (index * 12) % 70}%`,
            top: `${10 + (index * 18) % 65}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* Greeting */}
          <motion.p
            className="text-sm sm:text-xl text-blue-400 font-medium tracking-widest mb-2 sm:mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            👋 HELLO, I AM
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-7xl md:text-[6.5rem] font-bold mb-4 sm:mb-6 leading-tight sm:leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
              Rahul Panchal
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            className="text-xl sm:text-4xl md:text-5xl font-semibold text-zinc-200 mb-5 sm:mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base sm:text-xl text-zinc-400 max-w-xl sm:max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Crafting high-performance digital experiences that blend beautiful design with powerful functionality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            
            <motion.a
              href="#projects"
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-lg overflow-hidden shadow-2xl shadow-purple-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore My Work
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </motion.a>

            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl border border-white/30 bg-white/5 backdrop-blur-xl text-white font-semibold text-sm sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all cursor-pointer shadow-xl shadow-purple-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            <motion.a
              href="#contact"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl border border-white/30 bg-white/5 backdrop-blur-xl text-white font-semibold text-sm sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} />
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;