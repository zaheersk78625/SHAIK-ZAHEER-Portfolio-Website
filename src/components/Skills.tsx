import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { 
  Code2, 
  BrainCircuit, 
  Layout, 
  Wrench,
  Terminal,
  Layers,
  Database,
  Cpu
} from 'lucide-react';

const skillGroups = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "JavaScript", "SQL", "HTML", "CSS"],
    color: "from-blue-500 to-blue-400"
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Scikit-learn", "Machine Learning", "Data Science", "Prompt Engineering", "LLM APIs"],
    color: "from-purple-500 to-purple-400"
  },
  {
    category: "Web Development",
    icon: Layout,
    skills: ["React.js", "Tailwind CSS", "REST APIs", "Responsive Design"],
    color: "from-emerald-500 to-emerald-400"
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab", "MySQL"],
    color: "from-orange-500 to-orange-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group border-t-4 hover:translate-y-[-5px] transition-all duration-300"
              style={{ borderTopColor: 'rgba(59, 130, 246, 0.5)' }}
            >
              <div className={`absolute top-0 right-0 p-8 bg-gradient-to-br ${group.color} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.1] transition-opacity`} />
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${group.color} bg-opacity-10 text-white shadow-lg`}>
                  <group.icon size={24} />
                </div>
                <h3 className="font-bold text-white text-lg leading-tight">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIdx * 0.1) + (skillIdx * 0.05) }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech background decoration */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}
