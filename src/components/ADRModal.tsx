import { useState } from 'react';
import { ADRRecord } from '../types';

interface ADRModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedId?: string;
}

export const SAMPLE_ADRS: ADRRecord[] = [
  {
    id: 'adr-0042',
    number: 'ADR-0042',
    title: 'Event Sourcing & CQRS vs. Mutative CRUD for Financial Audits',
    status: 'APPROVED',
    date: 'Q1 2024',
    context: 'FinReg Auditability Mandate (OCC / Basel III)',
    problem: 'Federal banking regulations enforce total forensic reconstructability of customer ledger balances at any microsecond in history. Traditional CRUD overwrites database rows in-place.',
    decision: 'Adopted pure Event Sourcing (Kafka + EventStoreDB) paired with CQRS. State changes are exclusively stored as an immutable, append-only chronological stream of business events.',
    positiveTradeoffs: '100% mathematical audit trace. Time-travel debugging. Projection views can be rebuilt and remodeled retroactively with zero data migration downtime.',
    negativeTradeoffs: 'Event schema versioning overhead, eventual consistency delays for non-read-your-own-write queries, requiring specialized operational training for platform engineering squads.',
    tags: ['Kafka', 'Event Sourcing', 'CQRS', 'FinTech'],
    codeSample: `type EventEnvelope struct {
  AggregateID uuid.UUID \`json:"id"\`
  SequenceID  uint64    \`json:"seq"\`
  OccurredAt  time.Time \`json:"timestamp"\`
  Payload     []byte    \`json:"event_state"\`
} // Immutable forever`,
  },
  {
    id: 'adr-0104',
    number: 'ADR-0104',
    title: 'Federated GraphQL Migration to Core gRPC Protocol Buffers',
    status: 'APPROVED',
    date: 'Q2 2024',
    context: 'Internal Inter-Service Latency Overhead',
    problem: 'Federated GraphQL query planner introduced 18ms latency cascades and unpredictable memory consumption across internal East-West microservice communications.',
    decision: 'Restricted GraphQL strictly to external client BFF layer; all internal East-West RPC migrated to Protobuf schemas with HTTP/2 multiplexed gRPC channels.',
    positiveTradeoffs: '68% reduction in inter-service RPC serialization overhead, strict compile-time interface contracts, automatic SDK generation across Go and Rust services.',
    negativeTradeoffs: 'Dual client maintenance for public-facing GraphQL schema and internal Protobuf definitions.',
    tags: ['gRPC', 'Protobuf', 'GraphQL', 'Microservices'],
    codeSample: `syntax = "proto3";
service SettlementEngine {
  rpc CommitLedger (LedgerBatchRequest) returns (BatchReceipt);
  rpc StreamAuditEvents (AuditQuery) returns (stream AuditRecord);
}`,
  },
  {
    id: 'adr-0109',
    number: 'ADR-0109',
    title: 'Kernel-Level eBPF Service Mesh Transition (Cilium) over Sidecars',
    status: 'APPROVED',
    date: 'Q3 2024',
    context: 'High-Density Kubernetes Sidecar Memory & Latency Bloat',
    problem: 'Envoy proxy sidecar containers consumed over 32GB of RAM per node and injected 3.4ms TCP traversal latency on high-throughput order execution clusters.',
    decision: 'Replaced sidecar envoy proxy injection with kernel-level Cilium eBPF mesh directly intercepting socket buffers in the Linux kernel.',
    positiveTradeoffs: '34% reduction in P99 network latency, 42% decrease in container memory overhead, kernel-enforced transparent mTLS and L7 observability.',
    negativeTradeoffs: 'Requires modern Linux kernel (>= 5.10) and root node capabilities during initial CNI daemonset deployment.',
    tags: ['Cilium', 'eBPF', 'Kubernetes', 'Low Latency'],
  },
  {
    id: 'adr-0088',
    number: 'ADR-0088',
    title: 'CockroachDB Multi-Region Consensus vs. Aurora Global Database',
    status: 'APPROVED',
    date: 'Q4 2023',
    context: 'Cross-Continental Active-Active Banking Database',
    problem: 'Requirement for simultaneous active writes in North America and Western Europe without asynchronous replication lag causing double-spend vulnerability.',
    decision: 'Selected CockroachDB Multi-Region with localized row leaseholders and Raft consensus ranges, bounding cross-Atlantic round trips strictly to cross-region transfers.',
    positiveTradeoffs: 'True serializable isolation across multiple geographic zones with zero write lag and automated recovery from regional cloud outages.',
    negativeTradeoffs: 'Higher cost per IOPS compared to standard RDS Aurora; requires strict schema design adhering to regional locality heuristics.',
    tags: ['CockroachDB', 'Distributed SQL', 'Active-Active', 'ACID'],
  },
];

export function ADRModal({ isOpen, onClose, initialSelectedId }: ADRModalProps) {
  const [selectedId, setSelectedId] = useState<string>(initialSelectedId || 'adr-0042');
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredADRs = SAMPLE_ADRS.filter(
    (adr) =>
      adr.title.toLowerCase().includes(search.toLowerCase()) ||
      adr.number.toLowerCase().includes(search.toLowerCase()) ||
      adr.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedADR = SAMPLE_ADRS.find((a) => a.id === selectedId) || SAMPLE_ADRS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#1e1f25] border border-[#4a4455]/70 shadow-2xl flex flex-col text-[#e3e1e9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 bg-[#1a1b21] border-b border-[#4a4455]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-[#d2bbff]">terminal</span>
            <div>
              <h2 className="text-xl font-bold font-headline-md text-white">
                Enterprise Architecture Decision Records (ADR Repository)
              </h2>
              <p className="text-xs text-[#ccc3d8]">Formal Traceability &amp; Architectural Governance Records</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#292a2f] text-[#ccc3d8] hover:text-white hover:bg-[#34343a] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Content Split: List on Left, Detail on Right */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left List */}
          <div className="md:col-span-4 p-4 border-r border-[#4a4455]/40 overflow-y-auto max-h-[70vh] bg-[#121318]/50">
            <div className="mb-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ADRs or tags..."
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#1e1f25] border border-[#4a4455]/40 text-[#e3e1e9] placeholder-[#958da1] focus:outline-none focus:border-[#7c3aed]"
              />
            </div>
            <div className="space-y-2">
              {filteredADRs.map((adr) => {
                const isSelected = adr.id === selectedId;
                return (
                  <button
                    key={adr.id}
                    onClick={() => setSelectedId(adr.id)}
                    className={`w-full p-3 rounded-lg text-left transition-all text-xs cursor-pointer ${
                      isSelected
                        ? 'bg-[#7c3aed]/20 border border-[#7c3aed] text-white shadow-sm'
                        : 'bg-[#1e1f25] border border-[#4a4455]/20 text-[#ccc3d8] hover:bg-[#292a2f]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="text-[#d2bbff] font-semibold">{adr.number}</span>
                      <span className="text-emerald-400">{adr.status}</span>
                    </div>
                    <div className="font-semibold line-clamp-2 text-[#e3e1e9]">{adr.title}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {adr.tags.slice(0, 2).map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-[#292a2f] text-[9px] text-[#958da1]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detail Pane */}
          <div className="md:col-span-8 p-6 overflow-y-auto max-h-[70vh] bg-[#1e1f25] space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-[#7c3aed] text-white font-mono text-[10px] font-semibold">
                  {selectedADR.number}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                  STATUS: {selectedADR.status}
                </span>
                <span className="text-xs text-[#958da1] font-mono">{selectedADR.date}</span>
              </div>
              <h3 className="text-xl font-bold font-headline-md text-white">{selectedADR.title}</h3>
              <p className="text-xs text-[#d2bbff] font-mono mt-1">Context: {selectedADR.context}</p>
            </div>

            <div className="space-y-4 text-xs text-[#ccc3d8]">
              <div className="p-3.5 rounded-lg bg-[#121318] border border-[#4a4455]/30">
                <h4 className="text-[11px] font-mono uppercase text-[#eaddff] font-semibold mb-1">
                  1. Problem Statement
                </h4>
                <p className="leading-relaxed">{selectedADR.problem}</p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#121318] border border-[#4a4455]/30">
                <h4 className="text-[11px] font-mono uppercase text-[#d2bbff] font-semibold mb-1">
                  2. Decision Outcome
                </h4>
                <p className="leading-relaxed">{selectedADR.decision}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-[#121318] border border-emerald-500/20">
                  <h4 className="text-[10px] font-mono uppercase text-emerald-400 font-semibold mb-1">
                    Positive Trade-Offs
                  </h4>
                  <p className="leading-relaxed">{selectedADR.positiveTradeoffs}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#121318] border border-amber-500/20">
                  <h4 className="text-[10px] font-mono uppercase text-amber-300 font-semibold mb-1">
                    Negative / Complexity Cost
                  </h4>
                  <p className="leading-relaxed">{selectedADR.negativeTradeoffs}</p>
                </div>
              </div>

              {selectedADR.codeSample && (
                <div className="p-3 rounded-lg bg-[#0d0e13] border border-[#4a4455]/40">
                  <div className="text-[10px] font-mono text-[#958da1] uppercase mb-1">Code Archetype Signature</div>
                  <pre className="font-mono text-xs text-[#d2bbff] overflow-x-auto p-2 bg-[#121318] rounded">
                    <code>{selectedADR.codeSample}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#1a1b21] border-t border-[#4a4455]/40 flex items-center justify-between text-xs text-[#958da1]">
          <span>Author: Julian Vance, Principal Enterprise Architect</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#7c3aed] text-white font-mono uppercase text-xs hover:bg-[#6d28d9] transition-all"
          >
            Close Repository
          </button>
        </div>
      </div>
    </div>
  );
}
