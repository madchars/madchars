import { useState } from 'react';
import { ActiveTab } from '../types';
import { SafeImage } from '../components/SafeImage';

interface CaseStudiesViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDossier: () => void;
  onOpenADRModal: (adrId?: string) => void;
  onScheduleBriefing: () => void;
}

const COMMAND_CENTER_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDYgHl-0rhOBUPzHs0ZRAbE8FyYbDm1Mn7DUcU3MwY1EU9AiUpkpx36pD96GFfOHA3OXSwwIKzsyBBOVMyH7G6Iz9mTU78wMtf10dp3xa121NRj6WptNdmExXPB9uR4xs3m-rZB6P2Qhfyc90xewAKpDwPkfeCpWxJLwrieEgtnwTHrLhDy3KQ9oPcv0H1ld_unuI4fT6BXO1cjnsw1wWGZi_c2lRRiww_LFeP9nG5LMtgkn0NLnxOH";

export function CaseStudiesView({
  setActiveTab,
  onOpenDossier,
  onOpenADRModal,
  onScheduleBriefing,
}: CaseStudiesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = [
    { id: 'all', label: 'All Initiatives (6)' },
    { id: 'core-banking', label: 'Core Banking Modernization' },
    { id: 'cloud-migration', label: 'Cloud Migration' },
    { id: 'finops-scale', label: 'FinOps & Scale' },
    { id: 'zero-trust', label: 'Zero-Trust Security' },
  ];

  const handleCopyCode = () => {
    const code = `type EventEnvelope struct {
  AggregateID uuid.UUID \`json:"id"\`
  SequenceID  uint64    \`json:"seq"\`
  OccurredAt  time.Time \`json:"timestamp"\`
  Payload     []byte    \`json:"event_state"\`
} // Immutable forever`;
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    });
  };

  const showFlagship = activeCategory === 'all' || activeCategory === 'core-banking' || activeCategory === 'cloud-migration';
  const showRetail = activeCategory === 'all' || activeCategory === 'finops-scale';
  const showHealthcare = activeCategory === 'all' || activeCategory === 'zero-trust';

  return (
    <div className="flex flex-col w-full text-[#e3e1e9]">
      {/* SECTION HEADER & FILTERS */}
      <section className="relative px-6 lg:px-12 pt-10 pb-12 overflow-hidden bg-gradient-to-b from-[#1a1b21]/40 via-[#0d0e13] to-[#0d0e13]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[280px] bg-[#7c3aed]/10 blur-[130px] pointer-events-none rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292a2f]/80 text-[#d2bbff] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d2bbff] animate-pulse"></span>
                <span className="font-label-sm text-[10px] tracking-widest uppercase font-mono">
                  PROVEN SYSTEM TRANSFORMATIONS
                </span>
              </div>
              <h1 className="font-display-xl text-display-xl text-white tracking-tight">
                Architectural Case Studies &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2bbff] to-[#b4c5ff]">
                  Impact Dossiers
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-[#ccc3d8] mt-4 leading-relaxed max-w-2xl">
                A strategic record of zero-fault migrations, mission-critical resilience engineering, and multi-cloud transformations executed across Fortune 100 enterprise environments.
              </p>
            </div>

            {/* Metric pill summary */}
            <div className="flex items-center gap-6 p-4 rounded-xl bg-[#1a1b21] shadow-xl border border-[#4a4455]/30">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Cumulative Impact</span>
                <span className="font-metric-xl text-headline-lg text-white tracking-tight font-mono">$180M+</span>
                <span className="font-body-sm text-[13px] text-[#ccc3d8]">Validated OpEx Savings</span>
              </div>
              <div className="w-px h-12 bg-[#34343a]"></div>
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Reliability SLA</span>
                <span className="font-metric-xl text-headline-lg text-[#d2bbff] tracking-tight font-mono">99.999%</span>
                <span className="font-body-sm text-[13px] text-[#ccc3d8]">Zero Outage Cutover</span>
              </div>
            </div>
          </div>

          {/* Filter Controls Bar */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-label-md text-[12px] font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#7c3aed] text-[#ede0ff] shadow-sm font-semibold'
                      : 'bg-[#1e1f25] text-[#ccc3d8] hover:text-white hover:bg-[#292a2f]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEEP DIVE 1: GLOBAL FINANCIAL CORE MODERNIZATION */}
      {showFlagship && (
        <section className="px-6 lg:px-12 py-12 animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl bg-[#1a1b21] shadow-2xl overflow-hidden p-8 lg:p-12 border border-[#4a4455]/40">
              {/* Accent Glow Backdrop */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7c3aed]/20 blur-[100px] pointer-events-none rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0053db]/15 blur-[90px] pointer-events-none rounded-full"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Context & Architectural Strategy */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#7c3aed]/30 text-[#d2bbff] font-label-sm text-[10px] uppercase tracking-wider font-mono">
                      Flagship Engagement
                    </span>
                    <span className="font-label-sm text-[10px] text-[#958da1] font-mono">
                      Dossier ID: ARC-2023-FNC
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-[10px] text-[#b4c5ff] font-mono">
                      <span className="material-symbols-outlined text-sm">schedule</span> 18-Month Multi-Phase Cutover
                    </span>
                  </div>

                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-white font-bold">
                      Global Financial Core Modernization
                    </h2>
                    <p className="font-body-md text-body-md text-[#ccc3d8] mt-2 leading-relaxed">
                      Tier-1 Banking Institution ($420B AUM) executing total decoupling and evacuation of an IBM z15 mainframe core legacy transaction platform to a geo-distributed cloud-native topology with strict ACID guarantees.
                    </p>
                  </div>

                  {/* Architecture Topology & Key Design Systems */}
                  <div className="p-6 rounded-xl bg-[#1e1f25]/70 shadow-inner flex flex-col gap-4 border border-[#4a4455]/30">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-[12px] uppercase tracking-wider text-white flex items-center gap-2 font-mono">
                        <span className="material-symbols-outlined text-base text-[#d2bbff]">account_tree</span>
                        Target Architecture Topology
                      </span>
                      <span className="font-label-sm text-[10px] text-[#d2bbff] uppercase font-mono">
                        Active-Active Triple Region
                      </span>
                    </div>

                    <p className="font-body-sm text-body-sm text-[#ccc3d8]">
                      Transitioned batch ledger synchronizations into continuous streaming telemetry with dual-write canary shims. Eliminated synchronous mainframe lockups via Kafka-driven partitioned commit logs and transactional outbox engines.
                    </p>

                    {/* Technical Flow Spec Visualization (SVG Architecture Pipeline) */}
                    <div className="w-full bg-[#0d0e13] p-4 rounded-lg overflow-x-auto border border-[#4a4455]/30">
                      <svg
                        className="w-full min-w-[540px] text-[#e3e1e9]"
                        fill="none"
                        viewBox="0 0 760 140"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
                          </marker>
                        </defs>
                        <g>
                          {/* Legacy Core Node */}
                          <rect fill="#1e1f25" height="52" rx="4" stroke="#4a4455" strokeDasharray="3 3" width="130" x="10" y="45"></rect>
                          <text fill="#ccc3d8" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" textAnchor="middle" x="75" y="70">
                            MAINFRAME DB2
                          </text>
                          <text fill="#958da1" fontFamily="Inter" fontSize="9" textAnchor="middle" x="75" y="86">
                            Strangler Proxy Out
                          </text>

                          {/* Connector Line 1 */}
                          <path d="M140 71 L185 71" markerEnd="url(#arrow)" stroke="#7c3aed" strokeLinecap="round" strokeWidth="2"></path>

                          {/* Debezium CDC */}
                          <rect fill="#292a2f" height="52" rx="4" width="120" x="190" y="45"></rect>
                          <text fill="#ede0ff" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" textAnchor="middle" x="250" y="68">
                            DEBEZIUM CDC
                          </text>
                          <text fill="#d2bbff" fontFamily="Inter" fontSize="9" textAnchor="middle" x="250" y="84">
                            Non-blocking Tap
                          </text>

                          {/* Connector Line 2 */}
                          <path d="M310 71 L355 71" stroke="#7c3aed" strokeWidth="2"></path>

                          {/* Kafka Mesh */}
                          <rect fill="#1a1b21" height="70" rx="4" stroke="#7c3aed" width="140" x="360" y="35"></rect>
                          <text fill="#d2bbff" fontFamily="Space Grotesk" fontSize="11" fontWeight="700" textAnchor="middle" x="430" y="62">
                            KAFKA CLUSTER
                          </text>
                          <text fill="#ccc3d8" fontFamily="Inter" fontSize="9" textAnchor="middle" x="430" y="78">
                            Compacted Event Topics
                          </text>
                          <text fill="#958da1" fontFamily="Space Grotesk" fontSize="8" textAnchor="middle" x="430" y="92">
                            50,000 tx/sec throughput
                          </text>

                          {/* Connector Line 3 (Split to DB & EKS) */}
                          <path d="M500 65 L545 45" stroke="#0053db" strokeWidth="2"></path>
                          <path d="M500 78 L545 95" stroke="#0053db" strokeWidth="2"></path>

                          {/* EKS Go Services */}
                          <rect fill="#292a2f" height="42" rx="4" width="190" x="550" y="20"></rect>
                          <text fill="#cdd7ff" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" textAnchor="middle" x="645" y="40">
                            AWS EKS (GO MICROSERVICES)
                          </text>
                          <text fill="#958da1" fontFamily="Inter" fontSize="9" textAnchor="middle" x="645" y="54">
                            gRPC / Sub-millisecond Ledger
                          </text>

                          {/* CockroachDB Global Cluster */}
                          <rect fill="#292a2f" height="44" rx="4" width="190" x="550" y="78"></rect>
                          <text fill="#b4c5ff" fontFamily="Space Grotesk" fontSize="11" fontWeight="600" textAnchor="middle" x="645" y="98">
                            COCKROACHDB MULTI-REGION
                          </text>
                          <text fill="#958da1" fontFamily="Inter" fontSize="9" textAnchor="middle" x="645" y="112">
                            Raft Consensus, Multi-Active
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Architecture Components Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#1e1f25] border border-[#4a4455]/30">
                      <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Streaming Fabric</span>
                      <h4 className="font-headline-sm text-base font-bold text-white mt-1">Apache Kafka</h4>
                      <p className="font-body-sm text-xs text-[#ccc3d8] mt-1">
                        Event-driven transactional outbox pattern to decouple ledger mutations.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1e1f25] border border-[#4a4455]/30">
                      <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Compute Engine</span>
                      <h4 className="font-headline-sm text-base font-bold text-white mt-1">AWS EKS Mesh</h4>
                      <p className="font-body-sm text-xs text-[#ccc3d8] mt-1">
                        Auto-scaling isolated clusters with Cilium eBPF network telemetry.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1e1f25] border border-[#4a4455]/30">
                      <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">State Persistence</span>
                      <h4 className="font-headline-sm text-base font-bold text-white mt-1">CockroachDB</h4>
                      <p className="font-body-sm text-xs text-[#ccc3d8] mt-1">
                        Serializable isolation across 3 AWS geographical zones without locks.
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {['AWS', 'Kubernetes', 'Apache Kafka', 'CockroachDB', 'Go (Golang)', 'Terraform HCL', 'OpenTelemetry'].map((tech) => (
                      <span key={tech} className="font-label-sm text-[10px] uppercase font-mono px-3 py-1 rounded bg-[#292a2f] text-[#ccc3d8]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Mission ROI Metrics & Executive Artifacts */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* Visual Architectural Blueprint Image with Scrim */}
                  <div className="relative w-full h-56 rounded-xl overflow-hidden bg-[#1e1f25] shadow-md border border-[#4a4455]/40 group">
                    <SafeImage
                      src={COMMAND_CENTER_IMG}
                      alt="High-tech enterprise architecture command center display"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      fallbackIcon="analytics"
                      fallbackTitle="Command Center Topology"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-[#0d0e13]/60 to-transparent flex items-end p-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-label-sm text-[10px] uppercase tracking-wider text-white flex items-center gap-1.5 font-mono">
                          <span className="material-symbols-outlined text-sm text-[#d2bbff]">verified</span>
                          ISO 27001 &amp; SOC2 Type II Certified Path
                        </span>
                        <span className="font-label-sm text-[10px] text-[#b4c5ff] font-mono">Zero Failure Threshold</span>
                      </div>
                    </div>
                  </div>

                  {/* Executive Quantitative Metrics Block */}
                  <div className="p-6 rounded-xl bg-[#1e1f25] flex flex-col gap-5 border border-[#4a4455]/30">
                    <span className="font-label-md text-[12px] uppercase tracking-wider text-[#ccc3d8] font-mono">
                      Validated Production Metrics
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-[#0d0e13] border border-[#4a4455]/20">
                        <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Latency Reduction</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-metric-xl text-3xl font-bold text-[#d2bbff] font-mono">-78%</span>
                        </div>
                        <span className="font-body-sm text-xs text-[#ccc3d8]">P99 drop: 142ms to 11.4ms</span>
                      </div>
                      <div className="p-4 rounded-lg bg-[#0d0e13] border border-[#4a4455]/20">
                        <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Annual OpEx Gain</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-metric-xl text-3xl font-bold text-[#b4c5ff] font-mono">$38M</span>
                        </div>
                        <span className="font-body-sm text-xs text-[#ccc3d8]">Mainframe MIPS retired</span>
                      </div>
                      <div className="p-4 rounded-lg bg-[#0d0e13] border border-[#4a4455]/20">
                        <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Migration Cutover</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-metric-xl text-3xl font-bold text-white font-mono">0.00</span>
                          <span className="font-headline-sm text-lg text-[#d2bbff] font-mono">s</span>
                        </div>
                        <span className="font-body-sm text-xs text-[#ccc3d8]">Zero unplanned downtime</span>
                      </div>
                      <div className="p-4 rounded-lg bg-[#0d0e13] border border-[#4a4455]/20">
                        <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">Throughput Peak</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-metric-xl text-3xl font-bold text-white font-mono">54k</span>
                          <span className="font-headline-sm text-sm text-[#ccc3d8] font-mono">tx/s</span>
                        </div>
                        <span className="font-body-sm text-xs text-[#ccc3d8]">Stress tested at 4.2x</span>
                      </div>
                    </div>

                    {/* Executive Quote */}
                    <div className="p-4 rounded-lg bg-[#292a2f]/60 border border-[#4a4455]/20">
                      <p className="font-body-sm text-xs text-[#e3e1e9] italic leading-relaxed">
                        "Julian engineered a migration pathway that allowed us to rewrite the core circulatory system of our bank without stalling a single customer wire transfer or clearing cycle."
                      </p>
                      <div className="flex items-center justify-between mt-3 font-mono">
                        <span className="font-label-sm text-[10px] text-[#d2bbff] uppercase font-semibold">
                          Chief Technology Officer, Tier-1 Bank
                        </span>
                        <span className="font-label-sm text-[9px] text-[#958da1]">Executive Reference Dossier</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SPLIT CASE STUDIES: RETAIL & HEALTHCARE */}
      <section className="px-6 lg:px-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CASE STUDY 2: OMNICHANNEL RETAIL LOGISTICS */}
          {showRetail && (
            <div className="p-8 rounded-2xl bg-[#1a1b21] flex flex-col justify-between shadow-xl border border-[#4a4455]/30 animate-in fade-in duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#0053db]/40 text-[#b4c5ff] font-label-sm text-[10px] uppercase tracking-wider font-mono">
                    FinOps &amp; Scale
                  </span>
                  <span className="font-label-sm text-[10px] text-[#958da1] font-mono">Dossier ID: ARC-2023-RTL</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-2xl font-bold text-white">
                    Omnichannel Retail Logistics &amp; Real-Time Inventory Mesh
                  </h3>
                  <span className="font-label-md text-xs text-[#b4c5ff] block mt-1 font-mono">
                    Fortune 50 Enterprise Retailer • 2,400+ Physical Locations
                  </span>
                </div>
                <p className="font-body-md text-sm text-[#ccc3d8] leading-relaxed">
                  During seasonal flash traffic (Cyber Monday), inventory synchronization delays caused overselling and unfulfilled orders resulting in tens of millions in cancelled merchant revenue. Architected an ultra-low latency event mesh linking point-of-sale registers, regional fulfillment centers, and eCommerce APIs.
                </p>

                {/* Blueprint Highlights */}
                <div className="p-5 rounded-xl bg-[#1e1f25] flex flex-col gap-3 border border-[#4a4455]/20">
                  <span className="font-label-sm text-[11px] uppercase text-[#d2bbff] font-semibold flex items-center gap-1.5 font-mono">
                    <span className="material-symbols-outlined text-sm">hub</span> High-Throughput Ingestion Engine
                  </span>
                  <ul className="space-y-2 font-body-sm text-xs text-[#ccc3d8]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#d2bbff] text-base mt-0.5">check_circle</span>
                      <span>Distributed <strong>Redis Enterprise Cluster</strong> as an in-memory unified inventory state layer.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#d2bbff] text-base mt-0.5">check_circle</span>
                      <span>Bidirectional <strong>gRPC micro-pipelines</strong> between mobile POS terminals and edge hub gateways.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#d2bbff] text-base mt-0.5">check_circle</span>
                      <span>Optimistic concurrency control mitigating distributed race conditions during high-contention item drops.</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 font-mono">
                  <div className="p-3.5 rounded-lg bg-[#292a2f]/80 flex flex-col">
                    <span className="text-[10px] text-[#958da1] uppercase">Peak Vol. Uptime</span>
                    <span className="text-xl font-bold text-white mt-1">100%</span>
                    <span className="text-[10px] text-[#b4c5ff]">Zero dropouts</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#292a2f]/80 flex flex-col">
                    <span className="text-[10px] text-[#958da1] uppercase">Visibility Latency</span>
                    <span className="text-xl font-bold text-[#d2bbff] mt-1">400ms</span>
                    <span className="text-[10px] text-[#ccc3d8]">Down from 45 min</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#292a2f]/80 flex flex-col">
                    <span className="text-[10px] text-[#958da1] uppercase">Saved Leakage</span>
                    <span className="text-xl font-bold text-[#b4c5ff] mt-1">$85M</span>
                    <span className="text-[10px] text-[#ccc3d8]">Prevented cancels</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-6">
                {['Redis Enterprise', 'gRPC', 'Rust', 'Envoy Proxy', 'Google Cloud Platform'].map((tag) => (
                  <span key={tag} className="font-label-sm text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-[#1e1f25] text-[#ccc3d8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CASE STUDY 3: HEALTHCARE ZERO-TRUST ARCHITECTURE */}
          {showHealthcare && (
            <div className="p-8 rounded-2xl bg-[#1a1b21] flex flex-col justify-between shadow-xl border border-[#4a4455]/30 animate-in fade-in duration-300">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#7c3aed]/30 text-[#d2bbff] font-label-sm text-[10px] uppercase tracking-wider font-mono">
                    Zero-Trust Security
                  </span>
                  <span className="font-label-sm text-[10px] text-[#958da1] font-mono">Dossier ID: ARC-2024-HCR</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-2xl font-bold text-white">
                    Healthcare Zero-Trust Architecture &amp; Data Mesh
                  </h3>
                  <span className="font-label-md text-xs text-[#d2bbff] block mt-1 font-mono">
                    Multi-Hospital Network • 18M Patient Records Ecosystem
                  </span>
                </div>
                <p className="font-body-md text-sm text-[#ccc3d8] leading-relaxed">
                  Siloed Electronic Health Record (EHR) databases prevented cross-facility AI research while posing high exfiltration risks. Architected a decentralized, domain-driven Healthcare Data Mesh enforcing Zero-Trust identity perimeter protocols across 14 clinical institutes.
                </p>

                {/* Blueprint Highlights */}
                <div className="p-5 rounded-xl bg-[#1e1f25] flex flex-col gap-3 border border-[#4a4455]/20">
                  <span className="font-label-sm text-[11px] uppercase text-[#b4c5ff] font-semibold flex items-center gap-1.5 font-mono">
                    <span className="material-symbols-outlined text-sm">enhanced_encryption</span> Cryptographic Governance Plane
                  </span>
                  <ul className="space-y-2 font-body-sm text-xs text-[#ccc3d8]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#b4c5ff] text-base mt-0.5">shield</span>
                      <span><strong>Azure Confidential Computing</strong> enclave isolates PHI processing directly in protected memory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#b4c5ff] text-base mt-0.5">shield</span>
                      <span><strong>Snowflake Governed Data Mesh</strong> with cell-level dynamic column masking for HIPAA de-identification.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#b4c5ff] text-base mt-0.5">shield</span>
                      <span>Automated <strong>HashiCorp Vault</strong> dynamic transient secret delivery &amp; cryptographic key lifecycle.</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 font-mono">
                  <div className="p-3.5 rounded-lg bg-[#292a2f]/80 flex flex-col">
                    <span className="text-[10px] text-[#958da1] uppercase">Records Secured</span>
                    <span className="text-xl font-bold text-white mt-1">18M+</span>
                    <span className="text-[10px] text-[#d2bbff]">HITRUST Certified</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#292a2f]/80 flex flex-col">
                    <span className="text-[10px] text-[#958da1] uppercase">Audit Velocity</span>
                    <span className="text-xl font-bold text-[#b4c5ff] mt-1">Near-RT</span>
                    <span className="text-[10px] text-[#ccc3d8]">Automated logs</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#292a2f]/80 flex flex-col">
                    <span className="text-[10px] text-[#958da1] uppercase">Query Latency</span>
                    <span className="text-xl font-bold text-[#d2bbff] mt-1">1.8s</span>
                    <span className="text-[10px] text-[#ccc3d8]">For cohort analysis</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-6">
                {['Azure Enclaves', 'Snowflake', 'HashiCorp Vault', 'SPIFFE/SPIRE', 'HIPAA Clean Room'].map((tag) => (
                  <span key={tag} className="font-label-sm text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-[#1e1f25] text-[#ccc3d8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE DECISION RECORD (ADR) SECTION */}
      <section className="px-6 lg:px-12 py-12 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 lg:p-12 rounded-2xl bg-[#1a1b21] shadow-xl border border-[#4a4455]/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 gap-4 border-b border-[#4a4455]/30 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-[#d2bbff] font-label-sm text-[10px] uppercase tracking-widest font-mono">
                  <span className="material-symbols-outlined text-base">terminal</span> Formal Enterprise Governance Artifact
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-white mt-1">
                  Interactive Architecture Decision Record (ADR)
                </h3>
                <p className="font-body-md text-sm text-[#ccc3d8] mt-1">
                  Rigorous evaluation framework explaining trade-offs, consequences, and design vectors for Tier-1 scale.
                </p>
              </div>

              {/* ADR Status Badge */}
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#7c3aed]/20 text-[#d2bbff] font-label-md text-xs flex items-center gap-2 font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#d2bbff]"></span> Status: APPROVED &amp; IMPLEMENTED
                </span>
              </div>
            </div>

            {/* Terminal-like ADR Container */}
            <div className="rounded-xl bg-[#0d0e13] overflow-hidden shadow-2xl border border-[#4a4455]/40">
              {/* Terminal Titlebar */}
              <div className="px-6 py-3.5 bg-[#292a2f] flex items-center justify-between border-b border-[#4a4455]/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#93000a]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#38393f]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#7c3aed]/40"></span>
                  <span className="ml-3 font-label-sm text-[11px] text-[#958da1] font-mono">
                    ADR-0042-event-sourcing-vs-crud.md
                  </span>
                </div>
                <span className="font-label-sm text-[11px] text-[#ccc3d8] font-mono">
                  Context: FinReg Auditability Mandate
                </span>
              </div>

              {/* Content Split: Decision Matrix */}
              <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* ADR Core Text */}
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="font-label-sm text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-[#7c3aed] text-white">
                      DECISION TITLE
                    </span>
                    <h4 className="font-headline-sm text-lg font-bold text-white">
                      ADR 0042: Event Sourcing &amp; CQRS vs. Mutative CRUD for Financial Audits
                    </h4>
                  </div>

                  <div className="space-y-4 font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                    <div>
                      <h5 className="font-label-md text-[11px] uppercase text-white mb-1 font-mono">
                        1. Context &amp; Problem Statement
                      </h5>
                      <p>
                        Federal banking regulations (OCC, Fed Basel III) enforce total forensic reconstructability of customer ledger balances at any microsecond in history. Traditional CRUD (Create, Read, Update, Delete) overwrites database row states in-place, relying on separate asynchronous audit-log triggers which frequently de-synchronize during high transaction load.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-label-md text-[11px] uppercase text-white mb-1 font-mono">
                        2. Decision Outcome
                      </h5>
                      <p>
                        Adopted pure <strong>Event Sourcing (Kafka + EventStoreDB) paired with CQRS</strong>. State changes are exclusively stored as an immutable, append-only chronological stream of business events (<code className="text-[#d2bbff] font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#1e1f25]">AccountCredited</code>, <code className="text-[#d2bbff] font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#1e1f25]">HoldPlaced</code>). Current account balances are treated as disposable projections computed by replaying events into memory.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-label-md text-[11px] uppercase text-white mb-1 font-mono">
                        3. Trade-Off Analysis &amp; Consequences
                      </h5>
                      <p className="mb-1">
                        <strong>Positive:</strong> 100% mathematical audit trace. Time-travel debugging. Projection views can be rebuilt and remodeled retroactively with zero data migration downtime.
                      </p>
                      <p>
                        <strong>Negative / Complexity Cost:</strong> Event schema versioning overhead, eventual consistency delays for non-read-your-own-write queries, requiring specialized operational training for platform engineering squads.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Evaluation Matrix / Code Visualizer */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#1e1f25] p-6 rounded-xl border border-[#4a4455]/30">
                  <div>
                    <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">
                      Decision Vector Evaluation Matrix
                    </span>
                    <div className="mt-4 space-y-4">
                      {/* Row 1 */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between font-label-sm text-[11px] font-mono">
                          <span className="text-[#e3e1e9]">Forensic Audit Compliance</span>
                          <span className="text-[#d2bbff] font-semibold">100% (Native) vs 42% (CRUD)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#34343a] overflow-hidden flex">
                          <div className="bg-[#d2bbff] h-full w-[98%]"></div>
                          <div className="bg-[#4a4455] h-full w-[2%]"></div>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between font-label-sm text-[11px] font-mono">
                          <span className="text-[#e3e1e9]">Time-Travel Ledger Replay</span>
                          <span className="text-[#b4c5ff] font-semibold">Sub-second replay enabled</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#34343a] overflow-hidden flex">
                          <div className="bg-[#b4c5ff] h-full w-[94%]"></div>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between font-label-sm text-[11px] font-mono">
                          <span className="text-[#e3e1e9]">Storage &amp; Complexity Overhead</span>
                          <span className="text-[#ccc3d8] font-semibold">Moderate (+22% Footprint)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#34343a] overflow-hidden flex">
                          <div className="bg-[#4a4455] h-full w-[70%]"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0d0e13] mt-6 flex flex-col gap-2 border border-[#4a4455]/30">
                      <div className="flex items-center justify-between text-[#d2bbff] font-label-sm text-[10px] font-mono">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm">code</span> Code Archetype Signature
                        </span>
                        <button
                          onClick={handleCopyCode}
                          className="text-[9px] text-[#ccc3d8] hover:text-white underline cursor-pointer"
                        >
                          {copiedCode ? 'COPIED!' : 'COPY'}
                        </button>
                      </div>
                      <pre className="font-mono text-xs text-[#ccc3d8] overflow-x-auto p-2 bg-[#1a1b21] rounded leading-relaxed border border-[#4a4455]/20">
                        <code>{`type EventEnvelope struct {
  AggregateID uuid.UUID \`json:"id"\`
  SequenceID  uint64    \`json:"seq"\`
  OccurredAt  time.Time \`json:"timestamp"\`
  Payload     []byte    \`json:"event_state"\`
} // Immutable forever`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#4a4455]/30 mt-4">
                    <span className="font-label-sm text-[10px] text-[#958da1] font-mono">
                      Author: Julian Vance, PEA
                    </span>
                    <button
                      onClick={() => onOpenADRModal('adr-0042')}
                      className="inline-flex items-center gap-1.5 font-label-sm text-[11px] text-[#d2bbff] hover:text-white transition-colors cursor-pointer font-mono"
                    >
                      <span>Browse Full ADR Repository (34 Records)</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ENGAGEMENT CTA STRIP */}
      <section className="px-6 lg:px-12 py-10 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-[#1e1f25] via-[#292a2f] to-[#1e1f25] p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#4a4455]/40">
          <div className="max-w-2xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#d2bbff] font-semibold font-mono">
              Executive Architecture Advisory
            </span>
            <h3 className="font-headline-md text-2xl font-bold text-white mt-1">
              Facing a Mission-Critical Modernization Mandate?
            </h3>
            <p className="font-body-md text-sm text-[#ccc3d8] mt-2 leading-relaxed">
              Engage for comprehensive architecture health assessments, migration de-risking reviews, or hands-on enterprise technology governance audits.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onScheduleBriefing}
              className="px-6 py-3 rounded-lg bg-[#7c3aed] text-white font-label-md text-xs uppercase tracking-wider hover:bg-[#6d28d9] transition-all shadow-md flex items-center gap-2 cursor-pointer font-mono"
            >
              <span className="material-symbols-outlined text-base">calendar_month</span>
              <span>Schedule Executive Briefing</span>
            </button>
            <button
              onClick={onOpenDossier}
              className="px-6 py-3 rounded-lg bg-[#1e1f25] text-white font-label-md text-xs uppercase tracking-wider hover:bg-[#292a2f] transition-all flex items-center gap-2 border border-[#4a4455]/30 cursor-pointer font-mono"
            >
              <span className="material-symbols-outlined text-base">folder_open</span>
              <span>Download Portfolio Dossier (PDF)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
