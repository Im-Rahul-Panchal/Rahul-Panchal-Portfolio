import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Shadval Pay',
      period: '2023 - Present',
      achievements: [
        'Architected and deployed a MERN-based microfinance management portal serving 5,000+ active users',
        'Reduced loan processing time by 70% through automated workflows and real-time analytics dashboard',
        'Implemented secure authentication and role-based access control for multi-tier user management',
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Shadval Pay',
      period: '2022 - 2023',
      achievements: [
        'Built end-to-end digital loan platform with KYC integration and instant eligibility verification',
        'Processed 200+ loans in first month with 99% uptime and zero security incidents',
        'Designed responsive UI with Tailwind CSS ensuring seamless experience across all devices',
      ],
      tech: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS', 'API Integration'],
    },
    {
      role: 'Mobile Developer',
      company: 'Shadval Pay',
      period: '2022',
      achievements: [
        'Developed cross-platform file sharing app using Flutter with end-to-end encryption',
        'Implemented real-time activity feed and push notifications for team collaboration',
        'Achieved 4.5+ star rating with 1,000+ downloads in first quarter',
      ],
      tech: ['Flutter', 'Firebase', 'REST APIs', 'Real-time Database'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-blue-500/5" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">Building impactful solutions across industries</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-linear-to-r from-blue-500 to-purple-500 border-4 border-[#0a0a0a] hidden md:block" />

                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass rounded-2xl p-8 md:ml-20 will-change-transform"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-blue-400 font-medium mt-2 sm:mt-0">{exp.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-300">
                        <span className="text-blue-400 mt-1.5">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

