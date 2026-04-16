import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <motion.div
            className="glass rounded-2xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-white font-semibold">Full Stack Developer</span> with 1.5+ years of professional experience crafting high-performance web and mobile applications. I specialize in the <span className="text-white font-semibold">MERN stack</span>, building scalable solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey in tech has been driven by a passion for creating seamless user experiences and robust backend systems. From developing microfinance platforms that serve thousands of users to building cross-platform mobile apps with <span className="text-white font-semibold">Flutter</span> and <span className="text-white font-semibold">React Native</span>, I thrive on turning complex challenges into elegant solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying current with modern development practices. Whether it's optimizing performance, implementing secure authentication, or designing intuitive interfaces, I approach every project with attention to detail and a commitment to excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

