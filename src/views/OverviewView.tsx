import { useState } from 'react';
import { ActiveTab } from '../types';
import { PORTRAIT_URL } from '../components/Navbar';
import { SafeImage } from '../components/SafeImage';

interface OverviewViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDossier: () => void;
  onScheduleBriefing: () => void;
}

export function OverviewView({ setActiveTab, onOpenDossier, onScheduleBriefing }: OverviewViewProps) {
  const [telemetryOpen, setTelemetryOpen] = useState(true);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 1,
      layer: 'LAYER 01',
      title: 'Global Edge Ingress',
      desc: 'Anycast routing with Cloudflare Magic Transit & WAF Layer 7 inspection.',
      stat1Label: 'Latency',
      stat1Val: '1.8ms',
      stat1Color: 'text-emerald-400',
      stat2Label: 'Packet Loss',
      stat2Val: '0.0001%',
      icon: 'public',
      tagColor: 'bg-[#7c3aed]/20 text-[#d2bbff]',
      deepInfo: 'Edge ingress terminates volumetric DDoS threats while performing token validation before passing payloads into internal VPC perimeters.',
    },
    {
      id: 2,
      layer: 'LAYER 02',
      title: 'Istio Mesh & mTLS',
      desc: 'SPIFFE/SPIRE dynamic workload attestation with policy enforcement.',
      stat1Label: 'Auth Verif',
      stat1Val: '0.4ms',
      stat1Color: 'text-emerald-400',
      stat2Label: 'Certs Rotated',
      stat2Val: '100% Valid',
      icon: 'lock',
      tagColor: 'bg-[#0053db]/20 text-[#b4c5ff]',
      deepInfo: 'Cryptographic identity attestation ensures zero implicit trust between microservice pods, with automatic key rotation every 60 minutes.',
    },
    {
      id: 3,
      layer: 'LAYER 03',
      title: 'Kafka Partition Fabric',
      desc: 'Strict exactly-once transaction processing pipeline with Raft consensus.',
      stat1Label: 'Throughput',
      stat1Val: '1.2 GB/s',
      stat1Color: 'text-[#d2bbff]',
      stat2Label: 'Replication',
      stat2Val: '3x Multi-AZ',
      icon: 'sync_alt',
      tagColor: 'bg-[#844abe]/20 text-[#ddb8ff]',
      deepInfo: 'Compacted event logs preserve immutable event lineage, driving distributed ledger updates with zero lock contention.',
    },
    {
      id: 4,
      layer: 'LAYER 04',
      title: 'CockroachDB Multi-Region',
      desc: 'Distributed SQL with localized row consensus avoiding cross-Atlantic chatter.',
      stat1Label: 'Commit Phase',
      stat1Val: '4.2ms',
      stat1Color: 'text-emerald-400',
      stat2Label: 'Availability',
      stat2Val: 'Five 9s Target',
      icon: 'database',
      tagColor: 'bg-[#7c3aed]/20 text-[#d2bbff]',
      deepInfo: 'Localized range leaseholders allow concurrent multi-continental reads and writes while honoring ACID compliance and national data residency mandates.',
    },
  ];

  return (
    <div className="flex flex-col w-full text-[#e3e1e9]">
      {/* Ambient Light Orbs */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 right-[-100px] w-[500px] h-[500px] bg-[#0053db]/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Strategic Narrative */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#292a2f] w-fit shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse shadow-[0_0_8px_rgba(124,58,237,0.8)]"></span>
                <span className="font-label-md text-[11px] tracking-widest text-[#d2bbff] uppercase font-mono">
                  Enterprise IT Architecture &amp; Cloud Strategy
                </span>
              </div>

              <h1 className="font-display-xl text-display-xl text-[#e3e1e9] font-bold tracking-tight">
                Bridging High-Stakes{' '}
                <span className="bg-gradient-to-r from-[#d2bbff] via-[#ddb8ff] to-[#b4c5ff] bg-clip-text text-transparent">
                  Business Strategy
                </span>{' '}
                with Resilient Technical Architecture.
              </h1>

              <p className="font-body-lg text-body-lg text-[#ccc3d8] max-w-2xl leading-relaxed">
                Over 14 years architecting fault-tolerant distributed platforms, modernizing legacy enterprise systems, and leading multimillion-dollar digital transformation initiatives for Fortune 500 enterprises.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setActiveTab('case-studies');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded bg-gradient-to-r from-[#7c3aed] to-[#844abe] text-[#ede0ff] font-label-md text-[12px] uppercase tracking-wider shadow-lg hover:shadow-[#7c3aed]/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Case Studies</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>

                <button
                  onClick={onScheduleBriefing}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#292a2f] text-[#e3e1e9] font-label-md text-[12px] uppercase tracking-wider hover:bg-[#34343a] hover:text-white transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#d2bbff] text-base">calendar_today</span>
                  <span>Schedule Strategic Briefing</span>
                </button>
              </div>

              {/* Micro Credential Strip */}
              <div className="pt-6 grid grid-cols-3 gap-6 max-w-lg border-t border-[#4a4455]/30">
                <div>
                  <span className="block font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
                    TOGAF 9.2 Certified
                  </span>
                  <span className="font-body-sm text-[13px] text-[#e3e1e9] font-medium">
                    Enterprise Fellow
                  </span>
                </div>
                <div>
                  <span className="block font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
                    Cloud Specialization
                  </span>
                  <span className="font-body-sm text-[13px] text-[#e3e1e9] font-medium">
                    AWS &amp; Azure Fellow
                  </span>
                </div>
                <div>
                  <span className="block font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
                    Security Clearance
                  </span>
                  <span className="font-body-sm text-[13px] text-[#e3e1e9] font-medium">
                    Federal / FinTech Level 4
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Executive Glass Showcase */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px] aspect-square rounded-2xl bg-[#1a1b21] shadow-2xl p-3 flex flex-col justify-end overflow-hidden group border border-[#4a4455]/30">
                {/* Portrait Image with Ambient Frame */}
                <div className="absolute inset-0 z-0">
                  <SafeImage
                    src={PORTRAIT_URL}
                    alt="Julian Vance, Principal Enterprise Architect"
                    className="w-full h-full object-cover object-center filter saturate-90 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                    fallbackIcon="person"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-[#0d0e13]/30 to-transparent"></div>
                </div>

                {/* Floating Overlay Card 1: Top Right Uptime */}
                <div className="absolute top-4 right-4 z-10 px-3.5 py-2.5 rounded-xl bg-[#34343a]/90 backdrop-blur-md shadow-xl flex items-center gap-3 border border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <div className="flex flex-col">
                    <span className="font-metric-xl text-lg font-bold text-white leading-tight font-mono">
                      99.999%
                    </span>
                    <span className="font-label-sm text-[9px] text-[#ccc3d8] uppercase tracking-wider font-mono">
                      Core System Uptime
                    </span>
                  </div>
                </div>

                {/* Floating Overlay Card 2: Mid-Left Scale */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 z-10 px-4 py-2.5 rounded-xl bg-[#34343a]/90 backdrop-blur-md shadow-2xl flex items-center gap-3 border border-white/5">
                  <span className="material-symbols-outlined text-[#b4c5ff] text-2xl">public</span>
                  <div className="flex flex-col">
                    <span className="font-metric-xl text-lg font-bold text-white leading-tight font-mono">
                      Global Scale
                    </span>
                    <span className="font-label-sm text-[9px] text-[#ccc3d8] uppercase tracking-wider font-mono">
                      45M+ Active Users
                    </span>
                  </div>
                </div>

                {/* Floating Overlay Card 3: Bottom Full Banner */}
                <div className="relative z-10 w-full p-4 rounded-xl bg-[#292a2f]/90 backdrop-blur-lg shadow-xl flex items-center justify-between border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#7c3aed]/20 text-[#d2bbff]">
                      <span className="material-symbols-outlined text-2xl">savings</span>
                    </div>
                    <div>
                      <span className="block font-metric-xl text-xl font-bold text-white leading-tight font-mono">
                        $140M+
                      </span>
                      <span className="font-label-sm text-[10px] text-[#ccc3d8] uppercase tracking-wider font-mono">
                        Cloud OpEx Saved
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#0053db]/20 text-[#b4c5ff] font-label-sm text-[10px] uppercase tracking-wider font-mono">
                    Verified ROI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Executive Impact Metrics Ribbon */}
      <section className="w-full bg-[#1a1b21] py-12 border-y border-[#4a4455]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric Card 1 */}
            <div className="relative p-6 rounded-xl bg-[#0d0e13] shadow-md flex flex-col justify-between overflow-hidden group hover:bg-[#1e1f25] transition-colors duration-300 border border-[#4a4455]/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] to-transparent"></div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-metric-xl text-metric-xl font-bold text-white tracking-tight group-hover:text-[#d2bbff] transition-colors font-mono">
                  $420M+
                </span>
                <span className="material-symbols-outlined text-[#958da1] text-xl">account_balance</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-base text-white font-semibold mb-1">
                  Portfolio Budget Directed
                </h4>
                <p className="font-body-sm text-body-sm text-[#ccc3d8]">
                  Cumulative IT investment, resource management, and multi-program orchestration across 6 core enterprise portfolios.
                </p>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="relative p-6 rounded-xl bg-[#0d0e13] shadow-md flex flex-col justify-between overflow-hidden group hover:bg-[#1e1f25] transition-colors duration-300 border border-[#4a4455]/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0053db] to-transparent"></div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-metric-xl text-metric-xl font-bold text-white tracking-tight group-hover:text-[#b4c5ff] transition-colors font-mono">
                  18+
                </span>
                <span className="material-symbols-outlined text-[#958da1] text-xl">schema</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-base text-white font-semibold mb-1">
                  Core Transformations Led
                </h4>
                <p className="font-body-sm text-body-sm text-[#ccc3d8]">
                  Full-lifecycle monolithic deconstruction, microservices re-platforming, and cross-continent data consolidation.
                </p>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="relative p-6 rounded-xl bg-[#0d0e13] shadow-md flex flex-col justify-between overflow-hidden group hover:bg-[#1e1f25] transition-colors duration-300 border border-[#4a4455]/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#844abe] to-transparent"></div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-metric-xl text-metric-xl font-bold text-white tracking-tight group-hover:text-[#ddb8ff] transition-colors font-mono">
                  45M+
                </span>
                <span className="material-symbols-outlined text-[#958da1] text-xl">groups</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-base text-white font-semibold mb-1">
                  Concurrent Global Users
                </h4>
                <p className="font-body-sm text-body-sm text-[#ccc3d8]">
                  Handling sustained peak loads of 185,000 requests/sec with active-active geo-replication across 3 continents.
                </p>
              </div>
            </div>

            {/* Metric Card 4 */}
            <div className="relative p-6 rounded-xl bg-[#0d0e13] shadow-md flex flex-col justify-between overflow-hidden group hover:bg-[#1e1f25] transition-colors duration-300 border border-[#4a4455]/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d2bbff] to-transparent"></div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-metric-xl text-metric-xl font-bold text-white tracking-tight group-hover:text-[#d2bbff] transition-colors font-mono">
                  40%
                </span>
                <span className="material-symbols-outlined text-[#958da1] text-xl">speed</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-base text-white font-semibold mb-1">
                  Efficiency Gain (FinOps)
                </h4>
                <p className="font-body-sm text-body-sm text-[#ccc3d8]">
                  Average cloud compute consumption reduction achieved within first 9 months of architecture restructuring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Architectural Pillars */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-[#d2bbff] uppercase tracking-widest block mb-2 font-mono">
              Systems Engineering Matrix
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white font-bold">
              Three Pillars of Enterprise Resilience
            </h2>
          </div>
          <p className="font-body-md text-body-md text-[#ccc3d8] max-w-md mt-4 md:mt-0 leading-relaxed">
            Engineered specifically for mission-critical banking, logistics, and healthcare topologies where failure is not a viable operational state.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-[#1a1b21] shadow-xl flex flex-col justify-between group hover:bg-[#1e1f25] transition-all duration-300 border border-[#4a4455]/30">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center text-[#d2bbff] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">cloud_sync</span>
              </div>
              <span className="font-label-sm text-label-sm text-[#958da1] uppercase tracking-wider block mb-2 font-mono">
                Pillar 01 / Scale &amp; Cost
              </span>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-4">
                Enterprise Cloud Modernization
              </h3>
              <p className="font-body-md text-body-md text-[#ccc3d8] mb-6 leading-relaxed">
                Pioneering automated multi-cloud migration frameworks, eliminating platform vendor lock-in, and implementing automated FinOps governance across thousands of distributed compute instances.
              </p>
            </div>
            <div className="pt-6 bg-[#0d0e13]/50 -mx-8 -mb-8 px-8 py-6 rounded-b-2xl border-t border-[#4a4455]/20">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#958da1] block mb-3 font-mono">
                Key Paradigms:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  Zero-Downtime Cutover
                </span>
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  Terraform CDK
                </span>
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  FinOps AI
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-[#1a1b21] shadow-xl flex flex-col justify-between group hover:bg-[#1e1f25] transition-all duration-300 border border-[#4a4455]/30">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#0053db]/20 flex items-center justify-center text-[#b4c5ff] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <span className="font-label-sm text-label-sm text-[#958da1] uppercase tracking-wider block mb-2 font-mono">
                Pillar 02 / Throughput
              </span>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-4">
                High-Throughput Event Architecture
              </h3>
              <p className="font-body-md text-body-md text-[#ccc3d8] mb-6 leading-relaxed">
                Constructing hyper-scalable event streaming backbones leveraging Apache Kafka, Kubernetes orchestration, and sub-millisecond gRPC services for real-time transaction processing.
              </p>
            </div>
            <div className="pt-6 bg-[#0d0e13]/50 -mx-8 -mb-8 px-8 py-6 rounded-b-2xl border-t border-[#4a4455]/20">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#958da1] block mb-3 font-mono">
                Key Paradigms:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  Distributed Mesh
                </span>
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  CQRS Pattern
                </span>
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  Kafka / Flink
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-[#1a1b21] shadow-xl flex flex-col justify-between group hover:bg-[#1e1f25] transition-all duration-300 border border-[#4a4455]/30">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#844abe]/20 flex items-center justify-center text-[#ddb8ff] mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <span className="font-label-sm text-label-sm text-[#958da1] uppercase tracking-wider block mb-2 font-mono">
                Pillar 03 / Integrity
              </span>
              <h3 className="font-headline-md text-2xl font-bold text-white mb-4">
                Zero-Trust Enterprise Governance
              </h3>
              <p className="font-body-md text-body-md text-[#ccc3d8] mb-6 leading-relaxed">
                Embedding automated cryptographic verification at every network layer, enforcing strict IAM federation, and certifying adherence to SOC2 Type II, ISO 27001, and HIPAA compliance mandates.
              </p>
            </div>
            <div className="pt-6 bg-[#0d0e13]/50 -mx-8 -mb-8 px-8 py-6 rounded-b-2xl border-t border-[#4a4455]/20">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#958da1] block mb-3 font-mono">
                Key Paradigms:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  Microsegmentation
                </span>
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  OIDC / mTLS
                </span>
                <span className="px-2.5 py-1 rounded bg-[#292a2f] font-label-sm text-[11px] text-[#e3e1e9]">
                  Automated Audit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Selected Featured Blueprint Sneak Peek (Interactive Topology) */}
      <section className="w-full bg-[#1a1b21] py-20 overflow-hidden border-y border-[#4a4455]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/20 text-[#d2bbff] font-label-sm text-[10px] uppercase tracking-widest mb-2 font-mono">
                <span className="material-symbols-outlined text-sm">hub</span>
                <span>Live Blueprint Preview</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-white">
                Global Active-Active Financial Settlement Topology
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-label-sm text-[11px] text-emerald-400 bg-[#0d0e13] px-3 py-1.5 rounded-lg shadow-inner font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Simulated Ingress: 185k req/s
              </span>
              <button
                onClick={() => setTelemetryOpen(!telemetryOpen)}
                className="px-3 py-1.5 rounded-lg bg-[#34343a] text-white font-label-sm text-[11px] uppercase hover:bg-[#7c3aed] transition-colors cursor-pointer font-mono"
              >
                {telemetryOpen ? 'Hide Readout' : 'Toggle Node Readout'}
              </button>
            </div>
          </div>

          {/* System Architecture Schematic Card */}
          <div className="rounded-2xl bg-[#0d0e13] shadow-2xl p-6 lg:p-10 relative border border-[#4a4455]/40">
            {/* Header Terminal Bar */}
            <div className="flex items-center justify-between pb-6 mb-8 bg-[#1a1b21]/70 -mt-6 -mx-6 lg:-mt-10 lg:-mx-10 px-6 lg:px-10 py-4 rounded-t-2xl border-b border-[#4a4455]/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#93000a]"></span>
                <span className="w-3 h-3 rounded-full bg-[#38393f]"></span>
                <span className="w-3 h-3 rounded-full bg-[#7c3aed]"></span>
                <span className="ml-4 font-label-sm text-[11px] text-[#958da1] font-mono">
                  ARCH-SPEC // PROTOCOL: ISO-20022 CLOUD-NATIVE FABRIC
                </span>
              </div>
              <span className="font-label-sm text-[11px] text-[#d2bbff] uppercase tracking-widest font-mono">
                Status: Nominally Operational
              </span>
            </div>

            {/* Node Pipeline Grid Visual */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {nodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(isSelected ? null : node.id)}
                    className={`p-5 rounded-xl bg-[#1e1f25] flex flex-col justify-between shadow-lg relative group border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-[#7c3aed] ring-2 ring-[#7c3aed]/20 bg-[#292a2f]'
                        : 'border-[#4a4455]/30 hover:border-[#7c3aed]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2 py-0.5 rounded font-label-sm text-[10px] font-mono font-semibold ${node.tagColor}`}>
                          {node.layer}
                        </span>
                        <span className="material-symbols-outlined text-[#958da1] text-lg">{node.icon}</span>
                      </div>
                      <h4 className="font-headline-sm text-lg font-bold text-white mb-1">
                        {node.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-[#ccc3d8] mb-4">
                        {node.desc}
                      </p>
                      {isSelected && (
                        <p className="text-xs text-[#d2bbff] bg-[#121318] p-2.5 rounded-lg mb-3 border border-[#7c3aed]/30 animate-in fade-in duration-150">
                          {node.deepInfo}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1 pt-3 bg-[#1a1b21]/80 -mx-5 -mb-5 p-3 rounded-b-xl border-t border-[#4a4455]/20">
                      <div className="flex justify-between font-label-sm text-[11px]">
                        <span className="text-[#958da1] font-mono">{node.stat1Label}</span>
                        <span className={`${node.stat1Color} font-bold font-mono`}>{node.stat1Val}</span>
                      </div>
                      <div className="flex justify-between font-label-sm text-[11px]">
                        <span className="text-[#958da1] font-mono">{node.stat2Label}</span>
                        <span className="text-white font-mono">{node.stat2Val}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Telemetry Data Stream Feed */}
            {telemetryOpen && (
              <div className="mt-8 pt-6 bg-[#292a2f]/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#958da1] border border-[#4a4455]/30">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[#e3e1e9]">
                    SYSTEM HEALTH: ACTIVE-SYNCED // SYNAPSE-EAST-1 &lt;==&gt; SYNAPSE-WEST-2 &lt;==&gt; SYNAPSE-EU-CENTRAL-1
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span>EPOCH: 1718294901</span>
                  <span className="text-[#d2bbff] font-semibold">ZERO CONFLICT COMMITS</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Executive Endorsements / Testimonials */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-md text-label-md text-[#d2bbff] uppercase tracking-widest block mb-2 font-mono">
            Executive Trust &amp; Governance
          </span>
          <h2 className="font-headline-lg text-headline-lg font-bold text-white">
            Endorsements from C-Suite Leadership
          </h2>
          <p className="font-body-md text-body-md text-[#ccc3d8] mt-3">
            Reflections on strategic technology modernizations that protected capital, accelerated revenue, and reduced systemic vulnerability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-2xl bg-[#1a1b21] shadow-xl relative flex flex-col justify-between group hover:bg-[#1e1f25] transition-all duration-300 border border-[#4a4455]/30">
            <div className="mb-6">
              <div className="flex items-center gap-1 text-[#d2bbff] mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <blockquote className="font-body-lg text-body-lg text-[#e3e1e9] leading-relaxed italic">
                “Julian solved what three global system integrators claimed was insurmountable: decoupling our 25-year-old core transactional mainframe while maintaining 100% settlement continuity. His architecture cut our annual cloud run rate by $42M while giving us sub-second responsiveness.”
              </blockquote>
            </div>
            <div className="flex items-center gap-4 pt-6 bg-[#0d0e13]/40 -mx-8 -mb-8 px-8 py-5 rounded-b-2xl border-t border-[#4a4455]/20">
              <div className="w-12 h-12 rounded-full bg-[#7c3aed]/20 flex items-center justify-center text-[#d2bbff] font-bold font-headline-sm">
                MR
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-base font-bold text-white">Marcus Rothstein</span>
                <span className="font-body-sm text-body-sm text-[#ccc3d8]">Global Chief Technology Officer, Tier-1 Investment Bank</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 rounded-2xl bg-[#1a1b21] shadow-xl relative flex flex-col justify-between group hover:bg-[#1e1f25] transition-all duration-300 border border-[#4a4455]/30">
            <div className="mb-6">
              <div className="flex items-center gap-1 text-[#b4c5ff] mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <blockquote className="font-body-lg text-body-lg text-[#e3e1e9] leading-relaxed italic">
                “Julian speaks both executive economics and compiler internals with supreme fluency. His architectural oversight of our omnichannel logistics overhaul unified five corporate acquisitions into one resilient zero-trust fabric without a single hour of unplanned downtime.”
              </blockquote>
            </div>
            <div className="flex items-center gap-4 pt-6 bg-[#0d0e13]/40 -mx-8 -mb-8 px-8 py-5 rounded-b-2xl border-t border-[#4a4455]/20">
              <div className="w-12 h-12 rounded-full bg-[#0053db]/20 flex items-center justify-center text-[#b4c5ff] font-bold font-headline-sm">
                EC
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-base font-bold text-white">Elena Chen-Vasquez</span>
                <span className="font-body-sm text-body-sm text-[#ccc3d8]">Chief Digital Officer, Global Logistics Conglomerate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Call to Action Banner */}
        <div className="mt-20 p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-[#1a1b21] via-[#1e1f25] to-[#1a1b21] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#4a4455]/40">
          <div className="max-w-xl">
            <span className="font-label-md text-label-md text-[#d2bbff] uppercase tracking-widest block mb-2 font-mono">
              Confidential Consultation
            </span>
            <h3 className="font-headline-lg text-headline-lg font-bold text-white">
              Ready to de-risk your enterprise transformation?
            </h3>
            <p className="font-body-md text-body-md text-[#ccc3d8] mt-2">
              Engage Julian Vance for targeted architectural evaluations, board-level feasibility audits, and M&amp;A technology risk due diligence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onScheduleBriefing}
              className="px-8 py-4 rounded bg-[#7c3aed] text-white font-label-md text-[12px] uppercase tracking-wider shadow-lg hover:shadow-[#7c3aed]/40 hover:scale-105 transition-all cursor-pointer"
            >
              Request Confidential Memo
            </button>
            <button
              onClick={onOpenDossier}
              className="px-6 py-4 rounded bg-[#34343a] text-white font-label-md text-[12px] uppercase tracking-wider hover:bg-[#38393f] transition-colors cursor-pointer"
            >
              View Technical Papers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
