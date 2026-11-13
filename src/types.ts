export type ViewMode = 'preview' | 'customizer' | 'xml' | 'docs';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export type PageType = 
  | 'home' 
  | 'article' 
  | 'category' 
  | 'about' 
  | 'contact' 
  | 'privacy' 
  | 'terms' 
  | 'editorial' 
  | '404';

export interface AdsterraSettings {
  enableAds: boolean;
  bannerDesktopCode: string;
  bannerMobileCode: string;
  nativeAdCode: string;
  socialBarCode: string;
  smartlinkUrl: string;
  popunderCode: string;
  enableSlot1: boolean;
  enableSlot2: boolean;
  enableSlot3: boolean;
  enableSlot4: boolean;
  enableSlot5: boolean;
  enableSlot6: boolean;
  enableSlot7: boolean;
  enableSlot8: boolean;
  enableSlot9: boolean;
}

export interface ThemeSettings {
  brandName: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
  enableDarkMode: boolean;
  enableBreakingTicker: boolean;
  breakingNewsText: string;
  enableAds: boolean;
  adsensePublisherId: string;
  defaultLanguage: string;
  enableRtl: boolean;
  postsPerPage: number;
  ads: AdsterraSettings;
}

export interface Article {
  id: string;
  title: string;
  subheadline: string;
  content: string[];
  category: string;
  categorySlug: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    cover?: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  image: string;
  imageCaption: string;
  isFeatured?: boolean;
  isBreaking?: boolean;
  isEditorPick?: boolean;
  isTrending?: boolean;
  isMostRead?: boolean;
  views: number;
  tags: string[];
  language: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  description: string;
}
