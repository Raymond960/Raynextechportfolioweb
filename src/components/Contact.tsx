import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'AI Website Development',
    message: '',
  });
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'drafted'>('idle');

  const [formError, setFormError] = useState<string | null>(null);

  const whatsappNumber = '2348060581539';
  const emailAddress = 'domnanraymond8@gmail.com';

  const defaultWhatsAppText = encodeURIComponent(
    "Hello Raynex Tech, I'd like to discuss an AI website/tool project with you."
  );

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please complete your name, email, and project message.');
      return;
    }
    setFormError(null);

    // Create a pre-formatted message for email
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Raynex Tech,\n\nMy name is ${formData.name.trim()} (${formData.email.trim()}).\nI am interested in: ${formData.service}.\n\nProject details:\n${formData.message.trim()}\n\nLooking forward to hearing from you!`
    );

    // Open user's default email client with all details filled
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmittedStatus('drafted');
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#FF6B35] text-xs font-bold uppercase tracking-wider mb-3">
            Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2342] tracking-tight mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Have a website, AI tool or digital product in mind? Let's discuss how Raynex Tech can help bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Details & Fast WhatsApp CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#0A2342] mb-3">
                Get in Touch Directly
              </h3>
              <p className="text-sm text-[#64748B] mb-8 leading-relaxed">
                Whether you need a full enterprise platform, a conversion-focused landing page, or an intelligent workflow automation tool, I am available for immediate consultation.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#F3F8FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                      Email
                    </span>
                    <span className="text-sm font-bold text-[#0A2342] group-hover:text-[#2563EB] transition-colors break-all block">
                      {emailAddress}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-300 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                      WhatsApp
                    </span>
                    <span className="text-sm font-bold text-[#0A2342] group-hover:text-emerald-600 transition-colors">
                      +234 806 058 1539
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-11 h-11 rounded-lg bg-[#FFF5F0] text-[#FF6B35] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-bold text-[#0A2342]">
                      Abuja, Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Orange "Chat on WhatsApp" Button */}
            <div className="p-6 rounded-2xl bg-white border border-orange-200/90 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A2342]">
                  Instant WhatsApp Direct
                </span>
              </div>
              <p className="text-xs text-[#64748B] mb-4">
                Chat directly on WhatsApp for quick inquiries, scope estimates, and timeline consultations.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                id="chat-whatsapp-btn"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-[#FF6B35] hover:bg-[#E85A24] active:scale-98 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-sm sm:text-base text-center"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#0A2342] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#64748B] mb-6">
                Fill out the project details below to initiate your inquiry.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-[#0A2342] mb-1.5 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Samuel Audu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0A2342] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-[#0A2342] mb-1.5 uppercase tracking-wider"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. samuel@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0A2342] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                    />
                  </div>
                </div>

                {/* Project / Service */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold text-[#0A2342] mb-1.5 uppercase tracking-wider"
                  >
                    Project / Service
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0A2342] bg-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  >
                    <option value="AI Website Development">AI Website Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="AI Tools & Automation">AI Tools & Automation</option>
                    <option value="Full Digital Platform / SaaS">Full Digital Platform / SaaS</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-[#0A2342] mb-1.5 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Briefly describe your project requirements, goals, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0A2342] placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
                  />
                </div>

                {/* Error Banner */}
                {formError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <span className="font-bold">•</span>
                    <span>{formError}</span>
                  </div>
                )}

                {/* Submission Note */}
                <p className="text-[11px] text-[#64748B] break-words">
                  Submitting formats a direct pre-filled message to <strong className="text-[#0A2342] break-all">{emailAddress}</strong>.
                </p>

                {/* Send Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0A2342] hover:bg-[#13335e] active:scale-98 transition-all text-sm sm:text-base cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {submittedStatus === 'drafted' && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1.5 animate-in fade-in">
                    <div className="flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Inquiry message prepared in your email client!</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      Need a faster response? You can also click <strong>Chat on WhatsApp</strong> to connect immediately.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
