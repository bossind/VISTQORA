import React, { useState, useEffect } from 'react';
import { Article, ThemeSettings } from '../types';
import { TRANSLATIONS } from '../utils/translations';
import { 
  Clock, User, Calendar, Share2, Bookmark, Printer, Copy, 
  ArrowLeft, MessageSquare, Check, ThumbsUp, Send, ShieldCheck, 
  BookmarkCheck, Globe, Flame, ExternalLink, ZoomIn, X, ListOrdered, CheckCircle2, Info,
  ArrowUp, Heart, CornerDownRight, Flag, Sparkles
} from 'lucide-react';

interface FullArticleViewProps {
  article: Article;
  settings: ThemeSettings;
  selectedLang: string;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const FullArticleView: React.FC<FullArticleViewProps> = ({
  article: initialArticle,
  settings,
  selectedLang,
  onBack,
  onSelectArticle,
  allArticles
}) => {
  const [article, setArticle] = useState<Article>(initialArticle);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Article Like State
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(142);

  // Comments State
  const [comments, setComments] = useState([
    { id: 1, author: 'Dr. Jean-Luc Picard', text: 'An exceptional analysis of the diplomatic dynamics and carbon neutrality enforcement frameworks.', time: '1 hour ago', likes: 14, reported: false, replies: [{ id: 101, author: 'Marcus Vance', text: 'Indeed, the Geneva framework sets a robust precedent.', time: '45 mins ago' }] },
    { id: 2, author: 'Amina Al-Hassan', text: 'Critical steps forward. Enforcement mechanisms must be monitored closely by developing economies.', time: '35 mins ago', likes: 8, reported: false, replies: [] }
  ]);
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');

  const t = TRANSLATIONS[selectedLang] || TRANSLATIONS.en;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const savedBookmarks = JSON.parse(localStorage.getItem('vistqora_bookmarks') || '[]');
    setIsBookmarked(savedBookmarks.includes(article.id));

    const likedArticles = JSON.parse(localStorage.getItem('vistqora_likes') || '{}');
    if (likedArticles[article.id]) {
      setIsLiked(likedArticles[article.id].liked);
      setLikeCount(likedArticles[article.id].count);
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(progress);
      }
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  const toggleBookmark = () => {
    const savedBookmarks = JSON.parse(localStorage.getItem('vistqora_bookmarks') || '[]');
    let updated;
    if (isBookmarked) {
      updated = savedBookmarks.filter((id: string) => id !== article.id);
      setIsBookmarked(false);
    } else {
      updated = [...savedBookmarks, article.id];
      setIsBookmarked(true);
    }
    localStorage.setItem('vistqora_bookmarks', JSON.stringify(updated));
  };

  const handleLikeArticle = () => {
    const likedArticles = JSON.parse(localStorage.getItem('vistqora_likes') || '{}');
    let newLiked = !isLiked;
    let newCount = newLiked ? likeCount + 1 : likeCount - 1;
    setIsLiked(newLiked);
    setLikeCount(newCount);
    likedArticles[article.id] = { liked: newLiked, count: newCount };
    localStorage.setItem('vistqora_likes', JSON.stringify(likedArticles));
  };

  const handleCopyLink = () => {
    const permalink = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(permalink).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        fallbackCopyTextToClipboard(permalink);
      });
    } else {
      fallbackCopyTextToClipboard(permalink);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.subheadline,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      handleCopyLink();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !newAuthor.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), author: newAuthor, text: newComment, time: 'Just now', likes: 0, reported: false, replies: [] }
    ]);
    setNewComment('');
    setNewAuthor('');
  };

  const handleAddReply = (commentId: number, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !replyAuthor.trim()) return;
    setComments(comments.map(c => {
      if (c.id === commentId) {
        return {
          ...c,
          replies: [...c.replies, { id: Date.now(), author: replyAuthor, text: replyText, time: 'Just now' }]
        };
      }
      return c;
    }));
    setReplyText('');
    setReplyAuthor('');
    setReplyingTo(null);
  };

  const handleLikeComment = (commentId: number) => {
    setComments(comments.map(c => c.id === commentId ? { ...c, likes: c.likes + 1 } : c));
  };

  const handleReportComment = (commentId: number) => {
    setComments(comments.map(c => c.id === commentId ? { ...c, reported: true } : c));
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article.title);

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.category === article.category || a.categorySlug === article.categorySlug))
    .slice(0, 3);

  const currentIndex = allArticles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const glossaryTerms: Record<string, string> = {
    'Net-Zero': 'Achieving an overall balance between greenhouse gas emissions produced and greenhouse gas emissions taken out of the atmosphere.',
    'Qubit': 'The basic unit of quantum information, analogous to the classical bit in conventional computing.',
    'Semiconductor': 'A material whose electrical conductivity is intermediate between that of a conductor and an insulator, crucial for computer chips.',
    'Carbon Border Adjustment': 'A climate measure that puts a carbon price on imports of certain goods to prevent carbon leakage.'
  };

  const renderAdSlot = (slotKey: keyof ThemeSettings['ads'], label: string) => {
    if (!settings.ads || !settings.ads.enableAds || !settings.ads[slotKey]) return null;
    const code = settings.ads.bannerDesktopCode || settings.ads.nativeAdCode;
    return (
      <div className='my-8 p-4 bg-white dark:bg-[#0D0D0D] border border-[#D4AF37]/40 rounded-xl space-y-2 overflow-hidden shadow-sm'>
        <div className='flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-neutral-400'>
          <span>ADVERTISEMENT — {label}</span>
          <span className='bg-[#D4AF37] text-neutral-950 px-1.5 py-0.5 rounded text-[8px] font-black'>AD</span>
        </div>
        <div className='flex justify-center items-center min-h-[90px] overflow-x-auto p-2 bg-neutral-50 dark:bg-[#080808] rounded border border-neutral-200 dark:border-neutral-800'>
          {code && code.includes('<script') ? (
            <div dangerouslySetInnerHTML={{ __html: code }} />
          ) : (
            <div className='text-center py-4 space-y-1'>
              <p className='text-xs font-semibold text-neutral-500'>Adsterra Banner / Native Slot ({label})</p>
              <p className='text-[10px] text-neutral-400'>Bordered placeholder active. Configure Adsterra code in Theme Studio.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-white dark:bg-[#080808] text-neutral-900 dark:text-[#F5F5F5] font-sans transition-colors duration-200'>
      
      {/* Reading Progress Bar */}
      <div className='fixed top-0 left-0 h-1 bg-[#D4AF37] z-50 transition-all duration-100' style={{ width: `${readingProgress}%` }} />

      {/* Top Sticky Article Toolbar */}
      <div className='sticky top-0 z-40 bg-[#080808] text-white px-6 py-3 flex items-center justify-between border-b border-neutral-800 shadow-md'>
        <button
          onClick={onBack}
          className='flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition cursor-pointer'
        >
          <ArrowLeft className='w-4 h-4 text-[#D4AF37]' />
          <span>{t.backToPortal || 'Back to Portal'}</span>
        </button>

        <div className='flex items-center space-x-3 rtl:space-x-reverse'>
          <div className='hidden sm:flex items-center bg-neutral-900 rounded p-1 text-xs border border-neutral-800'>
            <button onClick={() => setFontSize('normal')} className={`px-2 py-0.5 rounded transition ${fontSize === 'normal' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-300'}`}>A</button>
            <button onClick={() => setFontSize('large')} className={`px-2 py-0.5 rounded transition ${fontSize === 'large' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-300'}`}>A+</button>
            <button onClick={() => setFontSize('xlarge')} className={`px-2 py-0.5 rounded transition ${fontSize === 'xlarge' ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'text-neutral-300'}`}>A++</button>
          </div>


          <button onClick={toggleBookmark} className={`p-2 rounded transition cursor-pointer ${isBookmarked ? 'bg-[#D4AF37] text-neutral-950 font-bold' : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800'}`} title='Bookmark'>
            {isBookmarked ? <BookmarkCheck className='w-4 h-4' /> : <Bookmark className='w-4 h-4' />}
          </button>

          <button onClick={handleNativeShare} className='p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-800 transition cursor-pointer' title='Share Article'>
            <Share2 className='w-4 h-4' />
          </button>

          <button onClick={handleCopyLink} className='p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded border border-neutral-800 transition cursor-pointer' title='Copy Link'>
            {copied ? <Check className='w-4 h-4 text-green-400' /> : <Copy className='w-4 h-4' />}
          </button>
        </div>
      </div>

      {/* Main Article Container */}
      <main className='max-w-4xl mx-auto px-4 py-8 space-y-10'>
        
        {/* Breadcrumbs */}
        <div className='flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
          <button onClick={onBack} className='hover:text-[#D4AF37] transition'>{t.home || 'Home'}</button>
          <span>→</span>
          <span className='text-[#D4AF37] font-bold'>{article.category}</span>
          <span>→</span>
          <span className='line-clamp-1'>{article.title}</span>
        </div>

        {/* Article Header */}
        <div className='space-y-4'>
          <div className='flex flex-wrap items-center gap-3 text-xs text-neutral-400'>
            <span className='bg-[#D4AF37] text-neutral-950 px-3 py-1 rounded font-black uppercase tracking-wider text-[10px]'>
              {article.category}
            </span>
            <span className='flex items-center gap-1'><Calendar className='w-3.5 h-3.5 text-[#D4AF37]' /> {article.publishedAt}</span>
            <span>•</span>
            <span className='flex items-center gap-1'><Clock className='w-3.5 h-3.5 text-[#D4AF37]' /> {article.readTime}</span>
            <span>•</span>
            <span>{article.views.toLocaleString()} {t.reads || 'Reads'}</span>
          </div>

          <h1 className='text-3xl sm:text-5xl font-extrabold font-serif leading-tight text-neutral-900 dark:text-white'>
            {article.title}
          </h1>

          <p className='text-lg sm:text-xl font-medium text-neutral-600 dark:text-neutral-300 leading-relaxed font-serif'>
            {article.subheadline}
          </p>

          {/* Author Box & Share Toolbar */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-y border-neutral-200 dark:border-neutral-800'>
            <div className='flex items-center space-x-3 rtl:space-x-reverse'>
              <img src={article.author.avatar} alt={article.author.name} className='w-12 h-12 rounded-full object-cover shadow border border-neutral-800' />
              <div>
                <h4 className='font-bold text-sm text-neutral-900 dark:text-white'>{article.author.name}</h4>
                <p className='text-xs text-neutral-400'>{article.author.role}</p>
              </div>
            </div>
            
            {/* Social Share Buttons */}
            <div className='flex items-center space-x-2 rtl:space-x-reverse'>
              <span className='text-xs text-neutral-400 hidden md:inline'>{t.share || 'Share'}:</span>
              
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='p-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-[#1877F2] hover:text-white rounded border border-neutral-200 dark:border-neutral-800 transition cursor-pointer flex items-center justify-center' title='Share on Facebook'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'><path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/></svg>
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target='_blank' rel='noopener noreferrer' aria-label='X' className='p-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-black hover:text-white rounded border border-neutral-200 dark:border-neutral-800 transition cursor-pointer flex items-center justify-center' title='Share on X'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'><path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/></svg>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='p-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-[#0A66C2] hover:text-white rounded border border-neutral-200 dark:border-neutral-800 transition cursor-pointer flex items-center justify-center' title='Share on LinkedIn'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/></svg>
              </a>
              <a href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`} target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' className='p-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-[#25D366] hover:text-neutral-950 rounded border border-neutral-200 dark:border-neutral-800 transition cursor-pointer flex items-center justify-center' title='Share on WhatsApp'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'><path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'/></svg>
              </a>
              <a href={`https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`} target='_blank' rel='noopener noreferrer' aria-label='Telegram' className='p-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-[#229ED9] hover:text-white rounded border border-neutral-200 dark:border-neutral-800 transition cursor-pointer flex items-center justify-center' title='Share on Telegram'>
                <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'><path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.261.26-.536.26l.21-3.05 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.46c.537-.195 1.006.13.824 1.056z'/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Image with Zoom & Credits */}
        <div className='space-y-2'>
          <div onClick={() => setLightboxImg(article.image)} className='relative group rounded-2xl overflow-hidden shadow-xl max-h-[500px] border border-neutral-800 cursor-pointer'>
            <img src={article.image} alt={article.title} className='w-full h-full object-cover group-hover:scale-102 transition duration-500' />
            <div className='absolute bottom-3 right-3 bg-neutral-950/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition shadow'>
              <ZoomIn className='w-4 h-4 text-[#D4AF37]' />
            </div>
            <span className='absolute top-3 left-3 bg-neutral-950/80 text-white text-[10px] font-bold px-2.5 py-1 rounded'>
              Photo: Getty Images / Reuters Global Wire
            </span>
          </div>
          <p className='text-xs text-neutral-400 italic text-center'>{article.imageCaption}</p>
        </div>

        {/* AD SLOT #1: Immediately after featured image */}
        {renderAdSlot('enableSlot1', 'Slot #1 (Post-Featured Image)')}

        {/* PART 2 – MOST IMPORTANT HIGHLIGHT */}
        <div className='bg-[#151515] border-l-4 border-[#D4AF37] p-6 rounded-r-2xl space-y-3 text-white shadow-lg'>
          <div className='flex items-center gap-2 text-[#D4AF37] font-black text-xs uppercase tracking-widest'>
            <Flame className='w-4 h-4' />
            <span>Most Important Development</span>
          </div>
          <p className='text-sm sm:text-base font-serif leading-relaxed text-neutral-200'>
            {article.subheadline} This landmark agreement establishes rigorous international enforcement mechanisms that directly impact global supply chains and sovereign climate funds.
          </p>
        </div>

        {/* AD SLOT #2: Between Most Important and At a Glance */}
        {renderAdSlot('enableSlot2', 'Slot #2 (Post-Most Important)')}

        {/* PART 3 & 4 – AT A GLANCE & KEY TAKEAWAYS */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3'>
            <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
              <Info className='w-4 h-4' /> At a Glance
            </h3>
            <ul className='space-y-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans'>
              <li><strong className='text-neutral-900 dark:text-white'>What:</strong> Historic consensus reached on advanced frameworks.</li>
              <li><strong className='text-neutral-900 dark:text-white'>Where:</strong> Geneva Plenary Hall, Switzerland.</li>
              <li><strong className='text-neutral-900 dark:text-white'>Who:</strong> Delegates from 195 participating nations.</li>
              <li><strong className='text-neutral-900 dark:text-white'>Impact:</strong> Multi-billion dollar green transition funding.</li>
            </ul>
          </div>

          <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3'>
            <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
              <CheckCircle2 className='w-4 h-4' /> Key Takeaways
            </h3>
            <ol className='list-decimal list-inside space-y-2 text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed'>
              <li>Binding net-zero timelines established across industrial economies by 2045.</li>
              <li>Introduction of automated carbon border adjustment mechanisms.</li>
              <li>Establishment of a $500 billion resilience fund for vulnerable coastal states.</li>
              <li>Direct trade tribunal penalties for non-compliant jurisdictions.</li>
            </ol>
          </div>
        </div>

        {/* AD SLOT #3: Between At a Glance and Table of Contents */}
        {renderAdSlot('enableSlot3', 'Slot #3 (Pre-TOC)')}

        {/* PART 5 – TABLE OF CONTENTS */}
        <div className='bg-neutral-100 dark:bg-neutral-900/60 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-3'>
          <h3 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
            <ListOrdered className='w-4 h-4' /> Table of Contents
          </h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300'>
            <li><a href='#section-1' className='hover:text-[#D4AF37] transition'>1. Executive Summary &amp; Diplomatic Background</a></li>
            <li><a href='#section-2' className='hover:text-[#D4AF37] transition'>2. Enforcement Mechanisms &amp; Penalties</a></li>
            <li><a href='#section-3' className='hover:text-[#D4AF37] transition'>3. Market Reaction &amp; Private Capital Redirection</a></li>
            <li><a href='#section-4' className='hover:text-[#D4AF37] transition'>4. Sources &amp; Official References</a></li>
          </ul>
        </div>

        {/* AD SLOT #4: Pre-Body */}
        {renderAdSlot('enableSlot4', 'Slot #4 (Pre-Body)')}

        {/* Article Body Content */}
        <div className={`space-y-6 text-neutral-800 dark:text-neutral-200 leading-relaxed font-serif ${
          fontSize === 'xlarge' ? 'text-xl' : fontSize === 'large' ? 'text-lg' : 'text-base'
        }`}>
          <h2 id='section-1' className='text-2xl font-bold font-serif pt-4 text-neutral-900 dark:text-white'>1. Executive Summary &amp; Diplomatic Background</h2>
          {article.content.slice(0, 1).map((paragraph, idx) => (
            <p key={idx} className='first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-[#D4AF37] leading-relaxed'>
              {paragraph}
            </p>
          ))}

          {/* AD SLOT #5: Mid-Body */}
          {renderAdSlot('enableSlot5', 'Slot #5 (Mid-Body)')}

          <h2 id='section-2' className='text-2xl font-bold font-serif pt-4 text-neutral-900 dark:text-white'>2. Enforcement Mechanisms &amp; Penalties</h2>
          {article.content.slice(1, 3).map((paragraph, idx) => (
            <p key={idx} className='leading-relaxed'>
              {paragraph}
            </p>
          ))}

          {/* Facts & Figures Callout Box */}
          <div className='my-6 p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl space-y-3 font-sans'>
            <div className='flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider'>
              <Sparkles className='w-4 h-4' /> Important Facts &amp; Figures
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
              <div className='bg-white dark:bg-[#080808] p-3 rounded-xl border border-neutral-200 dark:border-neutral-800'>
                <span className='block text-xl font-black text-[#D4AF37]'>195</span>
                <span className='text-[10px] text-neutral-400 uppercase'>Nations Signed</span>
              </div>
              <div className='bg-white dark:bg-[#080808] p-3 rounded-xl border border-neutral-200 dark:border-neutral-800'>
                <span className='block text-xl font-black text-[#D4AF37]'>$500B</span>
                <span className='text-[10px] text-neutral-400 uppercase'>Resilience Fund</span>
              </div>
              <div className='bg-white dark:bg-[#080808] p-3 rounded-xl border border-neutral-200 dark:border-neutral-800'>
                <span className='block text-xl font-black text-[#D4AF37]'>2045</span>
                <span className='text-[10px] text-neutral-400 uppercase'>Net-Zero Target</span>
              </div>
              <div className='bg-white dark:bg-[#080808] p-3 rounded-xl border border-neutral-200 dark:border-neutral-800'>
                <span className='block text-xl font-black text-[#D4AF37]'>31st</span>
                <span className='text-[10px] text-neutral-400 uppercase'>Global Summit</span>
              </div>
            </div>
          </div>

          {/* Interactive Glossary Term Explanation */}
          <div className='p-4 bg-neutral-50 dark:bg-[#151515] rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs space-y-2 font-sans'>
            <span className='font-bold uppercase tracking-wider text-[#D4AF37]'>Explain Technical Terms</span>
            <div className='flex flex-wrap gap-2 pt-1'>
              {Object.keys(glossaryTerms).map((term) => (
                <button
                  key={term}
                  onClick={() => setActiveTerm(activeTerm === term ? null : term)}
                  className={`px-3 py-1 rounded border transition cursor-pointer text-xs ${activeTerm === term ? 'bg-[#D4AF37] text-neutral-950 font-bold border-[#D4AF37]' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-800'}`}
                >
                  {term}
                </button>
              ))}
            </div>
            {activeTerm && (
              <p className='p-3 bg-white dark:bg-[#080808] rounded border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 mt-2 font-sans'>
                <strong>{activeTerm}:</strong> {glossaryTerms[activeTerm]}
              </p>
            )}
          </div>
        </div>

        {/* AD SLOT #6: Pre-Correction */}
        {renderAdSlot('enableSlot6', 'Slot #6 (Pre-Correction)')}

        {/* CORRECTIONS & SOURCES */}
        <div className='space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800'>
          <div className='bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-xs space-y-1 font-sans'>
            <span className='font-bold uppercase tracking-wider text-amber-500'>Correction &amp; Update Notice</span>
            <p className='text-neutral-700 dark:text-neutral-300'>
              <strong>Updated:</strong> Nov 13, 2026 at 14:30 UTC — Clarified that financial penalties for non-compliance are backed by international trade tribunals.
            </p>
          </div>

          <div id='section-4' className='bg-neutral-50 dark:bg-[#151515] p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-3 font-sans'>
            <h4 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
              <ExternalLink className='w-4 h-4' /> Sources &amp; Official References
            </h4>
            <ul className='space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400'>
              <li><a href='#' className='hover:text-[#D4AF37] underline'>UN Framework Convention on Climate Change (UNFCCC) - Press Release</a></li>
              <li><a href='#' className='hover:text-[#D4AF37] underline'>Geneva Diplomatic Record Vol. XXXIV</a></li>
              <li><a href='#' className='hover:text-[#D4AF37] underline'>Global Carbon Pricing Tribunal Treaty Documents</a></li>
            </ul>
          </div>
        </div>

        {/* AD SLOT #7: Pre-Author Profile */}
        {renderAdSlot('enableSlot7', 'Slot #7 (Pre-Author Profile)')}

        {/* Author Full Bio Box */}
        <div className='bg-neutral-50 dark:bg-[#151515] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center gap-5'>
          <img src={article.author.avatar} alt={article.author.name} className='w-20 h-20 rounded-full object-cover shadow-md border-2 border-[#D4AF37]' />
          <div className='space-y-1 text-center sm:text-left font-sans'>
            <span className='text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]'>Bureau Correspondent</span>
            <h3 className='text-lg font-bold text-neutral-900 dark:text-white'>{article.author.name}</h3>
            <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed'>{article.author.bio}</p>
          </div>
        </div>

        {/* Article Like Button & Counter */}
        <div className='flex items-center justify-center py-6 border-y border-neutral-200 dark:border-neutral-800'>
          <button
            onClick={handleLikeArticle}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs transition cursor-pointer shadow-sm ${
              isLiked ? 'bg-[#D4AF37] text-neutral-950' : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-[#D4AF37]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>{isLiked ? 'Dispatch Liked' : 'Applaud Dispatch'} ({likeCount})</span>
          </button>
        </div>

        {/* Previous / Next Article Navigation */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
          {prevArticle ? (
            <button onClick={() => { window.scrollTo(0,0); onSelectArticle(prevArticle); }} className='text-left p-4 rounded-xl bg-neutral-50 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800 hover:border-[#D4AF37] transition cursor-pointer group space-y-1 font-sans'>
              <span className='text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider'>← Previous Dispatch</span>
              <h4 className='text-xs font-bold line-clamp-1 group-hover:text-[#D4AF37] transition'>{prevArticle.title}</h4>
            </button>
          ) : <div />}
          
          {nextArticle ? (
            <button onClick={() => { window.scrollTo(0,0); onSelectArticle(nextArticle); }} className='text-right p-4 rounded-xl bg-neutral-50 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-800 hover:border-[#D4AF37] transition cursor-pointer group space-y-1 font-sans sm:ml-auto w-full'>
              <span className='text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider'>Next Dispatch →</span>
              <h4 className='text-xs font-bold line-clamp-1 group-hover:text-[#D4AF37] transition'>{nextArticle.title}</h4>
            </button>
          ) : <div />}
        </div>

        {/* AD SLOT #8: Pre-Related News */}
        {renderAdSlot('enableSlot8', 'Slot #8 (Pre-Related News)')}

        {/* Related News */}
        {relatedArticles.length > 0 && (
          <div className='pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-6'>
            <h3 className='text-xl font-bold font-serif text-neutral-900 dark:text-white'>{t.relatedDispatches || 'Related International Dispatches'}</h3>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
              {relatedArticles.map((rel) => (
                <div key={rel.id} onClick={() => { window.scrollTo(0, 0); onSelectArticle(rel); }} className='bg-white dark:bg-[#151515] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-[#D4AF37] transition cursor-pointer group flex flex-col justify-between shadow-sm'>
                  <div>
                    <img src={rel.image} alt={rel.title} className='w-full h-36 object-cover' />
                    <div className='p-4 space-y-2 font-sans'>
                      <span className='text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider'>{rel.category}</span>
                      <h4 className='text-sm font-bold font-serif line-clamp-2 group-hover:text-[#D4AF37] transition'>{rel.title}</h4>
                    </div>
                  </div>
                  <div className='px-4 pb-4 text-[10px] text-neutral-400 flex items-center gap-1 font-sans'>
                    <Clock className='w-3 h-3 text-[#D4AF37]' /> {rel.readTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AD SLOT #9: Pre-Comments */}
        {renderAdSlot('enableSlot9', 'Slot #9 (Pre-Comments)')}

        {/* Native Blogger Comments Section with Replies, Likes, & Reports */}
        <div className='pt-10 border-t border-neutral-200 dark:border-neutral-800 space-y-6 font-sans' id='comments'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-bold font-serif flex items-center gap-2 text-neutral-900 dark:text-white'>
              <MessageSquare className='w-5 h-5 text-[#D4AF37]' />
              <span>{t.discussion || 'Discussion'} ({comments.length})</span>
            </h3>
            <span className='text-xs text-neutral-400 font-medium'>Powered by Blogger Native Comments</span>
          </div>

          <div className='space-y-4'>
            {comments.map((c) => (
              <div key={c.id} className='bg-neutral-50 dark:bg-[#151515] p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 space-y-3 shadow-xs'>
                <div className='flex items-center justify-between'>
                  <span className='font-bold text-xs flex items-center gap-1.5 text-neutral-900 dark:text-white'>
                    <User className='w-3.5 h-3.5 text-[#D4AF37]' /> {c.author}
                  </span>
                  <span className='text-[10px] text-neutral-400'>{c.time}</span>
                </div>
                
                {c.reported ? (
                  <p className='text-xs italic text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-2 rounded'>Comment flagged for moderation review.</p>
                ) : (
                  <p className='text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed'>{c.text}</p>
                )}

                <div className='flex items-center space-x-4 text-[11px] text-neutral-400 pt-1'>
                  <button onClick={() => handleLikeComment(c.id)} className='flex items-center gap-1 hover:text-[#D4AF37] transition cursor-pointer'>
                    <ThumbsUp className='w-3 h-3' /> Like ({c.likes})
                  </button>
                  <button onClick={() => setReplyingTo(replyingTo === c.id ? null : c.id)} className='flex items-center gap-1 hover:text-[#D4AF37] transition cursor-pointer'>
                    <CornerDownRight className='w-3 h-3' /> Reply
                  </button>
                  <button onClick={() => handleReportComment(c.id)} className='flex items-center gap-1 hover:text-red-400 transition cursor-pointer ml-auto'>
                    <Flag className='w-3 h-3' /> Report
                  </button>
                </div>

                {/* Render Nested Replies */}
                {c.replies && c.replies.length > 0 && (
                  <div className='pl-6 mt-3 space-y-2 border-l-2 border-[#D4AF37]/30'>
                    {c.replies.map((rep: any) => (
                      <div key={rep.id} className='bg-white dark:bg-[#080808] p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-1 text-xs'>
                        <div className='flex justify-between font-bold text-neutral-800 dark:text-neutral-200'>
                          <span>{rep.author}</span>
                          <span className='text-[10px] text-neutral-400 font-normal'>{rep.time}</span>
                        </div>
                        <p className='text-neutral-600 dark:text-neutral-400'>{rep.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reply Form */}
                {replyingTo === c.id && (
                  <form onSubmit={(e) => handleAddReply(c.id, e)} className='mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-2'>
                    <input type='text' placeholder='Your Name' value={replyAuthor} onChange={(e) => setReplyAuthor(e.target.value)} className='w-full px-3 py-1.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37]' required />
                    <input type='text' placeholder='Write a reply...' value={replyText} onChange={(e) => setReplyText(e.target.value)} className='w-full px-3 py-1.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37]' required />
                    <div className='flex justify-end gap-2'>
                      <button type='button' onClick={() => setReplyingTo(null)} className='px-3 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 rounded'>Cancel</button>
                      <button type='submit' className='px-4 py-1 text-xs bg-[#D4AF37] text-neutral-950 font-bold rounded'>Send Reply</button>
                    </div>
                  </form>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className='bg-neutral-100 dark:bg-[#151515] p-6 rounded-xl space-y-4 border border-neutral-200 dark:border-neutral-800 shadow-sm'>
            <h4 className='text-xs font-bold uppercase tracking-wider text-[#D4AF37]'>{t.leaveComment || 'Leave a Comment'}</h4>
            <input type='text' placeholder={t.namePlaceholder || 'Your Name or Title'} value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} className='w-full px-4 py-2.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37]' required />
            <textarea placeholder={t.commentPlaceholder || 'Share your perspective...'} value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className='w-full px-4 py-2.5 bg-white dark:bg-[#080808] text-xs rounded border border-neutral-300 dark:border-neutral-800 focus:outline-none focus:border-[#D4AF37]' required />
            <button type='submit' className='flex items-center gap-2 px-6 py-2.5 bg-[#D4AF37] text-neutral-950 text-xs font-bold rounded shadow hover:opacity-95 transition cursor-pointer'>
              <Send className='w-3.5 h-3.5' /> {t.postComment || 'Post Comment'}
            </button>
          </form>
        </div>

      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className='fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4' onClick={() => setLightboxImg(null)}>
          <div className='relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center' onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightboxImg(null)} className='absolute -top-12 right-0 p-2 text-white hover:text-[#D4AF37] transition cursor-pointer bg-neutral-900 rounded-full border border-neutral-800'>
              <X className='w-6 h-6' />
            </button>
            <img src={lightboxImg} alt='Enlarged view' className='max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-neutral-800' />
          </div>
        </div>
      )}


      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 z-40 p-3 bg-[#D4AF37] text-neutral-950 rounded-full shadow-2xl hover:opacity-90 transition cursor-pointer flex items-center justify-center'
          title='Back to Top'
        >
          <ArrowUp className='w-5 h-5' />
        </button>
      )}

      {/* Footer */}
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
              <li><button onClick={onBack} className='hover:underline'>Back to Portal</button></li>
              <li><a href='#comments' className='hover:underline'>Discussion</a></li>
              <li><a href='#' className='hover:underline'>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wider mb-3 text-[#D4AF37]'>Syndication</h4>
            <p className='text-xs text-neutral-400 mb-2'>Secure RSS and Atom feeds.</p>
            <div className='flex space-x-3 text-base text-[#D4AF37]'>
              <Globe className='w-4 h-4 cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto px-4 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500'>
          <p>&#169; 2026 VISTQORA Media Group. Official Blogger XML Theme.</p>
        </div>
      </footer>

    </div>
  );
};
