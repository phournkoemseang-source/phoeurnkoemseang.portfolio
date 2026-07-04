"use client";

import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Tag,
  Avatar,
} from "@once-ui-system/core";
import { useLanguage } from "@/i18n/LanguageContext";
import { person } from "@/resources";
import { ContactSection } from "@/components/ContactSection";

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Column fillWidth horizontal="center" paddingBottom="40">
        <Column maxWidth="s" horizontal="center" align="center">
          {/* Avatar / Headshot */}
          <RevealFx translateY="0" delay={0} fillWidth horizontal="center">
            <Avatar
              src={person.avatar}
              size="xl"
              style={{ marginBottom: "1rem" }}
            />
          </RevealFx>
          <RevealFx
            fillWidth
            horizontal="center"
            paddingTop="16"
            paddingBottom="32"
            paddingLeft="12"
          >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href="#about"
            >
              <Row paddingY="2">{t("hero.badge")}</Row>
            </Badge>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
            <Heading wrap="balance" variant="display-strong-l">
              {person.name}
            </Heading>
          </RevealFx>
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="8">
            <Text onBackground="brand-weak" variant="heading-default-xl">
              {person.role}
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              {t("hero.subline")}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Row gap="12" wrap horizontal="center">
              <Button
                data-border="rounded"
                href="/projects"
                variant="primary"
                size="m"
                weight="default"
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {t("hero.viewProjects")}
                </Row>
              </Button>
              <Button
                data-border="rounded"
                href="/contact"
                variant="secondary"
                size="m"
                weight="default"
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {t("hero.contactMe")}
                </Row>
              </Button>
              <Button
                data-border="rounded"
                href="/cv"
                variant="secondary"
                size="m"
                weight="default"
                suffixIcon="arrowUpRightFromSquare"
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {t("hero.downloadCv")}
                </Row>
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* About Me Section */}
      <Column id="about" fillWidth paddingBottom="40">
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {t("about.title")}
            </Heading>
          </Row>
          <Row flex={3} paddingX="20">
            <Column gap="16">
              <Text variant="body-default-l" onBackground="neutral-weak">
                {t("about.p1")}
              </Text>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {t("about.p2")}
              </Text>
            </Column>
          </Row>
        </Row>
      </Column>

      {/* Education Section */}
      <Column id="education" fillWidth paddingBottom="40">
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {t("education.title")}
            </Heading>
          </Row>
          <Row flex={3} paddingX="20">
            <Column gap="24" fillWidth>
              <Column fillWidth gap="8">
                <Text variant="heading-strong-l">
                  {t("education.pnc.name")}
                </Text>
                <Text variant="body-default-s" onBackground="brand-weak">
                  {t("education.pnc.period")}
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {t("education.pnc.desc")}
                </Text>
              </Column>
              <Column fillWidth gap="8">
                <Text variant="heading-strong-l">
                  {t("education.highschool.name")}
                </Text>
                <Text variant="body-default-s" onBackground="brand-weak">
                  {t("education.highschool.period")}
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {t("education.highschool.desc")}
                </Text>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>

      {/* Skills & Tools Section */}
      <Column id="skills" fillWidth paddingBottom="40">
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {t("skills.title")}
            </Heading>
          </Row>
          <Row flex={3} paddingX="20">
            <Column gap="24" fillWidth>
              <Text variant="heading-strong-s" onBackground="brand-weak" paddingBottom="8">
                {t("skills.tech")}
              </Text>
              <Column fillWidth gap="12">
                <Text variant="heading-strong-m">{t("skills.programming")}</Text>
                <Row gap="8" wrap>
                  <Tag size="l" prefixIcon="javascript">JavaScript</Tag>
                  <Tag size="l" prefixIcon="typescript">TypeScript</Tag>
                  <Tag size="l" prefixIcon="php">PHP</Tag>
                  <Tag size="l" prefixIcon="python">Python</Tag>
                </Row>
              </Column>
              <Column fillWidth gap="12">
                <Text variant="heading-strong-m">{t("skills.frontend")}</Text>
                <Row gap="8" wrap>
                  <Tag size="l" prefixIcon="html">HTML</Tag>
                  <Tag size="l" prefixIcon="css">CSS</Tag>
                </Row>
              </Column>
              <Column fillWidth gap="12">
                <Text variant="heading-strong-m">{t("skills.backend")}</Text>
                <Row gap="8" wrap>
                  <Tag size="l" prefixIcon="nodejs">Node.js</Tag>
                  <Tag size="l" prefixIcon="laravel">Laravel</Tag>
                </Row>
              </Column>
              <Column fillWidth gap="12">
                <Text variant="heading-strong-m">{t("skills.database")}</Text>
                <Row gap="8" wrap>
                  <Tag size="l" prefixIcon="mysql">MySQL</Tag>
                  <Tag size="l" prefixIcon="mongodb">MongoDB</Tag>
                  <Tag size="l" prefixIcon="database">RDBMS</Tag>
                </Row>
              </Column>
              <Text variant="heading-strong-s" onBackground="brand-weak" paddingTop="16" paddingBottom="8">
                {t("skills.tools")}
              </Text>
              <Column fillWidth gap="12">
                <Text variant="heading-strong-m">{t("skills.devops")}</Text>
                <Row gap="8" wrap>
                  <Tag size="l" prefixIcon="github">GitHub</Tag>
                  <Tag size="l" prefixIcon="docker">Docker</Tag>
                  <Tag size="l" prefixIcon="postman">Postman</Tag>
                  <Tag size="l" prefixIcon="wordpress">WordPress</Tag>
                </Row>
              </Column>
              <Column fillWidth gap="12">
                <Text variant="heading-strong-m">{t("skills.dataAnalysis")}</Text>
                <Row gap="8" wrap>
                  <Tag size="l" prefixIcon="powerbi">Power BI</Tag>
                </Row>
              </Column>
              <Column fillWidth gap="12">
                <Text variant="heading-strong-m">{t("skills.design")}</Text>
                <Row gap="8" wrap>
                  <Tag size="l" prefixIcon="jira">Jira</Tag>
                  <Tag size="l" prefixIcon="figma">Figma</Tag>
                  <Tag size="l" prefixIcon="canva">Canva</Tag>
                  <Tag size="l" prefixIcon="drawio">Draw.io</Tag>
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>

      {/* Soft Skills Section */}
      <Column id="soft-skills" fillWidth paddingBottom="40">
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {t("softSkills.title")}
            </Heading>
          </Row>
          <Row flex={3} paddingX="20">
            <Column gap="12" fillWidth>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {t("softSkills.desc")}
              </Text>
              <Row gap="8" wrap paddingTop="8">
                <Tag size="l" prefixIcon="leadership">Leadership</Tag>
                <Tag size="l" prefixIcon="teamwork">Teamwork</Tag>
                <Tag size="l" prefixIcon="criticalThinking">Critical Thinking</Tag>
                <Tag size="l" prefixIcon="timeManagement">Time Management</Tag>
                <Tag size="l" prefixIcon="projectManagement">Project Management</Tag>
                <Tag size="l" prefixIcon="communication">Effective Communication</Tag>
                <Tag size="l" prefixIcon="adaptability">Adaptability</Tag>
                <Tag size="l" prefixIcon="selfMotivation">Self Motivation</Tag>
                <Tag size="l" prefixIcon="responsibility">Responsibility</Tag>
                <Tag size="l" prefixIcon="respect">Respect</Tag>
              </Row>
            </Column>
          </Row>
        </Row>
      </Column>

      {/* Contact Section will appear in the home page below */}
      <ContactSection />
    </>
  );
}
