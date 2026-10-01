import { useState } from 'react';
import { ActiveTab } from '../types';

interface StrategicArchitectureViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onScheduleBriefing: () => void;
}

export function StrategicArchitectureView({ setActiveTab, onScheduleBriefing }: StrategicArchitectureViewProps) {
  const [activeRegion, setActiveRegion] = useState<'us-east' | 'us-west' | 'eu-central'>('us-east');
  const [chaosSimulated, setChaosSimulated] = useState(false);

  return (
    <div className="flex flex-col w-full text-[#e3e1e9]">
      {/* Top Banner */}
      <section className="relative px-6 lg:px-12 pt-12 pb-16 overflow-hidden bg-gradient-to-b from-[#1a1b21]/50 to-[#0d0e13]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/20 text-[#d2bbff] mb-4 font-mono text-xs uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2bbff] animate-pulse"></span>
            ENTERPRISE SYSTEMS MATRIX
          </div>
          <h1 className="font-display-xl text-display-xl text-white tracking-tight">
            Strategic Technical <span className="bg-gradient-to-r from-[#d2bbff] to-[#b4c5ff] bg-clip-text text-transparent">Architecture</span>
          </h1>
          <p className="font-body-lg text-body-lg text-[#ccc3d8] mt-4 max-w-3xl leading-relaxed">
            Architecting fault-tolerant distributed topologies that decouple business risk from computational scale. From monolithic mainframe strangler migrations to zero-trust confidential enclaves.
          </p>
        </div>
      </section>

      {/* Main Core Principles & Topology Explorer */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full space-y-16">
        {/* Interactive Region Mesh Simulation */}
        <div className="p-8 rounded-2xl bg-[#1a1b21] border border-[#4a4455]/40 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#d2bbff]">
                Active-Active Multi-Continental Cluster Simulation
              </span>
              <h2 className="text-2xl font-bold font-headline-md text-white mt-1">
                Triple-Region Consensus &amp; Dynamic Sharding
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChaosSimulated(!chaosSimulated)}
                className={`px-4 py-2 rounded-lg font-mono text-xs uppercase transition-all cursor-pointer ${
                  chaosSimulated
                    ? 'bg-rose-900/60 border border-rose-500 text-rose-200'
                    : 'bg-[#292a2f] text-[#e3e1e9] hover:bg-[#34343a]'
                }`}
              >
                {chaosSimulated ? 'Chaos Simulation Active (Failover)' : 'Inject Cloud Region Outage'}
              </button>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setActiveRegion('us-east')}
              className={`p-5 rounded-xl border text-left transition-all ${
                activeRegion === 'us-east'
                  ? 'bg-[#1e1f25] border-[#7c3aed] ring-1 ring-[#7c3aed]'
                  : 'bg-[#121318] border-[#4a4455]/30 hover:border-[#7c3aed]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#d2bbff]">NODE 01</span>
                <span className={`w-2.5 h-2.5 rounded-full ${chaosSimulated ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse`}></span>
              </div>
              <h3 className="font-bold text-white text-lg">synapse-us-east-1</h3>
              <p className="text-xs text-[#ccc3d8] mt-1">Primary Settlement Ingress</p>
              <div className="mt-4 pt-3 border-t border-[#4a4455]/20 flex justify-between font-mono text-[11px] text-[#958da1]">
                <span>Status</span>
                <span className="text-white font-bold">{chaosSimulated ? 'ABSORBING 140% LOAD' : 'ACTIVE-ACTIVE'}</span>
              </div>
            </button>

            <button
              onClick={() => setActiveRegion('us-west')}
              className={`p-5 rounded-xl border text-left transition-all ${
                activeRegion === 'us-west'
                  ? 'bg-[#1e1f25] border-[#7c3aed] ring-1 ring-[#7c3aed]'
                  : 'bg-[#121318] border-[#4a4455]/30 hover:border-[#7c3aed]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#b4c5ff]">NODE 02</span>
                <span className={`w-2.5 h-2.5 rounded-full ${chaosSimulated ? 'bg-rose-500' : 'bg-emerald-400'} animate-pulse`}></span>
              </div>
              <h3 className="font-bold text-white text-lg">synapse-us-west-2</h3>
              <p className="text-xs text-[#ccc3d8] mt-1">Order Matching &amp; Ledger Cache</p>
              <div className="mt-4 pt-3 border-t border-[#4a4455]/20 flex justify-between font-mono text-[11px] text-[#958da1]">
                <span>Status</span>
                <span className={chaosSimulated ? 'text-rose-400 font-bold' : 'text-white font-bold'}>
                  {chaosSimulated ? 'SEVERED // EVACUATED' : 'ACTIVE-ACTIVE'}
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveRegion('eu-central')}
              className={`p-5 rounded-xl border text-left transition-all ${
                activeRegion === 'eu-central'
                  ? 'bg-[#1e1f25] border-[#7c3aed] ring-1 ring-[#7c3aed]'
                  : 'bg-[#121318] border-[#4a4455]/30 hover:border-[#7c3aed]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#ddb8ff]">NODE 03</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <h3 className="font-bold text-white text-lg">synapse-eu-central-1</h3>
              <p className="text-xs text-[#ccc3d8] mt-1">EMEA Regulatory &amp; Clearing Mesh</p>
              <div className="mt-4 pt-3 border-t border-[#4a4455]/20 flex justify-between font-mono text-[11px] text-[#958da1]">
                <span>Status</span>
                <span className="text-white font-bold">ACID SYNCED (Five 9s)</span>
              </div>
            </button>
          </div>

          {/* Topology Pipeline Diagram View */}
          <div className="p-6 rounded-xl bg-[#0d0e13] border border-[#4a4455]/40 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#958da1]">
              <span>ACTIVE ROUTE INSPECTION // PROTOCOL: ISO-20022</span>
              <span className="text-[#d2bbff]">LATENCY: {chaosSimulated ? '3.8ms (Rerouted)' : '1.4ms (Optimal)'}</span>
            </div>
            <div className="p-4 rounded-lg bg-[#1a1b21] font-mono text-xs text-[#ccc3d8] overflow-x-auto leading-relaxed">
              <code>
                {`[CLIENT INGRESS: ANYCAST] 
       │ ──> (Cloudflare Magic Transit L7 WAF: Zero Inspection Drop)
       │ ──> (SPIRE Dynamic mTLS Workload Attestation: Cert Verified)
       ▼
 [KAFKA TRANSACTIONS TOPOLOGY]
       │ ──> Topic: ledger.tx.v1 [Partition 14 / RepFactor 3]
       │ ──> Raft Leader: ${chaosSimulated ? 'synapse-us-east-1 (Elected in 18ms)' : 'synapse-us-west-2'}
       ▼
 [DISTRIBUTED STATE STORE: COCKROACHDB]
       └──> Localized leaseholders: Serializable ACID Commit in 4.2ms`}
              </code>
            </div>
          </div>
        </div>

        {/* 4 Architectural Cornerstones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[#1a1b21] border border-[#4a4455]/30 space-y-4">
            <span className="font-mono text-xs uppercase text-[#d2bbff]">01 / STRANGLER PATTERN</span>
            <h3 className="text-xl font-bold font-headline-md text-white">Non-Invasive Mainframe Decoupling</h3>
            <p className="text-sm text-[#ccc3d8] leading-relaxed">
              Monolithic core systems cannot be replaced in a high-risk "big bang" cutover. We employ non-blocking Change Data Capture (CDC) shims paired with bidirectional outbox patterns to peel away domain models incrementally without stalling existing business volume.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a1b21] border border-[#4a4455]/30 space-y-4">
            <span className="font-mono text-xs uppercase text-[#b4c5ff]">02 / FINOPS UNIT ECONOMICS</span>
            <h3 className="text-xl font-bold font-headline-md text-white">Algorithmic Resource Bin-Packing</h3>
            <p className="text-sm text-[#ccc3d8] leading-relaxed">
              Every compute instance and microservice is tagged with dynamic cost-telemetry. By tuning autoscaling curves to memory saturation and adopting ARM64 Graviton instances, enterprise clients regularly recapture 30-40% of their annual cloud budget.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a1b21] border border-[#4a4455]/30 space-y-4">
            <span className="font-mono text-xs uppercase text-[#ddb8ff]">03 / ZERO-TRUST DATA FABRIC</span>
            <h3 className="text-xl font-bold font-headline-md text-white">Confidential Enclaves &amp; Key Governance</h3>
            <p className="text-sm text-[#ccc3d8] leading-relaxed">
              Zero implicit trust between application tiers. Sensitive data in transit, at rest, and in protected memory execution is attested cryptographically, isolating PHI and cardholder data even in the presence of compromised host hypervisors.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a1b21] border border-[#4a4455]/30 space-y-4">
            <span className="font-mono text-xs uppercase text-emerald-400">04 / DISASTER RECOVERY AT SCALE</span>
            <h3 className="text-xl font-bold font-headline-md text-white">Continuous Chaos Experiments</h3>
            <p className="text-sm text-[#ccc3d8] leading-relaxed">
              Resilience is verified before catastrophic events occur. We embed continuous chaos injection pipelines that simulate availability zone blackouts, network partitions, and packet drop storms to prove sub-second automated failover.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-2xl bg-gradient-to-r from-[#1a1b21] to-[#292a2f] border border-[#4a4455]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-headline-md text-white">Evaluate Your Enterprise Systems Matrix</h3>
            <p className="text-sm text-[#ccc3d8] mt-1">Book an architecture review or review our case studies for validated production results.</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { setActiveTab('case-studies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-3 rounded-lg bg-[#292a2f] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#34343a] transition-colors cursor-pointer"
            >
              Browse Case Studies
            </button>
            <button
              onClick={onScheduleBriefing}
              className="px-6 py-3 rounded-lg bg-[#7c3aed] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#6d28d9] transition-all cursor-pointer shadow-lg"
            >
              Schedule Briefing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
