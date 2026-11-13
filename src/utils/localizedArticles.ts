import { Article } from '../types';

export const LOCALIZED_ARTICLES: Record<string, Article[]> = {
  en: [
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
  ],

  hi: [
    {
      id: 'art-1',
      title: 'ग्लोबल क्लाइमेट समिट में उन्नत कार्बन तटस्थता फ्रेमवर्क पर ऐतिहासिक सहमति',
      subheadline: '195 देशों के प्रतिनिधियों ने विकासशील अर्थव्यवस्थाओं के लिए बहु-अरब डॉलर के हरित संक्रमण कोष की स्थापना वाली बाध्यकारी संधि पर हस्ताक्षर किए।',
      content: [
        'जेनेवा — दो सप्ताह की गहन मैराथन वार्ताओं के बाद, 31वें वैश्विक जलवायु शिखर सम्मेलन के प्रतिनिधियों ने एक ऐतिहासिक संधि को अंतिम रूप दिया है जो भाग लेने वाली औद्योगिक अर्थव्यवस्थाओं को 2045 तक कड़े शुद्ध-शून्य समयसीमा से बांधती है।',
        'पर्यावरण अर्थशास्त्रियों द्वारा पेरिस समझौते के बाद से सबसे बड़ी कूटनीतिक उपलब्धि के रूप में सराहा गया यह समझौता, स्वचालित कार्बन सीमा समायोजन तंत्र पेश करता है और कमजोर तटीय राज्यों के लिए $500 बिलियन का लचीलापन कोष स्थापित करता है।',
        'महासचिव एलेना वेंस ने पूर्ण समापन समारोह के दौरान घोषणा की, "हम अब खाली बयानबाजी से आगे बढ़कर सत्यापन योग्य प्रवर्तन की ओर बढ़ चुके हैं।" "पहली बार, अनुपालन न करने पर वित्तीय दंड को अंतर्राष्ट्रीय व्यापार न्यायाधिकरणों का समर्थन प्राप्त है।"',
        'बाजार की प्रतिक्रिया तात्कालिक थी, यूरोपीय और एशियाई शेयर बाजारों में नवीकरणीय ऊर्जा फ्यूचर्स में तेजी आई जबकि जीवाश्म ईंधन इक्विटी में मापा गया सुधार देखा गया। उद्योग विश्लेषकों का अनुमान है कि आगामी दशक में अगली पीढ़ी के हरित ग्रिड बुनियादी ढांचे की ओर $4 ट्रिलियन से अधिक का निजी पूंजी पुनर्निर्देशन होगा।'
      ],
      category: 'विश्व',
      categorySlug: 'world',
      author: {
        name: 'मार्क्स वेंस',
        role: 'वरिष्ठ कूटनीतिक संपादक',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'मार्क्स वेंस जेनेवा से वैश्विक कूटनीति, अंतर्राष्ट्रीय शिखर सम्मेलनों और भू-राजनीतिक गठबंधनों को कवर करते हैं।'
      },
      publishedAt: '2 घंटे पहले',
      updatedAt: '1 घंटा पहले',
      readTime: '4 मिनट पढ़ें',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'वैश्विक जलवायु संक्रमण समझौते पर अंतिम मतदान के लिए जेनेवा में पूर्ण हॉल में एकत्र प्रतिनिधि।',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['जलवायु', 'कूटनीति', 'वैश्विक अर्थव्यवस्था', 'सं'],
      language: 'hi'
    },
    {
      id: 'art-2',
      title: 'क्वांटम कंप्यूटिंग सफलता: सिलिकॉन-आधारित प्रोसेसर ने त्रुटि-सुधार सुप्रीमसी हासिल की',
      subheadline: 'शोधकर्ताओं ने 1,024 भौतिक क्विबिट वास्तुकला का अनावरण किया जो बिना किसी डीकोहेरेंस के जटिल फार्मास्युटिकल सिमुलेशन चलाने में सक्षम है।',
      content: [
        'ज्यूरिख — कम्प्यूटेशनल भौतिकी की समयरेखा को फिर से लिखने वाली एक मील का पत्थर घोषणा में, शोधकर्ताओं के एक अंतरराष्ट्रीय संघ ने शून्य तार्किक त्रुटि संचय के साथ काम करने वाले फॉल्ट-टॉलरेंट क्वांटम प्रोसेसर का प्रदर्शन किया है।',
        'पिछले शोरगुल वाले मध्यवर्ती-पैमाने के क्वांटम (NISQ) उपकरणों के विपरीत, जिन्हें बोझिल क्रायोजेनिक परिरक्षण की आवश्यकता होती थी और जो तेजी से क्वांटम बिट डिग्रेडेशन से पीड़ित थे, नई "ईथर-IV" वास्तुकला समृद्ध सिलिकॉन-28 लैटिस ट्रैप का उपयोग करती है।',
        'एडवांस्ड क्वांटम इंजीनियरिंग संस्थान के मुख्य निदेशक डॉ. हिरोश तानाका ने कहा, "हमने प्रयोगात्मक जिज्ञासा से औद्योगिक उपयोगिता की सीमा पार कर ली है।" "जिन सिमुलेशन में क्लासिकल सुपरकंप्यूटर को चार सहस्र वर्ष लगते, उन्हें बारह मिनट से कम समय में निष्पादित किया गया।"',
        'फार्मास्युटिकल दिग्गजों और क्रिप्टोग्राफिक संस्थानों ने पहले ही क्लाउड एक्सेस के लिए कतार लगा ली है, जो आणविक दवा खोज और सुरक्षित पोस्ट-क्वांटम एन्क्रिप्शन मानकों में आसन्न परिवर्तन का संकेत देता है।'
      ],
      category: 'तकनीकी',
      categorySlug: 'technology',
      author: {
        name: 'डॉ. एरिस थॉर्न',
        role: 'प्रौद्योगिकी और एआई ब्यूरो प्रमुख',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'डॉ. एरिस थॉर्न कृत्रिम बुद्धिमत्ता, क्वांटम कंप्यूटिंग और डीप टेक भविष्य पर लिखते हैं।'
      },
      publishedAt: '4 घंटे पहले',
      updatedAt: '3 घंटे पहले',
      readTime: '5 मिनट पढ़ें',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'ज्यूरिख में नव अनावरणित 1,024 क्विबिट सिलिकॉन प्रोसेसर को रखने वाला डाइल्यूशन रेफ्रिजरेटर।',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['क्वांटम', 'तकनीकी', 'एआई', 'सिलिकॉन'],
      language: 'hi'
    },
    {
      id: 'art-3',
      title: 'गुजरात में मेगा फैब्रिकेशन प्लांट के शिलान्यास के साथ भारत सेमीकंडक्टर मिशन तेज हुआ',
      subheadline: '$12 बिलियन का संयुक्त उद्यम 2027 के अंत तक वैश्विक आपूर्ति श्रृंखलाओं को 28nm और 40nm ऑटोमोटिव चिप्स की आपूर्ति करने का लक्ष्य रखता है।',
      content: [
        'गांधीनगर — दक्षिण एशिया के प्रमुख सेमीकंडक्टर विनिर्माण क्लस्टर के रूप में परिकल्पित परियोजना के लिए आधारशिला रखते हुए, सरकारी नेताओं और तकनीकी अधिकारियों ने आज गुजरात एडवांस्ड फैब फैसिलिटी का शिलान्यास किया।',
        'यह सुविधा भारत की तकनीकी आत्मनिर्भरता पहल का एक आधारशिला है, जो अत्याधुनिक क्लीनरूम रोबोटिक्स और टिकाऊ जल पुनर्चक्रण प्रणालियों के साथ राज्य सब्सिडी को जोड़ती है।',
        'स्थानीय अधिकारियों ने उल्लेख किया कि यह पारिस्थितिकी तंत्र 25,000 से अधिक उच्च-कुशल इंजीनियरिंग नौकरियां पैदा करेगा और इलेक्ट्रिक वाहनों, दूरसंचार और औद्योगिक स्वचालन के लिए घरेलू इलेक्ट्रॉनिक्स विनिर्माण को मजबूत करेगा।'
      ],
      category: 'भारत',
      categorySlug: 'india',
      author: {
        name: 'प्रिया शर्मा',
        role: 'नई दिल्ली ब्यूरो प्रमुख',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'प्रिया शर्मा भारतीय नीति, आर्थिक विकास और तकनीकी परिवर्तन को कवर करती हैं।'
      },
      publishedAt: '5 घंटे पहले',
      updatedAt: '4 घंटे पहले',
      readTime: '3 मिनट पढ़ें',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'गुजरात में प्रस्तावित सेमीकंडक्टर फैब्रिकेशन क्लीनरूम कॉम्प्लेक्स का कलाकार प्रतिपादन।',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['भारत', 'सेमीकंडक्टर', 'अर्थव्यवस्था', 'विनिर्माण'],
      language: 'hi'
    },
    {
      id: 'art-4',
      title: 'वैश्विक मुद्रास्फीति में स्थिरता के बीच केंद्रीय बैंकों ने ब्याज दर में समन्वित कटौती का संकेत दिया',
      subheadline: 'फेडरल रिजर्व, ईसीबी और बैंक ऑफ इंग्लैंड ने समन्वित सहजता चक्र का संकेत दिया क्योंकि मुख्य मूल्य दबाव लक्ष्यों की ओर कम हो रहे हैं।',
      content: [
        'वाशिंगटन — केंद्रीय बैंक गवर्नरों की समन्वित टिप्पणियों के बाद सभी प्रमुख सूचकांकों में वित्तीय बाजार में तेजी आई, जिसमें संकेत दिया गया कि आक्रामक मौद्रिक कड़ेपन के युग ने अपने अवस्फीति उद्देश्यों को सफलतापूर्वक प्राप्त कर लिया है।',
        'वार्षिक मौद्रिक नीति संगोष्ठी में बोलते हुए, केंद्रीय बैंकरों ने इस बात पर जोर दिया कि भविष्य के नीतिगत समायोजन भू-राजनीतिक आपूर्ति श्रृंखला जोखिमों के खिलाफ श्रम बाजार के लचीलेपन को संतुलित करते हुए सख्ती से डेटा-निर्भर रहेंगे।',
        'वाणिज्यिक ऋणदाताओं ने तुरंत बंधक और कॉर्पोरेट ऋण बेंचमार्क को नीचे की ओर समायोजित किया, जिससे आवासीय रियल एस्टेट और उद्यम पूंजी सिंडिकेशन में नई गतिविधि शुरू हुई।'
      ],
      category: 'व्यापार',
      categorySlug: 'business',
      author: {
        name: 'जूलियन स्टर्लिंग',
        role: 'वैश्विक बाजार विश्लेषक',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'जूलियन स्टर्लिंग केंद्रीय बैंकिंग, मैक्रोइकॉनॉमिक्स और अंतर्राष्ट्रीय व्यापार को ट्रैक करते हैं।'
      },
      publishedAt: '6 घंटे पहले',
      updatedAt: '5 घंटे पहले',
      readTime: '4 मिनट पढ़ें',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'केंद्रीय बैंक की घोषणाओं के बाद वॉल स्ट्रीट पर ट्रेडिंग फ्लोर गतिविधि।',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['अर्थव्यवस्था', 'बैंकिंग', 'बाजार', 'मुद्रास्फीति'],
      language: 'hi'
    },
    {
      id: 'art-5',
      title: 'आर्टेमिस लूनर हैबिटेशन मॉड्यूल ने सतह पर सोलर माइक्रोग्रिड सफलतापूर्वक स्थापित किया',
      subheadline: 'चंद्रमा के दक्षिणी ध्रुव पर अंतरिक्ष यात्रियों ने स्थायी वैज्ञानिक चौकियों के लिए निर्बाध बिजली उत्पादन स्थापित किया।',
      content: [
        'ह्यूस्टन — नासा के इंजीनियरों और अंतरराष्ट्रीय अंतरिक्ष एजेंसी के भागीदारों ने शेकलटन क्रेटर के पास चंद्रमा के दक्षिणी ध्रुव पर पहले मॉड्यूलर सोलर माइक्रोग्रिड की सफल स्वायत्त तैनाती की पुष्टि की।',
        'ऊर्ध्वाधर सौर सरणी चंद्र रेसोलिथ में कम क्षितिज वाले सूर्य को ट्रैक करती है, माइक्रोवेव संचरण के माध्यम से उप-सतह आवास फली तक स्वच्छ ऊर्जा बीम करती है।',
        'यह मील का पत्थर यह सुनिश्चित करता है कि क्रूेड मिशन उपभोग योग्य हाइड्रोजन ईंधन कोशिकाओं पर निर्भर किए बिना लंबे समय तक चलने वाले जीवन समर्थन और इन-सिटू संसाधन उपयोग प्रयोगों को बनाए रख सकें।'
      ],
      category: 'विज्ञान',
      categorySlug: 'science',
      author: {
        name: 'डॉ. सारा जेनकिंस',
        role: 'अंतरिक्ष विज्ञान संपादक',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'डॉ. सारा जेनकिंस एयरोस्पेस इंजीनियरिंग, खगोल भौतिकी और अंतरिक्ष अन्वेषण पर रिपोर्ट करती हैं।'
      },
      publishedAt: '7 घंटे पहले',
      updatedAt: '6 घंटे पहले',
      readTime: '3 मिनट पढ़ें',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'चंद्र सतह पर ऊर्ध्वाधर सौर सरणी की अनुकरणित तैनाती।',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['अंतरिक्ष', 'नासा', 'चंद्रमा', 'विज्ञान'],
      language: 'hi'
    },
    {
      id: 'art-6',
      title: 'चैंपियंस लीग क्वार्टर-फाइनल थ्रिलर: म्यूनिख में रोमांचक एक्स्ट्रा-टाइम जीत',
      subheadline: 'म्यूनिख में एक खड़खड़ाती भीड़ के सामने एक आश्चर्यजनक 94वें मिनट की वॉली ने 4-3 के कुल जमावड़े की जीत को सील कर दिया।',
      content: [
        'म्यूनिख — हाल की यादों में सबसे रोमांचक यूरोपीय नॉकआउट मुकाबलों में से एक में, एफसी बायर्न ने एक सांस रोक देने वाले अतिरिक्त समय के तमाशे में दो गोल के घाटे को पार करते हुए मेहमान दिग्गजों को हराया।',
        'मैच सामरिक प्रतिस्थापन और लुभावनी व्यक्तिगत प्रतिभा पर झूल गया, जो एक जोरदार 25-गज की हड़ताल के साथ समाप्त हुआ जो क्रॉसबार को हिला गया और गोललाइन को पार कर गया।',
        'प्रबंधकों और पंडितों दोनों ने तीव्र महाद्वीपीय दबाव के तहत प्रदर्शित अथक गति और खेल भावना की प्रशंसा की।'
      ],
      category: 'खेल',
      categorySlug: 'sports',
      author: {
        name: 'माटेओ फर्नांडीज',
        role: 'वैश्विक खेल संवाददाता',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'माटेओ फर्नांडीज अंतर्राष्ट्रीय फुटबॉल, मोटरस्पॉट और वैश्विक एथलेटिक चैंपियनशिप को कवर करते हैं।'
      },
      publishedAt: '8 घंटे पहले',
      updatedAt: '7 घंटे पहले',
      readTime: '3 मिनट पढ़ें',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'नाटकीय अतिरिक्त समय के विजेता के बाद एलियांज एरिना में फ्लडलाइट्स के नीचे जश्न मनाते प्रशंसक।',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['खेल', 'फुटबॉल', 'चैंपियंस लीग', 'म्यूनिख'],
      language: 'hi'
    }
  ],

  ar: [
    {
      id: 'art-1',
      title: 'قمة المناخ العالمية تتصل إلى توافق تاريخي بشأن أطر حياد الكربون المتقدمة',
      subheadline: 'مندوبون من 195 دولة يوقعون معاهدة ملزمة لتأسيس صناديق انتقال أخضر متعددة مليارات الدولارات للاقتصادات النامية.',
      content: [
        'جنيف — في أعقاب أسبوعين من المفاوضات المكثفة على مدار الساعة، اختتم مندوبو قمة المناخ العالمية الحادية والثلاثين معاهدة تاريخية تلزم الاقتصاد الصناعية المشاركة بجداول زمنية صارمة للصافي الصفري بحلول عام 2045.',
        'الاتفاق، الذي وصفه اقتصاديون بيئيون بأنه الإنجاز الدبلوماسي الأكثر أهمية منذ اتفاقية باريس، يدمج آليات تعديل حدود الكربون الآلية ويؤسس صندوق مرونة بقيمة 500 مليار دولار للدول الساحلية المعرضة للخطر.',
        'أعلنت الأمينة العامة إلينا فانس خلال حفل الختام العام: "لقد تجاوزنا الخطاب الفارغ إلى إنفاذ قابل للتحقق". "ولأول مرة، تدعم محاكم التجارة الدولية الغرامات المالية لعدم الامتثال".',
        'كان رد فعل السوق فورياً، حيث ارتفعت عقود الطاقة المتجددة الآجلة في البورصات الأوروبية والآسيوية بينما شهدت أسهم الوقود الأحفوري تعديلات مقاسة. يتوقع محللو الصناعة إعادة توجيه أكثر من 4 تريليونات دولار من رأس المال الخاص نحو البنية التحتية للشبكة الخضراء من الجيل التالي خلال العقد القادم.'
      ],
      category: 'العالم',
      categorySlug: 'world',
      author: {
        name: 'ماركوس فانس',
        role: 'محرر دبلوماسي أول',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'يغطي ماركوس فانس الدبلوماسية العالمية والقمم الدولية والتحالفات الجيوسياسية من جنيف.'
      },
      publishedAt: 'منذ ساعتين',
      updatedAt: 'منذ ساعة',
      readTime: '4 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'المندوبون يتجمعون في قاعة الجلسات العامة في جنيف للتصويت النهائي على ميثاق الانتقال المناخي العالمي.',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['المناخ', 'الدبلوماسية', 'الاقتصاد العالمي', 'الأمم المتحدة'],
      language: 'ar'
    },
    {
      id: 'art-2',
      title: 'إنجاز في الحوسبة الكمية: معالجات قائمة على السيليكون تحقق تفوقاً خالياً من الأخطاء',
      subheadline: 'الباحثون يكشفون عن بنية بابتكار 1024 كيوبت مادي قادرة على تشغيل محاكاة صيدلانية معقدة دون أي تدهور.',
      content: [
        'زيورخ — في إعلان تاريخي يعيد كتابة الجدول الزمني للفيزياء الحسابية، أظهر اتحاد دولي من الباحثين معالجاً كمومياً مقاوماً للأخطاء يعمل بتراكم أخطاء منطقية يساوي الصفر.',
        'على عكس الأجهزة الكمومية متوسطة الحجم السابقة المليئة بالضوضاء (NISQ) والتي تتطلب دروعاً مبردة ضخمة وعانت من تدهور سريع في البتات الكمومية، تستخدم بنيّة "إيثر-IV" الجديدة مصائد شبكية من السيليكون-28 المخصص.',
        'قال الدكتور هيروشي تانaka، المدير الرئيسي في معهد هندسة الكم المتقدمة: "لقد عبرنا عتبة الفضول التجريبي إلى المنفعة الصناعية". "المحاكاة التي كانت ستستغرق الحواسيب العملاقة التقليدية أربعة آلاف عام تم تنفيذها في أقل من اثنتي عشرة دقيقة".',
        'قامت الشركات الدوائية الكبرى ومؤسسات التشفير بالفعل بالحجز للوصول السحابي، مما يشير إلى تحول وشيك في اكتشاف الأدوية الجزيئية ومعايير التشفير الآمنة لما بعد الكم.'
      ],
      category: 'تكنولوجيا',
      categorySlug: 'technology',
      author: {
        name: 'د. أريس ثورن',
        role: 'رئيس مكتب التكنولوجيا والذكاء الاصطناعي',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'يكتب د. أريس ثورن عن الذكاء الاصطناعي والحوسبة الكمية ومستقبل التكنولوجيا العميقة.'
      },
      publishedAt: 'منذ 4 ساعات',
      updatedAt: 'منذ 3 ساعات',
      readTime: '5 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'ثلاجة التخفيف التي تضم معالج السيليكون ذو 1024 كيوبت الذي تم الكشف عنه حديثاً في زيورخ.',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['الكم', 'التكنولوجيا', 'الذكاء الاصطناعي', 'السيليكون'],
      language: 'ar'
    },
    {
      id: 'art-3',
      title: 'مهمة أشباه الموصلات الهندية تسرع وتيرتها مع وضع حجر الأساس لمصنع تصنيع ضخم في غوجارات',
      subheadline: 'مشروع مشترك بقيمة 12 مليار دولار يهدف إلى توريد رقائق السيارات 28 نانومتر و40 نانومتر لسلاسل التوريد العالمية بحلول أواخر 2027.',
      content: [
        'غانديناغار — وضع القادة الحكوميون التنفيذيون التقنيون حجر الأساس لما يُتصور أنه مجمع تصنيع أشباه الموصلات الأبرز في جنوب آسيا، لترسيخ منشأة غوجارات المتقدمة اليوم.',
        'تمثل المنشأة حجر الزاوية لمبادرة الاعتماد الذاتي التكنولوجي في الهند، حيث تجمع بين الإعانات الحكومية وروبوتات غرف الأبحاث المتطورة وأنظمة إعادة تدوير المياه المستدامة.',
        'وأشار المسؤولون المحليون إلى أن النظام البيئي سيولد أكثر من 25,000 وظيفة هندسية عالية المهارة ويثبت تصنيع الإلكترونيات المحلية للسيارات الكهربائية والاتصالات والأتمتة الصناعية.'
      ],
      category: 'الهند',
      categorySlug: 'india',
      author: {
        name: 'بريا شارما',
        role: 'رئيسة مكتب نيودلهي',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'تغطي بريا شارما السياسة الهندية والنمو الاقتصادي والتحول التكنولوجي.'
      },
      publishedAt: 'منذ 5 ساعات',
      updatedAt: 'منذ 4 ساعات',
      readTime: '3 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'تصميم فني لمجمع غرف الأبحاث لتصنيع أشباه الموصلات المقترح في غوجارات.',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['الهند', 'أشباه الموصلات', 'الاقتصاد', 'التصنيع'],
      language: 'ar'
    },
    {
      id: 'art-4',
      title: 'البنوك المركزية تلمح إلى إعادة معايرة منسقة لأسعار الفائدة وسط استقرار التضخم العالمي',
      subheadline: 'احتياطي الفيدرالي والبنك المركزي الأوروبي وبنك إنجلترا تلمح إلى دورة تيسير متزامنة مع انحسار ضغوط الأسعار الأساسية نحو الأهداف.',
      content: [
        'واشنطن — انتعشت الأسواق المالية عبر جميع المؤشرات الرئيسية في أعقاب التعليقات المتزامنة من محافظي البنوك المركزية والتي تشير إلى أن عصر التشديد النقدي العدواني قد حقق بنجاح أهدافه الانكماشية.',
        'وفي حديثه في ندوة السياسة النقدية السنوية، أكد المصرفيون المركزيون أن تعديلات السياسة المستقبلية ستظل تعتمد بشكل صارم على البيانات، مما يحقق التوازن بين مرونة سوق العمل ومخاطر سلسلة التوريد الجيوسياسية.',
        'وقد قام المقرضون التجاريون على الفور بتعديل معايير القروض العقارية وقروض الشركات نحو الانخفاض، مما أدى إلى إثارة نشاط متجدد في العقارات السكنية وتكتلات رأس المال الاستثماري.'
      ],
      category: 'أعمال',
      categorySlug: 'business',
      author: {
        name: 'جوليان ستيرلينغ',
        role: 'محلل الأسواق العالمية',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'يتابع جوليان ستيرلينغ الخدمات المصرفية المركزية والاقتصاد الكلي والتجارة الدولية.'
      },
      publishedAt: 'منذ 6 ساعات',
      updatedAt: 'منذ 5 ساعات',
      readTime: '4 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'نشاط قاعة التداول في وول ستريت عقب إعلانات البنك المركزي.',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['الاقتصاد', 'البنوك', 'الأسواق', 'التضخم'],
      language: 'ar'
    },
    {
      id: 'art-5',
      title: 'وحدة الإسكان القمري أرتميس تنجح في نشر شبكة شمسية مصغرة على السطح',
      subheadline: 'رواد الفضاء على القطب الجنوبي للقمر يثبتون توليد طاقة مستمر للمحطات العلمية الدائمة.',
      content: [
        'هيوستن — أكد مهندسو ناسا وشركاء وكالة الفضاء الدولية النجاح الذاتي لنشر أول شبكة شمسية مصغرة وحداتية على القطب الجنوبي للقمر بالقرب من حفرة شاكلتون.',
        'تتعقب مصفوفات الطاقة الشمسية الرأسية الشمس منخفضة الأفق عبر التربة القمرية، وتبث طاقة نظيفة عبر نقل الميكروويف إلى كبسولات السكن تحت السطحية.',
        'يضمن هذا الإنجاز أن البعثات المأهولة يمكنها الحفاظ على دعم الحياة طويل الأجل وتجارب استغلال الموارد في الموقع دون الاعتماد على خلايا وقود الهيدروجين القابلة للاستهلاك.'
      ],
      category: 'علوم',
      categorySlug: 'science',
      author: {
        name: 'د. سارة جنكينز',
        role: 'محررة علوم الفضاء',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'تكتب د. سارة جنكينز تقارير عن هندسة الفضاء الجوي والفيزياء الفلكية واستكشاف الفضاء.'
      },
      publishedAt: 'منذ 7 ساعات',
      updatedAt: 'منذ 6 ساعات',
      readTime: '3 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'نشر محاكى للمصفوفة الشمسية العمودية على سطح القمر.',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['الفضاء', 'ناسا', 'القمر', 'العلوم'],
      language: 'ar'
    },
    {
      id: 'art-6',
      title: 'إثارة ربع نهائي دوري أبطال أوروبا: فوز دراماتيكي في الوقت الضائع بميونخ',
      subheadline: 'تسديدة مذهلة في الدقيقة 94 تحسم انتصاراً إجمالياً بنتيجة 4-3 أمام حشد هائل في ميونخ.',
      content: [
        'ميونخ — في واحدة من أكثر مواجهات خروج المغلوب الأوروبية إثارة في الذاكرة الحديثة، تغلب بايرن ميونخ على تأخره بهدفين ليهزم العمالقة الضيوف في عرض إضافي مذهل لا ينسى.',
        'تأرجحت المباراة بناءً على التبديلات التكتيكية والبراعة الفردية الخاطفة للأنفاس، والتي بلغت ذروتها في تسديدة مدوية من مسافة 25 ياردة هزت العارضة وعبرت خط المرمى.',
        'أشاد المدربون والنقاد على حد سواء بالوتيرة التي لا تكل والروح الرياضية المعروضة تحت ضغط قاري شديد.'
      ],
      category: 'رياضة',
      categorySlug: 'sports',
      author: {
        name: 'ماتيو فرنانديز',
        role: 'مراسل الرياضة العالمية',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'يغطي ماتيو فرنانديز كرة القدم الدولية ورياضة السيارات بطولات الرياضة العالمية.'
      },
      publishedAt: 'منذ 8 ساعات',
      updatedAt: 'منذ 7 ساعات',
      readTime: '3 دقائق قراءة',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'الجماهير تحتفل تحت الأضواء الكاشفة في أليانز أرينا عقب هدف الفوز الدراماتيكي في الوقت الإضافي.',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['رياضة', 'كرة القدم', 'دوري أبطال أوروبا', 'ميونخ'],
      language: 'ar'
    }
  ],

  es: [
    {
      id: 'art-1',
      title: 'La Cumbre Climática Global alcanza un consenso histórico sobre marcos avanzados de neutralidad de carbono',
      subheadline: 'Delegados de 195 naciones firman un tratado vinculante que establece fondos de transición verde multimillonarios.',
      content: [
        'GINEBRA — Tras dos semanas de intensas negociaciones ininterrumpidas, los delegados en la 31ª Cumbre Climática Global han finalizado un tratado histórico que obliga a las economías industriales a plazos rigurosos de cero emisiones netas para 2045.',
        'El acuerdo, elogiado como el logro diplomático más consecuente desde el Acuerdo de París, introduce mecanismos automatizados de ajuste en frontera por carbono y establece un fondo de resiliencia de 500 mil millones de dólares.',
        '“Hemos superado la retórica vacía hacia una aplicación verificable”, anunció la Secretaria General Elena Vance.',
        'La reacción del mercado fue inmediata, con futuros de energía renovable disparándose en las bolsas europeas y asiáticas.'
      ],
      category: 'Mundo',
      categorySlug: 'world',
      author: {
        name: 'Marcus Vance',
        role: 'Editor Diplomático Senior',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'Marcus Vance cubre diplomacia global y cumbres internacionales desde Ginebra.'
      },
      publishedAt: 'hace 2 horas',
      updatedAt: 'hace 1 hora',
      readTime: '4 min de lectura',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Delegados reunidos en Ginebra para la votación final sobre el pacto de transición climática.',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['Clima', 'Diplomacia', 'Economía Global', 'ONU'],
      language: 'es'
    },
    {
      id: 'art-2',
      title: 'Avance en computación cuántica: Procesadores basados en silicio logran supremacía corregida de errores',
      subheadline: 'Investigadores revelan una arquitectura de 1,024 cúbits físicos capaz de ejecutar simulaciones complejas.',
      content: [
        'ZÚRICH — En un anuncio histórico que reescribe la física computacional, un consorcio internacional ha demostrado un procesador cuántico tolerante a fallos.',
        'Utilizando trampas de red de silicio-28 enriquecido, el nuevo sistema supera las limitaciones de ruido previas.',
        '“Hemos cruzado el umbral de la curiosidad experimental a la utilidad industrial”, afirmó el Dr. Hiroshi Tanaka.'
      ],
      category: 'Tecnología',
      categorySlug: 'technology',
      author: {
        name: 'Dr. Aris Thorne',
        role: 'Jefe de Oficina de Tecnología e IA',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'Especialista en inteligencia artificial y computación cuántica.'
      },
      publishedAt: 'hace 4 horas',
      updatedAt: 'hace 3 horas',
      readTime: '5 min de lectura',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Refrigerador de dilución que alberga el procesador de silicio.',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['Cuántica', 'Tecnología', 'IA', 'Silicio'],
      language: 'es'
    },
    {
      id: 'art-3',
      title: 'La Misión de Semiconductores de India se acelera con la colocación de la primera piedra en Gujarat',
      subheadline: 'Una empresa conjunta de $12 mil millones suministrará chips automotrices para 2027.',
      content: [
        'GANDHINAGAR — Sentando las bases para el principal clúster de fabricación de semiconductores de Asia del Sur, líderes dieron inicio a la instalación avanzada en Gujarat.',
        'El proyecto generará más de 25,000 empleos de alta ingeniería y fortalecerá la manufactura nacional.'
      ],
      category: 'India',
      categorySlug: 'india',
      author: {
        name: 'Priya Sharma',
        role: 'Jefa de Oficina en Nueva Delhi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'Cubre política y transformación tecnológica en India.'
      },
      publishedAt: 'hace 5 horas',
      updatedAt: 'hace 4 horas',
      readTime: '3 min de lectura',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Render artístico del complejo de fabricación en Gujarat.',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['India', 'Semiconductores', 'Economía', 'Manufactura'],
      language: 'es'
    },
    {
      id: 'art-4',
      title: 'Los bancos centrales señalan una recalibración coordinada de tasas de interés',
      subheadline: 'La Reserva Federal y el BCE apuntan a un ciclo de flexibilización sincronizado.',
      content: [
        'WASHINGTON — Los mercados financieros reaccionaron positivamente tras los comentarios sincronizados de los gobernadores de los bancos centrales.'
      ],
      category: 'Negocios',
      categorySlug: 'business',
      author: {
        name: 'Julian Sterling',
        role: 'Analista de Mercados Globales',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'Analiza la banca central y la macroeconomía.'
      },
      publishedAt: 'hace 6 horas',
      updatedAt: 'hace 5 horas',
      readTime: '4 min de lectura',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Actividad en Wall Street.',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['Economía', 'Banca', 'Mercados', 'Inflación'],
      language: 'es'
    },
    {
      id: 'art-5',
      title: 'El módulo de habitación lunar Artemis despliega con éxito una microrred solar',
      subheadline: 'Astronautas en el polo sur lunar establecen generación de energía ininterrumpida.',
      content: [
        'HOUSTON — Ingenieros de la NASA confirmaron el despliegue autónomo de la primera microrred solar modular en el polo sur lunar.'
      ],
      category: 'Ciencia',
      categorySlug: 'science',
      author: {
        name: 'Dra. Sarah Jenkins',
        role: 'Editora de Ciencia Espacial',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'Informa sobre ingeniería aeroespacial y exploración espacial.'
      },
      publishedAt: 'hace 7 horas',
      updatedAt: 'hace 6 horas',
      readTime: '3 min de lectura',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Despliegue simulado del panel solar lunar.',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['Espacio', 'NASA', 'Luna', 'Ciencia'],
      language: 'es'
    },
    {
      id: 'art-6',
      title: 'Emocionante partido de cuartos de final de la Liga de Campeones: victoria en la prórroga',
      subheadline: 'Una impresionante volea en el minuto 94 sella un triunfo global de 4-3 en Múnich.',
      content: [
        'MÚNICH — En un encuentro europeo vibrante, el FC Bayern superó una desventaja de dos goles para vencer a sus rivales.'
      ],
      category: 'Deportes',
      categorySlug: 'sports',
      author: {
        name: 'Mateo Fernandez',
        role: 'Corresponsal de Deportes Globales',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'Cubre fútbol internacional y campeonatos deportivos.'
      },
      publishedAt: 'hace 8 horas',
      updatedAt: 'hace 7 horas',
      readTime: '3 min de lectura',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Aficionados celebrando en el Allianz Arena.',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['Deportes', 'Fútbol', 'Champions League', 'Múnich'],
      language: 'es'
    }
  ],

  fr: [
    {
      id: 'art-1',
      title: 'Le Sommet Mondial sur le Climat parvient à un consensus historique sur les cadres de neutralité carbone',
      subheadline: 'Les délégués de 195 nations signent un traité liant les économies industrielles à des objectifs zéro net stricts d\'ici 2045.',
      content: [
        'GENÈVE — Après deux semaines de négociations intenses, les délégués ont finalisé un traité historique liant les pays industrialisés.',
        'L\'accord introduit des mécanismes d\'ajustement carbone aux frontières et un fonds de résilience de 500 milliards de dollars.'
      ],
      category: 'Monde',
      categorySlug: 'world',
      author: {
        name: 'Marcus Vance',
        role: 'Éditeur Diplomatique Principal',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'Couvre la diplomatie mondiale depuis Genève.'
      },
      publishedAt: 'il y a 2 heures',
      updatedAt: 'il y a 1 heure',
      readTime: '4 min de lecture',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Les délégués réunis à Genève.',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['Climat', 'Diplomatie', 'Économie', 'ONU'],
      language: 'fr'
    },
    {
      id: 'art-2',
      title: 'Avancée majeure en informatique quantique : des processeurs en silicium atteignent la suprématie',
      subheadline: 'Des chercheurs dévoilent une architecture de 1 024 qubits physiques.',
      content: [
        'ZURICH — Annonce historique en physique computationnelle : un processeur quantique tolérant aux pannes.'
      ],
      category: 'Technologie',
      categorySlug: 'technology',
      author: {
        name: 'Dr. Aris Thorne',
        role: 'Chef du Bureau Tech & IA',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'Spécialiste de l\'IA et du calcul quantique.'
      },
      publishedAt: 'il y a 4 heures',
      updatedAt: 'il y a 3 heures',
      readTime: '5 min de lecture',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Réfrigérateur à dilution à Zurich.',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['Quantique', 'Technologie', 'IA', 'Silicium'],
      language: 'fr'
    },
    {
      id: 'art-3',
      title: 'La mission indienne sur les semi-conducteurs s\'accélère avec une usine géante au Gujarat',
      subheadline: 'Une coentreprise de 12 milliards de dollars vise à fournir des puces automobiles d\'ici fin 2027.',
      content: [
        'GANDHINAGAR — Lancement du pôle de fabrication de semi-conducteurs le plus important d\'Asie du Sud.'
      ],
      category: 'Inde',
      categorySlug: 'india',
      author: {
        name: 'Priya Sharma',
        role: 'Chef du Bureau de New Delhi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'Couvre l\'économie et la politique en Inde.'
      },
      publishedAt: 'il y a 5 heures',
      updatedAt: 'il y a 4 heures',
      readTime: '3 min de lecture',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Rendu du complexe au Gujarat.',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['Inde', 'Semi-conducteurs', 'Économie'],
      language: 'fr'
    },
    {
      id: 'art-4',
      title: 'Les banques centrales signalent un réajustement coordonné des taux d\'intérêt',
      subheadline: 'La Réserve fédérale et la BCE évoquent un assouplissement synchronisé.',
      content: [
        'WASHINGTON — Les marchés financiers réagissent favorablement aux annonces monétaires.'
      ],
      category: 'Économie',
      categorySlug: 'business',
      author: {
        name: 'Julian Sterling',
        role: 'Analyste des Marchés Mondiaux',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'Spécialiste de la macroéconomie.'
      },
      publishedAt: 'il y a 6 heures',
      updatedAt: 'il y a 5 heures',
      readTime: '4 min de lecture',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Wall Street.',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['Économie', 'Banques', 'Marchés'],
      language: 'fr'
    },
    {
      id: 'art-5',
      title: 'Le module d\'habitation lunaire Artemis déploie un micro-réseau solaire',
      subheadline: 'Les astronautes installent une production d\'énergie continue au pôle sud.',
      content: [
        'HOUSTON — La NASA confirme le déploiement réussi du premier micro-réseau solaire lunaire.'
      ],
      category: 'Science',
      categorySlug: 'science',
      author: {
        name: 'Dr. Sarah Jenkins',
        role: 'Rédactrice en chef Sciences',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'Rapporte sur l\'ingénierie aérospatiale.'
      },
      publishedAt: 'il y a 7 heures',
      updatedAt: 'il y a 6 heures',
      readTime: '3 min de lecture',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Panneaux solaires lunaires.',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['Espace', 'NASA', 'Lune'],
      language: 'fr'
    },
    {
      id: 'art-6',
      title: 'Thriller en quart de finale de la Ligue des Champions : victoire en prolongation',
      subheadline: 'Une volée à la 94e minute scelle un triomphe 4-3 à Munich.',
      content: [
        'MUNICH — Le FC Bayern s\'impose au terme d\'un match époustouflant.'
      ],
      category: 'Sports',
      categorySlug: 'sports',
      author: {
        name: 'Mateo Fernandez',
        role: 'Correspondant Sports',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'Couvre le football international.'
      },
      publishedAt: 'il y a 8 heures',
      updatedAt: 'il y a 7 heures',
      readTime: '3 min de lecture',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Allianz Arena.',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['Sports', 'Football', 'Munich'],
      language: 'fr'
    }
  ],

  de: [
    {
      id: 'art-1',
      title: 'Weltklimagipfel erzielt historischen Konsens über CO2-Neutralitätsrahmen',
      subheadline: 'Delegierte aus 195 Staaten unterzeichnen einen verbindlichen Vertrag für grüne Übergangsfonds.',
      content: [
        'GENF — Nach zwei Wochen intensiver Verhandlungen haben die Delegierten des Klimagipfels ein wegweisendes Abkommen finalisiert.'
      ],
      category: 'Welt',
      categorySlug: 'world',
      author: {
        name: 'Marcus Vance',
        role: 'Leitender Redakteur',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'Berichtet aus Genf über globale Diplomatie.'
      },
      publishedAt: 'vor 2 Stunden',
      updatedAt: 'vor 1 Stunde',
      readTime: '4 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Delegierte in Genf.',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['Klima', 'Diplomatie', 'Wirtschaft'],
      language: 'de'
    },
    {
      id: 'art-2',
      title: 'Quantencomputing-Durchbruch: Siliziumbasierte Prozessoren erreichen Supremazie',
      subheadline: 'Forscher stellen eine Architektur mit 1.024 physischen Qubits vor.',
      content: [
        'ZÜRICH — Ein Meilenstein in der Quantenphysik mit einem fehlerfreien Quantenprozessor.'
      ],
      category: 'Technologie',
      categorySlug: 'technology',
      author: {
        name: 'Dr. Aris Thorne',
        role: 'Technologie-Chef',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'Schreibt über KI und Quantencomputing.'
      },
      publishedAt: 'vor 4 Stunden',
      updatedAt: 'vor 3 Stunden',
      readTime: '5 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Kryostat in Zürich.',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['Quanten', 'Technologie', 'KI'],
      language: 'de'
    },
    {
      id: 'art-3',
      title: 'Indische Halbleitermission beschleunigt sich durch Mega-Fabrik in Gujarat',
      subheadline: 'Ein 12-Milliarden-Dollar-Joint-Venture soll die globale Lieferkette stärken.',
      content: [
        'GANDHINAGAR — Spatenstich für das führende Halbleiterzentrum Südasiens in Gujarat.'
      ],
      category: 'Indien',
      categorySlug: 'india',
      author: {
        name: 'Priya Sharma',
        role: 'Büroleiterin Neu-Delhi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'Berichtet über indische Wirtschaft.'
      },
      publishedAt: 'vor 5 Stunden',
      updatedAt: 'vor 4 Stunden',
      readTime: '3 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Rendering der Fabrik in Gujarat.',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['Indien', 'Halbleiter', 'Wirtschaft'],
      language: 'de'
    },
    {
      id: 'art-4',
      title: 'Zentralbanken signalisieren koordinierte Zinssenkungen',
      subheadline: 'Fed und EZB deuten synchronisierte Lockerung an.',
      content: [
        'WASHINGTON — Finanzmärkte reagieren positiv auf Notenbankkommentare.'
      ],
      category: 'Wirtschaft',
      categorySlug: 'business',
      author: {
        name: 'Julian Sterling',
        role: 'Märkte-Analyst',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'Beobachtet Zentralbanken.'
      },
      publishedAt: 'vor 6 Stunden',
      updatedAt: 'vor 5 Stunden',
      readTime: '4 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Wall Street.',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['Wirtschaft', 'Märkte'],
      language: 'de'
    },
    {
      id: 'art-5',
      title: 'Artemis-Mondmodul setzt erfolgreich Solarnetz ein',
      subheadline: 'Astronauten sichern dauerhafte Energieversorgung.',
      content: [
        'HOUSTON — NASA bestätigt erfolgreiche Bereitstellung des Solarmikronetzes.'
      ],
      category: 'Wissenschaft',
      categorySlug: 'science',
      author: {
        name: 'Dr. Sarah Jenkins',
        role: 'Wissenschaftsredakteurin',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'Schreibt über Raumfahrt.'
      },
      publishedAt: 'vor 7 Stunden',
      updatedAt: 'vor 6 Stunden',
      readTime: '3 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Mond-Solaranlage.',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['Raumfahrt', 'NASA', 'Mond'],
      language: 'de'
    },
    {
      id: 'art-6',
      title: 'Champions-League-Viertelfinale: Dramatischer Verlängerungssieg',
      subheadline: 'Spätes Tor entscheidet den 4-3 Gesamtsieg in München.',
      content: [
        'MÜNCHEN — FC Bayern gewinnt packenden Europapokal-Krimi.'
      ],
      category: 'Sport',
      categorySlug: 'sports',
      author: {
        name: 'Mateo Fernandez',
        role: 'Sportkorrespondent',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'Berichtet über internationalen Fußball.'
      },
      publishedAt: 'vor 8 Stunden',
      updatedAt: 'vor 7 Stunden',
      readTime: '3 Min. Lesezeit',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Allianz Arena.',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['Sport', 'Fußball', 'München'],
      language: 'de'
    }
  ],

  zh: [
    {
      id: 'art-1',
      title: '全球气候峰会就先进碳中和框架达成历史性共识',
      subheadline: '来自195个国家的代表签署具有约束力的条约，为发展中国家建立数十亿美元的绿色转型基金。',
      content: [
        '日内瓦 — 经过两周的密集夜间谈判，第31届全球气候峰会的代表们最终确定了一项具有里程碑意义的条约，约束参与工业经济体在2045年前实现严格的净零排放时间表。',
        '该协议被环境经济学家誉自巴黎协定以来最具影响力的外交成就，引入了自动碳边境调节机制，并为脆弱的沿海国家建立了5000亿美元的韧性基金。',
        '秘书长埃λε娜·万斯在全体闭幕式上宣布：“我们已经超越了空洞的言辞，进入了可核查的执行阶段。”“首次将不合规的经济处罚纳入国际贸易仲裁。”',
        '市场反应立竿见影，欧洲和亚洲交易所的可再生能源期货大幅飙升，而化石燃料股票经历了适度调整。行业分析师预计，未来十年将有超过4万亿美元的私人资本重新定向至下一代绿色电网基础设施。'
      ],
      category: '世界',
      categorySlug: 'world',
      author: {
        name: '马库斯·万斯',
        role: '高级外交编辑',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: '马库斯·万斯在日内瓦报道全球外交、国际峰会和地缘政治同盟。'
      },
      publishedAt: '2小时前',
      updatedAt: '1小时前',
      readTime: '阅读 4 分钟',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: '代表们聚集在日内瓦全会大厅，对全球气候过渡条约进行最终投票。',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['气候', '外交', '全球经济', '联合国'],
      language: 'zh'
    },
    {
      id: 'art-2',
      title: '量子计算重大突破：硅基处理器实现纠错计算霸权',
      subheadline: '研究人员公布了1,024个物理量子比特架构，能够在无退相干情况下运行复杂的药物模拟。',
      content: [
        '苏黎世 — 在一项重写计算物理学时间表的里程碑式公告中，国际研究财团展示了逻辑错误累积为零的容错量子处理器。',
        '与以往需要繁琐低温屏蔽且经历快速量子比特退化的嘈杂中等规模量子（NISQ）设备不同，全新的“以太-IV”架构利用了富集硅-28晶格陷阱。',
        '高级量子工程研究所首席主任田中宏志博士表示：“我们已经跨越了从实验好奇心到工业实用性的门槛。”“经典超级计算机需要四千年才能完成的模拟在不到十二分钟内执行完毕。”',
        '制药巨头和密码学机构已经排队等待云端访问，这标志着分子药物发现和安全后量子加密标准即将发生转型。'
      ],
      category: '科技',
      categorySlug: 'technology',
      author: {
        name: '阿里斯·索恩博士',
        role: '科技与AI分社长',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: '阿里斯·索恩博士撰写关于人工智能、量子计算和深科技未来的文章。'
      },
      publishedAt: '4小时前',
      updatedAt: '3小时前',
      readTime: '阅读 5 分钟',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: '苏黎世新揭幕的1,024量子比特硅处理器的稀释制冷机。',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['量子', '科技', '人工智能', '硅'],
      language: 'zh'
    },
    {
      id: 'art-3',
      title: '印度半导体计划加速推进，古吉拉特邦超级晶圆厂破土动工',
      subheadline: '一项120亿美元的合资企业旨在到2027年底向全球供应链供应28纳米和40纳米车规级芯片。',
      content: [
        '甘地讷格尔 — 政府领导人和科技高管为古吉拉特邦先进晶圆厂奠基，该项目被设想为南亚首屈一指的半导体制造集群。',
        '该设施代表了印度技术自立倡议的基石，将政府补贴与尖端洁净室机器人技术和可持续水循环系统相结合。',
        '当地官员指出，该生态系统将创造超过25,000个高技能工程岗位，并为电动汽车、电信和工业自动化巩固国内电子制造业。'
      ],
      category: '印度',
      categorySlug: 'india',
      author: {
        name: '普里亚·夏尔马',
        role: '新德里分社长',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: '普里亚·夏尔马报道印度的政策、经济增长和技术转型。'
      },
      publishedAt: '5小时前',
      updatedAt: '4小时前',
      readTime: '3 分钟阅读',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: '古吉拉特邦拟建半导体制造洁净室综合体的效果图。',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['印度', '半导体', '经济', '制造'],
      language: 'zh'
    },
    {
      id: 'art-4',
      title: '央行暗示在通胀趋稳背景下进行协调一致的降息周期',
      subheadline: '美联储、欧洲央行和英国央行暗示随着核心通胀压力回落至目标，将采取同步宽松政策。',
      content: [
        '华盛顿 — 继央行行长们发表同步评论表明激进货币紧缩时代已成功实现其抗通胀目标后，各大指数的金融市场全线上涨。',
        '央行官员在年度货币政策研讨会上强调，未来的政策调整将严格依赖数据，在平衡劳动力市场韧性与地缘政治供应链风险的同时做出决策。',
        '商业贷方立即下调了抵押贷款和企业贷款基准，重新激发了住宅房地产和风险投资银团的活跃度。'
      ],
      category: '商业',
      categorySlug: 'business',
      author: {
        name: '朱利安·斯特林',
        role: '全球市场分析师',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: '朱利安·斯特林追踪央行政策、宏观经济和国际贸易。'
      },
      publishedAt: '6小时前',
      updatedAt: '5小时前',
      readTime: '4 分钟阅读',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: '央行宣布后华尔街交易大厅的活动。',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['经济', '银行', '市场', '通货膨胀'],
      language: 'zh'
    },
    {
      id: 'art-5',
      title: '阿耳忒弥斯月球居住舱成功部署表面太阳能微电网',
      subheadline: '月球南极的宇航员为永久科学前哨站建立了不间断的电力供应。',
      content: [
        '休斯敦 — 美国宇航局工程师和国际航天局合作伙伴确认，在沙克尔顿陨石坑附近的月球南极成功自主部署了第一个模块化太阳能微电网。',
        '垂直太阳能陈列阵列追踪月球表面的低地平线太阳，通过微波传输将清洁能源发射到地下居住舱。',
        '这一里程碑确保了载人任务能够在不依赖消耗性氢燃料电池的情况下维持长期生命支持和原位资源利用实验。'
      ],
      category: '科学',
      categorySlug: 'science',
      author: {
        name: '萨拉·詹金斯博士',
        role: '太空科学编辑',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: '萨拉·詹金斯博士报道航空航天工程、天体物理学和太空探索。'
      },
      publishedAt: '7小时前',
      updatedAt: '6小时前',
      readTime: '3 分钟阅读',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: '月球表面垂直太阳能陈列阵列的模拟部署。',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['太空', 'NASA', '月球', '科学'],
      language: 'zh'
    },
    {
      id: 'art-6',
      title: '欧冠四分之一决赛惊心动魄：慕尼黑加时赛上演荡气回肠逆转绝杀',
      subheadline: '在慕尼黑全场爆满观众的欢呼声中，第94分钟的惊艳凌空抽射锁定4-3的总比分晋级。',
      content: [
        '慕尼黑 — 在近年记忆中最激动人心的欧洲淘汰赛之一中，拜仁慕尼黑克服两球落后的劣势，在扣人心弦的加时赛奇观中击败了来访的豪门。',
        '比赛因战术换人和令人叹为观止的个人高光而跌宕起伏，最终以一记击中横梁并跨过门线的25码远射轰门告终。',
        '教练和专家们一致赞扬了在巨大洲际压力下展现出的不懈节奏和体育精神。'
      ],
      category: '体育',
      categorySlug: 'sports',
      author: {
        name: '马特奥·费尔南德斯',
        role: '全球体育记者',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: '马特奥·费尔南德斯报道国际足球、赛车运动和全球田径锦标赛。'
      },
      publishedAt: '8小时前',
      updatedAt: '7小时前',
      readTime: '3 分钟阅读',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: '加时赛绝杀后，安联球场泛光灯下疯狂庆祝的球迷。',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['体育', '足球', '欧冠', '慕尼黑'],
      language: 'zh'
    }
  ],

  ja: [
    {
      id: 'art-1',
      title: '世界気候サミット、先進的カーボンニュートラル枠組みで歴史的合意に到達',
      subheadline: '195カ国の代表団が、発展途上国のための巨額なグリーン移行基金を設立する法的拘束力のある条約に署名。',
      content: [
        'ジュネーブ — 2週間にわたる激しい昼夜を問わずの交渉の末、第31回世界気候サミットの代表団は、2045年までの厳格なネットゼロ期限を産業国に義務付ける画期的な条約を取りまとめました。',
        'パリ協定以降で最も重大な外交的成果と称賛されるこの合意は、自動炭素国境調整メカニズムを導入し、脆弱な沿岸国家のために5,000億ドルのレジリエンス基金を設立します。'
      ],
      category: '世界',
      categorySlug: 'world',
      author: {
        name: 'マーカス・ヴァンス',
        role: '主席外交編集者',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'ジュネーブから世界外交や国際サミットを報道。'
      },
      publishedAt: '2時間前',
      updatedAt: '1時間前',
      readTime: '4分で読む',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'ジュネーブの全体会議ホールに集まる代表団。',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['気候', '外交', '世界経済', '国連'],
      language: 'ja'
    },
    {
      id: 'art-2',
      title: '量子コンピューティングのブレイクスルー：シリコンベースのプロセッサが誤り耐性を達成',
      subheadline: '研究者らが、デコヒーレンスなしで複雑なシミュレーションを実行可能な1,024物理量子ビットを発表。',
      content: [
        'チューリッヒ — 計算物理学の歴史を塗り替える画期的な発表として、国際研究コンソーシアムが論理エラー蓄積ゼロで動作するフォールトトレラント量子プロセッサを実証しました。'
      ],
      category: 'テクノロジー',
      categorySlug: 'technology',
      author: {
        name: 'Dr. アリス・ソーン',
        role: 'テック＆AI支局長',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: '人工知能や量子コンピューティングについて執筆。'
      },
      publishedAt: '4時間前',
      updatedAt: '3時間前',
      readTime: '5分で読む',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'チューリッヒの希釈冷凍機。',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['量子', 'テクノロジー', 'AI', 'シリコン'],
      language: 'ja'
    },
    {
      id: 'art-3',
      title: 'インド半導体ミッションが加速、グジャラート州で巨大ファブ起工式',
      subheadline: '120億ドルの合弁事業が、2027年末までに車載チップを供給することを目指す。',
      content: [
        'ガンディナガル — 南アジア随一の半導体製造クラスターを目指し、グジャラート先進ファブ施設が起工しました。'
      ],
      category: 'インド',
      categorySlug: 'india',
      author: {
        name: 'プリヤ・シャルマ',
        role: 'ニューデリー支局長',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'インドの政策と経済成長を報道。'
      },
      publishedAt: '5時間前',
      updatedAt: '4時間前',
      readTime: '3分で読む',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'グジャラートのファブ施設完成予想図。',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['インド', '半導体', '経済', '製造'],
      language: 'ja'
    },
    {
      id: 'art-4',
      title: '世界的なインフレ安定を受け、中央銀行が協調利下げのシグナル',
      subheadline: 'FRB、ECB、英中銀がインフレ圧力の後退に伴う利下げを示唆。',
      content: [
        'ワシントン — 中央銀行総裁らの発言を受け、金融市場が好感。'
      ],
      category: 'ビジネス',
      categorySlug: 'business',
      author: {
        name: 'ジュリアン・スターリング',
        role: 'グローバル市場アナリスト',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: '中央銀行やマクロ経済を追跡。'
      },
      publishedAt: '6時間前',
      updatedAt: '5時間前',
      readTime: '4分で読む',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'ウォール街の取引フロア。',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['経済', '銀行', '市場'],
      language: 'ja'
    },
    {
      id: 'art-5',
      title: 'アルテミス月面居住モジュール、太陽光マイクログリッドの展開に成功',
      subheadline: '月面南極で宇宙飛行士が永続的な電力供給を確立。',
      content: [
        'ヒューストン — NASAエンジニアらが月面南極での太陽光マイクログリッドの自律展開成功を確認。'
      ],
      category: '科学',
      categorySlug: 'science',
      author: {
        name: 'Dr. セラ・ジェンキンス',
        role: '宇宙科学編集者',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: '宇宙開発や宇宙探査について報道。'
      },
      publishedAt: '7時間前',
      updatedAt: '6時間前',
      readTime: '3分で読む',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: '月面太陽光アレイのシミュレーション。',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['宇宙', 'NASA', '月', '科学'],
      language: 'ja'
    },
    {
      id: 'art-6',
      title: 'チャンピオンズリーグ準々決勝スリラー：ミュンヘンで劇的な延長戦勝利',
      subheadline: '94分のボレー弾が4-3の逆転勝利を呼び込む。',
      content: [
        'ミュンヘン — 息詰まる激戦の末、バイエルンが劇的な勝利を収める。'
      ],
      category: 'スポーツ',
      categorySlug: 'sports',
      author: {
        name: 'マテオ・フェルナンデス',
        role: 'グローバルスポーツ特派員',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: '国際サッカーや国際大会を報道。'
      },
      publishedAt: '8時間前',
      updatedAt: '7時間前',
      readTime: '3分で読む',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'アリアンツ・アレーナでの歓喜。',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['スポーツ', 'サッカー', 'CL', 'ミュンヘン'],
      language: 'ja'
    }
  ],

  pt: [
    {
      id: 'art-1',
      title: 'Cúpula Climática Global alcança consenso histórico sobre neutralidade de carbono',
      subheadline: 'Delegados de 195 nações assinam tratado vinculativo estabelecendo fundos de transição verde.',
      content: [
        'GENEBRA — Após duas semanas de intensas negociações, os delegados da 31ª Cúpula Climática Global finalizaram um tratado histórico.'
      ],
      category: 'Mundo',
      categorySlug: 'world',
      author: {
        name: 'Marcus Vance',
        role: 'Editor Diplomático Sênior',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'Cobre diplomacia global a partir de Genebra.'
      },
      publishedAt: 'há 2 horas',
      updatedAt: 'há 1 hora',
      readTime: '4 min de leitura',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Delegados reunidos em Genebra.',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['Clima', 'Diplomacia', 'Economia'],
      language: 'pt'
    },
    {
      id: 'art-2',
      title: 'Avanço na computação quântica: Processadores baseados em silício alcançam supremacia',
      subheadline: 'Pesquisadores revelam arquitetura de 1.024 qubits físicos.',
      content: [
        'ZURIQUE — Anúncio histórico em física computacional com processador quântico tolerante a falhas.'
      ],
      category: 'Tecnologia',
      categorySlug: 'technology',
      author: {
        name: 'Dr. Aris Thorne',
        role: 'Chefe de Tecnologia e IA',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'Escreve sobre inteligência artificial e computação quântica.'
      },
      publishedAt: 'há 4 horas',
      updatedAt: 'há 3 horas',
      readTime: '5 min de leitura',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Geladeira de diluição em Zurique.',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['Quântica', 'Tecnologia', 'IA'],
      language: 'pt'
    },
    {
      id: 'art-3',
      title: 'Missão de Semicondutores da Índia acelera com megáfábrica em Gujarat',
      subheadline: 'Joint venture de US$ 12 bilhões visa suprir cadeias globais até 2027.',
      content: [
        'GANDHINAGAR — Lançamento da pedra fundamental para o polo de semicondutores da Índia.'
      ],
      category: 'Índia',
      categorySlug: 'india',
      author: {
        name: 'Priya Sharma',
        role: 'Chefe do Bureau de Nova Delhi',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'Cobre política e crescimento econômico na Índia.'
      },
      publishedAt: 'há 5 horas',
      updatedAt: 'há 4 horas',
      readTime: '3 min de leitura',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Renderização do complexo em Gujarat.',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['Índia', 'Semicondutores', 'Economia'],
      language: 'pt'
    },
    {
      id: 'art-4',
      title: 'Bancos centrais sinalizam recalibragem coordenada de taxas de juros',
      subheadline: 'Federal Reserve e BCE indicam ciclo de afrouxamento sincronizado.',
      content: [
        'WASHINGTON — Mercados financeiros reagem positivamente a comentários dos bancos centrais.'
      ],
      category: 'Negócios',
      categorySlug: 'business',
      author: {
        name: 'Julian Sterling',
        role: 'Analista de Mercados',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'Acompanha bancos centrais e macroeconomia.'
      },
      publishedAt: 'há 6 horas',
      updatedAt: 'há 5 horas',
      readTime: '4 min de leitura',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Wall Street.',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['Economia', 'Mercados', 'Inflação'],
      language: 'pt'
    },
    {
      id: 'art-5',
      title: 'Módulo lunar Artemis implanta com sucesso microrrede solar',
      subheadline: 'Astronautas estabelecem geração de energia contínua no polo sul lunar.',
      content: [
        'HOUSTON — Engenheiros da NASA confirmam implantação de microrrede solar no polo sul lunar.'
      ],
      category: 'Ciência',
      categorySlug: 'science',
      author: {
        name: 'Dra. Sarah Jenkins',
        role: 'Editora de Ciência Espacial',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'Reporta sobre exploração espacial.'
      },
      publishedAt: 'há 7 horas',
      updatedAt: 'há 6 horas',
      readTime: '3 min de leitura',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Implantação simulada de painel solar lunar.',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['Espaço', 'NASA', 'Lua', 'Ciência'],
      language: 'pt'
    },
    {
      id: 'art-6',
      title: 'Quartas de final eletrizantes da Liga dos Campeones: vitória na prorrogação',
      subheadline: 'Gol impressionante aos 94 minutos sela triunfo agregado de 4-3.',
      content: [
        'MUNIQUE — Em confronto europeu memorável, o FC Bayern supera desvantagem e vence.'
      ],
      category: 'Esportes',
      categorySlug: 'sports',
      author: {
        name: 'Mateo Fernandez',
        role: 'Correspondente Esportivo',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'Cobre futebol internacional.'
      },
      publishedAt: 'há 8 horas',
      updatedAt: 'há 7 horas',
      readTime: '3 min de leitura',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Allianz Arena.',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['Esportes', 'Futebol', 'Munique'],
      language: 'pt'
    }
  ],

  ru: [
    {
      id: 'art-1',
      title: 'Глобальный климатический саммит достиг исторического консенсуса',
      subheadline: 'Делегаты из 195 стран подписали договор о создании фонда зеленого перехода.',
      content: [
        'ЖЕНЕВА — После двух недель интенсивных переговоров делегаты 31-го Климатического саммита финализировали знаковый договор.'
      ],
      category: 'Мир',
      categorySlug: 'world',
      author: {
        name: 'Маркус Вэнс',
        role: 'Старший дипломатический редактор',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'Освещает мировую дипломатию из Женевы.'
      },
      publishedAt: '2 часа назад',
      updatedAt: '1 час назад',
      readTime: '4 мин чтения',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Делегаты в Женеве.',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['Климат', 'Дипломатия', 'Экономика'],
      language: 'ru'
    },
    {
      id: 'art-2',
      title: 'Прорыв в квантовых вычислениях: кремниевые процессоры достигли превосходства',
      subheadline: 'Исследователи представили архитектуру с 1024 физическими кубитами.',
      content: [
        'ЦЮРИХ — Вехи в вычислительной физике с отказоустойчивым квантовым процессором.'
      ],
      category: 'Технологии',
      categorySlug: 'technology',
      author: {
        name: 'Д-р Арис Торн',
        role: 'Руководитель технологического бюро',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'Пишет об искусственном интеллекте и квантовых вычислениях.'
      },
      publishedAt: '4 часа назад',
      updatedAt: '3 часа назад',
      readTime: '5 мин чтения',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Криостат в Цюрихе.',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['Квантовые', 'Технологии', 'ИИ'],
      language: 'ru'
    },
    {
      id: 'art-3',
      title: 'Полупроводниковая миссия Индии ускоряется благодаря заводу в Гуджарате',
      subheadline: 'Совместное предприятие стоимостью $12 млрд нацелено на мировые цепочки поставок.',
      content: [
        'ГАНДИНАГАР — Закладка фундамента ведущего полупроводникового кластера в Гуджарате.'
      ],
      category: 'Индия',
      categorySlug: 'india',
      author: {
        name: 'Прия Шарма',
        role: 'Глава бюро в Нью-Дели',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'Освещает экономику и политику Индии.'
      },
      publishedAt: '5 часов назад',
      updatedAt: '4 часа назад',
      readTime: '3 мин чтения',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Макет завода в Гуджарате.',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['Индия', 'Полупроводники', 'Экономика'],
      language: 'ru'
    },
    {
      id: 'art-4',
      title: 'Центробанки сигнализируют о снижении ставок на фоне стабилизации инфляции',
      subheadline: 'ФРС и ЕЦБ намекают на синхронизированное смягчение политики.',
      content: [
        'ВАШИНГТОН — Финансовые рынки отреагировали ростом на заявления глав центробанков.'
      ],
      category: 'Бизнес',
      categorySlug: 'business',
      author: {
        name: 'Джулиан Стерлинг',
        role: 'Аналитик рынков',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'Следит за макроэкономикой.'
      },
      publishedAt: '6 часов назад',
      updatedAt: '5 часов назад',
      readTime: '4 мин чтения',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Уолл-стрит.',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['Экономика', 'Рынки', 'Инфляция'],
      language: 'ru'
    },
    {
      id: 'art-5',
      title: 'Лунный модуль «Артемида» успешно развернул солнечную микросеть',
      subheadline: 'Астронавты на южном полюсе Луны налаживают бесперебойную генерацию энергии.',
      content: [
        'ХЬЮСТОН — Инженеры NASA подтвердили развертывание солнечной микросети на Луне.'
      ],
      category: 'Наука',
      categorySlug: 'science',
      author: {
        name: 'Д-р Сара Дженкинс',
        role: 'Редактор космической науки',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'Сообщает об освоении космоса.'
      },
      publishedAt: '7 часов назад',
      updatedAt: '6 часов назад',
      readTime: '3 мин чтения',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Лунная солнечная установка.',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['Космос', 'NASA', 'Луна', 'Наука'],
      language: 'ru'
    },
    {
      id: 'art-6',
      title: 'Триллер в четвертьфинале Лиги чемпионов: победа в овертайме в Мюнхене',
      subheadline: 'Поздний гол приносит победу 4-3 в сумме двух матчей.',
      content: [
        'МЮНХЕН — «Бавария» вырывает драматичную победу в добавленное время.'
      ],
      category: 'Спорт',
      categorySlug: 'sports',
      author: {
        name: 'Матео Фернандес',
        role: 'Спортивный корреспондент',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'Освещает европейский футбол.'
      },
      publishedAt: '8 часов назад',
      updatedAt: '7 часов назад',
      readTime: '3 мин чтения',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'Альянц Арена.',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['Спорт', 'Футбол', 'Мюнхен'],
      language: 'ru'
    }
  ],

  ur: [
    {
      id: 'art-1',
      title: 'عالمی آب و ہوا کی سربراہ کانفرنس نے کاربن نیوٹرلٹی فریم ورک پر تاریخی اتفاق رائے حاصل کر لیا',
      subheadline: '195 ممالک کے مندوبین نے ترقی پذیر معیشتوں کے لیے اربوں ڈالر کے گرین ٹرانزیشن فنڈز قائم کرنے کے معاہدے پر دستخط کیے۔',
      content: [
        'جنیوا — دو ہفتے کی مسلسل اور شدید مذاکرات کے بعد، 31 ویں عالمی آب و ہوا کی سربراہ کانفرنس کے مندوبین نے ایک ایسے تاریخی معاہدے کو حتمی شکل دی ہے جو صنعتی معیشتوں کو 2045 تک خالص صفر اخراج کے سخت شیڈول کا پابند بناتا ہے۔',
        'ماحولیاتی ماہرین معاشیات کی طرف سے پیرس معاہدے کے بعد سب سے اہم سفارتی کامیابی قرار دیے جانے والے اس معاہدے میں خودکار کاربن بارڈر ایڈجسٹمنٹ کے طریقہ کار شامل ہیں اور آسیب زدہ ساحلی ریاستوں کے لیے 500 ارب ڈالر کا فنڈ قائم کیا گیا ہے۔',
        'سیکرٹری جنرل ایلینا وینس نے اختتامی اجلاس میں اعلان کیا: "ہم اب خالی بیانات سے آگے نکل کر قابل تصدیق نفاذ کی طرف بڑھ چکے ہیں۔"'
      ],
      category: 'عالمی',
      categorySlug: 'world',
      author: {
        name: 'مارکس وینس',
        role: 'سینئر سفارتی ایڈیٹر',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200',
        bio: 'مارکس وینس جنیوا سے عالمی سفارت کاری اور بین الاقوامی سربراہ کانفرنسوں کی خبریں کور کرتے ہیں۔'
      },
      publishedAt: '2 گھنٹے پہلے',
      updatedAt: '1 گھنٹہ پہلے',
      readTime: '4 منٹ پڑھنے کا وقت',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'جنیوا میں کلائمٹ پیک پر حتمی ووٹنگ کے لیے جمع مندوبین۔',
      isFeatured: true,
      isBreaking: true,
      views: 24500,
      tags: ['آب و ہوا', 'سفارت کاری', 'عالمی معیشت', 'اقوام متحدہ'],
      language: 'ur'
    },
    {
      id: 'art-2',
      title: 'کوانٹم کمپیوٹنگ میں بڑی کامیابی: سلکان پر مبنی پروسیسرز نے خرابی سے پاک برتری حاصل کر لی',
      subheadline: 'محققین نے 1,024 فزیکل کیوبٹ آرکیٹیکچر کا انکشاف کیا جو پیچیدہ نقلی نقوش چلانے کی صلاحیت رکھتا ہے۔',
      content: [
        'زیورخ — کمپیوٹیشنل فزکس کی تاریخ میں ایک اہم سنگ میل کا اعلان کرتے ہوئے، محققین کی ایک بین الاقوامی ٹیم نے زیرو لاجیکل خرابی کے ساتھ کام کرنے والے کوانٹم پروسیسرز کا مظاہرہ کیا ہے۔'
      ],
      category: 'ٹیکنالوجی',
      categorySlug: 'technology',
      author: {
        name: 'ڈاکٹر آرس تھورن',
        role: 'ٹیکنالوجی اور اے آئی بیورو چیف',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        bio: 'ڈاکٹر آرس تھورن مصنوعی ذہانت اور کوانٹم کمپیوٹنگ پر لکھتے ہیں۔'
      },
      publishedAt: '4 گھنٹے پہلے',
      updatedAt: '3 گھنٹے پہلے',
      readTime: '5 منٹ پڑھنے کا وقت',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'زیورخ میں نیا کوانٹم پروسیسر۔',
      isFeatured: false,
      isEditorPick: true,
      isTrending: true,
      views: 18900,
      tags: ['کوانٹم', 'ٹیکنالوجی', 'اے آئی', 'سلکان'],
      language: 'ur'
    },
    {
      id: 'art-3',
      title: 'گجرات میں میگا فब्रिकेशन प्लांट के سنگ بنیاد کے ساتھ ہندوستان کا سیمی کنڈکٹر مشن تیز ہو گیا',
      subheadline: '12 ارب ڈالر کا مشترکہ منصوبہ 2027 کے آخر تک آٹوموٹو چپس فراہم کرے گا۔',
      content: [
        'گاندھی نگر — جنوبی ایشیا کے اہم سیمی کنڈکٹر مینوفیکچرنگ کلسٹر کے لیے گجرات میں سنگ بنیاد رکھ دیا گیا۔'
      ],
      category: 'بھارت',
      categorySlug: 'india',
      author: {
        name: 'پریا شرما',
        role: 'نئی دہلی بیورو چیف',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
        bio: 'پریا شرما بھارتی پالیسی اور معاشی ترقی کو کور کرتی ہیں۔'
      },
      publishedAt: '5 گھنٹے پہلے',
      updatedAt: '4 گھنٹے پہلے',
      readTime: '3 منٹ پڑھنے کا وقت',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'گجرات میں مجوزہ سیمی کنڈکٹر پلانٹ کا خاکہ۔',
      isFeatured: false,
      isEditorPick: true,
      isMostRead: true,
      views: 31200,
      tags: ['بھارت', 'سیمی کنڈکٹر', 'معیشت', 'مینوفیکچرنگ'],
      language: 'ur'
    },
    {
      id: 'art-4',
      title: 'مرکزی بینکوں نے عالمی افراط زر میں استحکام کے درمیان شرح سود میں مربوط کمی کا اشارہ دیا',
      subheadline: 'فیڈرل ریزرو اور ای سی بی نے ہم آہنگ نرمی کے دور کا اشارہ دیا۔',
      content: [
        'واشنگٹن — مرکزی بینکوں کے صدور کے بیانات کے بعد مالیاتی منڈیوں میں تیزی دیکھی گئی۔'
      ],
      category: 'کاروبار',
      categorySlug: 'business',
      author: {
        name: 'جুলিয়ান سٹیرلنگ',
        role: 'عالمی مارکیٹ تجزیہ کار',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        bio: 'مرکزی بینکنگ اور بین الاقوامی تجارت کو ٹریک کرتے ہیں۔'
      },
      publishedAt: '6 گھنٹے پہلے',
      updatedAt: '5 گھنٹے پہلے',
      readTime: '4 منٹ پڑھنے کا وقت',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'وال اسٹریٹ میں ٹ্রেڈنگ فلور۔',
      isFeatured: false,
      isTrending: true,
      views: 15400,
      tags: ['معیشت', 'بینکنگ', 'منڈیوں', 'افراط زر'],
      language: 'ur'
    },
    {
      id: 'art-5',
      title: 'آرٹیمیس قمری رہائشی ماڈیول نے سطح پر سولر مائکرو گرڈ کامیابی سے نصب کر لیا',
      subheadline: 'چاند کے جنوبی قطب پر خلابازوں نے مستقل توانائی کا بندوبست کر لیا۔',
      content: [
        'ہیوسٹن — ناسا کے انجینئروں نے چاند کے جنوبی قطب پر پہلے ماڈیولر سولر مائکرو گرڈ کی تنصیب کی تصدیق کی۔'
      ],
      category: 'سائنسی',
      categorySlug: 'science',
      author: {
        name: 'ڈاکٹر سارہ جنکنز',
        role: 'اسپیس سائنس ایڈیٹر',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
        bio: 'خلائی انجینئرنگ اور فلکی طبیعیات پر رپورٹس لکھتی ہیں۔'
      },
      publishedAt: '7 گھنٹے پہلے',
      updatedAt: '6 گھنٹے پہلے',
      readTime: '3 منٹ پڑھنے کا وقت',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'چاند کی سطح پر سولر ارے کی تنصیب۔',
      isFeatured: false,
      isEditorPick: true,
      views: 12100,
      tags: ['خلائی', 'ناسا', 'چاند', 'سائنس'],
      language: 'ur'
    },
    {
      id: 'art-6',
      title: 'چیمپئنز لیگ کوارٹر فائنل کا سنسنی خیز مقابلہ: میونخ میں اضافی وقت میں ڈرامائی فتح',
      subheadline: 'میونخ میں 94 ویں منٹ کے شاندار گول نے فتح کو یقینی بنایا۔',
      content: [
        'میونخ — ایک سنسنی خیز یورپی ناک آؤٹ مقابلے میں ایف سی بائرن نے شاندار کامیابی حاصل کی۔'
      ],
      category: 'کھیل',
      categorySlug: 'sports',
      author: {
        name: 'ماٹیو فرنانڈیز',
        role: 'عالمی کھیلوں کے نامہ نگار',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        bio: 'بین الاقوامی فٹ بال اور موٹر اسپورٹس کو کور کرتے ہیں۔'
      },
      publishedAt: '8 گھنٹے पहले',
      updatedAt: '7 گھنٹے پہلے',
      readTime: '3 منٹ پڑھنے کا وقت',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
      imageCaption: 'الیانز ارینا میں جشن مناتے شائقین۔',
      isFeatured: false,
      isMostRead: true,
      views: 29800,
      tags: ['کھیل', 'فٹ بال', 'چیمپئنز لیگ', 'میونخ'],
      language: 'ur'
    }
  ]
};

export const getLocalizedArticles = (lang: string): Article[] => {
  return LOCALIZED_ARTICLES[lang] || LOCALIZED_ARTICLES.en;
};
