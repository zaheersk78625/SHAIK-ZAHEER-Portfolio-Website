import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm font-mono">SZ</span>
              SHAIK ZAHEER
            </a>
            <p className="mt-4 text-slate-400 max-w-xs text-sm leading-relaxed">
              Crafting intelligent digital experiences through code and creative problem solving.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:zaheersk991@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-3 glass rounded-full text-slate-400 hover:text-white group transition-all"
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
          <p>© {new Date().getFullYear()} Shaik Zaheer. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
