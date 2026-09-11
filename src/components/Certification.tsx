import { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';

export default function Certification() {
  const [certImage, setCertImage] = useState<string | null>('/certificate.jpg');

  useEffect(() => {
    const savedCert = localStorage.getItem('raynex_cert_image');
    if (savedCert) {
      setCertImage(savedCert);
      return;
    }
    const img = new Image();
    img.src = '/certificate.jpg';
    img.onload = () => setCertImage('/certificate.jpg');
  }, []);

  return (
    <section id="certificate" className="py-20 bg-[#F7F9FC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
            Standards & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2342] tracking-tight mb-4">
            Professional Certification
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            International certification validating practical competence in Artificial Intelligence Management Systems and responsible deployment.
          </p>
        </div>

        {/* Main Certification Card */}
        <div className="max-w-4xl mx-auto">
          {certImage ? (
            /* Official certificate image display */
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8 text-center">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-[#F7F9FC] max-w-2xl mx-auto mb-3">
                <img
                  src={certImage}
                  alt="ISO/IEC 42001:2023 Certificate - Alison"
                  width="960"
                  height="680"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-[#64748B] font-medium">
                Official Credential: ISO/IEC 42001:2023 Artificial Intelligence Management Systems
              </p>
            </div>
          ) : (
            /* Beautiful Text-Based Certification Card */
            <div
              id="certification-text-card"
              className="bg-gradient-to-br from-[#F3F8FF] via-white to-[#F7F9FC] rounded-2xl border-2 border-blue-200/80 shadow-md p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Top Accent Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider block">
                      Accredited Qualification
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0A2342]">
                      ISSUER: {CERTIFICATION_DATA.issuer.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Credential Verified</span>
                </div>
              </div>

              {/* Title & Standard */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2342] tracking-tight mb-2">
                  {CERTIFICATION_DATA.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed">
                  {CERTIFICATION_DATA.description}
                </p>
              </div>

              {/* Four Competence Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {CERTIFICATION_DATA.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-[#0A2342] leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Meta Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#2563EB]" />
                    <span>Focus: AI Management & Ethics</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#2563EB]" />
                    <span>Year: 2024 / Valid</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
