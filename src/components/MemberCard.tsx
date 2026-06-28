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
    <div
      className={`${styles.card} ${mentor ? styles.glowPulse : ""}`}
      title={`${name} - ${role}`}
    >
      {avatar ? (
        <img src={avatar} alt={name} className={styles.avatar} />
      ) : (
        <div className={styles.placeholder}>{initials}</div>
      )}
      <div className={styles.overlay}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </div>
    </div>
  );
}
