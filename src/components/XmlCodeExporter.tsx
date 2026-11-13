import React, { useState } from 'react';
import { ThemeSettings } from '../types';
import { generateBloggerXml } from '../utils/bloggerXmlGenerator';
import { Copy, Download, Check, Code2, ShieldAlert } from 'lucide-react';

interface XmlCodeExporterProps {
  settings: ThemeSettings;
  onDownload: () => void;
}

export const XmlCodeExporter: React.FC<XmlCodeExporterProps> = ({
  settings,
  onDownload
}) => {
  const [copied, setCopied] = useState(false);
  const xmlContent = generateBloggerXml(settings);

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='max-w-5xl mx-auto space-y-6 bg-white dark:bg-[#141414] p-6 sm:p-10 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4'>
        <div>
          <h2 className='text-2xl font-bold font-serif flex items-center gap-2'>
            <Code2 className='w-6 h-6 text-[#D4AF37]' />
            Blogger XML Code Exporter
          </h2>
          <p className='text-xs text-[#999999]'>Production-ready, valid Blogger XML theme reflecting your VISTQORA brand settings.</p>
        </div>

        <div className='flex items-center space-x-3'>
          <button
            onClick={handleCopy}
            className='flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold rounded transition cursor-pointer'
          >
            {copied ? <Check className='w-4 h-4 text-green-500' /> : <Copy className='w-4 h-4' />}
            {copied ? 'Copied to Clipboard' : 'Copy XML Code'}
          </button>

          <button
            onClick={onDownload}
            className='flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#c29d2f] text-neutral-950 text-xs font-bold rounded shadow transition cursor-pointer'
          >
            <Download className='w-4 h-4' />
            Download Theme (.xml)
          </button>
        </div>
      </div>

      <div className='bg-neutral-900/40 border border-neutral-800 p-4 rounded-xl flex items-start gap-3 text-xs text-neutral-300'>
        <ShieldAlert className='w-5 h-5 shrink-0 text-[#D4AF37] mt-0.5' />
        <div>
          <span className='font-bold block mb-1 text-white'>Blogger Compatibility Note:</span>
          This XML file includes all required Blogger namespaces (`xmlns:b`, `xmlns:expr`, `xmlns:data`), layout section widgets, custom CSS skin variables, Schema.org JSON-LD structured data, and responsive AdSense placeholders.
        </div>
      </div>

      <div className='relative rounded-xl overflow-hidden border border-neutral-800 bg-[#080808] text-neutral-200 font-mono text-xs'>
        <div className='bg-[#141414] px-4 py-2 border-b border-neutral-800 flex items-center justify-between text-[10px] text-[#999999]'>
          <span>vistqora-master-theme.xml</span>
          <span>{xmlContent.split('\n').length} Lines</span>
        </div>
        <pre className='p-4 overflow-x-auto max-h-[500px] leading-relaxed'>
          <code>{xmlContent}</code>
        </pre>
      </div>
    </div>
  );
};
