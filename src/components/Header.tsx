import React from 'react';
import { ViewMode } from '../types';
import { Globe, LayoutTemplate, Code2, BookOpen, Download } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onDownloadXml: () => void;
  brandName: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onDownloadXml,
  brandName
}) => {
  return (
    <header className='bg-[#080808] text-white border-b border-neutral-800 sticky top-0 z-50 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4'>
        {/* Brand & Subtitle */}
        <div className='flex items-center space-x-3'>
          <div className='bg-[#D4AF37] text-neutral-950 p-2 rounded font-black text-xl tracking-wider shadow-inner flex items-center justify-center w-9 h-9 font-serif'>
            V
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <h1 className='text-base font-bold tracking-tight font-serif'>{brandName}</h1>
              <span className='bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold border border-[#D4AF37]/20'>
                Studio &amp; Preview
              </span>
            </div>
            <p className='text-[11px] text-[#999999]'>The World. In Every Perspective. • Professional Blogger Theme</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className='flex items-center space-x-1 bg-[#141414] p-1 rounded-lg border border-neutral-800'>
          <button
            onClick={() => onViewChange('preview')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-medium transition cursor-pointer ${
              currentView === 'preview'
                ? 'bg-[#D4AF37] text-neutral-950 font-bold shadow'
                : 'text-[#999999] hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Globe className='w-3.5 h-3.5' />
            Live Preview
          </button>

          <button
            onClick={() => onViewChange('customizer')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-medium transition cursor-pointer ${
              currentView === 'customizer'
                ? 'bg-[#D4AF37] text-neutral-950 font-bold shadow'
                : 'text-[#999999] hover:text-white hover:bg-neutral-800'
            }`}
          >
            <LayoutTemplate className='w-3.5 h-3.5' />
            Customizer
          </button>

          <button
            onClick={() => onViewChange('xml')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-medium transition cursor-pointer ${
              currentView === 'xml'
                ? 'bg-[#D4AF37] text-neutral-950 font-bold shadow'
                : 'text-[#999999] hover:text-white hover:bg-neutral-800'
            }`}
          >
            <Code2 className='w-3.5 h-3.5' />
            Blogger XML
          </button>

          <button
            onClick={() => onViewChange('docs')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-medium transition cursor-pointer ${
              currentView === 'docs'
                ? 'bg-[#D4AF37] text-neutral-950 font-bold shadow'
                : 'text-[#999999] hover:text-white hover:bg-neutral-800'
            }`}
          >
            <BookOpen className='w-3.5 h-3.5' />
            Installation &amp; Guide
          </button>
        </nav>

        {/* Quick Download Action */}
        <button
          onClick={onDownloadXml}
          className='flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#c29d2f] text-neutral-950 text-xs font-bold rounded shadow transition transform active:scale-95 cursor-pointer'
        >
          <Download className='w-3.5 h-3.5' />
          Download XML (.xml)
        </button>
      </div>
    </header>
  );
};
