"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { ReactNode } from "react";

interface LocaleContentProps {
  /** i18n key for Khmer translation */
  kh: string;
  /** English content (ReactNode) to show when locale is not Khmer */
  children: ReactNode;
}

/**
 * Renders Khmer translation when locale is 'kh', otherwise renders the English children.
 * Use this to wrap any text content that needs to be translated.
 */
export function LocaleContent({ kh, children }: LocaleContentProps) {
  const { locale, t } = useLanguage();

  if (locale === "kh") {
    const translated = t(kh);
    // If the key exists and has a non-empty translation, use it
    if (translated !== kh) {
      return <>{translated}</>;
    }
  }

  return <>{children}</>;
}
