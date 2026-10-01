import { ArtifactDeliverable } from '../types';
import { SafeImage } from './SafeImage';

interface ArtifactModalProps {
  artifact: ArtifactDeliverable | null;
  onClose: () => void;
}

export function ArtifactModal({ artifact, onClose }: ArtifactModalProps) {
  if (!artifact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1e1f25] border border-[#4a4455]/70 shadow-2xl p-6 sm:p-8 text-[#e3e1e9]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#292a2f] text-[#ccc3d8] hover:text-white hover:bg-[#34343a] transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded bg-[#7c3aed]/20 text-[#d2bbff] text-[10px] font-mono uppercase tracking-widest">
            {artifact.phase}
          </span>
          <span className="text-xs text-[#958da1] font-mono">Format: {artifact.format}</span>
        </div>

        <h2 className="text-2xl font-bold font-headline-md text-white mb-2">{artifact.title}</h2>
        <p className="text-sm text-[#ccc3d8] mb-6">{artifact.description}</p>

        {/* High-res Image Showcase */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden bg-[#121318] border border-[#4a4455]/40 mb-6 shadow-inner">
          <SafeImage
            src={artifact.imageUrl}
            alt={artifact.title}
            className="w-full h-full object-cover"
            fallbackIcon="architecture"
            fallbackTitle={artifact.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent opacity-40 pointer-events-none"></div>
        </div>

        {/* Deliverable Specifications */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#d2bbff]">
            Artifact Specifications &amp; Architectural Standard
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {artifact.details.map((detail, idx) => (
              <li key={idx} className="p-3 rounded-lg bg-[#121318] border border-[#4a4455]/30 flex items-start gap-2.5 text-xs text-[#ccc3d8]">
                <span className="material-symbols-outlined text-sm text-[#d2bbff] shrink-0 mt-0.5">check_circle</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[#4a4455]/40 flex items-center justify-between">
          <span className="text-xs text-[#958da1] font-mono">Governed by Enterprise Architecture Framework v4.8</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#7c3aed] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#6d28d9] transition-all"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
