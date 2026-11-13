import React from 'react';
import { ThemeSettings } from '../types';
import { TRANSLATIONS } from '../utils/translations';
import { ArrowLeft, Globe, Mail, Shield, FileText, Lock, Cookie, Copyright, MessageSquare, ListTree, CheckCircle2, ExternalLink } from 'lucide-react';

interface StaticPageViewProps {
  pageType: 'about' | 'contact' | 'privacy' | 'terms' | 'cookie' | 'dmca' | 'discussion' | 'sitemap';
  settings: ThemeSettings;
  selectedLang: string;
  onBack: () => void;
  onNavigate: (page: 'about' | 'contact' | 'privacy' | 'terms' | 'cookie' | 'dmca' | 'discussion' | 'sitemap') => void;
}

export const StaticPageView: React.FC<StaticPageViewProps> = ({
  pageType,
  settings,
  selectedLang,
  onBack,
  onNavigate
}) => {
  const t = TRANSLATIONS[selectedLang] || TRANSLATIONS.en;

  const renderHeader = () => (
    <div className='sticky top-0 z-40 bg-[#080808] text-white px-6 py-3 flex items-center justify-between border-b border-neutral-800 shadow-md'>
      <button
        onClick={onBack}
        className='flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition cursor-pointer'
      >
        <ArrowLeft className='w-4 h-4 text-[#D4AF37]' />
        <span>Back to Portal</span>
      </button>

      <div className='flex items-center space-x-4 text-xs font-bold uppercase tracking-wider text-neutral-300'>
        <span className='text-[#D4AF37]'>VISTQORA Global Bureau</span>
      </div>
    </div>
  );

  const renderFooter = () => (
    <footer className='bg-[#080808] text-white mt-20 pt-16 pb-8 border-t border-neutral-800 font-sans'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12'>
        <div className='space-y-3'>
          <span className='text-2xl font-black tracking-widest text-[#D4AF37]'>VISTQORA</span>
          <p className='text-xs text-neutral-400 leading-relaxed'>THE WORLD. IN EVERY PERSPECTIVE. Delivering uncompromising international journalism and geopolitical intelligence.</p>
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-wider mb-3 text-[#D4AF37]'>Global Bureaus</h4>
          <ul className='space-y-1.5 text-xs text-neutral-400'>
            <li><span>Washington / New York</span></li>
            <li><span>London / Geneva</span></li>
            <li><span>New Delhi / Mumbai</span></li>
            <li><span>Tokyo / Singapore</span></li>
          </ul>
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-wider mb-3 text-[#D4AF37]'>Information &amp; Legal</h4>
          <ul className='space-y-1.5 text-xs text-neutral-400'>
            <li><button onClick={() => onNavigate('about')} className='hover:text-[#D4AF37] transition'>About Us</button></li>
            <li><button onClick={() => onNavigate('contact')} className='hover:text-[#D4AF37] transition'>Contact Us</button></li>
            <li><button onClick={() => onNavigate('privacy')} className='hover:text-[#D4AF37] transition'>Privacy Policy</button></li>
            <li><button onClick={() => onNavigate('terms')} className='hover:text-[#D4AF37] transition'>Terms &amp; Conditions</button></li>
            <li><button onClick={() => onNavigate('cookie')} className='hover:text-[#D4AF37] transition'>Cookie Policy</button></li>
          </ul>
        </div>
        <div>
          <h4 className='text-xs font-bold uppercase tracking-wider mb-3 text-[#D4AF37]'>Compliance &amp; Syndicate</h4>
          <ul className='space-y-1.5 text-xs text-neutral-400'>
            <li><button onClick={() => onNavigate('dmca')} className='hover:text-[#D4AF37] transition'>DMCA / Copyright</button></li>
            <li><button onClick={() => onNavigate('discussion')} className='hover:text-[#D4AF37] transition'>Discussion Guidelines</button></li>
            <li><button onClick={() => onNavigate('sitemap')} className='hover:text-[#D4AF37] transition'>HTML Sitemap</button></li>
            <li><button onClick={onBack} className='text-[#D4AF37] font-bold hover:underline'>Back to Portal</button></li>
          </ul>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500 space-y-2'>
        <p className='flex flex-wrap justify-center gap-2 font-medium text-neutral-400'>
          <button onClick={() => onNavigate('about')} className='hover:text-[#D4AF37]'>About Us</button> | 
          <button onClick={() => onNavigate('contact')} className='hover:text-[#D4AF37]'>Contact Us</button> | 
          <button onClick={() => onNavigate('privacy')} className='hover:text-[#D4AF37]'>Privacy Policy</button> | 
          <button onClick={() => onNavigate('terms')} className='hover:text-[#D4AF37]'>Terms &amp; Conditions</button> | 
          <button onClick={() => onNavigate('cookie')} className='hover:text-[#D4AF37]'>Cookie Policy</button> | 
          <button onClick={() => onNavigate('dmca')} className='hover:text-[#D4AF37]'>DMCA</button> | 
          <button onClick={() => onNavigate('discussion')} className='hover:text-[#D4AF37]'>Discussion</button> | 
          <button onClick={() => onNavigate('sitemap')} className='hover:text-[#D4AF37]'>Sitemap</button> | 
          <button onClick={onBack} className='text-[#D4AF37] font-bold'>Back to Portal</button>
        </p>
        <p>&#169; 2026 VISTQORA Media Group. Official Blogger XML Theme.</p>
      </div>
    </footer>
  );

  const renderContent = () => {
    switch (pageType) {
      case 'about':
        return (
          <div className='space-y-8'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px]'>Institutional Profile</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>About VISTQORA</h1>
              <p className='text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-serif leading-relaxed'>
                THE WORLD. IN EVERY PERSPECTIVE. VISTQORA is an independent international news and geopolitical intelligence publishing platform.
              </p>
            </div>

            <div className='space-y-6 text-neutral-800 dark:text-neutral-200 font-serif leading-relaxed text-base'>
              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3 font-sans'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
                  <Globe className='w-4 h-4' /> Our Mission
                </h3>
                <p className='text-sm text-neutral-700 dark:text-neutral-300'>
                  To deliver rigorous, uncompromised, and multifaceted international journalism that illuminates global affairs without ideological distortion or commercial interference.
                </p>
              </div>

              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3 font-sans'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4' /> Our Vision
                </h3>
                <p className='text-sm text-neutral-700 dark:text-neutral-300'>
                  To serve as a trusted global wire service connecting diplomats, analysts, policymakers, and discerning readers across 11 major world languages with verified intelligence.
                </p>
              </div>

              <h2 className='text-2xl font-bold font-serif pt-4 text-neutral-900 dark:text-white'>Our Editorial Values</h2>
              <p>
                VISTQORA operates under strict journalistic canons. We prioritize primary source verification, cross-border corroboration, and contextual depth over sensationalism or speed-driven speculation.
              </p>

              <h3 className='text-xl font-bold font-serif pt-2 text-neutral-900 dark:text-white'>Commitment to Accuracy &amp; Editorial Independence</h3>
              <p>
                Every dispatch published by VISTQORA undergoes rigorous multi-tier editorial review. Our newsrooms maintain absolute editorial independence, free from government or corporate censorship. Any factual errors identified are promptly corrected with transparent update notices.
              </p>

              <h3 className='text-xl font-bold font-serif pt-2 text-neutral-900 dark:text-white'>Transparency, Accountability &amp; Reader Trust</h3>
              <p>
                We believe trust is earned through uncompromising transparency. Our sourcing is clearly cited, financial relationships with advertisers are strictly segregated from newsrooms, and reader feedback is actively welcomed through our public discussion channels.
              </p>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className='space-y-8 font-sans'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px]'>Global Desk</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>Contact VISTQORA</h1>
              <p className='text-base text-neutral-600 dark:text-neutral-300'>
                Connect with our international bureaus, editorial desk, or compliance officers.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>General Enquiries &amp; Bureau Info</h3>
                <p className='text-xs text-neutral-400'>For institutional inquiries and general correspondence.</p>
                <p className='text-xs font-mono font-bold text-neutral-900 dark:text-white'>contact@vistqora-wire.org</p>
              </div>

              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>Editorial Feedback &amp; Corrections</h3>
                <p className='text-xs text-neutral-400'>To submit factual corrections or editorial commentary.</p>
                <p className='text-xs font-mono font-bold text-neutral-900 dark:text-white'>editor@vistqora-wire.org</p>
              </div>

              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>Secure News Tips &amp; Leaks</h3>
                <p className='text-xs text-neutral-400'>Submit confidential whistle-blower tips and documents.</p>
                <p className='text-xs font-mono font-bold text-neutral-900 dark:text-white'>tips@vistqora-wire.org</p>
              </div>

              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>Copyright / DMCA Complaints</h3>
                <p className='text-xs text-neutral-400'>For formal takedown requests and IP notices.</p>
                <p className='text-xs font-mono font-bold text-neutral-900 dark:text-white'>dmca@vistqora-wire.org</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Your message has been securely dispatched to the VISTQORA editorial desk.'); }} className='bg-neutral-100 dark:bg-[#151515] p-8 rounded-2xl space-y-4 border border-neutral-200 dark:border-neutral-800 shadow-sm'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>Secure Dispatch Form</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input type='text' placeholder='Your Name / Title' className='px-4 py-2.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37]' required />
                <input type='email' placeholder='Secure Email Address' className='px-4 py-2.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37]' required />
              </div>
              <select className='w-full px-4 py-2.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37] cursor-pointer'>
                <option>General Enquiries</option>
                <option>Editorial Feedback</option>
                <option>News Tips</option>
                <option>Copyright / DMCA Complaint</option>
                <option>Advertising &amp; Business Enquiries</option>
                <option>Privacy Request</option>
              </select>
              <textarea placeholder='Enter your message or inquiry...' rows={5} className='w-full px-4 py-2.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37]' required />
              <button type='submit' className='px-6 py-3 bg-[#D4AF37] text-neutral-950 font-bold text-xs rounded shadow hover:opacity-95 transition cursor-pointer flex items-center gap-2'>
                <Mail className='w-4 h-4' /> Dispatch Message
              </button>
            </form>
          </div>
        );

      case 'privacy':
        return (
          <div className='space-y-6 font-serif leading-relaxed text-neutral-800 dark:text-neutral-200'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px] font-sans'>Legal Framework</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>Privacy Policy</h1>
              <p className='text-sm text-neutral-500 font-sans'>Last Updated: November 13, 2026</p>
            </div>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>1. Information Collected</h2>
            <p>
              VISTQORA collects minimal technical data necessary to deliver global news dispatches securely across international networks. This includes standard server logs, browser type, preferred language, and approximate geographic routing.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>2. Personal Information Voluntarily Provided</h2>
            <p>
              When you subscribe to the VISTQORA Global Briefing or post comments in our discussions, you voluntarily provide your email address and display name. This data is strictly used for dispatch delivery and community moderation.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>3. Cookies and Analytics</h2>
            <p>
              We utilize essential cookies for session management and dark mode preferences. Third-party analytics services may measure readership trends anonymously.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>4. Advertising Partners &amp; Adsterra</h2>
            <p>
              VISTQORA integrates advertising formats provided by Adsterra and other monetization partners. Third-party advertising technologies may use cookies, web beacons, and unique identifiers to serve relevant ads. These third-party networks operate under their own respective privacy policies.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>5. Data Security &amp; Children&apos;s Privacy</h2>
            <p>
              We implement industry-standard encryption to protect user data in transit. VISTQORA does not knowingly collect personal data from children under the age of 13.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>6. Contact for Privacy Requests</h2>
            <p className='font-sans text-sm'>
              For inquiries regarding data privacy, removal requests, or CCPA/GDPR compliance, contact our privacy officer at <strong className='text-[#D4AF37]'>privacy@vistqora-wire.org</strong>.
            </p>
          </div>
        );

      case 'terms':
        return (
          <div className='space-y-6 font-serif leading-relaxed text-neutral-800 dark:text-neutral-200'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px] font-sans'>Legal Terms</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>Terms &amp; Conditions</h1>
              <p className='text-sm text-neutral-500 font-sans'>Effective Date: November 13, 2026</p>
            </div>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>1. Website Usage Rules &amp; Acceptable Use</h2>
            <p>
              By accessing VISTQORA, you agree to abide by all international copyright laws and acceptable use standards. You shall not attempt to compromise website security, scrape content unlawfully, or disrupt news wire feeds.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>2. Intellectual Property &amp; Copyright Ownership</h2>
            <p>
              All articles, wire dispatches, typography, and logos displayed on VISTQORA are the intellectual property of VISTQORA Media Group or licensed syndicate partners. Unauthorized commercial republishing is strictly prohibited.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>3. User Comments &amp; Submissions</h2>
            <p>
              Readers may submit comments subject to our community standards. VISTQORA reserves the right to moderate, edit, or remove any submission containing spam, hate speech, or unverified claims.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>4. Limitation of Liability</h2>
            <p>
              VISTQORA provides geopolitical news and analysis on an &quot;as-is&quot; basis. We disclaim liability for any financial or diplomatic actions taken based on published dispatches.
            </p>
          </div>
        );

      case 'cookie':
        return (
          <div className='space-y-6 font-serif leading-relaxed text-neutral-800 dark:text-neutral-200'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px] font-sans'>Cookie Notice</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>Cookie Policy</h1>
              <p className='text-sm text-neutral-500 font-sans'>Understanding how VISTQORA uses cookies and storage.</p>
            </div>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when visiting websites. They help maintain user preferences and secure session integrity.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>2. Categories of Cookies Used</h2>
            <ul className='list-disc list-inside space-y-2 font-sans text-sm text-neutral-700 dark:text-neutral-300'>
              <li><strong>Essential Cookies:</strong> Required for core navigation and dark mode settings.</li>
              <li><strong>Preference Cookies:</strong> Store language selection and bookmark states.</li>
              <li><strong>Advertising Cookies:</strong> Deployed by Adsterra and monetization partners to deliver relevant sponsored content.</li>
            </ul>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>3. Managing Browser Controls</h2>
            <p>
              You can configure your browser settings to refuse or delete cookies at any time. Note that disabling cookies may affect certain interactive elements such as bookmarks and theme persistence.
            </p>
          </div>
        );

      case 'dmca':
        return (
          <div className='space-y-6 font-serif leading-relaxed text-neutral-800 dark:text-neutral-200'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px] font-sans'>Copyright Compliance</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>DMCA / Copyright Policy</h1>
              <p className='text-sm text-neutral-500 font-sans'>VISTQORA respect for intellectual property rights.</p>
            </div>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>1. Copyright Protection</h2>
            <p>
              VISTQORA respects the intellectual property rights of others. If you believe your copyrighted work has been published on VISTQORA without authorization, please submit a formal notification.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>2. Required Takedown Information</h2>
            <p>Your infringement notice must include:</p>
            <ul className='list-disc list-inside space-y-2 font-sans text-sm text-neutral-700 dark:text-neutral-300'>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Exact URL or location of the allegedly infringing material on VISTQORA.</li>
              <li>Your contact information (name, email address, telephone).</li>
              <li>A statement of good-faith belief that the disputed use is not authorized.</li>
              <li>A physical or electronic signature of the copyright owner or authorized agent.</li>
            </ul>

            <p className='font-sans text-sm pt-4'>
              Send formal DMCA notices to <strong className='text-[#D4AF37]'>dmca@vistqora-wire.org</strong>.
            </p>
          </div>
        );

      case 'discussion':
        return (
          <div className='space-y-6 font-serif leading-relaxed text-neutral-800 dark:text-neutral-200'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px] font-sans'>Community Standards</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>Discussion &amp; Community Guidelines</h1>
              <p className='text-sm text-neutral-500 font-sans'>Fostering respectful, intelligent international discourse.</p>
            </div>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>1. Respectful Communication</h2>
            <p>
              VISTQORA discussions invite diplomats, analysts, and global citizens to debate geopolitical developments. All participants must maintain professional decorum.
            </p>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>2. Prohibited Conduct</h2>
            <ul className='list-disc list-inside space-y-2 font-sans text-sm text-neutral-700 dark:text-neutral-300'>
              <li>No hate speech, bigotry, or targeted harassment.</li>
              <li>No commercial spam or automated bot postings.</li>
              <li>No intentionally misleading information or unverified propaganda.</li>
              <li>No illegal content or copyright violations.</li>
            </ul>

            <h2 className='text-2xl font-bold font-serif text-neutral-900 dark:text-white pt-2'>3. Moderation &amp; Reporting</h2>
            <p>
              Our moderation team reviews flagged comments. Readers can report inappropriate remarks using the report button on any article discussion thread.
            </p>
          </div>
        );

      case 'sitemap':
        return (
          <div className='space-y-6 font-sans text-neutral-800 dark:text-neutral-200'>
            <div className='space-y-3 border-b border-neutral-200 dark:border-neutral-800 pb-6'>
              <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px]'>Directory</span>
              <h1 className='text-3xl sm:text-5xl font-extrabold font-serif text-neutral-900 dark:text-white'>HTML Sitemap</h1>
              <p className='text-sm text-neutral-500'>Complete directory of VISTQORA sections, static pages, and wire dispatches.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-3'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>Primary Portal</h3>
                <ul className='space-y-2 text-xs font-semibold'>
                  <li><button onClick={onBack} className='hover:text-[#D4AF37] transition'>→ VISTQORA Homepage</button></li>
                  <li><button onClick={() => onNavigate('about')} className='hover:text-[#D4AF37] transition'>→ About Us Institutional Profile</button></li>
                  <li><button onClick={() => onNavigate('contact')} className='hover:text-[#D4AF37] transition'>→ Contact Bureau &amp; Desk</button></li>
                  <li><button onClick={() => onNavigate('discussion')} className='hover:text-[#D4AF37] transition'>→ Community Discussion Guidelines</button></li>
                </ul>
              </div>

              <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-3'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>Legal &amp; Compliance</h3>
                <ul className='space-y-2 text-xs font-semibold'>
                  <li><button onClick={() => onNavigate('privacy')} className='hover:text-[#D4AF37] transition'>→ Privacy Policy</button></li>
                  <li><button onClick={() => onNavigate('terms')} className='hover:text-[#D4AF37] transition'>→ Terms &amp; Conditions</button></li>
                  <li><button onClick={() => onNavigate('cookie')} className='hover:text-[#D4AF37] transition'>→ Cookie Policy</button></li>
                  <li><button onClick={() => onNavigate('dmca')} className='hover:text-[#D4AF37] transition'>→ DMCA / Copyright Policy</button></li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-white dark:bg-[#080808] text-neutral-900 dark:text-[#F5F5F5] font-sans transition-colors duration-200 flex flex-col justify-between'>
      <div>
        {renderHeader()}
        <main className='max-w-4xl mx-auto px-4 py-12'>
          {renderContent()}
        </main>
      </div>
      {renderFooter()}
    </div>
  );
};
