"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import enMessages from "./en";
import khMessages from "./kh";

export type Locale = "en" | "kh";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Record<string, string>;
}

const messagesMap: Record<Locale, Record<string, string>> = {
  en: enMessages,
  kh: khMessages,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "kh") {
      setLocaleState(saved);
      document.documentElement.lang = saved === "kh" ? "km" : "en";
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l === "kh" ? "km" : "en";
  }, []);

  const messages = messagesMap[locale];
  const t = useCallback((key: string) => messages[key] ?? key, [messages]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
