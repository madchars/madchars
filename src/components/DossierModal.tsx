import { useState } from 'react';
import { PORTRAIT_URL } from './Navbar';
import { SafeImage } from './SafeImage';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleBriefing: () => void;
}

export function DossierModal({ isOpen, onClose, onScheduleBriefing }: DossierModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSimulateDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1e1f25] border border-[#4a4455]/60 shadow-2xl p-6 sm:p-8 text-[#e3e1e9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#292a2f] text-[#ccc3d8] hover:text-white hover:bg-[#34343a] transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Header Strip */}
        <div className="flex items-start gap-5 pb-6 border-b border-[#4a4455]/40">
          <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-[#7c3aed]/40 shrink-0">
            <SafeImage
              src={PORTRAIT_URL}
              alt="Julian Vance"
              className="w-full h-full object-cover"
              fallbackIcon="person"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#7c3aed]/20 text-[#d2bbff] text-[11px] font-mono uppercase tracking-wider mb-1">
              Executive Dossier • Ref: JV-2024-ARCH
            </div>
            <h2 className="text-2xl font-bold font-headline-md text-white">Julian Vance</h2>
            <p className="text-sm text-[#ccc3d8]">Principal Enterprise Architect &amp; Fractional CTO Advisor</p>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-[#4a4455]/30">
          <div className="p-3 rounded-lg bg-[#121318]">
            <span className="block text-[10px] font-mono uppercase text-[#958da1]">Portfolio Managed</span>
            <span className="text-lg font-bold font-mono text-white">$420M+</span>
          </div>
          <div className="p-3 rounded-lg bg-[#121318]">
            <span className="block text-[10px] font-mono uppercase text-[#958da1]">Core Migrations</span>
            <span className="text-lg font-bold font-mono text-[#d2bbff]">18+ Major</span>
          </div>
          <div className="p-3 rounded-lg bg-[#121318]">
            <span className="block text-[10px] font-mono uppercase text-[#958da1]">Validated ROI</span>
            <span className="text-lg font-bold font-mono text-[#b4c5ff]">$140M+</span>
          </div>
          <div className="p-3 rounded-lg bg-[#121318]">
            <span className="block text-[10px] font-mono uppercase text-[#958da1]">System Reliability</span>
            <span className="text-lg font-bold font-mono text-emerald-400">99.999%</span>
          </div>
        </div>

        {/* Executive Summary Narrative */}
        <div className="py-6 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#d2bbff]">Executive Briefing Summary</h3>
          <p className="text-sm text-[#ccc3d8] leading-relaxed">
            Julian Vance provides strategic architectural leadership for Global 2000 enterprises, tier-1 financial institutions, and hyper-growth scaleups. With 14+ years specializing in fault-tolerant distributed topologies, monolithic deconstruction, and cryptographic zero-trust architectures, he de-risks critical infrastructure investments and ensures regulatory alignment (OCC, Fed Basel III, HIPAA, SOC2 Type II).
          </p>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-[#958da1]">Core Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Mainframe Core Decoupling',
                'Event-Driven CQRS & Kafka Mesh',
                'Multi-Region Active-Active Topologies',
                'Confidential Enclaves & PHI Zero-Trust',
                'FinOps Unit Economics & Bin-Packing',
                'ARB Governance & RFC Standardization',
                'M&A Tech Due Diligence & IP Auditing',
              ].map((spec) => (
                <span key={spec} className="px-2.5 py-1 rounded bg-[#292a2f] text-xs text-[#e3e1e9]">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-[#4a4455]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#958da1]">
            <span className="material-symbols-outlined text-sm text-[#d2bbff]">verified_user</span>
            Clearance: Federal / FinTech Level 4
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onScheduleBriefing();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-[#292a2f] text-[#e3e1e9] text-xs font-mono uppercase tracking-wider hover:bg-[#34343a] transition-colors"
            >
              Schedule Intake
            </button>
            <button
              onClick={handleSimulateDownload}
              disabled={downloading}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#7c3aed] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#6d28d9] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span className="material-symbols-outlined text-base">
                {downloaded ? 'check_circle' : 'file_download'}
              </span>
              <span>
                {downloading ? 'Compiling PDF...' : downloaded ? 'Dossier Exported!' : 'Download Full PDF'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
