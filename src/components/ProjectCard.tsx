"use client";

import { Icon } from "@once-ui-system/core";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import styles from "./ProjectCard.module.scss";

const techNameMap: Record<string, string> = {
  vuejs: "Vue.js",
  laravel: "Laravel",
  php: "PHP",
  mysql: "MySQL",
  javascript: "JavaScript",
  html: "HTML5",
  css: "CSS3",
  nodejs: "Node.js",
  typescript: "TypeScript",
  bootstrap: "Bootstrap",
  react: "React",
  firebase: "Firebase",
};

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  linkedIn?: string;
  mentor?: boolean;
}

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  team?: TeamMember[];
  link?: string;
  github?: string;
  deploy?: string;
  techs?: string[];
  /** 'work' style: text-focused with title, links, and team hover cards */
  /** 'project' style: image-first with screenshot, links, and members */
  variant?: "work" | "project";
}

function MemberHoverCard({ name, role, avatar }: { name: string; role: string; avatar?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={styles.member} title={`${name} - ${role}`}>
      <div className={styles.memberLabel}>
        <span className={styles.memberLabelName}>{name}</span>
        <span className={styles.memberLabelRole}>{role}</span>
      </div>
      <div className={styles.memberAvatar}>
        {avatar ? (
          <img src={avatar} alt={name} className={styles.memberImg} />
        ) : (
          <div className={styles.memberInitials}>{initials}</div>
        )}
      </div>
    </div>
  );
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  team,
  link,
  github,
  deploy,
  techs,
  variant = "project",
}) => {
  if (variant === "work") {
    return (
      <div className={styles.workCard}>
        <div className={styles.workCardContent}>
          <h3 className={styles.workTitle}>{title}</h3>
          {description && <p className={styles.workDesc}>{description}</p>}

          <div className={styles.workLinks}>
            {content?.trim() && (
              <a href={href} className={styles.workLink}>
                <FiArrowRight size={14} />
                Read case study
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.workLink}>
                <FiGithub size={14} />
                GitHub
              </a>
            )}
            {deploy && (
              <a href={deploy} target="_blank" rel="noopener noreferrer" className={styles.workLink}>
                <FiExternalLink size={14} />
                Live Demo
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className={styles.workLink}>
                <FiExternalLink size={14} />
                View project
              </a>
            )}
          </div>

          {team && team.length > 0 && (
            <div className={styles.teamRow}>
              {team.map((member, idx) => (
                <MemberHoverCard
                  key={idx}
                  name={member.name}
                  role={member.role}
                  avatar={member.avatar}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // variant === "project" (image-first layout)
  return (
    <div className={styles.projectCard}>
      {images.length > 0 && (
        <div className={styles.projectImage}>
          <img
            src={images[0]}
            alt={title}
            className={styles.projectImg}
          />
        </div>
      )}
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        {description && <p className={styles.projectDesc}>{description}</p>}

        {techs && techs.length > 0 && (
          <div className={styles.techRow}>
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className={styles.techIcon}
                title={techNameMap[tech] || tech}
              >
                <Icon name={tech} size="s" />
              </span>
            ))}
          </div>
        )}

        <div className={styles.projectActions}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
              <FiGithub size={14} />
              GitHub
            </a>
          )}
          {deploy && (
            <a href={deploy} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
          {content?.trim() && (
            <a href={href} className={styles.actionBtn}>
              <FiArrowRight size={14} />
              Details
            </a>
          )}
        </div>

        {team && team.length > 0 && (
          <div className={styles.projectTeam}>
            <span className={styles.teamLabel}>Contributors</span>
            <div className={styles.teamRow}>
              {team.map((member, idx) => (
                <MemberHoverCard
                  key={idx}
                  name={member.name}
                  role={member.role}
                  avatar={member.avatar}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
