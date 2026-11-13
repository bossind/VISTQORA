import React, { useState, useEffect } from 'react';
import { ThemeSettings, Article } from './types';
import { CATEGORIES, LANGUAGES } from './data/mockNews';
import { getLocalizedArticles } from './utils/localizedArticles';
import { TRANSLATIONS } from './utils/translations';
import { generateBloggerXml } from './utils/bloggerXmlGenerator';
import { FullArticleView } from './components/FullArticleView';
import { StaticPageView } from './components/StaticPageView';
import { 
  Search, Moon, Sun, Globe, Flame, Clock, User, ArrowRight, 
  Download, X, Menu, Mail
} from 'lucide-react';

export default function App() {
  const [settings, setSettings] = useState<ThemeSettings>({
    brandName: 'VISTQORA',
    tagline: 'THE WORLD. IN EVERY PERSPECTIVE.',
    primaryColor: '#080808',
    accentColor: '#D4AF37',
    fontFamily: 'Inter',
    enableDarkMode: false,
    enableBreakingTicker: true,
    breakingNewsText: 'Global climate summit reaches historic consensus on advanced carbon neutrality frameworks.',
    enableAds: true,
    adsensePublisherId: 'ca-pub-1234567890123456',
    defaultLanguage: 'en',
    enableRtl: false,
    postsPerPage: 10,
    ads: {
      enableAds: true,
      bannerDesktopCode: '<script async src="https://pl2849501.profitablegatetcp.com/banner.js"></script>',
      bannerMobileCode: '<script async src="https://pl2849501.profitablegatetcp.com/banner-mob.js"></script>',
      nativeAdCode: '<script async src="https://pl2849501.profitablegatetcp.com/native.js"></script>',
      socialBarCode: '<script type="text/javascript" src="https://pl2849501.profitablegatetcp.com/socialbar.js"></script>',
      smartlinkUrl: 'https://pl2849501.profitablegatetcp.com/smartlink',
      popunderCode: '<script type="text/javascript" src="https://pl2849501.profitablegatetcp.com/popunder.js"></script>',
      enableSlot1: true,
      enableSlot2: true,
      enableSlot3: true,
      enableSlot4: true,
      enableSlot5: true,
      enableSlot6: true,
      enableSlot7: true,
      enableSlot8: true,
      enableSlot9: true
    }
  });

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeStaticPage, setActiveStaticPage] = useState<null | 'about' | 'contact' | 'privacy' | 'terms' | 'cookie' | 'dmca' | 'discussion' | 'sitemap'>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLang, setSelectedLang] = useState<string>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [selectedArticle, activeStaticPage]);

  const currentLangObj = LANGUAGES.find(l => l.code === selectedLang) || LANGUAGES[0];
  const isRtl = currentLangObj.dir === 'rtl' || settings.enableRtl;
  const t = TRANSLATIONS[selectedLang] || TRANSLATIONS.en;

  const currentArticles = getLocalizedArticles(selectedLang);

  const filteredArticles = activeCategory === 'all' 
    ? currentArticles 
    : currentArticles.filter(a => a.categorySlug === activeCategory);

  const breakingArticle = currentArticles.find(a => a.isBreaking) || currentArticles[0];
  const featuredHero = currentArticles.find(a => a.isFeatured) || currentArticles[0];
  const secondaryHeroCards = currentArticles.filter(a => !a.isFeatured).slice(0, 2);

  const handleDownloadXml = () => {
    const xml = generateBloggerXml(settings);
    const blob = new Blob([xml], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'VISTQORA.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderAdBoxApp = (title: string, code?: string) => (
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

  if (activeStaticPage) {
    return (
      <StaticPageView
        pageType={activeStaticPage}
        settings={settings}
        selectedLang={selectedLang}
        onBack={() => setActiveStaticPage(null)}
        onNavigate={(p) => setActiveStaticPage(p)}
      />
    );
  }

  if (selectedArticle) {
    return (
      <FullArticleView
        article={selectedArticle}
        settings={settings}
        selectedLang={selectedLang}
        onBack={() => setSelectedArticle(null)}
        onSelectArticle={setSelectedArticle}
        allArticles={currentArticles}
      />
    );
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${isDarkMode ? 'dark bg-[#080808] text-[#F5F5F5]' : 'bg-white text-neutral-900'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Top Thin Black Bar */}
      <div className='bg-[#080808] text-neutral-400 text-[11px] py-1.5 px-4 border-b border-neutral-800'>
        <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2'>
          <div className='flex items-center space-x-4 rtl:space-x-reverse font-medium'>
            <span className='flex items-center gap-1.5'><i className='fa-regular fa-calendar text-[#D4AF37]'></i> Thursday, Nov 13, 2026</span>
            <span className='hidden md:inline-block opacity-30'>|</span>
            <span className='hidden md:flex items-center gap-1.5'><i className='fa-solid fa-earth-americas text-[#D4AF37]'></i> Global Bureau</span>
          </div>
          
          <div className='flex items-center space-x-4 rtl:space-x-reverse'>
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
              title='Toggle Dark/Light Mode'
            >
              {isDarkMode ? <Sun className='w-3.5 h-3.5 text-amber-400' /> : <Moon className='w-3.5 h-3.5' />}
            </button>
          </div>
        </div>
      </div>

      {/* VISTQORA Wordmark & Compact Navigation */}
      <header className='sticky top-0 z-40 bg-white dark:bg-[#080808] border-b border-neutral-200 dark:border-neutral-800 shadow-xs'>
        <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
          <div className='flex flex-col cursor-pointer' onClick={() => setActiveCategory('all')}>
            <span className='text-2xl sm:text-3xl font-black tracking-widest font-sans text-[#D4AF37]'>VISTQORA</span>
            <span className='text-[8px] uppercase tracking-[0.35em] text-neutral-500 font-bold'>THE WORLD. IN EVERY PERSPECTIVE.</span>
          </div>

          <nav className='hidden xl:flex items-center space-x-5 text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 rtl:space-x-reverse'>
            <button onClick={() => setActiveCategory('all')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.home}</button>
            <button onClick={() => setActiveCategory('world')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.world}</button>
            <button onClick={() => setActiveCategory('india')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.india}</button>
            <button onClick={() => setActiveCategory('politics')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.politics}</button>
            <button onClick={() => setActiveCategory('business')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.business}</button>
            <button onClick={() => setActiveCategory('technology')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.technology}</button>
            <button onClick={() => setActiveCategory('science')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.science}</button>
            <button onClick={() => setActiveCategory('sports')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.sports}</button>
            <button onClick={() => setActiveCategory('entertainment')} className='hover:text-[#D4AF37] transition cursor-pointer'>{t.entertainment}</button>
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

        {mobileMenuOpen && (
          <div className='xl:hidden bg-[#151515] border-t border-neutral-800 px-4 py-4 space-y-2 text-xs text-white'>
            <button onClick={() => { setActiveCategory('all'); setMobileMenuOpen(false); }} className='block w-full text-left py-2 font-bold hover:text-[#D4AF37]'>{t.home}</button>
            <button onClick={() => { setActiveCategory('world'); setMobileMenuOpen(false); }} className='block w-full text-left py-1.5 text-neutral-300 hover:text-[#D4AF37]'>{t.world}</button>
            <button onClick={() => { setActiveCategory('india'); setMobileMenuOpen(false); }} className='block w-full text-left py-1.5 text-neutral-300 hover:text-[#D4AF37]'>{t.india}</button>
            <button onClick={() => { setActiveCategory('politics'); setMobileMenuOpen(false); }} className='block w-full text-left py-1.5 text-neutral-300 hover:text-[#D4AF37]'>{t.politics}</button>
            <button onClick={() => { setActiveCategory('business'); setMobileMenuOpen(false); }} className='block w-full text-left py-1.5 text-neutral-300 hover:text-[#D4AF37]'>{t.business}</button>
            <button onClick={() => { setActiveCategory('technology'); setMobileMenuOpen(false); }} className='block w-full text-left py-1.5 text-neutral-300 hover:text-[#D4AF37]'>{t.technology}</button>
            <div className='pt-2 border-t border-neutral-800 space-y-2'>
              <button onClick={() => { setActiveStaticPage('about'); setMobileMenuOpen(false); }} className='block w-full text-left py-1 text-neutral-400 hover:text-[#D4AF37]'>About Us</button>
              <button onClick={() => { setActiveStaticPage('contact'); setMobileMenuOpen(false); }} className='block w-full text-left py-1 text-neutral-400 hover:text-[#D4AF37]'>Contact Us</button>
              <button onClick={() => { setActiveStaticPage('privacy'); setMobileMenuOpen(false); }} className='block w-full text-left py-1 text-neutral-400 hover:text-[#D4AF37]'>Privacy Policy</button>
              <button onClick={() => { setActiveStaticPage('terms'); setMobileMenuOpen(false); }} className='block w-full text-left py-1 text-neutral-400 hover:text-[#D4AF37]'>Terms &amp; Conditions</button>
            </div>
          </div>
        )}
      </header>

      {/* Breaking News Ticker */}
      {settings.enableBreakingTicker && breakingArticle && (
        <div className='bg-[#151515] text-white py-2 px-4 text-xs font-medium border-b border-neutral-800 flex items-center gap-3 overflow-hidden'>
          <span className='bg-[#D4AF37] text-neutral-950 px-2.5 py-0.5 rounded font-black uppercase tracking-wider text-[10px] shrink-0 animate-pulse flex items-center gap-1'>
            <Flame className='w-3 h-3' /> {t.breaking}
          </span>
          <div className='truncate cursor-pointer hover:text-[#D4AF37]' onClick={() => setSelectedArticle(breakingArticle)}>
            <span>{breakingArticle.title}</span>
          </div>
        </div>
      )}

      {/* Main Homepage Editorial Content */}
      <main className='max-w-7xl mx-auto px-4 py-8 space-y-12'>
        
        {/* Category Navigation Ribbon */}
        <div className='flex items-center space-x-2 rtl:space-x-reverse overflow-x-auto pb-2 border-b border-neutral-200 dark:border-neutral-800 text-xs font-bold uppercase tracking-wider'>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === 'all' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-500 hover:text-white'}`}
          >
            {t.allWire}
          </button>
          <button onClick={() => setActiveCategory('world')} className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === 'world' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-500 hover:text-white'}`}>{t.world}</button>
          <button onClick={() => setActiveCategory('india')} className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === 'india' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-500 hover:text-white'}`}>{t.india}</button>
          <button onClick={() => setActiveCategory('politics')} className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === 'politics' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-500 hover:text-white'}`}>{t.politics}</button>
          <button onClick={() => setActiveCategory('business')} className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === 'business' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-500 hover:text-white'}`}>{t.business}</button>
          <button onClick={() => setActiveCategory('technology')} className={`px-3 py-1.5 rounded transition cursor-pointer whitespace-nowrap ${activeCategory === 'technology' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-500 hover:text-white'}`}>{t.technology}</button>
        </div>

        {/* Homepage Ad Placement #1: Immediately below Category Navigation */}
        {renderAdBoxApp('Homepage Top Banner (Below Category Nav)', settings.ads?.bannerDesktopCode)}

        {/* Editorial Hero Section (65% Left + 35% Right Stacked) */}
        {activeCategory === 'all' && (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            
            {/* Left 65%: Large Featured Story */}
            {featuredHero && (
              <div 
                onClick={() => setSelectedArticle(featuredHero)}
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
                  onClick={() => setSelectedArticle(art)}
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

        {/* Homepage Ad Placement #2: Between Featured News and next section */}
        {renderAdBoxApp('Homepage Featured Banner (Above News Feed)', settings.ads?.bannerDesktopCode)}

        {/* Latest News Grid */}
        <div className='space-y-6'>
          <div className='flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3'>
            <h3 className='text-lg font-bold font-serif flex items-center gap-2 text-neutral-900 dark:text-white'>
              <span className='w-2.5 h-2.5 bg-[#D4AF37] inline-block'></span>
              {t.latestDispatches}
            </h3>
            <span className='text-xs text-neutral-400'>{t.realTimeWire}</span>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredArticles.map(art => (
              <div 
                key={art.id}
                onClick={() => setSelectedArticle(art)}
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
                  <span className='group-hover:underline'>{t.readDispatch}</span>
                  <ArrowRight className='w-3.5 h-3.5 group-hover:translate-x-1 transition' />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Homepage Ad Placement #3 & #4: Between major news feed sections & news cards */}
        {renderAdBoxApp('Homepage Feed Native Ad (Between Sections)', settings.ads?.nativeAdCode)}

        {/* Homepage Ad Placement #5 & #6: Above & Below Real-Time Wire Feed */}
        {renderAdBoxApp('Homepage Pre-Real-Time Wire Feed Ad', settings.ads?.bannerMobileCode)}

        <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800'>
          <h3 className='text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-3'>Real-Time News Wire Feed</h3>
          <p className='text-xs text-neutral-400'>Continuous live dispatches from global bureaus around the clock.</p>
        </div>

        {renderAdBoxApp('Homepage Post-Real-Time Wire Feed Ad', settings.ads?.bannerDesktopCode)}

        {/* Sidebar & Trending Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6'>
          <div className='lg:col-span-2 space-y-8'>
            
            {/* Homepage Ad Placement #7 & #8: Above & Below Newsletter Subscription */}
            {renderAdBoxApp('Homepage Pre-Newsletter Ad', settings.ads?.nativeAdCode)}

            <div className='bg-[#151515] text-white p-8 rounded-lg border border-neutral-800 space-y-4'>
              <h3 className='text-lg font-bold font-serif text-[#D4AF37]'>{t.globalBriefing}</h3>
              <p className='text-xs text-neutral-400 leading-relaxed'>{t.briefingDesc}</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className='flex gap-3'>
                <input type='email' placeholder={t.emailPlaceholder} className='flex-1 px-4 py-2.5 bg-[#080808] text-white text-xs rounded border border-neutral-700 focus:outline-none focus:border-[#D4AF37]' required />
                <button type='submit' className='px-6 py-2.5 bg-[#D4AF37] text-neutral-950 text-xs font-bold rounded hover:opacity-95 transition cursor-pointer'>{t.subscribe}</button>
              </form>
            </div>

            {renderAdBoxApp('Homepage Post-Newsletter Ad', settings.ads?.bannerDesktopCode)}

          </div>
          
          <div className='space-y-8'>
            
            {/* Homepage Ad Placement #9 & #10: Above & Below Most Read Today */}
            {renderAdBoxApp('Homepage Pre-Most Read Today Ad', settings.ads?.nativeAdCode)}

            <div className='bg-white dark:bg-[#151515] p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-4'>
              <h3 className='text-sm font-bold font-serif pb-3 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[#D4AF37]'>
                <span>{t.mostRead}</span>
                <Flame className='w-4 h-4' />
              </h3>
              <div className='space-y-4'>
                {currentArticles.slice(0, 4).map((art, idx) => (
                  <div key={art.id} onClick={() => setSelectedArticle(art)} className='flex items-start space-x-3 group cursor-pointer'>
                    <span className='text-xl font-black text-neutral-500 group-hover:text-[#D4AF37] transition'>0{idx+1}</span>
                    <div>
                      <h4 className='text-xs font-bold line-clamp-2 text-neutral-900 dark:text-white group-hover:text-[#D4AF37] transition'>{art.title}</h4>
                      <span className='text-[10px] text-neutral-400'>{art.views.toLocaleString()} Reads</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {renderAdBoxApp('Homepage Post-Most Read Today Ad', settings.ads?.bannerDesktopCode)}

          </div>
        </div>

        {/* Homepage Ad Placement #11: Above Footer */}
        {renderAdBoxApp('Homepage Footer Ad (Before Footer)', settings.ads?.bannerDesktopCode)}

      </main>

      {/* Professional Footer with exact required link structure */}
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
              <li><button onClick={() => setActiveStaticPage('about')} className='hover:text-[#D4AF37] transition'>About Us</button></li>
              <li><button onClick={() => setActiveStaticPage('contact')} className='hover:text-[#D4AF37] transition'>Contact Us</button></li>
              <li><button onClick={() => setActiveStaticPage('privacy')} className='hover:text-[#D4AF37] transition'>Privacy Policy</button></li>
              <li><button onClick={() => setActiveStaticPage('terms')} className='hover:text-[#D4AF37] transition'>Terms &amp; Conditions</button></li>
              <li><button onClick={() => setActiveStaticPage('cookie')} className='hover:text-[#D4AF37] transition'>Cookie Policy</button></li>
            </ul>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wider mb-3 text-[#D4AF37]'>Compliance &amp; Syndicate</h4>
            <ul className='space-y-1.5 text-xs text-neutral-400'>
              <li><button onClick={() => setActiveStaticPage('dmca')} className='hover:text-[#D4AF37] transition'>DMCA / Copyright</button></li>
              <li><button onClick={() => setActiveStaticPage('discussion')} className='hover:text-[#D4AF37] transition'>Discussion Guidelines</button></li>
              <li><button onClick={() => setActiveStaticPage('sitemap')} className='hover:text-[#D4AF37] transition'>HTML Sitemap</button></li>
              <li><button onClick={handleDownloadXml} className='text-[#D4AF37] font-bold hover:underline inline-flex items-center gap-1'><Download className='w-3 h-3'/> Download VISTQORA.xml</button></li>
            </ul>
          </div>
        </div>
        <div className='max-w-7xl mx-auto px-4 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500 space-y-2'>
          <p className='flex flex-wrap justify-center gap-2 font-medium text-neutral-400'>
            <button onClick={() => setActiveStaticPage('about')} className='hover:text-[#D4AF37]'>About Us</button> | 
            <button onClick={() => setActiveStaticPage('contact')} className='hover:text-[#D4AF37]'>Contact Us</button> | 
            <button onClick={() => setActiveStaticPage('privacy')} className='hover:text-[#D4AF37]'>Privacy Policy</button> | 
            <button onClick={() => setActiveStaticPage('terms')} className='hover:text-[#D4AF37]'>Terms &amp; Conditions</button> | 
            <button onClick={() => setActiveStaticPage('cookie')} className='hover:text-[#D4AF37]'>Cookie Policy</button> | 
            <button onClick={() => setActiveStaticPage('dmca')} className='hover:text-[#D4AF37]'>DMCA</button> | 
            <button onClick={() => setActiveStaticPage('discussion')} className='hover:text-[#D4AF37]'>Discussion</button> | 
            <button onClick={() => setActiveStaticPage('sitemap')} className='hover:text-[#D4AF37]'>Sitemap</button> | 
            <button onClick={() => setActiveStaticPage(null)} className='text-[#D4AF37] font-bold'>Back to Portal</button>
          </p>
          <p>&#169; 2026 VISTQORA Media Group. Official Blogger XML Theme.</p>
        </div>
      </footer>



      {/* Search Modal */}
      {showSearchModal && (
        <div className='fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-start justify-center pt-20 p-4'>
          <div className='bg-[#151515] text-white w-full max-w-xl rounded-lg shadow-2xl p-6 space-y-4 border border-neutral-800'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-bold'>{t.searchTitle}</h3>
              <button onClick={() => setShowSearchModal(false)} className='p-1 hover:bg-neutral-800 rounded'><X className='w-4 h-4'/></button>
            </div>
            <div className='relative'>
              <Search className='absolute left-3 top-3.5 w-4 h-4 text-neutral-400' />
              <input
                type='text'
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-10 pr-4 py-2.5 rounded bg-[#080808] text-white text-xs border border-neutral-800 focus:outline-none focus:border-[#D4AF37]'
                autoFocus
              />
            </div>
            <div className='space-y-2 max-h-60 overflow-y-auto'>
              {currentArticles.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase())).map(art => (
                <div 
                  key={art.id} 
                  onClick={() => { setSelectedArticle(art); setShowSearchModal(false); }}
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
}
