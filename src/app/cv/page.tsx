"use client";

import { useRef, useState } from "react";
import { person } from "@/resources";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./cv.module.scss";

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const { t } = useLanguage();

  const downloadPDF = async () => {
    if (!cvRef.current) return;
    setDownloading(true);

    try {
      const { default: html2canvas } = await import("html2canvas");
      const { default: jsPDF } = await import("jspdf");

      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width / 2, canvas.height / 2],
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = position - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${person.name.replace(/\s+/g, "_")}_CV.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className={styles.page}>
      <button
        className={styles.printButton}
        onClick={downloadPDF}
        disabled={downloading}
      >
        {downloading ? t("cv.generating") : t("cv.downloadPdf")}
      </button>
      <button
        className={`${styles.printButton} ${styles.printButtonSecondary}`}
        onClick={() => window.print()}
      >
        🖨️ {t("cv.printPdf")}
      </button>

      <div ref={cvRef} className={styles.cvContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.name}>{person.name}</h1>
            <p className={styles.role}>{person.role}</p>
          </div>
          <div className={styles.contact}>
            <div>{person.email}</div>
            <div>{person.location}</div>
            <div>{person.languages?.join(" | ")}</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cv.about")}</h2>
          <p className={styles.itemDesc}>
            {t("cv.aboutDesc")}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cv.education")}</h2>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>Passerelles Numériques Cambodia (PNC)</h3>
              <span className={styles.itemSubtitle}>2025 - Present</span>
            </div>
            <p className={styles.itemDesc}>
              Pursuing Associate Degree in Web Programming. Relevant courses
              include HTML, CSS, JavaScript, Backend Development, Databases, and
              UI/UX Design.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>High School</h3>
              <span className={styles.itemSubtitle}>2021 - 2024</span>
            </div>
            <p className={styles.itemDesc}>High School Graduate</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cv.skills")}</h2>
          <ul className={styles.skills}>
            <li className={styles.skill}>JavaScript</li>
            <li className={styles.skill}>TypeScript</li>
            <li className={styles.skill}>PHP</li>
            <li className={styles.skill}>Python</li>
            <li className={styles.skill}>HTML</li>
            <li className={styles.skill}>CSS</li>
            <li className={styles.skill}>Node.js</li>
            <li className={styles.skill}>Laravel</li>
            <li className={styles.skill}>MySQL</li>
            <li className={styles.skill}>MongoDB</li>
            <li className={styles.skill}>Git/GitHub</li>
            <li className={styles.skill}>Docker</li>
            <li className={styles.skill}>Postman</li>
            <li className={styles.skill}>Figma</li>
            <li className={styles.skill}>Jira</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cv.projectsExperience")}</h2>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>HR-Payroll-System</h3>
              <span className={styles.itemSubtitle}>Backend Developer</span>
            </div>
            <p className={styles.itemDesc}>
              Built an HR & Payroll Management System with strong OOP principles,
              handling employee data, salary calculations, attendance tracking,
              and payroll processing. Used MySQL for database and Postman for
              testing APIs and endpoints. Deployed on Render.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>Service Rental Vehicles - VC1</h3>
              <span className={styles.itemSubtitle}>Developer</span>
            </div>
            <p className={styles.itemDesc}>
              Web platform for vehicle rental using Vue.js, Laravel, and MySQL.
              Used Postman for testing API endpoints during development.
              Deployed on AWS.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>NekMak Restaurant</h3>
              <span className={styles.itemSubtitle}>Full-stack Developer</span>
            </div>
            <p className={styles.itemDesc}>
              Premium dining website with interactive food ordering and table
              reservation. Built with HTML, CSS, JavaScript, Tailwind CSS, and
              Firebase.
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>Music Player</h3>
              <span className={styles.itemSubtitle}>Front-End Developer</span>
            </div>
            <p className={styles.itemDesc}>
              Responsive music web app with user authentication, play/pause
              controls, song upload, and real-time search. Built with JavaScript
              and Firebase.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cv.softSkills")}</h2>
          <ul className={styles.skills}>
            <li className={styles.skill}>Leadership</li>
            <li className={styles.skill}>Teamwork</li>
            <li className={styles.skill}>Critical Thinking</li>
            <li className={styles.skill}>Time Management</li>
            <li className={styles.skill}>Problem Solving</li>
            <li className={styles.skill}>Communication</li>
            <li className={styles.skill}>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
