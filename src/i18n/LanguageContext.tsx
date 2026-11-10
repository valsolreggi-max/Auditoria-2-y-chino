import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, LanguageOption, Translations } from './types';
import { es } from './translations/es';
import { en } from './translations/en';
import { de } from './translations/de';
import { fr } from './translations/fr';
import { zh } from './translations/zh';

const translationsMap: Record<Language, Translations> = {
  es,
  en,
  de,
  fr,
  zh,
};

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'es', label: 'Español', nativeLabel: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', nativeLabel: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', nativeLabel: 'Français', flag: '🇫🇷' },
  { code: 'zh', label: '中文', nativeLabel: '简体中文', flag: '🇨🇳' },
];

export interface LanguageContextType {
  language: Language;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  messages: Translations;
  t: (keyPath: string, fallback?: string) => string;
  languages: LanguageOption[];
  getLocalizedPath: (path: string, targetLang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'golden_coast_preferred_language';

const extractLangFromPath = (pathname: string): Language | null => {
  const match = pathname.match(/^\/(es|en|de|fr|zh)(\/|$)/);
  if (match) {
    return match[1] as Language;
  }
  return null;
};

export const getLocalizedPath = (rawPath: string, targetLang?: Language): string => {
  const langToUse = targetLang || 'es';
  // Strip any existing language prefix from rawPath
  const cleanPath = rawPath.replace(/^\/(es|en|de|fr|zh)(\/|$)/, '/');
  const normalized = cleanPath === '' ? '/' : cleanPath;

  if (langToUse === 'es') {
    return normalized === '/' ? '/es' : `/es${normalized}`;
  }
  return normalized === '/' ? `/${langToUse}` : `/${langToUse}${normalized}`;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Prioritize language encoded directly in URL
    const urlLang = extractLangFromPath(location.pathname);
    if (urlLang) return urlLang;

    // 2. Local storage preference
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'es' || saved === 'en' || saved === 'de' || saved === 'fr' || saved === 'zh')) {
        return saved as Language;
      }
    } catch {
      // ignore
    }
    return 'es';
  });

  // Automatically sync language when URL pathname changes (e.g., navigating to /zh/servicios)
  useEffect(() => {
    const urlLang = extractLangFromPath(location.pathname);
    if (urlLang && urlLang !== language) {
      setLanguageState(urlLang);
    }
  }, [location.pathname, language]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language === 'zh' ? 'zh-Hans' : language;
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const getLocalizedPathScoped = useCallback(
    (rawPath: string, targetLang?: Language): string => {
      return getLocalizedPath(rawPath, targetLang || language);
    },
    [language]
  );

  const messages = translationsMap[language] || translationsMap.es;

  // Flexible key path resolver (e.g. t('nav.home') -> "INICIO")
  const t = (keyPath: string, fallback?: string): string => {
    try {
      const keys = keyPath.split('.');
      let current: any = messages;
      for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
          current = current[key];
        } else {
          return fallback || keyPath;
        }
      }
      return typeof current === 'string' ? current : fallback || keyPath;
    } catch {
      return fallback || keyPath;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentLanguage: language,
        setLanguage,
        messages,
        t,
        languages: AVAILABLE_LANGUAGES,
        getLocalizedPath: getLocalizedPathScoped,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
