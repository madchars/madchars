import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: string;
  fallbackTitle?: string;
}

export function SafeImage({ src, alt, className = '', fallbackIcon = 'domain', fallbackTitle }: SafeImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1e1f25] to-[#121318] border border-[#4a4455]/40 text-[#958da1] p-4 text-center select-none overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <span className="material-symbols-outlined text-3xl mb-1 text-[#d2bbff] relative z-10">{fallbackIcon}</span>
        {fallbackTitle && (
          <span className="text-xs font-mono tracking-wider text-[#ccc3d8] uppercase relative z-10">{fallbackTitle}</span>
        )}
        <span className="text-[10px] text-[#958da1] mt-0.5 relative z-10">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#1e1f25] animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
