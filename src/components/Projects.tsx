import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Github, ExternalLink, Activity, Bot, TrendingUp, BarChart, CloudSun, Wallet, Calendar, FileText, Smartphone, Clock } from 'lucide-react';

const projects = [
  {
    title: "Heart Disease Classification",
    desc: "Predictive model using ML to identify cardiac risks based on health data.",
    image: "https://images.unsplash.com/photo-1505751172107-573225a91200?q=80&w=2070&auto=format&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "#",
    live: "#",
    icon: Activity
  },
  {
    title: "AI Task Automation Chatbot",
    desc: "Intelligent assistant for managing daily schedules and repetitive tasks.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2070&auto=format&fit=crop",
    tech: ["Python", "NLP", "OpenAI API"],
    github: "#",
    live: "#",
    icon: Bot
  },
  {
    title: "Student Performance Prediction",
    desc: "Academic success forecasting using historical grade patterns.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    tech: ["Machine Learning", "Sklearn", "Matplotlib"],
    github: "#",
    live: "#",
    icon: TrendingUp
  },
  {
    title: "Sales Data Analysis Dashboard",
    desc: "Real-time visualization tool for business metrics and revenue trends.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop",
    tech: ["Data Science", "Python", "Seaborn"],
    github: "#",
    live: "#",
    icon: BarChart
  },
  {
    title: "Weather Forecasting App",
    desc: "Detailed meteorological insights with interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2070&auto=format&fit=crop",
    tech: ["React.js", "Weather API", "Tailwind"],
    github: "#",
    live: "#",
    icon: CloudSun
  },
  {
    title: "Finance Tracker",
    desc: "Personal expense manager with categorization and goal setting.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
    tech: ["JavaScript", "Local Storage", "Chart.js"],
    github: "#",
    live: "#",
    icon: Wallet
  },
  {
    title: "Real-Time Calendar",
    desc: "Dynamic event scheduler with drag-and-drop support.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2070&auto=format&fit=crop",
    tech: ["React.js", "CSS Grid", "FullCalendar"],
    github: "#",
    live: "#",
    icon: Calendar
  },
  {
    title: "Notepad Application",
    desc: "Minimalist writing tool with auto-save and markdown support.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "Storage API", "Vite"],
    github: "#",
    live: "#",
    icon: FileText
  },
  {
    title: "Tic Tac Toe Game",
    desc: "Classic board game with AI opponent and clean UI.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop",
    tech: ["JavaScript", "DOM Manipulation", "Animations"],
    github: "#",
    live: "#",
    icon: Smartphone
  },
  {
    title: "Digital Clock Application",
    desc: "Minimalist world clock with dynamic background themes.",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
    live: "#",
    icon: Clock
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Portfolio"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-3xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-primary/20 backdrop-blur-md rounded-2xl text-primary border border-primary/20">
                  <project.icon size={20} />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline decoration-primary/30 underline-offset-4">
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
