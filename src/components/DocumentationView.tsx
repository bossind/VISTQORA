import React from 'react';
import { BookOpen, CheckCircle2, Upload, Settings, ShieldCheck } from 'lucide-react';

export const DocumentationView: React.FC = () => {
  return (
    <div className='max-w-4xl mx-auto space-y-8 bg-white dark:bg-[#141414] p-6 sm:p-10 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-sans'>
      <div className='border-b border-neutral-200 dark:border-neutral-800 pb-4'>
        <h2 className='text-2xl font-bold font-serif flex items-center gap-2'>
          <BookOpen className='w-6 h-6 text-[#D4AF37]' />
          Blogger Installation &amp; Deployment Guide
        </h2>
        <p className='text-xs text-[#999999]'>Step-by-step instructions for uploading and configuring your VISTQORA International News Theme on Google Blogger.</p>
      </div>

      <div className='space-y-8'>
        
        <div className='flex items-start space-x-4 rtl:space-x-reverse'>
          <div className='w-8 h-8 rounded-full bg-[#D4AF37] text-neutral-950 font-bold flex items-center justify-center shrink-0 text-sm'>1</div>
          <div className='space-y-1.5'>
            <h3 className='font-bold text-sm flex items-center gap-2'>
              <Upload className='w-4 h-4 text-[#D4AF37]' />
              Download &amp; Access Blogger Dashboard
            </h3>
            <p className='text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed'>
              Click the <strong className='text-[#D4AF37]'>Download Theme (.xml)</strong> button in the studio header. Log in to your <a href='https://www.blogger.com' target='_blank' rel='noreferrer' className='text-[#D4AF37] underline font-semibold'>Blogger Dashboard</a> and select your publication.
            </p>
          </div>
        </div>

        <div className='flex items-start space-x-4 rtl:space-x-reverse'>
          <div className='w-8 h-8 rounded-full bg-[#D4AF37] text-neutral-950 font-bold flex items-center justify-center shrink-0 text-sm'>2</div>
          <div className='space-y-1.5'>
            <h3 className='font-bold text-sm flex items-center gap-2'>
              <Settings className='w-4 h-4 text-[#D4AF37]' />
              Edit Theme HTML
            </h3>
            <p className='text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed'>
              In your Blogger Dashboard, navigate to <strong className='text-neutral-950 dark:text-white'>Theme</strong>. Click the dropdown arrow next to Customize, select <strong className='text-neutral-950 dark:text-white'>Edit HTML</strong>. Delete the existing code entirely, paste the VISTQORA XML code, and click Save.
            </p>
          </div>
        </div>

        <div className='flex items-start space-x-4 rtl:space-x-reverse'>
          <div className='w-8 h-8 rounded-full bg-[#D4AF37] text-neutral-950 font-bold flex items-center justify-center shrink-0 text-sm'>3</div>
          <div className='space-y-1.5'>
            <h3 className='font-bold text-sm flex items-center gap-2'>
              <ShieldCheck className='w-4 h-4 text-[#D4AF37]' />
              Configure Layout &amp; Widgets
            </h3>
            <p className='text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed'>
              Go to <strong className='text-neutral-950 dark:text-white'>Layout</strong> in Blogger to arrange sidebar widgets, configure AdSense publisher IDs, and verify menu links.
            </p>
          </div>
        </div>

      </div>

      <div className='bg-neutral-50 dark:bg-[#080808] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-4'>
        <h3 className='font-bold text-xs uppercase tracking-wider text-[#D4AF37]'>Theme Acceptance Checklist</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700 dark:text-neutral-300'>
          <div className='flex items-center gap-2'><CheckCircle2 className='w-4 h-4 text-[#D4AF37]' /> Valid XML Namespaces</div>
          <div className='flex items-center gap-2'><CheckCircle2 className='w-4 h-4 text-[#D4AF37]' /> Responsive Mobile View</div>
          <div className='flex items-center gap-2'><CheckCircle2 className='w-4 h-4 text-[#D4AF37]' /> Dark &amp; Light Mode Toggle</div>
          <div className='flex items-center gap-2'><CheckCircle2 className='w-4 h-4 text-[#D4AF37]' /> Multilingual &amp; RTL Support</div>
          <div className='flex items-center gap-2'><CheckCircle2 className='w-4 h-4 text-[#D4AF37]' /> Schema.org NewsArticle JSON-LD</div>
          <div className='flex items-center gap-2'><CheckCircle2 className='w-4 h-4 text-[#D4AF37]' /> AdSense Ready Placements</div>
        </div>
      </div>
    </div>
  );
};
