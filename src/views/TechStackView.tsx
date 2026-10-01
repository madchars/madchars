import { useState } from 'react';
import { ArtifactDeliverable } from '../types';
import { SafeImage } from '../components/SafeImage';

interface TechStackViewProps {
  onOpenArtifact: (artifact: ArtifactDeliverable) => void;
  onOpenADRModal: (adrId?: string) => void;
  onOpenDossier: () => void;
}

const TOGAF_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuACbSo-Smi5BiePQV39Y4z3JIBzfAPP2wUjkB6Su26ud9LfQ5cBSwGNxr7iY1UhtUpOLWIJKYaKNpnTtj7HYG0dArei7ab_32W5UyAbKyPv6FMRT_mGxDtGns8gJT3vykncu7T4QGj8sjUZz36HJI4sTmgLDiDq_PipAvQJlPna2HXOU7zLvQtsRerYXrxbHQT53HxpBtdAVu3uKIfusFxl2EWZrkbW0XAlUQTcnyTiVULY7pIdugBU";
const C4_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCoT2OvVL-XmY6wX3cASaavctrJmnMO4I25RPde9FXZ_7eyMkqf4QYyZt4e2zXFz8HbSgoBr36At1iZbwy17zrGNQmDSS-o_q6yr_CsfwK-RR725cOwA1xeGzHT5tAGns1fKtpyu5E8_x73jFZsoFK7kcQeC3eU2_F8mp1GMu3Ip9v8VmDl7gx4s2ii90zgI5gszJZxpMnSAYAiQFJf0lJSEfCCGc3bdWBHcTv9JHgk6_TFWxAM7Uvo";
const THREAT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBADldx4EJfXBISN8fJMB7QeLcChHQNO0WBTYmFYxS0iPiJA9JfcMTzRNZP4V-cb4J4hSZrLGdzOx62NqUNtBpU5Lthsno6UOpa9ceQRUzVxdzwC2FuTPlUPpdVrQBM6vGuV7DeKVsEioN1hVhVZ9DGGTmLGVRBtP2Ch9_WnDnRA7R5nXNWk0z7kYaQ2C6sFsUEzHU8RjwVYOQhCEYuBP3modtbhZVR0uUsnudLDdXktoZDa6iA2tTg";
const FINOPS_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDeSzWfrfToKEpkl0XMpak2OJQ8n4WvLQpSk777MpbrkMyupO1x1dOag2klOgSd9g3fz5dgzkxpJ4ss3oR_miKNcHatdMij41hMv65qc2mICM4u-p_sT-OHBGFaYRNLn1VLIdiubQKmHY_7ZEKXj91f6wLsPEtuh1eXMxVIcijzPTTY7Vnb9JlKT-DvLGQf6jJj1vSI7Waqg7Vzo4XMb5HetD6dfNSL7prxEyAjsGe7c2ENTmFKi4lO";

export const ARTIFACTS: ArtifactDeliverable[] = [
  {
    id: 'togaf-vision',
    phase: 'STRATEGY • PHASE A',
    title: 'TOGAF Architecture Vision',
    description: 'Executive-level roadmap aligning C-suite 5-year growth initiatives with technological capability horizon maps and capital efficiency models.',
    format: 'PDF & Keynote',
    imageUrl: TOGAF_IMG,
    details: [
      'Transition Architecture State 1 through State 4',
      'Cost-avoidance modeling across multi-vendor hybrid estates',
      'Risk quantification matrix for legacy cutover phases',
      'Board-ready capital allocation governance framework',
    ],
  },
  {
    id: 'c4-context',
    phase: 'SYSTEM MODELLING',
    title: 'C4 System Context Models',
    description: 'Hierarchical software map spanning Level 1 (Executive ecosystem) down to Level 3 (Component container communications and gRPC stubs).',
    format: 'Structurizr / PlantUML',
    imageUrl: C4_IMG,
    details: [
      'Strict bounded domain boundary definitions',
      'Zero ambiguous synchronous RPC dependencies',
      'Synchronous vs. asynchronous communication taxonomy',
      'Interactive zoomable PlantUML / C4 code artifacts',
    ],
  },
  {
    id: 'threat-models',
    phase: 'STRIDE / ATT&CK',
    title: 'Threat Vector Models',
    description: 'STRIDE threat evaluation matrices identifying attack vectors, tamper blast-radii, and cryptographic mitigation controls before deployment.',
    format: 'DevSecOps Matrix',
    imageUrl: THREAT_IMG,
    details: [
      'SPIFFE/SPIRE dynamic workload identity enforcement',
      'Zero-trust network microsegmentation boundaries',
      'Automated transient secret distribution via HashiCorp Vault',
      'HIPAA PHI & PCI-DSS 4.0 cryptographic clean room verification',
    ],
  },
  {
    id: 'finops-models',
    phase: 'FINOPS ANALYTICS',
    title: 'Cost & Capacity Projections',
    description: 'Parametric financial projections correlating API traffic spikes, memory saturation thresholds, and unit margin impact over multi-year cycles.',
    format: 'Dynamic Excel / Jupyter',
    imageUrl: FINOPS_IMG,
    details: [
      'Microservice unit economics mapped directly to revenue transactions',
      'Dynamic spot/reserved instance blend optimization',
      'Automated cluster bin-packing and node scale-to-zero heuristics',
      'Validated 30-40% compute run rate reduction in 90 days',
    ],
  },
];

export function TechStackView({ onOpenArtifact, onOpenADRModal, onOpenDossier }: TechStackViewProps) {
  const [runningGate, setRunningGate] = useState(false);
  const [gatePassed, setGatePassed] = useState(true);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  const handleRunGate = () => {
    setRunningGate(true);
    setTimeout(() => {
      setRunningGate(false);
      setGatePassed(true);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full text-[#e3e1e9]">
      {/* SECTION 1: HEADER & HIGH-IMPACT EXECUTIVE INTRO */}
      <section className="relative w-full overflow-hidden bg-[#0d0e13] px-6 lg:px-12 pt-8 pb-16">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#0053db]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#292a2f] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span>
              <span className="font-label-md text-xs uppercase tracking-widest text-[#d2bbff] font-mono">
                Technical Governance &amp; Proficiency
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#958da1] font-mono">
                Framework Version
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1e1f25] text-white font-label-md text-xs font-mono border border-[#4a4455]/40">
                v4.8 • Enterprise Production
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-headline-lg text-headline-lg text-white tracking-tight leading-tight">
                Enterprise Tech Stack &amp; Architectural Framework
              </h1>
              <p className="font-body-lg text-body-lg text-[#ccc3d8] max-w-3xl leading-relaxed">
                Curated platforms, cloud providers, and architectural methodologies leveraged across scalable enterprise systems, governed by zero-trust resilience and audited operational standards.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <div className="p-4 rounded-xl bg-[#1a1b21] shadow-sm flex items-center justify-between border border-[#4a4455]/30">
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">
                    Infrastructure Reliability SLA
                  </span>
                  <span className="font-metric-xl text-3xl font-bold text-[#d2bbff] leading-none mt-1 font-mono">
                    99.995%
                  </span>
                </div>
                <span className="material-symbols-outlined text-3xl text-[#b4c5ff]">verified</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1b21] shadow-sm flex items-center justify-between border border-[#4a4455]/30">
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] uppercase text-[#958da1] font-mono">
                    Audited Code Deployments
                  </span>
                  <span className="font-metric-xl text-3xl font-bold text-white leading-none mt-1 font-mono">
                    100% IaC
                  </span>
                </div>
                <span className="material-symbols-outlined text-3xl text-[#d2bbff]">terminal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CATEGORIZED TECH MATRIX */}
      <section className="w-full bg-[#1a1b21] px-6 lg:px-12 py-16 relative border-y border-[#4a4455]/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
                Capability Landscape
              </span>
              <h2 className="font-headline-md text-2xl font-bold text-white tracking-tight mt-1">
                Core Technology Stack Matrix
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d2bbff]"></span>
              <span className="text-[#ccc3d8] mr-3">Tier 1: Core Standard</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#b4c5ff]"></span>
              <span className="text-[#ccc3d8] mr-3">Tier 2: Production Scale</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#958da1]"></span>
              <span className="text-[#ccc3d8]">Tier 3: Specialized</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category A */}
            <div className="p-6 rounded-xl bg-[#1e1f25] flex flex-col justify-between shadow-md relative overflow-hidden group border border-[#4a4455]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 rounded-full blur-2xl group-hover:bg-[#7c3aed]/10 transition-all pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#292a2f] flex items-center justify-center text-[#d2bbff]">
                    <span className="material-symbols-outlined text-xl">cloud_sync</span>
                  </div>
                  <span className="font-label-sm text-[10px] text-[#958da1] uppercase tracking-wider font-mono">DOMAIN 01</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-white mb-2">Cloud &amp; Infrastructure</h3>
                <p className="font-body-sm text-xs text-[#ccc3d8] mb-6 leading-relaxed">
                  Declarative, multi-region substrate engineered for global high availability and automated immutable provisioning.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">dns</span>
                      <span className="text-xs text-white font-medium">AWS Well-Architected</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Expert</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#b4c5ff]">lan</span>
                      <span className="text-xs text-white font-medium">GCP &amp; Azure Fabric</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#0053db]/15 text-[#b4c5ff]">Hybrid</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">integration_instructions</span>
                      <span className="text-xs text-white font-medium">Terraform / HCL</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Standard</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#958da1]">layers</span>
                      <span className="text-xs text-white font-medium">Crossplane Operator</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#292a2f] text-[#ccc3d8]">Control Plane</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">deployed_code</span>
                      <span className="text-xs text-white font-medium">Kubernetes &amp; Docker</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Core Runtime</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between font-mono">
                <span className="text-[10px] text-[#958da1]">Target RTO / RPO</span>
                <span className="text-xs text-[#d2bbff]">&lt; 15m / 0 Loss</span>
              </div>
            </div>

            {/* Category B */}
            <div className="p-6 rounded-xl bg-[#1e1f25] flex flex-col justify-between shadow-md relative overflow-hidden group border border-[#4a4455]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0053db]/5 rounded-full blur-2xl group-hover:bg-[#0053db]/10 transition-all pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#292a2f] flex items-center justify-center text-[#b4c5ff]">
                    <span className="material-symbols-outlined text-xl">database</span>
                  </div>
                  <span className="font-label-sm text-[10px] text-[#958da1] uppercase tracking-wider font-mono">DOMAIN 02</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-white mb-2">Distributed Data &amp; Messaging</h3>
                <p className="font-body-sm text-xs text-[#ccc3d8] mb-6 leading-relaxed">
                  Asynchronous event streams, distributed ACID topologies, and sub-millisecond in-memory cache meshes.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">alt_route</span>
                      <span className="text-xs text-white font-medium">Apache Kafka &amp; Registry</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Event Backbone</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#958da1]">forward_to_inbox</span>
                      <span className="text-xs text-white font-medium">RabbitMQ AMQP</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#292a2f] text-[#ccc3d8]">Task Bus</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#b4c5ff]">table_chart</span>
                      <span className="text-xs text-white font-medium">PostgreSQL &amp; Timescale</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#0053db]/15 text-[#b4c5ff]">Primary Store</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">memory</span>
                      <span className="text-xs text-white font-medium">Redis Cluster Mesh</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Sub-ms Cache</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#958da1]">hub</span>
                      <span className="text-xs text-white font-medium">Snowflake / Elasticsearch</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#292a2f] text-[#ccc3d8]">Analytics</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between font-mono">
                <span className="text-[10px] text-[#958da1]">Throughput Ingestion</span>
                <span className="text-xs text-[#b4c5ff]">1.2M msg/sec</span>
              </div>
            </div>

            {/* Category C */}
            <div className="p-6 rounded-xl bg-[#1e1f25] flex flex-col justify-between shadow-md relative overflow-hidden group border border-[#4a4455]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/5 rounded-full blur-2xl group-hover:bg-[#7c3aed]/10 transition-all pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#292a2f] flex items-center justify-center text-[#d2bbff]">
                    <span className="material-symbols-outlined text-xl">shield</span>
                  </div>
                  <span className="font-label-sm text-[10px] text-[#958da1] uppercase tracking-wider font-mono">DOMAIN 03</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-white mb-2">Security &amp; Compliance</h3>
                <p className="font-body-sm text-xs text-[#ccc3d8] mb-6 leading-relaxed">
                  Continuous validation perimeter with dynamic policy enforcement, automated key lifecycle, and posture auditing.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">lock_reset</span>
                      <span className="text-xs text-white font-medium">Zero Trust Architecture</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Mandate</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#b4c5ff]">badge</span>
                      <span className="text-xs text-white font-medium">OAuth2 / OIDC / mTLS</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#0053db]/15 text-[#b4c5ff]">Federated</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">key</span>
                      <span className="text-xs text-white font-medium">HashiCorp Vault</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Secrets HSM</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#958da1]">policy</span>
                      <span className="text-xs text-white font-medium">SOC2 Type II / ISO 27001</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#292a2f] text-[#ccc3d8]">Continuous</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">security_update_good</span>
                      <span className="text-xs text-white font-medium">Splunk Enterprise SIEM</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">24/7 SOC</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between font-mono">
                <span className="text-[10px] text-[#958da1]">Mean Time to Remediate</span>
                <span className="text-xs text-[#d2bbff]">&lt; 8 Minutes</span>
              </div>
            </div>

            {/* Category D */}
            <div className="p-6 rounded-xl bg-[#1e1f25] flex flex-col justify-between shadow-md relative overflow-hidden group border border-[#4a4455]/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0053db]/5 rounded-full blur-2xl group-hover:bg-[#0053db]/10 transition-all pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#292a2f] flex items-center justify-center text-[#b4c5ff]">
                    <span className="material-symbols-outlined text-xl">insights</span>
                  </div>
                  <span className="font-label-sm text-[10px] text-[#958da1] uppercase tracking-wider font-mono">DOMAIN 04</span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-white mb-2">Observability &amp; Resilience</h3>
                <p className="font-body-sm text-xs text-[#ccc3d8] mb-6 leading-relaxed">
                  Full-spectrum telemetry tracing with proactive synthetic testing, chaos experiments, and automated rollback triggers.
                </p>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">query_stats</span>
                      <span className="text-xs text-white font-medium">Datadog APM &amp; Profiler</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Synthetics</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#b4c5ff]">conversion_path</span>
                      <span className="text-xs text-white font-medium">OpenTelemetry (OTel)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#0053db]/15 text-[#b4c5ff]">Collector Mesh</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#958da1]">monitoring</span>
                      <span className="text-xs text-white font-medium">Prometheus &amp; Grafana</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#292a2f] text-[#ccc3d8]">SLO Dashboards</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#d2bbff]">bolt</span>
                      <span className="text-xs text-white font-medium">Chaos Mesh / Litmus</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#7c3aed]/15 text-[#d2bbff]">Active Injection</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d0e13]">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-base text-[#b4c5ff]">notifications_active</span>
                      <span className="text-xs text-white font-medium">PagerDuty Escalation</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-[#0053db]/15 text-[#b4c5ff]">On-Call SLA</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between font-mono">
                <span className="text-[10px] text-[#958da1]">Telemetry Pipeline</span>
                <span className="text-xs text-[#b4c5ff]">850GB / Day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ARCHITECTURAL PHILOSOPHY & GOVERNANCE PRINCIPLES */}
      <section className="w-full bg-[#0d0e13] px-6 lg:px-12 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
                Strategic Mandates
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white tracking-tight mt-1">
                Architectural Philosophy &amp; Governance
              </h2>
              <p className="font-body-md text-sm text-[#ccc3d8] mt-2 leading-relaxed">
                Non-negotiable foundational design laws enforced across engineering teams to eradicate technical debt and protect business velocity.
              </p>
            </div>
            <div className="p-3 bg-[#1e1f25] border border-[#4a4455]/30 rounded-xl flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] text-[#958da1] font-mono">Architecture Review Board</span>
                <span className="font-body-sm text-xs font-semibold text-[#d2bbff]">Weekly RFC Cadence</span>
              </div>
              <span className="material-symbols-outlined text-2xl text-white">gavel</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principle 1 */}
            <div 
              onMouseEnter={() => setHoveredPrinciple(1)}
              onMouseLeave={() => setHoveredPrinciple(null)}
              className={`p-6 rounded-xl bg-[#1e1f25] border border-[#4a4455]/30 shadow-md flex flex-col justify-between transition-all duration-300 ${
                hoveredPrinciple !== null && hoveredPrinciple !== 1 ? 'opacity-60' : 'opacity-100 hover:border-[#7c3aed]'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-metric-xl text-3xl font-bold text-[#958da1]/30 font-mono">01</span>
                  <span className="material-symbols-outlined text-2xl text-[#d2bbff]">schema</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-white">
                    Decouple Early, Scale Indefinitely
                  </h3>
                  <span className="inline-block mt-1 font-label-sm text-[10px] text-[#b4c5ff] uppercase tracking-wider font-mono">
                    Event-First Domain Boundaries
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                  Monoliths fragment under concurrency. We mandate strictly bounded transactional boundaries with event-driven contracts, decoupling compute lifecycles from synchronous downstream dependencies.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between text-[#958da1] font-mono text-[10px]">
                <span>Standard: Async-First</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Principle 2 */}
            <div 
              onMouseEnter={() => setHoveredPrinciple(2)}
              onMouseLeave={() => setHoveredPrinciple(null)}
              className={`p-6 rounded-xl bg-[#1e1f25] border border-[#4a4455]/30 shadow-md flex flex-col justify-between transition-all duration-300 ${
                hoveredPrinciple !== null && hoveredPrinciple !== 2 ? 'opacity-60' : 'opacity-100 hover:border-[#7c3aed]'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-metric-xl text-3xl font-bold text-[#958da1]/30 font-mono">02</span>
                  <span className="material-symbols-outlined text-2xl text-[#d2bbff]">code_blocks</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-white">
                    Automate Infrastructure as Code
                  </h3>
                  <span className="inline-block mt-1 font-label-sm text-[10px] text-[#b4c5ff] uppercase tracking-wider font-mono">
                    Immutable GitOps Deployments
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                  Manual server alteration is strictly disallowed. All infrastructure changes originate in Git version control, passing automated static linting, drift detection, and automated canary deployment gates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between text-[#958da1] font-mono text-[10px]">
                <span>Standard: Zero Click Provisioning</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Principle 3 */}
            <div 
              onMouseEnter={() => setHoveredPrinciple(3)}
              onMouseLeave={() => setHoveredPrinciple(null)}
              className={`p-6 rounded-xl bg-[#1e1f25] border border-[#4a4455]/30 shadow-md flex flex-col justify-between transition-all duration-300 ${
                hoveredPrinciple !== null && hoveredPrinciple !== 3 ? 'opacity-60' : 'opacity-100 hover:border-[#7c3aed]'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-metric-xl text-3xl font-bold text-[#958da1]/30 font-mono">03</span>
                  <span className="material-symbols-outlined text-2xl text-[#d2bbff]">lock_clock</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-white">
                    Security by Design, Not an Afterthought
                  </h3>
                  <span className="inline-block mt-1 font-label-sm text-[10px] text-[#b4c5ff] uppercase tracking-wider font-mono">
                    Zero-Trust Perimeter Enforcement
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                  Every request is authenticated, authorized, and encrypted in transit and at rest. Microsegmentation guarantees that an edge compromise never turns into lateral data plane exfiltration.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between text-[#958da1] font-mono text-[10px]">
                <span>Standard: mTLS Everywhere</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Principle 4 */}
            <div 
              onMouseEnter={() => setHoveredPrinciple(4)}
              onMouseLeave={() => setHoveredPrinciple(null)}
              className={`p-6 rounded-xl bg-[#1e1f25] border border-[#4a4455]/30 shadow-md flex flex-col justify-between transition-all duration-300 ${
                hoveredPrinciple !== null && hoveredPrinciple !== 4 ? 'opacity-60' : 'opacity-100 hover:border-[#7c3aed]'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-metric-xl text-3xl font-bold text-[#958da1]/30 font-mono">04</span>
                  <span className="material-symbols-outlined text-2xl text-[#d2bbff]">pie_chart</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-white">
                    Cost Transparency &amp; FinOps
                  </h3>
                  <span className="inline-block mt-1 font-label-sm text-[10px] text-[#b4c5ff] uppercase tracking-wider font-mono">
                    Unit Economics Visibility
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#ccc3d8] leading-relaxed">
                  Engineering decisions are commercial decisions. Each service maintains tagged telemetry mapping cloud expenditure directly to customer usage metrics, driving continuous container bin-packing efficiency.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#4a4455]/30 flex items-center justify-between text-[#958da1] font-mono text-[10px]">
                <span>Standard: &lt; 8% Idle Capacity</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Realtime Architectural Decision Record (ADR) Interactive Panel */}
          <div className="w-full rounded-2xl bg-[#1a1b21] p-6 lg:p-8 shadow-lg flex flex-col lg:flex-row gap-8 items-stretch border border-[#4a4455]/30">
            <div className="lg:w-1/3 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed] text-white font-label-sm text-[10px] uppercase tracking-wider mb-3 font-mono">
                  <span className="material-symbols-outlined text-sm">history_edu</span>
                  <span>Active Governance Record</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold text-white">
                  Recent Architecture Decision Records (ADRs)
                </h4>
                <p className="font-body-md text-xs text-[#ccc3d8] mt-2 leading-relaxed">
                  Traceable, immutable records documenting architectural trade-offs, evaluated options, and enterprise consequences.
                </p>
              </div>
              <div>
                <button
                  onClick={() => onOpenADRModal()}
                  className="px-4 py-2 rounded-lg bg-[#292a2f] hover:bg-[#34343a] text-white font-label-md text-xs font-mono transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">folder_open</span>
                  <span>Browse All ADRs (42)</span>
                </button>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => onOpenADRModal('adr-0109')}
                className="p-4 rounded-xl bg-[#1e1f25] border border-[#4a4455]/20 flex flex-col justify-between shadow-sm cursor-pointer hover:border-[#7c3aed]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[#958da1] mb-2 font-mono text-[10px]">
                    <span>ADR-109 • APPROVED</span>
                    <span className="text-[#d2bbff]">Q3 2024</span>
                  </div>
                  <h5 className="text-sm font-semibold text-white mb-1">eBPF Service Mesh Transition</h5>
                  <p className="text-xs text-[#ccc3d8] leading-relaxed">
                    Replaced sidecar envoy injection with kernel-level Cilium eBPF mesh, reducing latency overhead by 34%.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 font-mono text-[9px]">
                  <span className="px-2 py-0.5 rounded bg-[#0d0e13] text-[#ccc3d8]">Cilium</span>
                  <span className="px-2 py-0.5 rounded bg-[#0d0e13] text-[#ccc3d8]">Low Latency</span>
                </div>
              </div>

              <div 
                onClick={() => onOpenADRModal('adr-0104')}
                className="p-4 rounded-xl bg-[#1e1f25] border border-[#4a4455]/20 flex flex-col justify-between shadow-sm cursor-pointer hover:border-[#7c3aed]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[#958da1] mb-2 font-mono text-[10px]">
                    <span>ADR-104 • APPROVED</span>
                    <span className="text-[#d2bbff]">Q2 2024</span>
                  </div>
                  <h5 className="text-sm font-semibold text-white mb-1">Federated GraphQL to gRPC Core</h5>
                  <p className="text-xs text-[#ccc3d8] leading-relaxed">
                    Internal inter-service RPC migrated to Protobuf schemas, enforcing compile-time interface contracts.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 font-mono text-[9px]">
                  <span className="px-2 py-0.5 rounded bg-[#0d0e13] text-[#ccc3d8]">Protobuf</span>
                  <span className="px-2 py-0.5 rounded bg-[#0d0e13] text-[#ccc3d8]">gRPC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ENTERPRISE ARTIFACTS & DELIVERY STANDARDS */}
      <section className="w-full bg-[#1e1f25] px-6 lg:px-12 py-20 relative border-b border-[#4a4455]/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
                Operational Deliverables
              </span>
              <h2 className="font-headline-lg text-headline-lg text-white tracking-tight mt-1">
                Enterprise Artifacts &amp; Blueprint Standards
              </h2>
              <p className="font-body-md text-sm text-[#ccc3d8] mt-2 max-w-2xl leading-relaxed">
                Sample deliverables created during enterprise engagements, illustrating rigour from executive board summaries down to packet-level flow definitions.
              </p>
            </div>
            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#7c3aed] text-white font-label-md text-xs uppercase tracking-wider hover:bg-[#6d28d9] transition-all shadow-md cursor-pointer font-mono shrink-0"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span>Sample Artifact Pack (.ZIP)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTIFACTS.map((artifact) => (
              <div
                key={artifact.id}
                onClick={() => onOpenArtifact(artifact)}
                className="rounded-xl bg-[#1a1b21] overflow-hidden shadow-md flex flex-col group hover:-translate-y-1 transition-all duration-300 border border-[#4a4455]/30 cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden bg-[#34343a]">
                  <SafeImage
                    src={artifact.imageUrl}
                    alt={artifact.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    fallbackIcon="schema"
                    fallbackTitle={artifact.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b21] via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0d0e13]/90 backdrop-blur-md text-[#d2bbff] font-label-sm text-[10px] uppercase font-mono">
                    {artifact.phase}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-headline-sm text-base font-bold text-white mb-2 group-hover:text-[#d2bbff] transition-colors">
                      {artifact.title}
                    </h3>
                    <p className="font-body-sm text-xs text-[#ccc3d8] mb-4 leading-relaxed line-clamp-3">
                      {artifact.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#4a4455]/30 flex items-center justify-between text-xs text-[#958da1]">
                    <span className="font-mono text-[10px]">{artifact.format}</span>
                    <span className="material-symbols-outlined text-base text-[#d2bbff]">visibility</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GOVERNANCE ENFORCEMENT ENGINE */}
      <section className="w-full bg-[#0d0e13] px-6 lg:px-12 py-20 relative border-t border-[#4a4455]/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292a2f] w-fit font-mono text-[10px]">
              <span className="w-2 h-2 rounded-full bg-[#d2bbff]"></span>
              <span className="uppercase tracking-wider text-white">Automated Quality Gate</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-white font-bold">
              Architectural Health &amp; Drift Detection
            </h2>
            <p className="font-body-lg text-sm text-[#ccc3d8] leading-relaxed">
              Policy-as-Code rules run seamlessly within pull requests. Any deviation from declared zero-trust or infrastructure boundary standards halts build progression automatically.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
              <div className="p-4 rounded-xl bg-[#1a1b21] border border-[#4a4455]/30">
                <span className="text-2xl font-bold text-[#d2bbff] block">100%</span>
                <span className="text-xs text-[#958da1]">PRs Scanned for Compliance</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1b21] border border-[#4a4455]/30">
                <span className="text-2xl font-bold text-[#b4c5ff] block">0ms</span>
                <span className="text-xs text-[#958da1]">Drift Allowed in Production</span>
              </div>
            </div>
          </div>

          {/* Live Terminal Display */}
          <div className="w-full lg:w-1/2 rounded-xl bg-[#0d0e13] overflow-hidden shadow-2xl border border-[#4a4455]/40">
            <div className="bg-[#1e1f25] px-4 py-3 flex items-center justify-between border-b border-[#4a4455]/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                <span className="w-3 h-3 rounded-full bg-[#958da1]"></span>
                <span className="w-3 h-3 rounded-full bg-[#7c3aed]"></span>
                <span className="ml-2 font-mono text-[10px] text-[#958da1]">
                  governance-gate --verify --strict
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunGate}
                  disabled={runningGate}
                  className="px-2 py-0.5 rounded bg-[#292a2f] hover:bg-[#34343a] text-[10px] font-mono text-[#d2bbff] transition-all cursor-pointer"
                >
                  {runningGate ? 'Evaluating...' : 'Re-run'}
                </button>
                <span className="font-mono text-[10px] text-[#d2bbff] font-bold">
                  {runningGate ? 'SCANNING' : gatePassed ? 'PASSED' : 'ALERT'}
                </span>
              </div>
            </div>

            <div className="p-5 font-mono text-xs text-[#ccc3d8] flex flex-col gap-2.5 overflow-x-auto bg-[#0d0e13]">
              <div className="text-[#958da1]">$ apex-gate evaluate-spec --target=k8s-mesh-prod</div>
              <div className="text-white flex items-center gap-2">
                <span className="text-[#d2bbff] font-bold">✔</span> [OPA / Gatekeeper] Zero privilege escalation rules verified
              </div>
              <div className="text-white flex items-center gap-2">
                <span className="text-[#d2bbff] font-bold">✔</span> [Trivy / Snyk] 0 CVE vulnerabilities discovered (Critical/High)
              </div>
              <div className="text-white flex items-center gap-2">
                <span className="text-[#d2bbff] font-bold">✔</span> [Infracost] Delta within acceptable monthly threshold (+$34.20)
              </div>
              <div className="text-white flex items-center gap-2">
                <span className="text-[#d2bbff] font-bold">✔</span> [C4 Linter] Architectural bounded boundary respected
              </div>
              <div className="mt-3 p-3 rounded bg-[#7c3aed]/10 text-[#d2bbff] flex items-center justify-between border border-[#7c3aed]/20">
                <span>Result: Deployment gate approved for Canary Pipeline</span>
                <span className="font-bold">STATUS 200 OK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
