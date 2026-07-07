"use client";

import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Renders a translated string from the i18n key.
 * Use this inside server components to render translated text
 * without converting the whole page to a client component.
 *
 * Usage:
 *   <Text><T k="blog.recentPosts" /></Text>
 */
export function T({ k }: { k: string }) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}
