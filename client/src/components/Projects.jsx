import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import micro from "../assets/microFin.png";
import shadval from "../assets/shadval.png";
import finance from "../assets/finance.png";
import port from "../assets/port.png";
import catalog from "../assets/catalog.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Microfinance Management Portal',
      problem: 'Rural microfinance institutions struggled with manual loan tracking and repayment collection.',
      solution: 'Built a full-stack MERN dashboard with real-time analytics, automated reminders, and a responsive, user-friendly interface for smooth operations.',
      impact: 'Reduced processing time by 70%, improving efficiency and workflow speed for over 1,000 active users through automation and optimized processes.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js'],
      image: micro,
      liveUrl: 'https://microfin-demo-react.shadvalpay.co.in/',
      githubUrl: 'https://github.com/Im-Rahul-Panchal/Microfinance-ShadvalPay',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'ShadvalPay Website',
      problem: 'Fintech platform required a modern, responsive website with a strong and trustworthy digital presence.',
      solution: 'Built a scalable React + Vite frontend with smooth animations and integrated backend APIs for form handling.',
      impact: 'Delivered fast performance, responsive UI, and stable API integration improving overall user experience.',
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'React Router', 'Node.js', 'Express.js', 'SQL'],
      image: shadval,
      liveUrl: 'https://react.shadvalpay.co.in/',
      githubUrl: 'https://github.com/Im-Rahul-Panchal/ShadvalPay---Company-Website-Platform-Interface',
      gradient: 'from-yellow-500 to-cyan-500',
    },
    {
      title: 'Digital Loan Platform',
      problem: 'Traditional loan approval was slow and paper-heavy.',
      solution: 'End-to-end digital lending platform with KYC integration and instant eligibility checks.',
      impact: 'Processed 200+ loans in first month with 99% uptime',
      tech: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS', 'REST APIs'],
      image: finance,
      liveUrl: 'https://finance.shadvalpay.co.in/',
      githubUrl: 'https://github.com/Im-Rahul-Panchal/ShadvalFinance',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Team File Sharing App',
      problem: 'Remote teams needed secure, real-time file collaboration.',
      solution: 'Cross-platform mobile + web app with end-to-end encryption and activity feed.',
      impact: '4.5+ star rating with 1,000+ downloads',
      tech: ['Flutter', 'Firebase', 'Real-time DB', 'Cloud Storage'],
      // image: '/projects/file-sharing.jpg',
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Flutter Catalogue App',
      problem: 'Users needed a clean and simple way to browse products with an intuitive and modern mobile interface.',
      solution: 'Developed a Flutter app with structured navigation, category-based browsing, and a cart system with dummy checkout.',
      impact: 'Delivered smooth performance, organized state management, and a consistent user experience across multiple platforms.',
      tech: ['Flutter', 'Dart', 'Provider', 'Material UI'],
      image: catalog,
      liveUrl: '#',
      githubUrl: 'https://github.com/Im-Rahul-Panchal/CatalogApp-Flutter',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Portfolio Website',
      problem: 'Need to showcase skills and projects in a premium, performant way.',
      solution: 'Built this modern portfolio using React 19, Framer Motion, and a performance-first approach with optimized and responsive design.',
      impact: 'Achieved a Lighthouse score of 95+ across all major metrics including performance, accessibility, ensuring a fast and production-ready experience.',
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: port,
      liveUrl: 'https://khushboopanchal.netlify.app/',
      githubUrl: 'https://github.com/Im-Rahul-Panchal/Accountant-Portfolio',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Real-world solutions with measurable impact</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl overflow-hidden group will-change-transform"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                )}

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Problem</p>
                    <p className="text-gray-300">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Solution</p>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Impact</p>
                    <p className="text-white font-semibold">{project.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg transition-all"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all"
                  >
                    <GitBranch size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

