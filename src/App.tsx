import { useState } from 'react';
import { ActiveTab, ArtifactDeliverable } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DossierModal } from './components/DossierModal';
import { PolicyModal } from './components/PolicyModal';
import { ArtifactModal } from './components/ArtifactModal';
import { ADRModal } from './components/ADRModal';
import { OverviewView } from './views/OverviewView';
import { StrategicArchitectureView } from './views/StrategicArchitectureView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { TechStackView } from './views/TechStackView';
import { AdvisoryView } from './views/AdvisoryView';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  
  // Modal states
  const [dossierOpen, setDossierOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'principles' | 'terms' | 'security' | null>(null);
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactDeliverable | null>(null);
  const [adrModalOpen, setAdrModalOpen] = useState(false);
  const [selectedAdrId, setSelectedAdrId] = useState<string | undefined>(undefined);

  const handleOpenADR = (id?: string) => {
    setSelectedAdrId(id || 'adr-0042');
    setAdrModalOpen(true);
  };

  const handleScheduleBriefing = () => {
    setActiveTab('advisory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0e13] text-[#e3e1e9] flex flex-col font-sans selection:bg-[#7c3aed] selection:text-[#ede0ff]">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDossier={() => setDossierOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#0d0e13] min-h-screen flex-1">
        {activeTab === 'overview' && (
          <OverviewView
            setActiveTab={setActiveTab}
            onOpenDossier={() => setDossierOpen(true)}
            onScheduleBriefing={handleScheduleBriefing}
          />
        )}

        {activeTab === 'strategic-architecture' && (
          <StrategicArchitectureView
            setActiveTab={setActiveTab}
            onScheduleBriefing={handleScheduleBriefing}
          />
        )}

        {activeTab === 'case-studies' && (
          <CaseStudiesView
            setActiveTab={setActiveTab}
            onOpenDossier={() => setDossierOpen(true)}
            onOpenADRModal={handleOpenADR}
            onScheduleBriefing={handleScheduleBriefing}
          />
        )}

        {activeTab === 'tech-stack-and-governance' && (
          <TechStackView
            onOpenArtifact={(art) => setSelectedArtifact(art)}
            onOpenADRModal={handleOpenADR}
            onOpenDossier={() => setDossierOpen(true)}
          />
        )}

        {(activeTab === 'advisory' || activeTab === 'contact') && (
          <AdvisoryView />
        )}
      </main>

      {/* Persistent Enterprise Footer */}
      <Footer onOpenPolicy={(type) => setPolicyType(type)} />

      {/* Interactive Modals */}
      <DossierModal
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
        onScheduleBriefing={() => {
          setDossierOpen(false);
          handleScheduleBriefing();
        }}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      <ArtifactModal
        artifact={selectedArtifact}
        onClose={() => setSelectedArtifact(null)}
      />

      <ADRModal
        isOpen={adrModalOpen}
        onClose={() => setAdrModalOpen(false)}
        initialSelectedId={selectedAdrId}
      />
    </div>
  );
}
