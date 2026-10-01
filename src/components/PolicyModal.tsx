interface PolicyModalProps {
  type: 'principles' | 'terms' | 'security' | null;
  onClose: () => void;
}

export function PolicyModal({ type, onClose }: PolicyModalProps) {
  if (!type) return null;

  const contentMap = {
    principles: {
      title: 'Enterprise Architecture Principles & Governance Charter',
      subtitle: 'Mandatory Non-Negotiable Standards Across All Engagements',
      sections: [
        {
          heading: '1. Asynchronous Decoupling Over Synchronous Locks',
          body: 'System services must communicate through immutable, buffered event logs rather than direct RPC cascades to prevent distributed cascade failure.',
        },
        {
          heading: '2. Zero Manual Production Touch (Strict GitOps)',
          body: 'Every line of infrastructure, network routing, and security policy must exist in git version control, reconciled through automated controllers.',
        },
        {
          heading: '3. Identity-Centric Zero-Trust Perimeter',
          body: 'Never assume trust by network perimeter alone. Workloads authenticate with mTLS and ephemeral cryptographically signed tokens (SPIRE/SPIFFE).',
        },
        {
          heading: '4. Fiduciary Vendor Neutrality',
          body: 'Architecture is engineered for the client’s unit economics and operational autonomy, strictly avoiding vendor lock-in or proprietary traps.',
        },
      ],
    },
    terms: {
      title: 'Advisory Terms of Engagement & Retainer Governance',
      subtitle: 'Operational Protocols for Fractional & Diagnostic Engagements',
      sections: [
        {
          heading: '1. Executive Authority & ARB Sponsorship',
          body: 'The Fractional Chief Enterprise Architect operates with direct line to the CTO/CIO and chairs the Architecture Review Board with formal veto authority on structural drift.',
        },
        {
          heading: '2. Bilateral Non-Disclosure & Code Access',
          body: 'Comprehensive non-disclosure and intellectual property protection are executed prior to inspection of private git repositories, cloud consoles, or capitalization records.',
        },
        {
          heading: '3. Scope & Cadence Integrity',
          body: 'Advisory sprints maintain strict time-boxed milestones, ensuring rapid turnaround of formal ADR deliverables, risk registers, and executive board presentations.',
        },
      ],
    },
    security: {
      title: 'Security Clearance & Regulatory Compliance Matrix',
      subtitle: 'Verified Tier-1 FinTech & Federal Architecture Standards',
      sections: [
        {
          heading: '1. Cleared Background & High-Assurance Enclaves',
          body: 'Level 4 clearance for Federal systems and financial transaction clearinghouses. Compliant with CJIS, FedRAMP High, and Basel III standards.',
        },
        {
          heading: '2. Cryptographic Attestation & Clean Room Standards',
          body: 'Experience architecting HIPAA-compliant Confidential Computing enclaves and multi-region HSM key hierarchies without human access to plaintext PHI.',
        },
        {
          heading: '3. Continuous Posture Verification',
          body: 'Automated static linting, secret rotation within seconds, and runtime drift prevention enforced at the CI/CD pull request gate.',
        },
      ],
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#1e1f25] border border-[#4a4455]/60 shadow-2xl p-6 sm:p-8 text-[#e3e1e9]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#292a2f] text-[#ccc3d8] hover:text-white hover:bg-[#34343a] transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="pb-4 border-b border-[#4a4455]/40 pr-8">
          <span className="font-mono text-xs text-[#d2bbff] uppercase tracking-wider block mb-1">
            Governance Document
          </span>
          <h2 className="text-xl font-bold font-headline-md text-white">{current.title}</h2>
          <p className="text-xs text-[#ccc3d8] mt-1">{current.subtitle}</p>
        </div>

        <div className="py-6 space-y-6">
          {current.sections.map((sec, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#121318] border border-[#4a4455]/30">
              <h3 className="text-sm font-semibold text-[#d2bbff] mb-2">{sec.heading}</h3>
              <p className="text-xs text-[#ccc3d8] leading-relaxed">{sec.body}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#4a4455]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#7c3aed] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#6d28d9] transition-all"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
