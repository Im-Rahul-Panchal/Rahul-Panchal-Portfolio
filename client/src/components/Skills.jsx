import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Smartphone, ExternalLink } from "lucide-react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase, SiDocker, SiFramer, SiJavascript, SiFlutter, SiMysql, SiTypescript } from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      accent: "from-[#6366f1] via-[#a855f7] to-[#ec4899]",
      description: "Crafting immersive, high-performance user interfaces.",
      skills: [
        { name: "React.js", icon: FaReact, color: "text-blue-400" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" }
      ],
    },
    {
      title: "Backend & Cloud",
      icon: Server,
      accent: "from-[#3b82f6] via-[#2dd4bf] to-[#10b981]",
      description: "Building robust, scalable server-side architectures.",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express.js", icon: FaNodeJs, color: "text-gray-300" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "MySQL", icon: SiMysql, color: "text-[#00758f]" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-400" }
      ],
    },
    {
      title: "System & Mobile",
      icon: Smartphone,
      accent: "from-[#f59e0b] via-[#ef4444] to-[#8b5cf6]",
      description: "Optimizing workflows and cross-platform deployment.",
      skills: [
        { name: "React Native", icon: FaReact, color: "text-blue-500" },
        { name: "Flutter", icon: SiFlutter, color: "text-cyan-500" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "Git Architecture", icon: FaGitAlt, color: "text-orange-600" },
        { name: "Postman API", icon: Code2, color: "text-orange-500" }
      ],
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-[#030712] overflow-hidden" ref={ref}>
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Stack</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
            I leverage a modern ecosystem of tools to build lightning-fast, 
            accessible, and scalable digital experiences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 relative z-10">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Modern Gradient Border (Animated on Hover) */}
                <div className={`absolute -inset-[1px] rounded-[24px] bg-gradient-to-br ${cat.accent} opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`} />
                
                {/* Main Card Body */}
                <div className="relative h-full rounded-[23px] p-8 bg-[#0b0f1a]/90 backdrop-blur-3xl border border-white/5 flex flex-col">
                  
                  {/* Icon & Glow */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${cat.accent} shadow-lg shadow-black/50`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 h-12">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-4 mt-auto">
                    {cat.skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between group/item"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-white/5 group-hover/item:bg-white/10 transition-colors ${skill.color}`}>
                                <SkillIcon size={18} />
                            </div>
                            <span className="text-gray-300 font-medium text-sm group-hover/item:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          {/* <ExternalLink className="w-3 h-3 text-gray-600 opacity-0 group-hover/item:opacity-100 transition-opacity" /> */}
                        </div>
                      );
                    })}
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;