import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
    )
    .then(() => {
      setSuccess(true);
      setLoading(false);
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 5000);
    })
    .catch((err) => {
      console.error(err);
      setError('Something went wrong. Please try again later.');
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Contact"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "zaheersk991@gmail.com", href: "mailto:zaheersk991@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91-7032146421", href: "tel:+917032146421" },
                  { icon: MapPin, label: "Location", value: "Khammam, Telangana, India", href: "#" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="p-3 glass rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-medium">{item.label}</div>
                      <a href={item.href} className="text-white hover:text-primary transition-colors font-semibold">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-3xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-16 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              <h4 className="text-white font-bold mb-4">Let's build something amazing!</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently available for freelance work and internship opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={sendEmail} className="glass p-8 md:p-10 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Project Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {error && <p className="text-red-400 text-sm ml-1">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 group"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : success ? (
                  <>Sent Successfully <CheckCircle2 size={20} className="text-green-300" /></>
                ) : (
                  <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
