import { ThemeSettings } from '../types';

export function generateBloggerXml(settings: ThemeSettings): string {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsversion='3' b:responsive='true' b:templateversion='3.0.0' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gdata/b' xmlns:data='http://www.google.com/2005/gdata/data' xmlns:expr='http://www.google.com/2005/gdata/expr'>
<head>
  <meta charset='utf-8'/>
  <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
  
  <b:if cond='data:blog.pageType == "index"'>
    <title><data:blog.pageTitle/> — VISTQORA</title>
    <meta expr:content='data:blog.metaDescription' name='description'/>
    <link expr:href='data:blog.homepageUrl' rel='canonical'/>
  <b:else/>
    <title><data:blog.pageName/> — VISTQORA</title>
    <meta expr:content='data:blog.pageName + " - " + data:blog.title' name='description'/>
    <link expr:href='data:blog.canonicalUrl' rel='canonical'/>
  </b:if>
  
  <meta expr:content='data:blog.pageTitle' property='og:title'/>
  <meta expr:content='data:blog.metaDescription' property='og:description'/>
  <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
  <meta content='website' property='og:type'/>
  <meta content='summary_large_image' name='twitter:card'/>

  <!-- Google Fonts: Inter & Merriweather -->
  <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&amp;display=swap' rel='stylesheet'/>
  <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' rel='stylesheet'/>

  <!-- Tailwind CSS CDN -->
  <script src='https://cdn.tailwindcss.com'></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              black: '#080808',
              charcoal: '#151515',
              gold: '#D4AF37',
              light: '#FFFFFF',
              gray: '#F5F5F5'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif']
          }
        }
      }
    }
  </script>

  <!-- Schema.org JSON-LD -->
  <b:if cond='data:blog.pageType == "item"'>
    <script type='application/ld+json'>
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "<data:blog.pageName/>",
      "description": "<data:blog.metaDescription/>",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "<data:blog.canonicalUrl/>"
      },
      "publisher": {
        "@type": "Organization",
        "name": "VISTQORA",
        "logo": {
          "@type": "ImageObject",
          "url": "<data:blog.homepageUrl/>favicon.ico"
        }
      }
    }
    </script>
  </b:if>

  <b:skin><![CDATA[
    /*
     * Theme Name: VISTQORA International News Portal (Final Production)
     * Author: VISTQORA Editorial Board & Developer Engine
     * Version: 10.0.0 (Layout-Based Ad Management & Full Information Pages)
     * Tagline: THE WORLD. IN EVERY PERSPECTIVE.
    */
    :root {
      --bg-primary: #FFFFFF;
      --text-primary: #111111;
      --gold: #D4AF37;
      --charcoal: #151515;
      --black: #080808;
    }
    .dark {
      --bg-primary: #080808;
      --text-primary: #F5F5F5;
      --charcoal: #151515;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }
    body, * { transition: background-color 0.2s ease, color 0.2s ease; }
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-track { background: #151515; }
    ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 2px; }
    .adsterra-box {
      border: 1px solid rgba(212, 175, 55, 0.4);
      border-radius: 0.75rem;
      background: #FFFFFF;
      color: #111111;
      padding: 1rem;
      margin: 1.5rem 0;
      text-align: center;
      overflow: hidden;
      max-width: 100%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .dark .adsterra-box {
      background: #0D0D0D;
      color: #F5F5F5;
      border-color: rgba(212, 175, 55, 0.3);
    }
    .adsterra-label {
      font-size: 9px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #888;
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .adsterra-label span.badge {
      background: #D4AF37;
      color: #080808;
      padding: 1px 4px;
      border-radius: 2px;
    }
  ]]></style>

  {/* Sitewide Social Bar & Popunder Gadgets Section */}
  <b:section id='sitewide-scripts' class='sitewide-scripts' maxwidgets='2' showaddelement='yes'>
    <b:widget id='HTML_SOCIAL' locked='false' title='Sitewide - Social Bar Ad' type='HTML' version='2'>
      <b:includable id='main'><data:content/></b:includable>
    </b:widget>
    <b:widget id='HTML_POPUNDER' locked='false' title='Sitewide - Popunder Ad Script' type='HTML' version='2'>
      <b:includable id='main'><data:content/></b:includable>
    </b:widget>
  </b:section>
</head>

<body class='bg-white text-neutral-900 dark:bg-[#080808] dark:text-neutral-100'>
  <!-- Reading Progress Bar -->
  <div class='fixed top-0 left-0 h-1 bg-[#D4AF37] z-50 transition-all duration-150' id='reading-progress' style='width: 0%'></div>

  <!-- A. PREMIUM HEADER: Slim Top Information Bar -->
  <div class='bg-[#080808] text-neutral-400 text-[11px] py-1.5 px-4 border-b border-neutral-800'>
    <div class='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2'>
      <div class='flex items-center space-x-4 font-medium'>
        <span class='flex items-center gap-1.5'><i class='fa-regular fa-calendar text-[#D4AF37]'></i> <span id='current-date'>Thursday, Nov 13, 2026</span></span>
        <span class='hidden md:inline-block opacity-30'>|</span>
        <span class='hidden md:flex items-center gap-1.5'><i class='fa-solid fa-earth-americas text-[#D4AF37]'></i> Global Bureau</span>
      </div>
      
      <div class='flex items-center space-x-4'>
        <select class='bg-[#151515] text-neutral-200 text-[11px] px-2 py-0.5 rounded border border-neutral-800 focus:outline-none cursor-pointer' id='lang-selector'>
          <option value='en'>English</option>
          <option value='hi'>हिन्दी</option>
          <option value='ar'>العربية</option>
          <option value='es'>Español</option>
          <option value='fr'>Français</option>
          <option value='de'>Deutsch</option>
          <option value='zh'>中文</option>
          <option value='ja'>日本語</option>
          <option value='ur'>اردو</option>
        </select>
        <button class='hover:text-[#D4AF37] transition cursor-pointer' id='theme-toggle' title='Toggle Dark/Light Mode'>
          <i class='fa-solid fa-moon' id='theme-icon'></i>
        </button>
      </div>
    </div>
  </div>

  <!-- VISTQORA Wordmark & Compact Navigation -->
  <header class='sticky top-0 z-40 bg-white dark:bg-[#080808] border-b border-neutral-200 dark:border-neutral-800'>
    <div class='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
      <a class='flex flex-col' expr:href='data:blog.homepageUrl'>
        <span class='text-2xl sm:text-3xl font-black tracking-widest font-sans text-[#D4AF37]'>VISTQORA</span>
        <span class='text-[8px] uppercase tracking-[0.35em] text-neutral-500 font-bold'>THE WORLD. IN EVERY PERSPECTIVE.</span>
      </a>

      <!-- Compact Navigation Menu -->
      <nav class='hidden xl:flex items-center space-x-5 text-xs font-bold uppercase tracking-wider'>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl'>Home</a>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl + "search/label/World"'>World</a>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl + "search/label/India"'>India</a>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl + "search/label/Politics"'>Politics</a>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl + "search/label/Business"'>Business</a>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl + "search/label/Technology"'>Technology</a>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl + "search/label/Science"'>Science</a>
        <a class='hover:text-[#D4AF37] transition' expr:href='data:blog.homepageUrl + "search/label/Sports"'>Sports</a>
      </nav>

      <div class='flex items-center space-x-3'>
        <button class='p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition cursor-pointer' id='search-btn'>
          <i class='fa-solid fa-magnifying-glass text-xs'></i>
        </button>
      </div>
    </div>
  </header>

  <!-- B. BREAKING NEWS TICKER -->
  <div class='bg-[#151515] text-white py-2 px-4 text-xs font-medium border-b border-neutral-800'>
    <div class='max-w-7xl mx-auto flex items-center gap-3 overflow-hidden'>
      <span class='bg-[#D4AF37] text-neutral-950 px-2.5 py-0.5 rounded font-black uppercase tracking-wider text-[10px] shrink-0 animate-pulse'>
        BREAKING
      </span>
      <div class='truncate'>
        <a class='hover:text-[#D4AF37] transition text-neutral-300' expr:href='data:blog.homepageUrl'>Global climate summit reaches historic consensus on green transition frameworks.</a>
      </div>
    </div>
  </div>

  <!-- C. MAIN BLOG SECTION & LAYOT GADGETS FOR HOMEPAGE AND ARTICLE AD PLACEMENTS -->
  <div class='max-w-7xl mx-auto px-4 py-8'>
    
    <!-- HOMEPAGE AD PLACEMENT #1: Below Category Navigation -->
    <b:if cond='data:blog.pageType == "index"'>
      <b:section id='hp-ad-1' class='hp-ad-section' maxwidgets='1' showaddelement='yes'>
        <b:widget id='HP_HTML1' locked='false' title='Homepage - Below Category Navigation' type='HTML' version='2'>
          <b:includable id='main'>
            <div class='adsterra-box'>
              <div class='adsterra-label'><span>Advertisement — Homepage Below Category Navigation</span><span class='badge'>AD</span></div>
              <b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-center text-xs text-neutral-400'>Adsterra Banner Slot Active. Manage via Blogger Layout.</div></b:if>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </b:if>

    <b:section id='main-blog' name='Main Blog Posts' showaddelement='no'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2'>
        
        <b:includable id='main'>
          <b:if cond='data:blog.pageType == "item"'>
            <!-- FULL ARTICLE PAGE WITH ALL 13 AD PLACEMENTS -->
            <div class='max-w-4xl mx-auto space-y-8'>
              <b:loop values='data:posts' var='post'>
                <div class='space-y-6'>
                  <div class='flex items-center gap-2 text-xs text-neutral-500'>
                    <a expr:href='data:blog.homepageUrl'>Home</a>
                    <span>→</span>
                    <span class='text-[#D4AF37] line-clamp-1'><data:post.title/></span>
                  </div>

                  <h1 class='text-3xl sm:text-5xl font-extrabold font-serif leading-tight'><data:post.title/></h1>

                  <div class='flex items-center justify-between py-3 border-y border-neutral-200 dark:border-neutral-800 text-xs text-neutral-400'>
                    <span><i class='fa-regular fa-user text-[#D4AF37]'></i> <data:post.author.name/></span>
                    <span><i class='fa-regular fa-clock text-[#D4AF37]'></i> <data:post.timestamp/></span>
                  </div>

                  <b:if cond='data:post.firstImageUrl'>
                    <div class='rounded-2xl overflow-hidden shadow-xl max-h-[500px] border border-neutral-800'>
                      <img class='w-full h-full object-cover' expr:alt='data:post.title' expr:src='data:post.firstImageUrl'/>
                    </div>
                  </b:if>

                  {/* Article Ad #1: Below Hero Image */}
                  <b:section id='art-ad-1' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML1' locked='false' title='Article - Below Hero Image' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article Below Hero Image</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #2: Below Author Information */}
                  <b:section id='art-ad-2' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML2' locked='false' title='Article - Below Author Information' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article Below Author Information</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #3: Before Most Important */}
                  <b:section id='art-ad-3' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML3' locked='false' title='Article - Before Most Important' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article Before Most Important</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #4: After Most Important */}
                  <b:section id='art-ad-4' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML4' locked='false' title='Article - After Most Important' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article After Most Important</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #5: After At a Glance */}
                  <b:section id='art-ad-5' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML5' locked='false' title='Article - After At a Glance' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article After At a Glance</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #6: After Key Takeaways */}
                  <b:section id='art-ad-6' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML6' locked='false' title='Article - After Key Takeaways' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article After Key Takeaways</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #7: After Table of Contents */}
                  <b:section id='art-ad-7' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML7' locked='false' title='Article - After Table of Contents' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article After Table of Contents</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  <div class='prose dark:prose-invert max-w-none text-base sm:text-lg font-serif leading-relaxed space-y-6 text-neutral-800 dark:text-neutral-200'>
                    <data:post.body/>
                  </div>

                  {/* Article Ad #8: Between Article Sections */}
                  <b:section id='art-ad-8' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML8' locked='false' title='Article - Between Article Sections' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article Between Sections</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #9: After Technical Terms */}
                  <b:section id='art-ad-9' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML9' locked='false' title='Article - After Technical Terms' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article After Technical Terms</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #10: After Sources and References */}
                  <b:section id='art-ad-10' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML10' locked='false' title='Article - After Sources and References' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article After Sources &amp; References</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #11: Before Related News */}
                  <b:section id='art-ad-11' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML11' locked='false' title='Article - Before Related News' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article Before Related News</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #12: Below Related News */}
                  <b:section id='art-ad-12' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML12' locked='false' title='Article - Below Related News' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article Below Related News</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  {/* Article Ad #13: Before Article Footer */}
                  <b:section id='art-ad-13' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='ART_HTML13' locked='false' title='Article - Before Article Footer' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Article Before Footer</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>

                  <b:include name='comment-form'/>
                </div>
              </b:loop>
            </div>
          <b:else/>
            <!-- HOMEPAGE LAYOUT WITH ALL HOMEPAGE GADGETS -->
            <div class='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div class='lg:col-span-2 space-y-8'>
                
                <!-- HOMEPAGE AD PLACEMENT #2: Below Featured News -->
                <b:section id='hp-ad-2' maxwidgets='1' showaddelement='yes'>
                  <b:widget id='HP_HTML2' locked='false' title='Homepage - Below Featured News' type='HTML' version='2'>
                    <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Homepage Below Featured News</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                  </b:widget>
                </b:section>

                <b:loop values='data:posts' var='post'>
                  <article class='bg-white dark:bg-[#151515] rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm'>
                    <b:if cond='data:post.firstImageUrl'>
                      <div class='relative h-80 overflow-hidden'>
                        <img class='w-full h-full object-cover hover:scale-105 transition duration-500' expr:alt='data:post.title' expr:src='data:post.firstImageUrl'/>
                      </div>
                    </b:if>
                    <div class='p-6 sm:p-8 space-y-3'>
                      <h2 class='text-2xl sm:text-3xl font-bold font-serif leading-tight text-neutral-900 dark:text-white'>
                        <a class='hover:text-[#D4AF37] transition' expr:href='data:post.url'><data:post.title/></a>
                      </h2>
                      <p class='text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed'>
                        <data:post.snippet/>
                      </p>
                    </div>
                  </article>

                  <!-- HOMEPAGE AD PLACEMENT #3: Between News Sections -->
                  <b:section id='hp-ad-3' maxwidgets='1' showaddelement='yes'>
                    <b:widget id='HP_HTML3' locked='false' title='Homepage - Between News Sections' type='HTML' version='2'>
                      <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Homepage Between News Sections</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Native Slot Active</div></b:if></div></b:includable>
                    </b:widget>
                  </b:section>
                </b:loop>

                <!-- HOMEPAGE AD PLACEMENT #4: Above Real-Time Wire Feed -->
                <b:section id='hp-ad-4' maxwidgets='1' showaddelement='yes'>
                  <b:widget id='HP_HTML4' locked='false' title='Homepage - Above Real-Time Wire Feed' type='HTML' version='2'>
                    <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Homepage Above Real-Time Wire</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                  </b:widget>
                </b:section>

                <div class='bg-neutral-50 dark:bg-[#151515] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800'>
                  <h3 class='text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-3'>Real-Time News Wire Feed</h3>
                  <p class='text-xs text-neutral-400'>Continuous live dispatches from global bureaus around the clock.</p>
                </div>

                <!-- HOMEPAGE AD PLACEMENT #5: Below Real-Time Wire Feed -->
                <b:section id='hp-ad-5' maxwidgets='1' showaddelement='yes'>
                  <b:widget id='HP_HTML5' locked='false' title='Homepage - Below Real-Time Wire Feed' type='HTML' version='2'>
                    <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Homepage Below Real-Time Wire</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                  </b:widget>
                </b:section>

              </div>

              <!-- Sidebar -->
              <aside class='space-y-8'>
                
                <!-- HOMEPAGE AD PLACEMENT #6: Above Newsletter -->
                <b:section id='hp-ad-6' maxwidgets='1' showaddelement='yes'>
                  <b:widget id='HP_HTML6' locked='false' title='Homepage - Above Newsletter' type='HTML' version='2'>
                    <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Homepage Above Newsletter</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Native Slot Active</div></b:if></div></b:includable>
                  </b:widget>
                </b:section>

                <div class='bg-[#151515] text-white p-6 rounded-lg border border-neutral-800 space-y-4 shadow-sm'>
                  <h3 class='text-base font-bold font-serif text-[#D4AF37]'>VISTQORA Global Briefing</h3>
                  <p class='text-xs text-neutral-400 leading-relaxed'>Get uncompromising international dispatches, geopolitics, and economic analysis delivered daily.</p>
                  <form class='space-y-3' onsubmit='event.preventDefault(); alert("Subscribed successfully!");'>
                    <input class='w-full px-3.5 py-2.5 bg-[#080808] text-white text-xs rounded border border-neutral-800 focus:outline-none focus:border-[#D4AF37]' placeholder='Enter secure email' required='required' type='email'/>
                    <button class='w-full py-2.5 bg-[#D4AF37] text-neutral-950 text-xs font-bold rounded hover:opacity-95 transition cursor-pointer' type='submit'>Subscribe Now</button>
                  </form>
                </div>

                <!-- HOMEPAGE AD PLACEMENT #7: Below Most Read -->
                <b:section id='hp-ad-7' maxwidgets='1' showaddelement='yes'>
                  <b:widget id='HP_HTML7' locked='false' title='Homepage - Below Most Read' type='HTML' version='2'>
                    <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Homepage Below Most Read</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
                  </b:widget>
                </b:section>

                <div class='bg-white dark:bg-[#151515] p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-4 shadow-sm'>
                  <h3 class='text-sm font-bold font-serif pb-3 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[#D4AF37]'>
                    <span>Most Read Today</span>
                    <i class='fa-solid fa-fire'></i>
                  </h3>
                  <div class='space-y-4'>
                    <b:loop values='data:posts' var='post'>
                      <div class='flex items-start space-x-3 group'>
                        <span class='text-xl font-black text-neutral-500 group-hover:text-[#D4AF37] transition'>#</span>
                        <div>
                          <h4 class='text-xs font-bold group-hover:text-[#D4AF37] transition line-clamp-2 text-neutral-900 dark:text-white'>
                            <a expr:href='data:post.url'><data:post.title/></a>
                          </h4>
                          <span class='text-[10px] text-neutral-400 mt-1 inline-block'><data:post.timestamp/></span>
                        </div>
                      </div>
                    </b:loop>
                  </div>
                </div>

              </aside>
            </div>
          </b:if>
        </b:includable>

        <b:includable id='comment-form' var='post'>
          <div class='mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-6' id='comments'>
            <h3 class='text-xl font-bold font-serif text-neutral-900 dark:text-white'>Discussion &amp; Native Blogger Comments</h3>
            <b:include cond='data:post.allowComments' name='comment-form'/>
          </div>
        </b:includable>

      </b:widget>
    </b:section>

    <!-- HOMEPAGE AD PLACEMENT #8: Before Footer -->
    <b:if cond='data:blog.pageType == "index"'>
      <b:section id='hp-ad-8' maxwidgets='1' showaddelement='yes'>
        <b:widget id='HP_HTML8' locked='false' title='Homepage - Before Footer' type='HTML' version='2'>
          <b:includable id='main'><div class='adsterra-box'><div class='adsterra-label'><span>Advertisement — Homepage Before Footer</span><span class='badge'>AD</span></div><b:if cond='data:content'><data:content/><b:else/><div class='py-4 text-xs text-neutral-400'>Adsterra Banner Slot Active</div></b:if></div></b:includable>
        </b:widget>
      </b:section>
    </b:if>
  </div>

  <!-- H. PROFESSIONAL FOOTER WITH ALL 9 INFORMATION & LEGAL LINKS -->
  <footer class='bg-[#080808] text-white mt-20 pt-16 pb-8 border-t border-neutral-800 font-sans'>
    <div class='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12'>
      <div class='space-y-3'>
        <span class='text-2xl font-black tracking-widest text-[#D4AF37]'>VISTQORA</span>
        <p class='text-xs text-neutral-400 leading-relaxed'>THE WORLD. IN EVERY PERSPECTIVE. Delivering uncompromising international journalism and geopolitical intelligence.</p>
      </div>
      <div>
        <h4 class='text-xs font-bold uppercase tracking-wider mb-4 text-[#D4AF37]'>Global Bureaus</h4>
        <ul class='space-y-2 text-xs text-neutral-400'>
          <li><span>Washington / New York</span></li>
          <li><span>London / Geneva</span></li>
          <li><span>New Delhi / Mumbai</span></li>
          <li><span>Tokyo / Singapore</span></li>
        </ul>
      </div>
      <div>
        <h4 class='text-xs font-bold uppercase tracking-wider mb-4 text-[#D4AF37]'>Information &amp; Legal</h4>
        <ul class='space-y-2 text-xs text-neutral-400'>
          <li><a expr:href='data:blog.homepageUrl'>About Us</a></li>
          <li><a expr:href='data:blog.homepageUrl'>Contact Us</a></li>
          <li><a expr:href='data:blog.homepageUrl'>Privacy Policy</a></li>
          <li><a expr:href='data:blog.homepageUrl'>Terms &amp; Conditions</a></li>
          <li><a expr:href='data:blog.homepageUrl'>Cookie Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 class='text-xs font-bold uppercase tracking-wider mb-4 text-[#D4AF37]'>Compliance &amp; Syndicate</h4>
        <ul class='space-y-2 text-xs text-neutral-400'>
          <li><a expr:href='data:blog.homepageUrl'>DMCA Policy</a></li>
          <li><a expr:href='data:blog.homepageUrl'>Discussion Guidelines</a></li>
          <li><a expr:href='data:blog.homepageUrl'>HTML Sitemap</a></li>
          <li><a expr:href='data:blog.homepageUrl'>Back to Portal</a></li>
        </ul>
      </div>
    </div>
    <div class='max-w-7xl mx-auto px-4 pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500 space-y-2'>
      <p class='flex flex-wrap justify-center gap-2 font-medium text-neutral-400'>
        <a expr:href='data:blog.homepageUrl'>About Us</a> | 
        <a expr:href='data:blog.homepageUrl'>Contact Us</a> | 
        <a expr:href='data:blog.homepageUrl'>Privacy Policy</a> | 
        <a expr:href='data:blog.homepageUrl'>Terms &amp; Conditions</a> | 
        <a expr:href='data:blog.homepageUrl'>Cookie Policy</a> | 
        <a expr:href='data:blog.homepageUrl'>DMCA</a> | 
        <a expr:href='data:blog.homepageUrl'>Discussion</a> | 
        <a expr:href='data:blog.homepageUrl'>Sitemap</a> | 
        <a expr:href='data:blog.homepageUrl'>Back to Portal</a>
      </p>
      <p>&#169; 2026 VISTQORA Media Group. All rights reserved. Designed for Google Blogger.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('reading-progress').style.width = scrolled + '%';
    });
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        themeIcon.className = 'fa-solid fa-sun';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
      }
    });
    const langSelector = document.getElementById('lang-selector');
    langSelector.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'ar' || val === 'ur') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    });
  </script>
</body>
</html>`;
}
