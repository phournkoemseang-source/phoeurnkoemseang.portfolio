"use client";

import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Row,
  Tag,
  IconButton,
  Icon,
  Input,
  Textarea,
  Flex,
  SmartLink,
} from "@once-ui-system/core";
import { useLanguage } from "@/i18n/LanguageContext";
import { person, social, baseURL } from "@/resources";
import { useState } from "react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <Column id="contact" fillWidth paddingTop="xl" paddingBottom="xl">
      <Column fillWidth horizontal="center" align="center" paddingBottom="40">
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
          <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
            {t("contact.title")}
          </Heading>
        </RevealFx>
        <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="16">
          <Text variant="heading-default-m" onBackground="brand-weak" align="center">
            {t("contact.subtitle")}
          </Text>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth maxWidth="s" horizontal="center">
          <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak" align="center">
            {t("contact.desc")}
          </Text>
        </RevealFx>
      </Column>

      <Row fillWidth gap="40" marginTop="20" s={{ direction: "column" }}>
        {/* Left Column: Contact Info */}
        <Column flex={1} gap="24" paddingX="l" paddingTop="8">
          <Heading as="h3" variant="heading-strong-m">
            Contact Information
          </Heading>
          <Column gap="16">
            <Row gap="12" vertical="center">
              <Icon name="email" size="m" onBackground="brand-weak" />
              <Column gap="2">
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {t("contact.email")}
                </Text>
                <Text variant="body-default-m">{person.email}</Text>
              </Column>
            </Row>
            {person.phone && (
              <Row gap="12" vertical="center">
                <Icon name="phone" size="m" onBackground="brand-weak" />
                <Column gap="2">
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {t("contact.phone")}
                  </Text>
                  <Text variant="body-default-m">{person.phone}</Text>
                </Column>
              </Row>
            )}
            <Row gap="12" vertical="center">
              <Icon name="globe" size="m" onBackground="brand-weak" />
              <Column gap="2">
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {t("contact.location")}
                </Text>
                <Text variant="body-default-m">
                  {person.locationLabel || person.location.replace("Asia/", "")}
                </Text>
              </Column>
            </Row>
            <Row gap="12" vertical="center">
              <Icon name="linkedin" size="m" onBackground="brand-weak" />
              <Column gap="2">
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {t("contact.linkedin")}
                </Text>
                <SmartLink
                  href={social.find((s) => s.name === "LinkedIn")?.link || ""}
                >
                  <Text variant="body-default-m">
                    {social.find((s) => s.name === "LinkedIn")?.link?.replace("https://", "")}
                  </Text>
                </SmartLink>
              </Column>
            </Row>
            <Row gap="12" vertical="center">
              <Icon name="github" size="m" onBackground="brand-weak" />
              <Column gap="2">
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {t("contact.github")}
                </Text>
                <SmartLink
                  href={social.find((s) => s.name === "GitHub")?.link || ""}
                >
                  <Text variant="body-default-m">
                    {social.find((s) => s.name === "GitHub")?.link?.replace("https://", "")}
                  </Text>
                </SmartLink>
              </Column>
            </Row>
            <Row gap="12" vertical="center">
              <Icon name="openLink" size="m" onBackground="brand-weak" />
              <Column gap="2">
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {t("contact.portfolio")}
                </Text>
                <SmartLink href={person.portfolio || baseURL}>
                  <Text variant="body-default-m">
                    {(person.portfolio || baseURL).replace("https://", "")}
                  </Text>
                </SmartLink>
              </Column>
            </Row>
          </Column>

          <Flex fillWidth paddingY="8">
            <Text variant="heading-strong-s" onBackground="brand-weak">
              {t("contact.available")}
            </Text>
          </Flex>
          <Row gap="8" wrap>
            <Tag size="l" prefixIcon="rocket">{t("contact.fulltime")}</Tag>
            <Tag size="l" prefixIcon="star">{t("contact.freelance")}</Tag>
            <Tag size="l" prefixIcon="book">{t("contact.internship")}</Tag>
            <Tag size="l" prefixIcon="teamwork">{t("contact.collaboration")}</Tag>
          </Row>

          <Flex paddingTop="16">
            <Row gap="12">
              {social.map(
                (item) =>
                  item.link && (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      tooltip={item.name}
                      size="l"
                      variant="secondary"
                    />
                  ),
              )}
            </Row>
          </Flex>
        </Column>

        {/* Right Column: Contact Form */}
        <Column fillWidth paddingX="l" gap="24">
          <ContactFormInner />
        </Column>
      </Row>

      <RevealFx delay={0.3} fillWidth horizontal="center" paddingTop="xl">
        <Column horizontal="center" align="center" gap="8">
          <Icon name="star" onBackground="brand-weak" size="m" />
          <Text variant="body-default-m" onBackground="neutral-weak" align="center">
            {t("contact.footer")}
          </Text>
        </Column>
      </RevealFx>
    </Column>
  );
}

function ContactFormInner() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      setSending(false);
      return;
    }

    // Simulate sending — replace with actual API later
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <Column
        fillWidth
        padding="xl"
        radius="m"
        background="brand-alpha-weak"
        border="brand-alpha-medium"
        horizontal="center"
        align="center"
        gap="16"
      >
        <Icon name="star" size="xl" onBackground="brand-strong" />
        <Heading as="h3" variant="heading-strong-l">Thank You!</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {t("contact.formSuccess")}
        </Text>
        <Button variant="secondary" size="m" onClick={() => setSent(false)}>
          Send Another Message
        </Button>
      </Column>
    );
  }

  return (
    <Column
      as="form"
      onSubmit={handleSubmit}
      fillWidth
      padding="xl"
      radius="m"
      background="surface"
      border="neutral-alpha-weak"
      gap="20"
    >
      <Heading as="h3" variant="heading-strong-l">{t("contact.formTitle")}</Heading>

      <Input
        id="contact-name"
        name="name"
        label={t("contact.formName")}
        placeholder={t("contact.formName")}
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        id="contact-email"
        name="email"
        type="email"
        label={t("contact.formEmail")}
        placeholder={t("contact.formEmail")}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        id="contact-subject"
        name="subject"
        label={t("contact.formSubject")}
        placeholder={t("contact.formSubject")}
        value={formData.subject}
        onChange={handleChange}
      />
      <Textarea
        id="contact-message"
        name="message"
        label={t("contact.formMessage")}
        placeholder={t("contact.formMessage")}
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
      />

      {error && (
        <Text variant="body-default-s" onBackground="danger-weak">{error}</Text>
      )}

      <Button type="submit" variant="primary" size="l" fillWidth disabled={sending}>
        {sending ? t("contact.formSending") : t("contact.formSend")}
      </Button>
    </Column>
  );
}
