"use client";

import styles from "./MemberCard.module.scss";

interface MemberCardProps {
  name: string;
  role: string;
  avatar: string;
  mentor?: boolean;
}

export function MemberCard({ name, role, avatar, mentor }: MemberCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={styles.wrapper} title={`${name} - ${role}`}>
      {/* Name & Role label — appears above the avatar on hover */}
      <div className={styles.label}>
        <span className={styles.labelName}>{name}</span>
        <span className={styles.labelRole}>{role}</span>
      </div>

      {/* Avatar */}
      <div className={`${styles.avatarWrap} ${mentor ? styles.glowPulse : ""}`}>
        {avatar ? (
          <img src={avatar} alt={name} className={styles.avatar} />
        ) : (
          <div className={styles.placeholder}>{initials}</div>
        )}
      </div>
    </div>
  );
}
