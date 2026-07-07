"use client";

import { Column, Heading, Text } from "@once-ui-system/core";
import { MemberCard } from "./MemberCard";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./TeamDisplay.module.scss";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
  mentor?: boolean;
}

interface TeamDisplayProps {
  team: TeamMember[];
}

export function TeamDisplay({ team }: TeamDisplayProps) {
  const { t } = useLanguage();
  const mentor = team.find((m) => m.mentor);
  const members = mentor ? team.filter((m) => !m.mentor) : team;

  if (team.length === 0) return null;

  return (
    <Column className={styles.section} fillWidth horizontal="center">
      <Heading className={styles.title} as="h2" variant="heading-strong-l">
        {t("team.title")}
      </Heading>

      {mentor ? (
        <div className={styles.hasMentor}>
          <div className={styles.mentorColumn}>
            <Text className={styles.mentorLabel} variant="label-default-s">
              {t("team.mentor")}
            </Text>
            <MemberCard
              name={mentor.name}
              role={mentor.role}
              avatar={mentor.avatar}
              mentor
            />
          </div>

          <div className={styles.membersColumn}>
            <Text className={styles.mentorLabel} variant="label-default-s">
              {t("team.members")}
            </Text>
            <div className={styles.membersGrid}>
              {members.map((member) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  avatar={member.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.membersGrid}>
          {team.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              avatar={member.avatar}
            />
          ))}
        </div>
      )}
    </Column>
  );
}
