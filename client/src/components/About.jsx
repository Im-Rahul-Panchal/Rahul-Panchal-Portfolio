import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center tracking-tighter mb-10 md:mb-16">
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Me
            </span>
          </h2>

          {/* Card */}
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/10">
            <div className="space-y-5 md:space-y-8 text-base sm:text-lg leading-relaxed text-zinc-300">
              
              <p>
                I'm a passionate <span className="text-white font-semibold">Full Stack Developer</span> with over 1.5 years of professional experience building high-performance web and mobile applications.
              </p>
              
              <p>
                I specialize in the <span className="text-white font-semibold">MERN stack</span> and love creating scalable, beautiful digital solutions that solve real problems. From microfinance platforms serving thousands of users to modern fintech websites and cross-platform mobile apps, I thrive on turning ideas into reality.
              </p>

              <p>
                My approach combines clean, maintainable code with pixel-perfect design and smooth user experiences. I'm constantly learning new technologies and best practices to deliver exceptional results.
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;