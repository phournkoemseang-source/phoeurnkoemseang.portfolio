"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "kh" : "en")}
      style={{
        background: "none",
        border: "1px solid var(--neutral-alpha-medium)",
        borderRadius: "var(--radius-m)",
        padding: "4px 10px",
        cursor: "pointer",
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "var(--neutral-on-background-strong)",
        lineHeight: 1.4,
      }}
      title={locale === "en" ? "Switch to Khmer" : "ប្តូរទៅជាភាសាអង់គ្លេស"}
    >
      {locale === "en" ? "KH" : "EN"}
    </button>
  );
}
