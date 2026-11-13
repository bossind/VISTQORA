import React, { useState, useEffect } from 'react';
import { Article, DeviceMode, PageType, ThemeSettings } from '../types';
import { CATEGORIES, LANGUAGES } from '../data/mockNews';
import { getLocalizedArticles } from '../utils/localizedArticles';
import { FullArticleView } from './FullArticleView';
import { 
  Monitor, Tablet, Smartphone, Search, Moon, Sun, Globe, 
  Flame, Clock, User, ArrowRight, Bookmark, Send, ShieldCheck, 
  MapPin, Mail, Phone, ExternalLink, Menu, X, PlayCircle, Image as ImageIcon
} from 'lucide-react';

interface LivePreviewProps {
  settings: ThemeSettings;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const LivePreview: React.FC<LivePreviewProps> = ({
  settings,
  articles: initialArticles,
  onSelectArticle
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLang, setSelectedLang] = useState<string>(settings.defaultLanguage);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(settings.enableDarkMode);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'news' | 'gallery' | 'video'>('news');
  const [selectedPreviewArticle, setSelectedPreviewArticle] = useState<Article | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [selectedPreviewArticle, currentPage]);

  const currentLangObj = LANGUAGES.find(l => l.code === selectedLang) || LANGUAGES[0];
  const isRtl = currentLangObj.dir === 'rtl' || settings.enableRtl;

  const articles = getLocalizedArticles(selectedLang);

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(a => a.categorySlug === activeCategory);

  const breakingArticle = articles.find(a => a.isBreaking) || articles[0];
  const featuredHero = articles.find(a => a.isFeatured) || articles[0];
  const secondaryHeroCards = articles.filter(a => !a.isFeatured).slice(0, 2);
  const latestGridArticles = articles.slice(0, 6);
  const worldNewsArticles = articles.filter(a => a.category === 'World' || a.categorySlug === 'world' || a.category === 'विश्व' || a.category === 'العالم' || a.category === 'Mundo' || a.category === 'Monde' || a.category === 'Welt' || a.category === '世界');
  const indiaNewsArticles = articles.filter(a => a.category === 'India' || a.categorySlug === 'india' || a.category === 'भारत' || a.category === 'الهند' || a.category === 'Indien' || a.category === '印度' || a.category === 'インド');
  const businessArticles = articles.filter(a => a.category.includes('Business') || a.category.includes('Technology') || a.category.includes('व्यापार') || a.category.includes('أعمال') || a.category.includes('Negocios') || a.category.includes('Économie') || a.category.includes('Wirtschaft') || a.category.includes('商业') || a.category.includes('ビジネス'));
  const trendingArticles = articles.filter(a => a.isTrending);

  const containerWidthClass = 
    deviceMode === 'mobile' ? 'max-w-[380px] mx-auto shadow-2xl border-x border-neutral-700' : 
    deviceMode === 'tablet' ? 'max-w-[768px] mx-auto shadow-2xl' : 'max-w-full';

  const renderAdBoxReact = (title: string, code?: string) => (
    <div className='my-6 p-4 rounded-xl border border-amber-500/40 bg-white dark:bg-[#0D0D0D] text-neutral-900 dark:text-neutral-100 shadow-sm'>
      <div className='flex justify-between items-center text-[9px] font-extrabold uppercase tracking-[0.15em] text-neutral-500 mb-2'>
        <span>Advertisement — {title}</span>
        <span className='bg-[#D4AF37] text-neutral-950 px-1.5 py-0.5 rounded text-[8px] font-black'>AD</span>
      </div>
      {code && code.trim().length > 0 ? (
        <div dangerouslySetInnerHTML={{ __html: code }} />
      ) : (
        <div className='py-4 px-2 text-center'>
          <p className='text-xs font-semibold text-neutral-400 dark:text-neutral-500'>Adsterra Banner / Native Slot ({title})</p>
          <p className='text-[10px] text-neutral-500 dark:text-neutral-600 mt-0.5'>Bordered placeholder active. Insert Adsterra HTML/JS code in Theme Studio.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className='space-y-6'>
      {/* Studio Viewport & Page Control Bar */}
      <div className='bg-[#151515] text-white p-2.5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 border border-neutral-800 shadow-sm'>
        <div className='flex items-center space-x-2 text-xs'>
          <span className='font-bold uppercase tracking-wider text-neutral-400'>Viewport:</span>
          <div className='flex bg-[#080808] p-0.5 rounded border border-neutral-800'>
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded transition cursor-pointer text-xs ${deviceMode === 'desktop' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              <Monitor className='w-3 h-3' /> Desktop
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded transition cursor-pointer text-xs ${deviceMode === 'tablet' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              <Tablet className='w-3 h-3' /> Tablet (768px)
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded transition cursor-pointer text-xs ${deviceMode === 'mobile' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              <Smartphone className='w-3 h-3' /> Mobile (380px)
            </button>
          </div>
        </div>

        <div className='flex items-center space-x-2 text-xs'>
          <span className='font-bold uppercase tracking-wider text-neutral-400'>Page:</span>
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value as PageType)}
            className='bg-[#080808] text-white px-3 py-1.5 rounded border border-neutral-800 focus:outline-none focus:border-[#D4AF37] cursor-pointer text-xs'
          >
            <option value='home'>Homepage Portal</option>
            <option value='category'>Category Wire</option>
            <option value='article'>Article View</option>
            <option value='about'>About Us</option>
            <option value='contact'>Contact Bureau</option>
            <option value='privacy'>Privacy Policy</option>
            <option value='editorial'>Editorial Policy</option>
            <option value='404'>404 Error Page</option>
          </select>
        </div>
      </div>

      {/* Live Interactive Portal Preview Wrapper */}
      <div className='flex justify-center transition-all duration-300'>
        <div className={`w-full ${containerWidthClass} transition-all duration-300 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800 ${isDarkMode ? 'dark' : ''}`}>
          
          {selectedPreviewArticle ? (
            <FullArticleView
              article={selectedPreviewArticle}
              settings={settings}
              selectedLang={selectedLang}
              onBack={() => setSelectedPreviewArticle(null)}
              onSelectArticle={setSelectedPreviewArticle}
              allArticles={articles}
            />
          ) : (
            <div className='bg-white dark:bg-[#080808] text-neutral-900 dark:text-[#F5F5F5] min-h-screen font-sans transition-colors duration-200' dir={isRtl ? 'rtl' : 'ltr'}>
            
            {/* A. PREMIUM HEADER: Slim Top Information Bar */}
            <div className='bg-[#080808] text-neutral-400 text-[11px] py-1.5 px-4 border-b border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-2'>
              <div className='flex items-center space-x-4 rtl:space-x-reverse font-medium'>
                <span className='flex items-center gap-1.5'><Clock className='w-3 h-3 text-[#D4AF37]' /> Thursday, Nov 13, 2026</span>
                <span className='hidden sm:inline opacity-30'>|</span>
                <span className='hidden sm:flex items-center gap-1.5'><Globe className='w-3 h-3 text-[#D4AF37]' /> Global Bureau</span>
              </div>
              
              <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                <select 
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className='bg-[#151515] text-neutral-200 text-[11px] px-2 py-0.5 rounded border border-neutral-800 focus:outline-none cursor-pointer'
                >
                  {LANGUAGES.map(l => (
                    <option key={l.code} value={l.code}>{l.name}</option>
                  ))}
                </select>

                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className='hover:text-[#D4AF37] transition cursor-pointer p-1'
                  title='Toggle Dark/Light'
                >
                  {isDarkMode ? <Sun className='w-3.5 h-3.5 text-amber-400' /> : <Moon className='w-3.5 h-3.5' />}
                </button>
              </div>
            </div>

            {/* VISTQORA Wordmark & Compact Navigation */}
            <header className='sticky top-0 z-40 bg-white dark:bg-[#080808] border-b border-neutral-200 dark:border-neutral-800'>
              <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
                <div className='flex flex-col cursor-pointer' onClick={() => setCurrentPage('home')}>
                  <span className='text-2xl sm:text-3xl font-black tracking-widest font-sans text-[#D4AF37]'>VISTQORA</span>
                  <span className='text-[8px] uppercase tracking-[0.35em] text-neutral-500 font-bold'>THE WORLD. IN EVERY PERSPECTIVE.</span>
                </div>

                {/* Compact Navigation Menu */}
                <nav className='hidden xl:flex items-center space-x-5 text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 rtl:space-x-reverse'>
                  <button onClick={() => { setCurrentPage('home'); setActiveCategory('all'); }} className='hover:text-[#D4AF37] transition cursor-pointer'>Home</button>
                  {CATEGORIES.slice(0, 8).map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => { setCurrentPage('home'); setActiveCategory(cat.slug); }}
                      className={`hover:text-[#D4AF37] transition cursor-pointer ${activeCategory === cat.slug ? 'text-[#D4AF37] underline' : ''}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </nav>

                <div className='flex items-center space-x-3'>
                  <button 
                    onClick={() => setShowSearchModal(true)}
                    className='p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition cursor-pointer'
                  >
                    <Search className='w-4 h-4' />
                  </button>
                  <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='xl:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition cursor-pointer'
                  >
                    {mobileMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
                  </button>
                </div>
              </div>

              {/* Mobile Drawer */}
              {mobileMenuOpen && (
                <div className='xl:hidden bg-[#151515] border-t border-neutral-800 px-4 py-4 space-y-2 text-xs'>
                  <button onClick={() => { setCurrentPage('home'); setActiveCategory('all'); setMobileMenuOpen(false); }} className='block w-full text-left py-2 font-bold hover:text-[#D4AF37]'>Home</button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => { setCurrentPage('home'); setActiveCategory(cat.slug); setMobileMenuOpen(false); }}
                      className='block w-full text-left py-1.5 text-neutral-300 hover:text-[#D4AF37]'
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </header>

            {/* B. BREAKING NEWS TICKER */}
            {settings.enableBreakingTicker && breakingArticle && (
              <div className='bg-[#151515] text-white py-2 px-4 text-xs font-medium border-b border-neutral-800 flex items-center gap-3 overflow-hidden'>
                <span className='bg-[#D4AF37] text-neutral-950 px-2.5 py-0.5 rounded font-black uppercase tracking-wider text-[10px] shrink-0 animate-pulse flex items-center gap-1'>
                  <Flame className='w-3 h-3' /> BREAKING
                </span>
                <div className='truncate cursor-pointer hover:text-[#D4AF37]' onClick={() => onSelectArticle(breakingArticle)}>
                  <span>{breakingArticle.title}</span>
                </div>
              </div>
            )}

            {/* Page Router Switch */}
            {currentPage === 'home' && (
              <main className='max-w-7xl mx-auto px-4 py-8 space-y-12'>
                
                {/* Horizontal Category Navigation for Mobile & Desktop */}
                <div className='flex items-center space-x-2 rtl:space-x-reverse overflow-x-auto pb-2 border-b border-neutral-200 dark:border-neutral-800 text-xs font-bold uppercase tracking-wider'>
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === 'all' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
                  >
                    All Wire
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === cat.slug ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Homepage Ad Placement #1: Immediately below Category Navigation */}
                {renderAdBoxReact('Homepage Top Banner (Below Category Nav)', settings.ads?.bannerDesktopCode)}

                {/* C. EDITORIAL HERO SECTION (65% Left + 35% Right Stacked) */}
                {activeCategory === 'all' && (
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    
                    {/* Left 65%: One Large Featured Story */}
                    {featuredHero && (
                      <div 
                        onClick={() => onSelectArticle(featuredHero)}
                        className='lg:col-span-2 group bg-white dark:bg-[#151515] rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm cursor-pointer flex flex-col justify-between'
                      >
                        <div className='relative h-[380px] sm:h-[460px] overflow-hidden'>
                          <img src={featuredHero.image} alt={featuredHero.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-700' />
                          <span className='absolute top-4 left-4 bg-[#D4AF37] text-neutral-950 text-xs font-black uppercase tracking-widest px-3 py-1 rounded'>
                            {featuredHero.category}
                          </span>
                        </div>
                        <div className='p-6 sm:p-8 space-y-3'>
                          <div className='flex items-center gap-3 text-xs text-neutral-400'>
                            <span className='flex items-center gap-1'><User className='w-3.5 h-3.5 text-[#D4AF37]' /> {featuredHero.author.name}</span>
                            <span>•</span>
                            <span className='flex items-center gap-1'><Clock className='w-3.5 h-3.5 text-[#D4AF37]' /> {featuredHero.publishedAt}</span>
                          </div>
                          <h2 className='text-2xl sm:text-3xl font-bold font-serif leading-tight text-neutral-900 dark:text-white group-hover:text-[#D4AF37] transition'>
                            {featuredHero.title}
                          </h2>
                          <p className='text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed'>
                            {featuredHero.subheadline}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Right 35%: Two Smaller Featured Stories Stacked */}
                    <div className='space-y-6 flex flex-col justify-between'>
                      {secondaryHeroCards.map(art => (
                        <div 
                          key={art.id}
                          onClick={() => onSelectArticle(art)}
                          className='group bg-white dark:bg-[#151515] rounded-lg p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm cursor-pointer space-y-3 hover:border-[#D4AF37] transition flex-1 flex flex-col justify-between'
                        >
                          <div>
                            <div className='relative h-40 overflow-hidden rounded mb-3'>
                              <img src={art.image} alt={art.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                              <span className='absolute top-2 left-2 bg-neutral-950/80 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded'>
                                {art.category}
                              </span>
                            </div>
                            <h3 className='text-base font-bold font-serif line-clamp-2 group-hover:text-[#D4AF37] transition text-neutral-900 dark:text-white'>
                              {art.title}
                            </h3>
                          </div>
                          <span className='text-[10px] text-neutral-400 flex items-center gap-1'><Clock className='w-3 h-3 text-[#D4AF37]' /> {art.publishedAt}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

                {/* Homepage Ad Placement #2: Between Featured News and the next news section */}
                {renderAdBoxReact('Homepage Featured Banner (Above News Feed)', settings.ads?.bannerDesktopCode)}

                {/* D. LATEST NEWS GRID (Three-column desktop news grid) */}
                <div className='space-y-6'>
                  <div className='flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3'>
                    <h3 className='text-lg font-bold font-serif flex items-center gap-2 text-neutral-900 dark:text-white'>
                      <span className='w-2.5 h-2.5 bg-[#D4AF37] inline-block'></span>
                      Latest International Dispatches
                    </h3>
                    <span className='text-xs text-neutral-400'>Real-time wire feed</span>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredArticles.map(art => (
                      <div 
                        key={art.id}
                        onClick={() => onSelectArticle(art)}
                        className='group bg-white dark:bg-[#151515] rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm cursor-pointer flex flex-col justify-between hover:border-[#D4AF37] transition'
                      >
                        <div>
                          <div className='relative h-52 overflow-hidden'>
                            <img src={art.image} alt={art.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                            <span className='absolute top-3 left-3 bg-[#080808]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded'>
                              {art.category}
                            </span>
                          </div>
                          <div className='p-5 space-y-2'>
                            <div className='flex items-center gap-2 text-[10px] text-neutral-400'>
                              <Clock className='w-3 h-3 text-[#D4AF37]' /> {art.publishedAt}
                              <span>•</span>
                              <span>{art.readTime}</span>
                            </div>
                            <h4 className='text-base font-bold font-serif line-clamp-2 text-neutral-900 dark:text-white group-hover:text-[#D4AF37] transition'>
                              {art.title}
                            </h4>
                            <p className='text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2'>
                              {art.subheadline}
                            </p>
                          </div>
                        </div>
                        <div className='px-5 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-[#D4AF37]'>
                          <span className='group-hover:underline'>Read Dispatch</span>
                          <ArrowRight className='w-3.5 h-3.5 group-hover:translate-x-1 transition' />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Homepage Ad Placement #3 & #4: Between major news feed sections & news cards */}
                {renderAdBoxReact('Homepage Feed Native Ad (Between Sections)', settings.ads?.nativeAdCode)}

                {/* E. INTERNATIONAL NEWS SECTIONS (World, India, Politics, Business & Tech) */}
                <div className='space-y-6 pt-4'>
                  <div className='flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3'>
                    <h3 className='text-lg font-bold font-serif flex items-center gap-2 text-neutral-900 dark:text-white'>
                      <span className='w-2.5 h-2.5 bg-[#D4AF37] inline-block'></span>
                      World &amp; South Asia Bureau
                    </h3>
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {worldNewsArticles.slice(0, 2).map(art => (
                      <div key={art.id} onClick={() => onSelectArticle(art)} className='group bg-white dark:bg-[#151515] p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 cursor-pointer space-y-3'>
                        <img src={art.image} alt={art.title} className='w-full h-56 object-cover rounded group-hover:scale-102 transition' />
                        <span className='text-[10px] font-bold text-[#D4AF37] uppercase'>World Intelligence</span>
                        <h4 className='text-lg font-bold font-serif group-hover:text-[#D4AF37] transition text-neutral-900 dark:text-white'>{art.title}</h4>
                        <p className='text-xs text-neutral-500 line-clamp-2'>{art.subheadline}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Homepage Ad Placement #5 & #6: Above & Below Real-Time Wire Feed */}
                {renderAdBoxReact('Homepage Pre-Real-Time Wire Feed Ad', settings.ads?.bannerMobileCode)}

                <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800'>
                  <h3 className='text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-3'>Real-Time News Wire Feed</h3>
                  <p className='text-xs text-neutral-400'>Continuous live dispatches from global bureaus around the clock.</p>
                </div>

                {renderAdBoxReact('Homepage Post-Real-Time Wire Feed Ad', settings.ads?.bannerDesktopCode)}

                {/* F. SIDEBAR & TRENDING SECTION */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6'>
                  <div className='lg:col-span-2 space-y-8'>
                    
                    {/* Homepage Ad Placement #7 & #8: Above & Below Newsletter Subscription */}
                    {renderAdBoxReact('Homepage Pre-Newsletter Ad', settings.ads?.nativeAdCode)}

                    <div className='bg-[#151515] text-white p-8 rounded-lg border border-neutral-800 space-y-4'>
                      <h3 className='text-lg font-bold font-serif text-[#D4AF37]'>VISTQORA Global Briefing Subscription</h3>
                      <p className='text-xs text-neutral-400 leading-relaxed'>Receive exclusive intelligence briefs, central bank analyses, and geopolitical reports every morning.</p>
                      <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className='flex gap-3'>
                        <input type='email' placeholder='Enter secure email address' className='flex-1 px-4 py-2.5 bg-[#080808] text-white text-xs rounded border border-neutral-700 focus:outline-none focus:border-[#D4AF37]' required />
                        <button type='submit' className='px-6 py-2.5 bg-[#D4AF37] text-neutral-950 text-xs font-bold rounded hover:opacity-95 transition cursor-pointer'>Subscribe</button>
                      </form>
                    </div>

                    {renderAdBoxReact('Homepage Post-Newsletter Ad', settings.ads?.bannerDesktopCode)}

                  </div>
                  
                  {/* Trending & Most Read Sidebar */}
                  <div className='space-y-8'>
                    
                    {/* Homepage Ad Placement #9 & #10: Above & Below Most Read Today */}
                    {renderAdBoxReact('Homepage Pre-Most Read Today Ad', settings.ads?.nativeAdCode)}

                    <div className='bg-white dark:bg-[#151515] p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-4'>
                      <h3 className='text-sm font-bold font-serif pb-3 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[#D4AF37]'>
                        <span>Trending Stories &amp; Most Read</span>
                        <Flame className='w-4 h-4' />
                      </h3>
                      <div className='space-y-4'>
                        {articles.slice(0, 4).map((art, idx) => (
                          <div key={art.id} onClick={() => onSelectArticle(art)} className='flex items-start space-x-3 group cursor-pointer'>
                            <span className='text-xl font-black text-neutral-500 group-hover:text-[#D4AF37] transition'>0{idx+1}</span>
                            <div>
                              <h4 className='text-xs font-bold line-clamp-2 text-neutral-900 dark:text-white group-hover:text-[#D4AF37] transition'>{art.title}</h4>
                              <span className='text-[10px] text-neutral-400'>{art.views.toLocaleString()} Reads</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {renderAdBoxReact('Homepage Post-Most Read Today Ad', settings.ads?.bannerDesktopCode)}

                  </div>
                </div>

                {/* G. PHOTO AND VIDEO SECTIONS */}
                <div className='space-y-6 pt-6'>
                  <div className='flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3'>
                    <h3 className='text-lg font-bold font-serif flex items-center gap-2 text-neutral-900 dark:text-white'>
                      <span className='w-2.5 h-2.5 bg-[#D4AF37] inline-block'></span>
                      Photo Stories &amp; Video Briefings
                    </h3>
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {articles.slice(0, 3).map(art => (
                      <div key={art.id} onClick={() => onSelectArticle(art)} className='group relative h-64 rounded-lg overflow-hidden border border-neutral-800 cursor-pointer'>
                        <img src={art.image} alt={art.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                        <div className='absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent'></div>
                        <div className='absolute bottom-0 p-4 space-y-1 text-white'>
                          <span className='bg-[#D4AF37] text-neutral-950 text-[10px] uppercase font-bold px-2 py-0.5 rounded'>Visual Dispatch</span>
                          <h4 className='text-sm font-bold font-serif line-clamp-2'>{art.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Homepage Ad Placement #11: Above Footer */}
                {renderAdBoxReact('Homepage Footer Ad (Before Footer)', settings.ads?.bannerDesktopCode)}

              </main>
            )}

            {/* Page Type: Category View */}
            {currentPage === 'category' && (
              <div className='max-w-7xl mx-auto px-4 py-10 space-y-6'>
                <div className='border-b border-neutral-200 dark:border-neutral-800 pb-4'>
                  <span className='text-xs font-bold text-[#D4AF37] uppercase tracking-widest'>Category Wire</span>
                  <h1 className='text-3xl font-bold font-serif mt-1'>World Affairs &amp; Geopolitics</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {articles.map(art => (
                    <div key={art.id} onClick={() => onSelectArticle(art)} className='bg-white dark:bg-[#151515] rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-pointer p-4 space-y-2 group'>
                      <img src={art.image} alt={art.title} className='w-full h-40 object-cover rounded group-hover:scale-102 transition' />
                      <span className='text-[10px] font-bold text-[#D4AF37] uppercase'>{art.category}</span>
                      <h3 className='text-base font-bold font-serif line-clamp-2 group-hover:text-[#D4AF37] transition'>{art.title}</h3>
                      <p className='text-xs text-neutral-400 line-clamp-2'>{art.subheadline}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Page Type: Article View */}
            {currentPage === 'article' && (
              <div className='max-w-3xl mx-auto px-4 py-12 space-y-6 font-serif'>
                <span className='text-xs font-bold text-[#D4AF37] uppercase tracking-widest'>World Intelligence</span>
                <h1 className='text-3xl sm:text-4xl font-extrabold leading-tight'>Global Climate Summit Reaches Historic Consensus on Advanced Carbon Neutrality Frameworks</h1>
                <p className='text-sm text-neutral-400 font-sans'>Published 2 hours ago • By Marcus Vance (Geneva Bureau)</p>
                <div className='rounded-lg overflow-hidden shadow'>
                  <img src={articles[0].image} alt='Cover' className='w-full h-[400px] object-cover' />
                </div>
                <div className='space-y-4 text-base font-sans text-neutral-800 dark:text-neutral-200 leading-relaxed pt-4'>
                  <p className='first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37]'>GENEVA — Following two weeks of intense round-the-clock negotiations, delegates at the 31st Global Climate Summit have finalized a landmark treaty that binds participating industrial economies to rigorous net-zero timelines by 2045.</p>
                  <p>The accord, hailed by environmental economists as the most consequential diplomatic achievement since the Paris Agreement, introduces automated carbon border adjustment mechanisms and establishes a $500 billion resilience fund for vulnerable coastal states.</p>
                  <p>“We have moved past empty rhetoric into verifiable enforcement,” announced Secretary-General Elena Vance during the plenary closing ceremony.</p>
                </div>
              </div>
            )}

            {/* Static pages */}
            {currentPage === 'about' && (
              <div className='max-w-3xl mx-auto px-4 py-12 space-y-4 font-serif'>
                <h1 className='text-3xl font-black text-[#D4AF37]'>About VISTQORA</h1>
                <p className='text-xs text-neutral-400 font-sans leading-relaxed'>The World. In Every Perspective. Uncompromising international journalism and geopolitical intelligence.</p>
              </div>
            )}
            {currentPage === 'contact' && (
              <div className='max-w-xl mx-auto px-4 py-12 space-y-4 font-sans'>
                <h1 className='text-2xl font-bold font-serif'>Contact International Bureaus</h1>
                <p className='text-xs text-neutral-400'>Submit confidential news tips or editorial inquiries to desk@vistqora.com.</p>
              </div>
            )}
            {currentPage === 'privacy' && (
              <div className='max-w-2xl mx-auto px-4 py-12 space-y-4 font-sans'>
                <h1 className='text-2xl font-bold font-serif'>Privacy &amp; Security Policy</h1>
                <p className='text-xs text-neutral-400'>VISTQORA guarantees reader confidentiality and strictly prohibits commercial ad-tracking.</p>
              </div>
            )}
            {currentPage === 'editorial' && (
              <div className='max-w-2xl mx-auto px-4 py-12 space-y-4 font-sans'>
                <h1 className='text-2xl font-bold font-serif'>Editorial Policy &amp; Ethics</h1>
                <p className='text-xs text-neutral-400'>All dispatches undergo dual-source verification prior to publication.</p>
              </div>
            )}
            {currentPage === '404' && (
              <div className='max-w-md mx-auto px-4 py-24 text-center space-y-4 font-sans'>
                <h1 className='text-5xl font-black text-[#D4AF37]'>404</h1>
                <h2 className='text-xl font-bold font-serif'>Dispatch Not Found</h2>
                <button onClick={() => setCurrentPage('home')} className='px-5 py-2 bg-[#D4AF37] text-neutral-950 text-xs font-bold rounded'>Return Home</button>
              </div>
            )}

            {/* H. PROFESSIONAL FOOTER */}
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
                  <h4 className='text-xs font-bold uppercase tracking-wider mb-3 text-[#D4AF37]'>Editorial Navigation</h4>
                  <ul className='space-y-1.5 text-xs text-neutral-400'>
                    <li><button onClick={() => setCurrentPage('about')} className='hover:underline'>About Us</button></li>
                    <li><button onClick={() => setCurrentPage('contact')} className='hover:underline'>Contact Bureau</button></li>
                    <li><button onClick={() => setCurrentPage('privacy')} className='hover:underline'>Privacy Policy</button></li>
                    <li><button onClick={() => setCurrentPage('editorial')} className='hover:underline'>Editorial Policy</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-xs font-bold uppercase tracking-wider mb-3 text-[#D4AF37]'>Syndication</h4>
                  <p className='text-xs text-neutral-400 mb-2'>Secure RSS and Atom feeds.</p>
                  <div className='flex space-x-3 text-base text-[#D4AF37]'>
                    <Globe className='w-4 h-4 cursor-pointer' />
                    <Mail className='w-4 h-4 cursor-pointer' />
                  </div>
                </div>
              </div>
              <div className='max-w-7xl mx-auto px-4 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500'>
                <p>&#169; 2026 VISTQORA Media Group. Official Blogger XML Theme.</p>
              </div>
            </footer>

          </div>
          )}
        </div>
      </div>

      {/* Search Modal */}
      {showSearchModal && (
        <div className='fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4'>
          <div className='bg-[#151515] text-white w-full max-w-xl rounded-lg shadow-2xl p-6 space-y-4 border border-neutral-800'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-bold'>Search International Wire</h3>
              <button onClick={() => setShowSearchModal(false)} className='p-1 hover:bg-neutral-800 rounded'><X className='w-4 h-4'/></button>
            </div>
            <div className='relative'>
              <Search className='absolute left-3 top-3.5 w-4 h-4 text-neutral-400' />
              <input
                type='text'
                placeholder='Search by keyword, country, or topic...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-10 pr-4 py-2.5 rounded bg-[#080808] text-white text-xs border border-neutral-800 focus:outline-none focus:border-[#D4AF37]'
                autoFocus
              />
            </div>
            <div className='space-y-2 max-h-60 overflow-y-auto'>
              {articles.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase())).map(art => (
                <div 
                  key={art.id} 
                  onClick={() => { onSelectArticle(art); setShowSearchModal(false); }}
                  className='p-2.5 rounded hover:bg-neutral-800 cursor-pointer transition flex items-center justify-between'
                >
                  <span className='text-xs font-semibold line-clamp-1'>{art.title}</span>
                  <span className='text-[10px] text-[#D4AF37] font-bold shrink-0'>{art.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
