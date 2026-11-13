import { Article, Category } from '../types';

export const CATEGORIES: Category[] = [
  { name: 'World', slug: 'world', count: 142, description: 'Global affairs, geopolitics, and international relations.' },
  { name: 'India', slug: 'india', count: 98, description: 'Politics, policy, economy, and culture from South Asia.' },
  { name: 'Politics', slug: 'politics', count: 85, description: 'Elections, legislation, diplomacy, and governance.' },
  { name: 'Business & Economy', slug: 'business', count: 110, description: 'Markets, global trade, banking, and startups.' },
  { name: 'Technology & AI', slug: 'technology', count: 124, description: 'Artificial intelligence, cybersecurity, silicon, and innovation.' },
  { name: 'Science & Education', slug: 'science', count: 64, description: 'Space exploration, climate research, and academic breakthroughs.' },
  { name: 'Sports', slug: 'sports', count: 92, description: 'International tournaments, football, cricket, and athletics.' },
  { name: 'Entertainment', slug: 'entertainment', count: 75, description: 'Cinema, arts, streaming, and global culture.' },
  { name: 'Health & Lifestyle', slug: 'health', count: 53, description: 'Public health, longevity, medicine, and wellness.' },
  { name: 'Photo Gallery', slug: 'photo', count: 40, description: 'Visual storytelling and award-winning photojournalism.' },
  { name: 'Video News', slug: 'video', count: 35, description: 'Documentaries, interviews, and breaking video reports.' }
];

export const LANGUAGES = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी (Hindi)', dir: 'ltr' },
  { code: 'ar', name: 'العربية (Arabic)', dir: 'rtl' },
  { code: 'es', name: 'Español (Spanish)', dir: 'ltr' },
  { code: 'fr', name: 'Français (French)', dir: 'ltr' },
  { code: 'de', name: 'Deutsch (German)', dir: 'ltr' },
  { code: 'zh', name: '中文 (Chinese)', dir: 'ltr' },
  { code: 'ja', name: '日本語 (Japanese)', dir: 'ltr' },
  { code: 'pt', name: 'Português (Portuguese)', dir: 'ltr' },
  { code: 'ru', name: 'Русский (Russian)', dir: 'ltr' },
  { code: 'ur', name: 'اردو (Urdu)', dir: 'rtl' }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Global Climate Summit Reaches Historic Consensus on Advanced Carbon Neutrality Frameworks',
    subheadline: 'Delegates from 195 nations sign binding treaty establishing multi-billion dollar green transition funds for developing economies.',
    content: [
      'GENEVA — Following two weeks of intense round-the-clock negotiations, delegates at the 31st Global Climate Summit have finalized a landmark treaty that binds participating industrial economies to rigorous net-zero timelines by 2045.',
      'The accord, hailed by environmental economists as the most consequential diplomatic achievement since the Paris Agreement, introduces automated carbon border adjustment mechanisms and establishes a $500 billion resilience fund for vulnerable coastal states.',
      '“We have moved past empty rhetoric into verifiable enforcement,” announced Secretary-General Elena Vance during the plenary closing ceremony. “For the first time, financial penalties for non-compliance are backed by international trade tribunals.”',
      'Market reaction was immediate, with renewable energy futures surging across European and Asian bourses while fossil fuel equities experienced measured recalibrations. Industry analysts project over $4 trillion in private capital redirection toward next-generation green grid infrastructure over the coming decade.'
    ],
    category: 'World',
    categorySlug: 'world',
    author: {
      name: 'Marcus Vance',
      role: 'Senior Diplomatic Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
      bio: 'Marcus Vance covers global diplomacy, international summits, and geopolitical alliances from Geneva.'
    },
    publishedAt: '2 hours ago',
    updatedAt: '1 hour ago',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'Delegates gather at the plenary hall in Geneva for the final vote on the global climate transition pact.',
    isFeatured: true,
    isBreaking: true,
    views: 24500,
    tags: ['Climate', 'Diplomacy', 'Global Economy', 'UN'],
    language: 'en'
  },
  {
    id: 'art-2',
    title: 'Quantum Computing Breakthrough: Silicon-Based Processors Achieve Error-Corrected Supremacy',
    subheadline: 'Researchers unveil a 1,024 physical qubit architecture capable of running complex pharmaceutical simulations without decoherence.',
    content: [
      'ZURICH — In a milestone announcement that rewrites the timeline of computational physics, an international consortium of researchers has demonstrated a fault-tolerant quantum processor operating with zero logical error accumulation.',
      'Unlike previous noisy intermediate-scale quantum (NISQ) devices that required cumbersome cryogenic shielding and suffered from rapid quantum bit degradation, the new "Aether-IV" architecture utilizes enriched silicon-28 lattice traps.',
      '“We have crossed the threshold from experimental curiosity to industrial utility,” said Dr. Hiroshi Tanaka, lead director at the Institute for Advanced Quantum Engineering. “Simulations that would have taken classical supercomputers four millennia were executed in under twelve minutes.”',
      'Pharmaceutical giants and cryptographic institutions have already queued for cloud access, signaling an imminent transformation in molecular drug discovery and secure post-quantum encryption standards.'
    ],
    category: 'Technology & AI',
    categorySlug: 'technology',
    author: {
      name: 'Dr. Aris Thorne',
      role: 'Technology & AI Bureau Chief',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      bio: 'Dr. Aris Thorne writes on artificial intelligence, quantum computing, and deep tech futures.'
    },
    publishedAt: '4 hours ago',
    updatedAt: '3 hours ago',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'The dilution refrigerator housing the newly unveiled 1,024 qubit silicon processor in Zurich.',
    isFeatured: false,
    isEditorPick: true,
    isTrending: true,
    views: 18900,
    tags: ['Quantum', 'Technology', 'AI', 'Silicon'],
    language: 'en'
  },
  {
    id: 'art-3',
    title: 'India Semiconductor Mission Accelerates With Mega Fabrication Plant Groundbreaking in Gujarat',
    subheadline: 'A $12 billion joint venture aims to supply 28nm and 40nm automotive chips to global supply chains by late 2027.',
    content: [
      'GANDHINAGAR — Laying the cornerstone for what is envisioned as South Asia’s premier semiconductor manufacturing cluster, government leaders and tech executives broke ground on the Gujarat Advanced Fab Facility today.',
      'The facility represents a cornerstone of India’s technological self-reliance initiative, combining state subsidies with cutting-edge cleanroom robotics and sustainable water recycling systems.',
      'Local officials noted that the ecosystem will generate over 25,000 high-skilled engineering jobs and anchor domestic electronics manufacturing for electric vehicles, telecommunications, and industrial automation.'
    ],
    category: 'India',
    categorySlug: 'india',
    author: {
      name: 'Priya Sharma',
      role: 'New Delhi Bureau Chief',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      bio: 'Priya Sharma covers Indian policy, economic growth, and technological transformation.'
    },
    publishedAt: '5 hours ago',
    updatedAt: '4 hours ago',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'Artists rendering of the proposed semiconductor fabrication cleanroom complex in Gujarat.',
    isFeatured: false,
    isEditorPick: true,
    isMostRead: true,
    views: 31200,
    tags: ['India', 'Semiconductors', 'Economy', 'Manufacturing'],
    language: 'en'
  },
  {
    id: 'art-4',
    title: 'Central Banks Signal Coordinated Interest Rate Recalibration Amid Stabilization in Global Inflation',
    subheadline: 'Federal Reserve, ECB, and Bank of England hint at synchronized easing cycle as core price pressures recede toward targets.',
    content: [
      'WASHINGTON — Financial markets rallied across all major indices following synchronized commentary from central bank governors indicating that the era of aggressive monetary tightening has successfully achieved its disinflationary objectives.',
      'Speaking at the annual monetary policy symposium, central bankers emphasized that future policy adjustments will remain strictly data-dependent, balancing labor market resilience against geopolitical supply chain risks.',
      'Commercial lenders immediately adjusted mortgage and corporate loan benchmarks downward, sparking renewed activity in residential real estate and venture capital syndication.'
    ],
    category: 'Business & Economy',
    categorySlug: 'business',
    author: {
      name: 'Julian Sterling',
      role: 'Global Markets Analyst',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      bio: 'Julian Sterling tracks central banking, macroeconomics, and international trade.'
    },
    publishedAt: '6 hours ago',
    updatedAt: '5 hours ago',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'Trading floor activity on Wall Street following the central bank announcements.',
    isFeatured: false,
    isTrending: true,
    views: 15400,
    tags: ['Economy', 'Banking', 'Markets', 'Inflation'],
    language: 'en'
  },
  {
    id: 'art-5',
    title: 'Artemis Lunar Habitation Module Successfully Deploys Surface Solar Micro-Grid',
    subheadline: 'Astronauts on the lunar south pole establish uninterrupted power generation for permanent scientific outposts.',
    content: [
      'HOUSTON — NASA engineers and international space agency partners confirmed the successful autonomous deployment of the first modular solar micro-grid on the lunar south pole near Shackleton Crater.',
      'The vertical solar arrays track the low-horizon sun across the lunar regolith, beaming clean energy via microwave transmission to subsurface habitation pods.',
      'This milestone ensures that crewed missions can sustain long-duration life support and in-situ resource utilization experiments without relying on consumable hydrogen fuel cells.'
    ],
    category: 'Science & Education',
    categorySlug: 'science',
    author: {
      name: 'Dr. Sarah Jenkins',
      role: 'Space Science Editor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
      bio: 'Dr. Sarah Jenkins reports on aerospace engineering, astrophysics, and space exploration.'
    },
    publishedAt: '7 hours ago',
    updatedAt: '6 hours ago',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'Simulated deployment of the vertical solar array on the lunar surface.',
    isFeatured: false,
    isEditorPick: true,
    views: 12100,
    tags: ['Space', 'NASA', 'Moon', 'Science'],
    language: 'en'
  },
  {
    id: 'art-6',
    title: 'Champions League Quarter-Final Thriller: Tactical Masterclass Secures Dramatic Extra-Time Victory',
    subheadline: 'A stunning 94th-minute volley seals a 4-3 aggregate triumph in front of a roaring sellout crowd in Munich.',
    content: [
      'MUNICH — In one of the most pulsating European knockout encounters in recent memory, FC Bayern overcame a two-goal deficit to defeat visiting giants in a breathless extra-time spectacle.',
      'The match swung on tactical substitutions and breathtaking individual brilliance, culminating in a thunderous 25-yard strike that rattled the crossbar and crossed the goalline.',
      'Managers and pundits alike praised the relentless tempo and sportsmanship displayed under intense continental pressure.'
    ],
    category: 'Sports',
    categorySlug: 'sports',
    author: {
      name: 'Mateo Fernandez',
      role: 'Global Sports Correspondent',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      bio: 'Mateo Fernandez covers international football, motorsport, and global athletic championships.'
    },
    publishedAt: '8 hours ago',
    updatedAt: '7 hours ago',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
    imageCaption: 'Fans celebrating under floodlights at the Allianz Arena following the dramatic extra-time winner.',
    isFeatured: false,
    isMostRead: true,
    views: 29800,
    tags: ['Sports', 'Football', 'Champions League', 'Munich'],
    language: 'en'
  }
];
