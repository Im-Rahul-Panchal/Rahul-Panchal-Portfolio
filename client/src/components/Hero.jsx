import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  const techIcons = ['⚛️', '📱', '🚀', '💻', '⚡', '🎨'];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Panchal_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-transparent" />
      
      {/* Floating Tech Icons */}
      {techIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: `${(index * 15) % 100}%`,
            top: `${(index * 20) % 100}%`,
          }}
        >
          {icon}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-400 text-sm sm:text-2xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hi, I'm
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">Rahul Panchal</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Building scalable, pixel-perfect digital experiences that drive real business impact
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
              <ArrowRight size={20} />
            </motion.a>

            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all w-full sm:w-auto justify-center cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          {/* <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

