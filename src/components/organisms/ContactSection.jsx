import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Start a Conversation</h2>
          <p className="text-lg text-slate-600">
            Get in touch to discuss your project and discover how we can bring your vision to life
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side: Contact Info */}
          <div className="space-y-4">
            {/* Email Block */}
            <div className="bg-[#F7FAFF] p-8 rounded-none border border-blue-50/50">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</h4>
              </div>
              <p className="text-lg font-bold text-slate-900 uppercase">hello@tago.com</p>
            </div>

            {/* Phone Block */}
            <div className="bg-[#F7FAFF] p-8 rounded-none border border-blue-50/50">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</h4>
              </div>
              <p className="text-lg font-bold text-slate-900 uppercase">+234 706 333 30877</p>
            </div>

            {/* Office Block */}
            <div className="bg-[#F7FAFF] p-8 rounded-none border border-blue-50/50">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office</h4>
              </div>
              <p className="text-sm font-bold text-slate-900 uppercase leading-relaxed max-w-xs">
                Plot 234, Admiralty Way, Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors"
              />
            </div>

            <textarea 
              rows="6" 
              placeholder="Tell Us About Your Project" 
              className="w-full p-4 border border-slate-200 rounded-none focus:border-blue-600 outline-none transition-colors resize-none"
            ></textarea>

            <button className="w-full py-5 bg-[#051923] text-white font-bold uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>Send A Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
