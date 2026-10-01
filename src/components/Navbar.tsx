import { useState } from 'react';
import { ActiveTab } from '../types';
import { SafeImage } from './SafeImage';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDossier: () => void;
}

export const MONOGRAM_URL = "https://lh3.googleusercontent.com/aida/AEtjO1W_m5l5LTVi6oVO3YhiD88C-nPFxVJJ_EfHHlwHtJ10EsnIHi6NkYGKaiOzXRsI1h7o5DFDjZFCbhMyJQB1TwNmix2j-MaEEYoVaBftv0NvDJ4I-Rllq7A57Hf9766-dGq4JS2foXB5JffXHhbuOdxVJT3b7TTD4Emuf9TBXM0YnNd7WzI2gAGowwZ6j33dRsuiCPEsdcxsFFzLvuR0KOuuNL7pZ4418DQP3cUzjIEYdJ82DJPsS7mCA5U";
export const PORTRAIT_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBiUQTiz5ppD7Sq4XGbo8raUctUC6G4hAfLAkn-X0gu-uI8EL99B8dk7evOOSWhEUq7jM2tZzvbYTP0YSdjCsX5-mFlE8OqT6AX_N-sRu1CkINgkPgIi1TZZCwdFw82GUcDd8MUPjiowRpCZRFCQxvcFF46QaZxH08oW7F4XqoTWdzEcjgvI574cuXanqNCUWzhQim-ymxgwTuLQtAhIHQAyoWSAaCdyGmMmV1NV_tXDs5dVzYeQXPp";

export function Navbar({ activeTab, setActiveTab, onOpenDossier }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'strategic-architecture', label: 'Strategic Architecture' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'tech-stack-and-governance', label: 'Tech Stack & Governance' },
    { id: 'advisory', label: 'Advisory' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0d0e13]/85 backdrop-blur-xl border-b border-[#4a4455]/40 transition-all duration-200">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand identity */}
        <button 
          onClick={() => { setActiveTab('overview'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-4 shrink-0 text-left cursor-pointer group focus:outline-none"
        >
          <div className="h-9 w-9 rounded-lg bg-[#1e1f25] border border-[#4a4455]/40 p-1.5 flex items-center justify-center shrink-0 group-hover:border-[#7c3aed]/60 transition-colors">
            <SafeImage 
              src={MONOGRAM_URL} 
              alt="Apex IT Architecture Monogram" 
              className="h-full w-full object-contain"
              fallbackIcon="polyline"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[20px] text-[#e3e1e9] leading-tight tracking-tight font-semibold group-hover:text-[#d2bbff] transition-colors">
              Julian Vance
            </span>
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#d2bbff] font-mono">
              Principal Enterprise Architect
            </span>
          </div>
        </button>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-1.5 p-1 rounded-xl bg-[#0d0e13] border border-[#4a4455]/20">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3.5 py-1.5 transition-all text-[14px] cursor-pointer whitespace-nowrap rounded-lg ${
                  isActive
                    ? 'bg-[#7c3aed] text-[#ede0ff] font-semibold shadow-sm'
                    : 'text-[#ccc3d8] hover:text-[#e3e1e9] hover:bg-[#292a2f]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Advisory Availability Pill */}
          <button
            onClick={() => setActiveTab('advisory')}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1b21] border border-[#d2bbff]/30 shadow-[0_0_12px_rgba(124,58,237,0.25)] hover:border-[#d2bbff] transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span>
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#d2bbff] font-mono">
              Available for Advisory
            </span>
          </button>

          {/* Download Dossier CTA */}
          <button
            onClick={onOpenDossier}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c3aed] text-[#ede0ff] font-label-md text-[12px] uppercase tracking-wider hover:bg-[#d2bbff] hover:text-[#3f008e] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">description</span>
            <span className="hidden sm:inline">Download Dossier</span>
            <span className="sm:hidden">Dossier</span>
          </button>

          {/* Profile Avatar */}
          <div className="pl-2 border-l border-[#4a4455]/30 flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-[#d2bbff]/40 shadow-sm">
              <SafeImage
                src={PORTRAIT_URL}
                alt="Julian Vance Portrait"
                className="w-full h-full object-cover"
                fallbackIcon="person"
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#1e1f25] border border-[#4a4455]/30 text-[#e3e1e9] hover:bg-[#292a2f] transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[#4a4455]/40 bg-[#0d0e13]/98 px-6 py-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#7c3aed] text-[#ede0ff]'
                      : 'text-[#ccc3d8] hover:bg-[#1e1f25] hover:text-[#e3e1e9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#4a4455]/30 flex items-center justify-between">
              <span className="text-xs text-[#d2bbff] font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-ping"></span>
                Q3/Q4 Advisory Slots Open
              </span>
              <button
                onClick={() => {
                  onOpenDossier();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-mono uppercase text-[#eaddff] underline"
              >
                View Dossier PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
