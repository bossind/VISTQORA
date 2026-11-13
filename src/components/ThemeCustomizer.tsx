import React from 'react';
import { ThemeSettings } from '../types';
import { Sliders, Palette, Shield, Globe } from 'lucide-react';

interface ThemeCustomizerProps {
  settings: ThemeSettings;
  onUpdateSettings: (newSettings: ThemeSettings) => void;
  onResetDefaults: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  settings,
  onUpdateSettings,
  onResetDefaults
}) => {
  const handleChange = (field: keyof ThemeSettings, value: any) => {
    onUpdateSettings({
      ...settings,
      [field]: value
    });
  };

  return (
    <div className='max-w-4xl mx-auto space-y-8 bg-white dark:bg-[#141414] p-6 sm:p-10 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white'>
      <div className='flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4'>
        <div>
          <h2 className='text-2xl font-bold font-serif flex items-center gap-2'>
            <Sliders className='w-6 h-6 text-[#D4AF37]' />
            Theme Customizer &amp; Configuration
          </h2>
          <p className='text-xs text-[#999999]'>Configure branding, color palette, ad placements, and localization parameters for VISTQORA.</p>
        </div>
        <button
          onClick={onResetDefaults}
          className='px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold rounded transition cursor-pointer'
        >
          Reset Defaults
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        
        {/* Brand & Identity */}
        <div className='space-y-4 bg-neutral-50 dark:bg-[#080808] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800'>
          <h3 className='text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
            <Palette className='w-4 h-4' /> Brand &amp; Masthead
          </h3>
          
          <div>
            <label className='block text-xs font-bold mb-1'>Brand Name</label>
            <input
              type='text'
              value={settings.brandName}
              onChange={(e) => handleChange('brandName', e.target.value)}
              className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs focus:outline-none focus:border-[#D4AF37]'
            />
          </div>

          <div>
            <label className='block text-xs font-bold mb-1'>Tagline</label>
            <input
              type='text'
              value={settings.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs focus:outline-none focus:border-[#D4AF37]'
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-xs font-bold mb-1'>Primary Black</label>
              <div className='flex items-center gap-2'>
                <input
                  type='color'
                  value={settings.primaryColor}
                  onChange={(e) => handleChange('primaryColor', e.target.value)}
                  className='w-10 h-8 rounded border cursor-pointer'
                />
                <input
                  type='text'
                  value={settings.primaryColor}
                  onChange={(e) => handleChange('primaryColor', e.target.value)}
                  className='w-full px-2 py-1 rounded bg-white dark:bg-[#141414] border border-neutral-800 text-xs font-mono'
                />
              </div>
            </div>

            <div>
              <label className='block text-xs font-bold mb-1'>Accent Gold</label>
              <div className='flex items-center gap-2'>
                <input
                  type='color'
                  value={settings.accentColor}
                  onChange={(e) => handleChange('accentColor', e.target.value)}
                  className='w-10 h-8 rounded border cursor-pointer'
                />
                <input
                  type='text'
                  value={settings.accentColor}
                  onChange={(e) => handleChange('accentColor', e.target.value)}
                  className='w-full px-2 py-1 rounded bg-white dark:bg-[#141414] border border-neutral-800 text-xs font-mono'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Monetization & Ad Management */}
        <div className='space-y-4 bg-neutral-50 dark:bg-[#080808] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 md:col-span-2'>
          <h3 className='text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
            <Shield className='w-4 h-4' /> Adsterra Monetization &amp; Ad Management
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex items-center justify-between'>
              <div>
                <span className='block text-xs font-bold'>Enable All Adsterra Units</span>
                <span className='text-[10px] text-[#999999]'>Global master switch for banners, native ads, social bar, smartlink &amp; popunder.</span>
              </div>
              <input
                type='checkbox'
                checked={settings.ads.enableAds}
                onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, enableAds: e.target.checked } })}
                className='w-4 h-4 accent-[#D4AF37] cursor-pointer'
              />
            </div>
            <div>
              <label className='block text-xs font-bold mb-1'>Smartlink Destination URL</label>
              <input
                type='text'
                value={settings.ads.smartlinkUrl}
                onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, smartlinkUrl: e.target.value } })}
                placeholder='https://profitablegatetcp.com/smartlink'
                className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-[#D4AF37]'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div>
              <label className='block text-xs font-bold mb-1'>Banner Ad (Desktop Code)</label>
              <textarea
                rows={2}
                value={settings.ads.bannerDesktopCode}
                onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, bannerDesktopCode: e.target.value } })}
                className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-[#D4AF37]'
              />
            </div>
            <div>
              <label className='block text-xs font-bold mb-1'>Banner Ad (Mobile Code)</label>
              <textarea
                rows={2}
                value={settings.ads.bannerMobileCode}
                onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, bannerMobileCode: e.target.value } })}
                className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-[#D4AF37]'
              />
            </div>
            <div>
              <label className='block text-xs font-bold mb-1'>Native Ad Code</label>
              <textarea
                rows={2}
                value={settings.ads.nativeAdCode}
                onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, nativeAdCode: e.target.value } })}
                className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-[#D4AF37]'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-xs font-bold mb-1'>Social Bar Script Code</label>
              <textarea
                rows={2}
                value={settings.ads.socialBarCode}
                onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, socialBarCode: e.target.value } })}
                className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-[#D4AF37]'
              />
            </div>
            <div>
              <label className='block text-xs font-bold mb-1'>Popunder Script Code</label>
              <textarea
                rows={2}
                value={settings.ads.popunderCode}
                onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, popunderCode: e.target.value } })}
                className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-[#D4AF37]'
              />
            </div>
          </div>

          <div className='pt-2 border-t border-neutral-200 dark:border-neutral-800'>
            <span className='block text-xs font-bold mb-2'>Independent Article Ad Slot Toggles (1 to 9)</span>
            <div className='grid grid-cols-3 sm:grid-cols-5 gap-3 text-xs'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((slotNum) => {
                const key = `enableSlot${slotNum}` as keyof typeof settings.ads;
                return (
                  <label key={slotNum} className='flex items-center gap-1.5 cursor-pointer bg-white dark:bg-[#141414] p-2 rounded border border-neutral-200 dark:border-neutral-800'>
                    <input
                      type='checkbox'
                      checked={Boolean(settings.ads[key])}
                      onChange={(e) => onUpdateSettings({ ...settings, ads: { ...settings.ads, [key]: e.target.checked } })}
                      className='accent-[#D4AF37]'
                    />
                    <span>Slot #{slotNum}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Localization & Language */}
        <div className='space-y-4 bg-neutral-50 dark:bg-[#080808] p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 md:col-span-2'>
          <h3 className='text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2'>
            <Globe className='w-4 h-4' /> Localization &amp; RTL Support
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-xs font-bold mb-1'>Default Language Code</label>
              <select
                value={settings.defaultLanguage}
                onChange={(e) => handleChange('defaultLanguage', e.target.value)}
                className='w-full px-3 py-2 rounded bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-800 text-xs'
              >
                <option value='en'>English (en)</option>
                <option value='hi'>Hindi (hi)</option>
                <option value='ar'>Arabic (ar - RTL)</option>
                <option value='es'>Spanish (es)</option>
                <option value='fr'>French (fr)</option>
                <option value='zh'>Chinese (zh)</option>
                <option value='ja'>Japanese (ja)</option>
                <option value='ur'>Urdu (ur - RTL)</option>
              </select>
            </div>

            <div className='flex items-center justify-between pt-6'>
              <div>
                <span className='block text-xs font-bold'>Force RTL Layout Mode</span>
                <span className='text-[10px] text-[#999999]'>Enable Right-To-Left text direction for Arabic &amp; Urdu.</span>
              </div>
              <input
                type='checkbox'
                checked={settings.enableRtl}
                onChange={(e) => handleChange('enableRtl', e.target.checked)}
                className='w-4 h-4 accent-[#D4AF37] cursor-pointer'
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
