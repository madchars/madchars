import { MONOGRAM_URL } from './Navbar';
import { SafeImage } from './SafeImage';

interface FooterProps {
  onOpenPolicy: (type: 'principles' | 'terms' | 'security') => void;
}

export function Footer({ onOpenPolicy }: FooterProps) {
  return (
    <footer className="w-full bg-[#0d0e13] border-t border-[#4a4455]/40 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Monogram and Copyright */}
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 opacity-75 shrink-0">
            <SafeImage
              src={MONOGRAM_URL}
              alt="Apex IT Architecture Monogram"
              className="h-full w-full object-contain"
              fallbackIcon="polyline"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-body-sm text-[13px] text-[#ccc3d8]">
              © 2024 Julian Vance. All rights reserved.
            </span>
            <span className="font-label-sm text-[10px] text-[#958da1] font-mono">
              Principal Enterprise Architect &amp; Technology Strategist
            </span>
          </div>
        </div>

        {/* Right Security Clearance and Governance Links */}
        <div className="flex flex-wrap items-center gap-6">
          <span className="inline-flex items-center gap-1.5 font-label-sm text-[10px] text-[#958da1] font-mono">
            <span className="material-symbols-outlined text-sm text-[#d2bbff]">verified_user</span>
            Enterprise Verified Security Clearance
          </span>
          <button
            onClick={() => onOpenPolicy('principles')}
            className="font-body-sm text-[13px] text-[#ccc3d8] hover:text-[#d2bbff] transition-colors cursor-pointer"
          >
            Architecture Principles
          </button>
          <button
            onClick={() => onOpenPolicy('terms')}
            className="font-body-sm text-[13px] text-[#ccc3d8] hover:text-[#d2bbff] transition-colors cursor-pointer"
          >
            Advisory Terms
          </button>
          <button
            onClick={() => onOpenPolicy('security')}
            className="font-body-sm text-[13px] text-[#ccc3d8] hover:text-[#d2bbff] transition-colors cursor-pointer"
          >
            Security &amp; Compliance
          </button>
        </div>
      </div>
    </footer>
  );
}
