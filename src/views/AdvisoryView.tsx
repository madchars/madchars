import { useState, useRef } from 'react';

export function AdvisoryView() {
  const [fullName, setFullName] = useState('');
  const [corpTitle, setCorpTitle] = useState('');
  const [orgName, setOrgName] = useState('');
  const [archScope, setArchScope] = useState('multi-cloud');
  const [advisoryFocus, setAdvisoryFocus] = useState('migration');
  const [timeline, setTimeline] = useState('immediate');
  const [budget, setBudget] = useState('bracket-1');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Calendar States
  const [selectedDate, setSelectedDate] = useState('Nov 08');
  const [selectedTime, setSelectedTime] = useState('10:00 AM EDT');
  const [syncedCal, setSyncedCal] = useState(false);

  // PGP Copy State
  const [copiedPGP, setCopiedPGP] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const selectEngagement = (tierName: string) => {
    setNotes(`Selected Engagement Model: ${tierName}\n\nInitial Objective: `);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyPGP = () => {
    const key = "4F9A 82DE 11BC 9904 77E2 05F3 88BA C0D1 9A44 7F1C";
    navigator.clipboard.writeText(key).then(() => {
      setCopiedPGP(true);
      setTimeout(() => setCopiedPGP(false), 2500);
    });
  };

  return (
    <div className="flex flex-col w-full text-[#e3e1e9]">
      {/* Top Ambient Glow Field */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#7c3aed]/20 via-[#0053db]/10 to-transparent blur-[120px] pointer-events-none rounded-full"></div>

        {/* Hero / Header Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#292a2f]/80 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d2bbff] animate-ping"></span>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
                  Executive Consultation &amp; Fractional Architecture
                </span>
              </div>
              <h1 className="font-display-xl text-display-xl tracking-tight text-white">
                Strategic Architecture{' '}
                <span className="bg-gradient-to-r from-[#d2bbff] via-[#ddb8ff] to-[#b4c5ff] bg-clip-text text-transparent">
                  Advisory
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-[#ccc3d8] max-w-2xl leading-relaxed">
                Partnering with CTOs, CIOs, and engineering leadership to derisk complex IT decisions, evaluate M&amp;A technical due diligence, and architect resilient next-generation platforms.
              </p>
            </div>

            {/* Executive Availability Snapshot Card */}
            <div className="shrink-0 bg-[#1e1f25]/90 backdrop-blur-xl p-6 rounded-xl shadow-xl space-y-3 min-w-[280px] border border-[#4a4455]/40">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-[11px] uppercase tracking-wider text-[#958da1] font-mono">
                  Q3/Q4 Capacity
                </span>
                <span className="px-2 py-0.5 rounded bg-[#7c3aed]/20 font-label-sm text-[10px] text-[#d2bbff] uppercase font-mono">
                  2 Slots Active
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-metric-xl text-3xl font-bold text-white tracking-tight font-mono">
                  99.8%
                </span>
                <span className="font-body-sm text-xs text-[#ccc3d8]">Client Retention ROI</span>
              </div>
              <div className="w-full bg-[#34343a] rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-[#7c3aed] to-[#0053db] h-full w-4/5 rounded-full"></div>
              </div>
              <p className="font-label-sm text-[10px] text-[#958da1] flex items-center gap-1.5 font-mono">
                <span className="material-symbols-outlined text-xs text-[#d2bbff]">verified</span>
                Direct Principal Engagement • Zero Delegated Staff
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advisory Engagement Models Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
              Engagement Frameworks
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white mt-1">Structured Executive Models</h2>
          </div>
          <p className="font-body-md text-sm text-[#ccc3d8] max-w-md leading-relaxed">
            Predictable cadence, board-level synthesis, and deep infrastructural forensics tailored to your governance inflection point.
          </p>
        </div>

        {/* 3 Tier Cards Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tier 1: Architectural Audit & Assessment */}
          <div className="flex flex-col justify-between p-8 rounded-xl bg-[#1e1f25]/70 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-[#4a4455]/30">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#b4c5ff] font-mono">
                  Diagnostic Sprint
                </span>
                <span className="font-label-md text-[10px] px-2.5 py-1 rounded bg-[#292a2f] text-[#ccc3d8] font-mono">
                  4-Week Intake
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-xl font-bold text-white group-hover:text-[#d2bbff] transition-colors">
                  Architectural Audit &amp; Assessment
                </h3>
                <p className="font-body-sm text-xs text-[#ccc3d8] mt-2 leading-relaxed">
                  4-week intensive review of system bottlenecks, security postures, cloud spend optimization, and technical debt roadmap.
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] block font-mono">
                  Core Executive Deliverables
                </span>
                <ul className="space-y-2.5">
                  {[
                    'Sub-system latency & single-point-of-failure topology map',
                    'FinOps audit: targeted 20-35% cloud egress/compute reduction',
                    '24-month prioritized tech-debt remediation matrix',
                    'C-Suite read-out & board presentation deck',
                  ].map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#e3e1e9] text-xs">
                      <span className="material-symbols-outlined text-[#d2bbff] text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-8 bg-gradient-to-t from-[#292a2f]/40 to-transparent rounded-lg p-4 border-t border-[#4a4455]/20">
              <div className="flex items-center justify-between mb-4 font-mono">
                <span className="text-[10px] text-[#958da1] uppercase">Investment</span>
                <span className="text-base text-white font-semibold">Fixed Sprint</span>
              </div>
              <button
                onClick={() => selectEngagement('Architectural Audit & Assessment')}
                className="w-full py-3 px-4 rounded-lg bg-[#292a2f] hover:bg-[#34343a] text-white font-label-md text-xs uppercase tracking-wider text-center transition-all cursor-pointer font-mono"
              >
                Inquire for Audit Scope
              </button>
            </div>
          </div>

          {/* Tier 2: Fractional Chief Enterprise Architect (Highlighted) */}
          <div className="relative flex flex-col justify-between p-8 rounded-xl bg-gradient-to-b from-[#1e1f25] via-[#1e1f25]/95 to-[#1a1b21] shadow-[0_16px_48px_-12px_rgba(124,58,237,0.35)] -translate-y-2 group border border-[#7c3aed]">
            {/* Accent Glow Flare */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7c3aed] text-white font-label-sm text-[10px] uppercase tracking-widest shadow-md font-mono whitespace-nowrap">
              Most Requested Leadership Model
            </div>
            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#d2bbff] font-mono">
                  Strategic Retainer
                </span>
                <span className="font-label-md text-[10px] px-2.5 py-1 rounded bg-[#7c3aed]/30 text-[#d2bbff] font-mono">
                  6-12 Mo Retainer
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-xl font-bold text-white group-hover:text-[#d2bbff] transition-colors">
                  Fractional Chief Enterprise Architect
                </h3>
                <p className="font-body-sm text-xs text-[#ccc3d8] mt-2 leading-relaxed">
                  Retainer model: leading cross-functional architectural reviews, establishing RFC/ADR governance, mentoring staff architects.
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] block font-mono">
                  Embedded Executive Authority
                </span>
                <ul className="space-y-2.5">
                  {[
                    'Full Architectural Review Board (ARB) charter & chairing',
                    'Institutionalized RFC/ADR governance workflow',
                    'Principal & Staff Architect 1:1 executive coaching',
                    'Direct advisory link to CTO on critical vendor/stack selection',
                  ].map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#e3e1e9] text-xs">
                      <span className="material-symbols-outlined text-[#d2bbff] text-base shrink-0 mt-0.5">
                        verified
                      </span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-8 bg-[#7c3aed]/10 rounded-lg p-4 border border-[#7c3aed]/30">
              <div className="flex items-center justify-between mb-4 font-mono">
                <span className="text-[10px] text-[#958da1] uppercase">Commitment</span>
                <span className="text-base text-[#d2bbff] font-semibold">Monthly Dedicated</span>
              </div>
              <button
                onClick={() => selectEngagement('Fractional Chief Enterprise Architect')}
                className="w-full py-3 px-4 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-label-md text-xs uppercase tracking-wider text-center transition-all shadow-[0_0_24px_rgba(124,58,237,0.4)] cursor-pointer font-mono"
              >
                Initiate Retainer Discussion
              </button>
            </div>
          </div>

          {/* Tier 3: M&A Technical Due Diligence */}
          <div className="flex flex-col justify-between p-8 rounded-xl bg-[#1e1f25]/70 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group border border-[#4a4455]/30">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#ddb8ff] font-mono">
                  PE / VC &amp; CorpDev
                </span>
                <span className="font-label-md text-[10px] px-2.5 py-1 rounded bg-[#292a2f] text-[#ccc3d8] font-mono">
                  2-Week Velocity
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-xl font-bold text-white group-hover:text-[#d2bbff] transition-colors">
                  M&amp;A Technical Due Diligence
                </h3>
                <p className="font-body-sm text-xs text-[#ccc3d8] mt-2 leading-relaxed">
                  High-velocity 2-week deep dive evaluating proprietary IP, codebase health, licensing risk, and post-merger integration difficulty.
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] block font-mono">
                  M&amp;A Risk Profiling
                </span>
                <ul className="space-y-2.5">
                  {[
                    'Proprietary IP validation vs. Open Source License contagion (GPL)',
                    'Codebase maintainability, churn index & documentation rigor',
                    'Post-merger Day-1 integration & data convergence friction score',
                    'CapEx re-platforming financial exposure estimation',
                  ].map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#e3e1e9] text-xs">
                      <span className="material-symbols-outlined text-[#d2bbff] text-base shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-8 bg-gradient-to-t from-[#292a2f]/40 to-transparent rounded-lg p-4 border-t border-[#4a4455]/20">
              <div className="flex items-center justify-between mb-4 font-mono">
                <span className="text-[10px] text-[#958da1] uppercase">Timeline</span>
                <span className="text-base text-white font-semibold">Confidential Sprint</span>
              </div>
              <button
                onClick={() => selectEngagement('M&A Technical Due Diligence')}
                className="w-full py-3 px-4 rounded-lg bg-[#292a2f] hover:bg-[#34343a] text-white font-label-md text-xs uppercase tracking-wider text-center transition-all cursor-pointer font-mono"
              >
                Request Deal Advisory NDA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Credential & Impact Band */}
      <section className="w-full bg-[#1a1b21] py-12 mt-10 border-y border-[#4a4455]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-1">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
              Capital Protected
            </span>
            <div className="font-metric-xl text-3xl font-bold text-white font-mono">$1.4B+</div>
            <p className="font-body-sm text-xs text-[#ccc3d8]">Validated in enterprise cloud migrations &amp; buyouts</p>
          </div>
          <div className="space-y-1">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
              Architecture Reviews
            </span>
            <div className="font-metric-xl text-3xl font-bold text-[#d2bbff] font-mono">240+</div>
            <p className="font-body-sm text-xs text-[#ccc3d8]">Formal ARB reviews chaired globally</p>
          </div>
          <div className="space-y-1">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
              FinOps Optimization
            </span>
            <div className="font-metric-xl text-3xl font-bold text-[#b4c5ff] font-mono">31.4%</div>
            <p className="font-body-sm text-xs text-[#ccc3d8]">Average cloud compute efficiency uplift</p>
          </div>
          <div className="space-y-1">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
              Clearance &amp; Trust
            </span>
            <div className="font-metric-xl text-3xl font-bold text-white font-mono">Tier-1</div>
            <p className="font-body-sm text-xs text-[#ccc3d8]">Global FinTech &amp; Regulated Healthcare audited</p>
          </div>
        </div>
      </section>

      {/* Strategic Inquiry & Booking Form / Calendar Section */}
      <section ref={formRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full" id="inquiry-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Left Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
                Direct Consultation Pipeline
              </span>
              <h2 className="font-headline-lg text-2xl font-bold text-white mt-1">Initiate Strategic Engagement</h2>
              <p className="font-body-md text-sm text-[#ccc3d8] mt-2 leading-relaxed">
                Discussions are protected under standard unilateral non-disclosure terms. Receive a prioritized advisory roadmap within 24 business hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              {/* Identity Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono" htmlFor="full-name">
                    Full Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Elena Rostova"
                    className="w-full h-11 px-4 rounded bg-[#1e1f25] text-white font-body-md text-sm placeholder-[#958da1] focus:outline-none focus:bg-[#292a2f] border border-[#4a4455]/30 focus:border-[#7c3aed] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono" htmlFor="corp-title">
                    Corporate Title *
                  </label>
                  <input
                    id="corp-title"
                    type="text"
                    required
                    value={corpTitle}
                    onChange={(e) => setCorpTitle(e.target.value)}
                    placeholder="Chief Technology Officer"
                    className="w-full h-11 px-4 rounded bg-[#1e1f25] text-white font-body-md text-sm placeholder-[#958da1] focus:outline-none focus:bg-[#292a2f] border border-[#4a4455]/30 focus:border-[#7c3aed] transition-all"
                  />
                </div>
              </div>

              {/* Org & Architecture Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono" htmlFor="org-name">
                    Organization / Fund *
                  </label>
                  <input
                    id="org-name"
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="Vanguard Scale Systems"
                    className="w-full h-11 px-4 rounded bg-[#1e1f25] text-white font-body-md text-sm placeholder-[#958da1] focus:outline-none focus:bg-[#292a2f] border border-[#4a4455]/30 focus:border-[#7c3aed] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono" htmlFor="arch-scope">
                    Current Architecture Scope
                  </label>
                  <select
                    id="arch-scope"
                    value={archScope}
                    onChange={(e) => setArchScope(e.target.value)}
                    className="w-full h-11 px-4 rounded bg-[#1e1f25] text-white font-body-md text-sm focus:outline-none focus:bg-[#292a2f] border border-[#4a4455]/30 focus:border-[#7c3aed] transition-all"
                  >
                    <option value="multi-cloud">Multi-Cloud (AWS + GCP/Azure)</option>
                    <option value="hybrid">Hybrid Enterprise (Cloud + Legacy On-Prem)</option>
                    <option value="cloud-native">Cloud-Native Kubernetes / Microservices</option>
                    <option value="monolith">Distributed Monolith / Modernization Target</option>
                    <option value="on-prem">Private Datacenter / High Compliance</option>
                  </select>
                </div>
              </div>

              {/* Primary Strategic Challenge */}
              <div className="space-y-2">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono">
                  Primary Advisory Focus
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'migration', label: 'Cloud Migration' },
                    { id: 'scalability', label: 'Scalability / Latency' },
                    { id: 'modernization', label: 'Modernization & ARB' },
                    { id: 'ma-dd', label: 'M&A Due Diligence' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAdvisoryFocus(item.id)}
                      className={`p-3 text-center rounded text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                        advisoryFocus === item.id
                          ? 'bg-[#7c3aed] text-white font-semibold shadow-sm'
                          : 'bg-[#1e1f25] text-[#ccc3d8] hover:bg-[#292a2f] border border-[#4a4455]/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline & Budget Bracket */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono" htmlFor="timeline">
                    Estimated Kickoff Timeline
                  </label>
                  <select
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full h-11 px-4 rounded bg-[#1e1f25] text-white font-body-md text-sm focus:outline-none focus:bg-[#292a2f] border border-[#4a4455]/30 focus:border-[#7c3aed] transition-all"
                  >
                    <option value="immediate">Immediate (Within 14 Days)</option>
                    <option value="current-quarter">Current Quarter (30-60 Days)</option>
                    <option value="next-quarter">Next Fiscal Quarter</option>
                    <option value="exploratory">Strategic Planning / Exploratory</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono" htmlFor="budget">
                    Allocated Advisory Bracket
                  </label>
                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-11 px-4 rounded bg-[#1e1f25] text-white font-body-md text-sm focus:outline-none focus:bg-[#292a2f] border border-[#4a4455]/30 focus:border-[#7c3aed] transition-all"
                  >
                    <option value="bracket-1">$25k – $50k (Audit Sprint)</option>
                    <option value="bracket-2">$50k – $120k (Comprehensive Review / DD)</option>
                    <option value="bracket-3">$120k – $250k+ (Annual Fractional Engagement)</option>
                  </select>
                </div>
              </div>

              {/* Strategic Notes / Brief */}
              <div className="space-y-2">
                <label className="font-label-md text-xs uppercase tracking-wider text-[#ccc3d8] font-mono" htmlFor="notes">
                  Executive Brief / Specific Challenges
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Context regarding target system scale, team velocity, or impending transaction..."
                  className="w-full p-4 rounded bg-[#1e1f25] text-white font-body-md text-sm placeholder-[#958da1] focus:outline-none focus:bg-[#292a2f] border border-[#4a4455]/30 focus:border-[#7c3aed] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button & Security Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#0053db] text-white font-label-md text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_24px_rgba(124,58,237,0.35)] flex items-center justify-center gap-2 cursor-pointer font-mono"
                >
                  <span>{submitted ? 'Dossier Transmitted' : 'Transmit Consultation Dossier'}</span>
                  <span className="material-symbols-outlined text-sm">
                    {submitted ? 'check' : 'arrow_forward'}
                  </span>
                </button>
                <div className="flex items-center gap-2 font-label-sm text-[10px] text-[#958da1] font-mono">
                  <span className="material-symbols-outlined text-sm text-[#d2bbff]">lock</span>
                  <span>256-bit Encrypted Delivery</span>
                </div>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="p-4 rounded-xl bg-[#7c3aed]/20 text-[#d2bbff] text-xs flex items-center gap-3 border border-[#7c3aed]/40 animate-in fade-in duration-200">
                  <span className="material-symbols-outlined text-lg">verified</span>
                  <span>
                    Advisory brief received. Julian Vance will confirm receipt within 24 hours with custom preparation documentation.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Calendar / Direct Executive Cal Right Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Executive Calendar Interactive Preview Component */}
            <div className="p-6 rounded-xl bg-[#1e1f25]/90 backdrop-blur-xl shadow-lg space-y-6 border border-[#4a4455]/40">
              <div className="flex items-center justify-between pb-4 border-b border-[#4a4455]/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#b4c5ff] animate-pulse"></div>
                  <div>
                    <h4 className="font-headline-sm text-base font-bold text-white">Direct Cal Preview</h4>
                    <p className="font-label-sm text-[10px] text-[#958da1] font-mono">Private 30-Min Confidential Intake</p>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] px-2.5 py-1 rounded bg-[#292a2f] text-[#d2bbff] font-mono">
                  UTC-4 (EDT)
                </span>
              </div>

              {/* Calendar Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white">
                  <span className="font-headline-sm font-semibold">November 2024</span>
                  <div className="flex items-center gap-2">
                    <button type="button" className="p-1 rounded bg-[#292a2f] text-[#ccc3d8] hover:text-white">
                      <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button type="button" className="p-1 rounded bg-[#292a2f] text-[#ccc3d8] hover:text-white">
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>

                {/* Calendar Days Header */}
                <div className="grid grid-cols-7 gap-1 text-center font-label-sm text-[10px] text-[#958da1] font-mono">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>

                {/* Calendar Date Cells */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-mono">
                  <span className="py-2 text-[#958da1]/40">28</span>
                  <span className="py-2 text-[#958da1]/40">29</span>
                  <span className="py-2 text-[#958da1]/40">30</span>
                  <span className="py-2 text-[#958da1]/40">31</span>
                  <span className="py-2 text-[#ccc3d8]">01</span>
                  <span className="py-2 text-[#958da1]/40">02</span>
                  <span className="py-2 text-[#958da1]/40">03</span>

                  <span className="py-2 text-[#ccc3d8]">04</span>
                  <span className="py-2 text-[#ccc3d8]">05</span>
                  {/* Available Slot Days */}
                  {['06', '07', '08'].map((day) => {
                    const dateStr = `Nov ${day}`;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(dateStr)}
                        className={`py-2 rounded font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#7c3aed] text-white shadow-[0_0_12px_rgba(124,58,237,0.5)]'
                            : 'bg-[#292a2f] text-[#d2bbff] hover:bg-[#34343a]'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                  <span className="py-2 text-[#958da1]/40">09</span>
                  <span className="py-2 text-[#958da1]/40">10</span>

                  <span className="py-2 text-[#ccc3d8]">11</span>
                  {['12', '13'].map((day) => {
                    const dateStr = `Nov ${day}`;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(dateStr)}
                        className={`py-2 rounded font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#7c3aed] text-white shadow-[0_0_12px_rgba(124,58,237,0.5)]'
                            : 'bg-[#292a2f] text-[#d2bbff] hover:bg-[#34343a]'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                  <span className="py-2 text-[#ccc3d8]">14</span>
                  <span className="py-2 text-[#ccc3d8]">15</span>
                  <span className="py-2 text-[#958da1]/40">16</span>
                  <span className="py-2 text-[#958da1]/40">17</span>
                </div>

                {/* Available Time Windows */}
                <div className="pt-2 space-y-2">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] block font-mono">
                    Selected Date Windows ({selectedDate})
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {['10:00 AM EDT', '02:30 PM EDT', '04:00 PM EDT', '05:15 PM EDT'].map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`p-2.5 rounded font-label-md text-xs flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#7c3aed] text-white font-semibold'
                              : 'bg-[#292a2f] text-white hover:bg-[#34343a]'
                          }`}
                        >
                          <span>{slot}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-[#d2bbff]'}`}></span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSyncedCal(true);
                      setTimeout(() => setSyncedCal(false), 3000);
                    }}
                    className="w-full py-2.5 rounded bg-[#292a2f] hover:bg-[#34343a] text-white font-label-md text-xs uppercase tracking-wider text-center block transition-all font-mono cursor-pointer border border-[#4a4455]/30"
                  >
                    {syncedCal ? `Slot Confirmed for ${selectedDate} at ${selectedTime}` : 'Synchronize via Cal.com Enterprise'}
                  </button>
                </div>
              </div>
            </div>

            {/* Executive Advisory FAQ Accordion Capsule */}
            <div className="p-6 rounded-xl bg-[#1e1f25]/60 space-y-4 border border-[#4a4455]/30">
              <div className="flex items-center gap-2 text-[#d2bbff] font-label-sm text-xs uppercase tracking-wider font-mono">
                <span className="material-symbols-outlined text-base">info</span>
                <span>Advisory Protocols &amp; Conduct</span>
              </div>
              <div className="space-y-3 font-body-sm text-xs text-[#ccc3d8]">
                <div className="p-3 rounded bg-[#292a2f]/40 border border-[#4a4455]/20">
                  <span className="font-headline-sm font-semibold text-white block text-xs">
                    Strict Vendor Agnosticism
                  </span>
                  <p className="mt-1 text-[11px] text-[#ccc3d8]">
                    Julian accepts zero vendor kickbacks, cloud reseller commissions, or referral fees. All guidance is pure architectural fiduciary value.
                  </p>
                </div>
                <div className="p-3 rounded bg-[#292a2f]/40 border border-[#4a4455]/20">
                  <span className="font-headline-sm font-semibold text-white block text-xs">
                    Day-1 NDA Execution
                  </span>
                  <p className="mt-1 text-[11px] text-[#ccc3d8]">
                    Mutual confidentiality agreement executed prior to viewing private Git repositories, cloud consoles, or capitalization records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Direct Connect Details Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="p-8 lg:p-12 rounded-2xl bg-[#1e1f25] space-y-10 shadow-xl border border-[#4a4455]/40">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
                Global Presence &amp; Cryptographic Identity
              </span>
              <h2 className="font-headline-lg text-2xl font-bold text-white mt-1">
                Direct Connect Coordinates
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b4c5ff] animate-pulse"></span>
              <span className="text-white uppercase tracking-wider">Active Secure Node</span>
            </div>
          </div>

          {/* Hubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hub 1: New York */}
            <div className="p-6 rounded-xl bg-[#292a2f]/60 space-y-3 border border-[#4a4455]/30">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-base font-bold text-white">New York City</span>
                <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-[#1e1f25] text-[#d2bbff] font-mono">
                  Headquarters
                </span>
              </div>
              <p className="font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                One World Trade Center, Suite 8400<br />
                Financial District, NY 10007
              </p>
              <div className="pt-2 font-label-sm text-[10px] text-[#958da1] flex items-center gap-1.5 font-mono">
                <span className="material-symbols-outlined text-sm text-[#b4c5ff]">schedule</span>
                <span>Operating: 08:00 – 19:00 EST</span>
              </div>
            </div>

            {/* Hub 2: San Francisco */}
            <div className="p-6 rounded-xl bg-[#292a2f]/60 space-y-3 border border-[#4a4455]/30">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-base font-bold text-white">San Francisco</span>
                <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-[#1e1f25] text-[#b4c5ff] font-mono">
                  West Coast Lab
                </span>
              </div>
              <p className="font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                555 Mission Street, 28th Floor<br />
                SoMa District, SF 94105
              </p>
              <div className="pt-2 font-label-sm text-[10px] text-[#958da1] flex items-center gap-1.5 font-mono">
                <span className="material-symbols-outlined text-sm text-[#b4c5ff]">schedule</span>
                <span>Operating: 08:00 – 18:00 PST</span>
              </div>
            </div>

            {/* Hub 3: London */}
            <div className="p-6 rounded-xl bg-[#292a2f]/60 space-y-3 border border-[#4a4455]/30">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-base font-bold text-white">London</span>
                <span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-[#1e1f25] text-[#ddb8ff] font-mono">
                  EMEA Advisory
                </span>
              </div>
              <p className="font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                100 Bishopsgate, Level 19<br />
                City of London, EC2N 4AG
              </p>
              <div className="pt-2 font-label-sm text-[10px] text-[#958da1] flex items-center gap-1.5 font-mono">
                <span className="material-symbols-outlined text-sm text-[#b4c5ff]">schedule</span>
                <span>Operating: 09:00 – 18:00 GMT</span>
              </div>
            </div>
          </div>

          {/* Security & Public Profiles Strip */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* PGP Fingerprint Box */}
            <div className="lg:col-span-7 p-4 rounded-xl bg-[#0d0e13]/80 space-y-2 border border-[#4a4455]/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#d2bbff]">key</span>
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
                    PGP Public Master Fingerprint
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPGP}
                  className="font-label-sm text-[10px] text-[#d2bbff] hover:underline uppercase tracking-wider font-mono cursor-pointer"
                >
                  {copiedPGP ? 'Copied!' : 'Copy Key'}
                </button>
              </div>
              <div className="text-xs text-white font-mono break-all tracking-wider selection:bg-[#7c3aed]">
                4F9A 82DE 11BC 9904 77E2 05F3 88BA C0D1 9A44 7F1C
              </div>
            </div>

            {/* Social / Direct Channels */}
            <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-3 font-mono">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3.5 rounded-lg bg-[#292a2f] hover:bg-[#34343a] text-white flex items-center justify-center gap-2.5 transition-all text-xs uppercase tracking-wider border border-[#4a4455]/30"
              >
                <span className="material-symbols-outlined text-base text-[#d2bbff]">terminal</span>
                <span>Enterprise GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3.5 rounded-lg bg-[#292a2f] hover:bg-[#34343a] text-white flex items-center justify-center gap-2.5 transition-all text-xs uppercase tracking-wider border border-[#4a4455]/30"
              >
                <span className="material-symbols-outlined text-base text-[#b4c5ff]">share</span>
                <span>LinkedIn Executive</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
