import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://rahul-portfolio-backend-5ufa.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: "Message sent successfully! I'll reply soon." });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Get In{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Touch
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl px-2">
            Have an exciting project? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2 md:mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-zinc-500 transition-all text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2 md:mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-zinc-500 transition-all text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2 md:mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-zinc-500 resize-none transition-all text-sm md:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`flex items-start sm:items-center gap-3 p-4 md:p-5 rounded-2xl text-sm md:text-base ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{status.message}</span>
              </motion.div>
            )}

            {/* Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 md:py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 disabled:opacity-70 transition-all shadow-xl shadow-purple-500/30 cursor-pointer"
            >
              {isSubmitting ? (
                <>Sending<span className="animate-pulse">...</span></>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </motion.button>
          </form>

          {/* Email */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-white/10 text-center">
            <p className="text-zinc-400 mb-3 md:mb-4 text-sm md:text-base">
              Or reach me directly at
            </p>

            <a
              href="mailto:rahulpanchal2807@gmail.com"
              className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 text-blue-400 hover:text-blue-300 text-sm sm:text-base md:text-lg transition-colors break-all"
            >
              <Mail size={20} />
              rahulpanchal2807@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;