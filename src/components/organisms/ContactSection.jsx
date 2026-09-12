import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     setIsSending(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        'service_w61imbo',
        'template_qh69t6l',
        e.target,
        'xSciJNNeopl4NHZtl'
      );

      setStatus('Message sent successfully! We will get back to you soon.');
      e.target.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Start a Conversation
          </h2>

          <p className="text-lg text-slate-600">
            Get in touch to discuss your project and discover how we can bring
            your vision to life
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24">

      
          <div className="space-y-4">

            <div className="bg-[#F7FAFF] p-8 rounded-none border border-blue-50/50">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email
                </h4>
              </div>

              <p className="text-lg font-bold text-slate-900 uppercase">
                info@tagocoresolutions.com
              </p>
            </div>

            <div className="bg-[#F7FAFF] p-8 rounded-none border border-blue-50/50">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Phone
                </h4>
              </div>

              <p className="text-lg font-bold text-slate-900 uppercase">
                +234 706 333 30877
              </p>
            </div>

            <div className="bg-[#F7FAFF] p-8 rounded-none border border-blue-50/50">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Office
                </h4>
              </div>

              <p className="text-sm font-bold text-slate-900 uppercase leading-relaxed max-w-xs">
                Plot 234, Admiralty Way, Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>

          </div>

        
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              required
              className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors"
              />

            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell Us About Your Project"
              required
              className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-5 bg-[#051923] text-white font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>
                {isSending ? 'Sending...' : 'Send A Message'}
              </span>

              <Send className="w-4 h-4" />
            </button>

            {status && (
              <p className="text-sm font-medium text-slate-600 pt-2">
                {status}
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
