import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend & Cloud',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile & Others',
      icon: Smartphone,
      skills: ['Flutter', 'React Native', 'Git/GitHub', 'Postman', 'Docker'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-2">
            Technologies I work with to build exceptional products
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all will-change-transform"
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center mb-4 md:mb-6`}>
                  <Icon size={22} className="sm:size-[26px] md:size-[32px] text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + skillIndex * 0.08 }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-linear-to-r ${category.color}`} />
                      <span className="text-gray-300 text-sm sm:text-base">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;