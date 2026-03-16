import React from "react";
import { BookOpen, Briefcase, Code } from "lucide-react";
import "./Pages.css";
import "./Resume.css";

const Resume = () => {
  return (
    <article className="article resume fade-in">
      <header>
        <h2 className="article-title">Resume</h2>
      </header>

      {/* Education */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={20} />
          </div>
          <h3 className="timeline-title">Education</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="timeline-item-title">
              Bachelor of Computer Applications (BCA)
            </h4>
            <span>2022 — 2025</span>
            <p className="timeline-text">
              Catalyst Institute of Management and Advance Global Excellence
              (CIMAGE), Patna. Studied programming, database systems, web
              technologies and software engineering.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">
              Intermediate (Science - PCM)
            </h4>
            <span>2021 — 2022</span>
            <p className="timeline-text">
              D.B.R.K Jalan School (BSEB), Patna. Focused on Physics,
              Chemistry and Mathematics.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Matriculation (CBSE)</h4>
            <span>2019 — 2020</span>
            <p className="timeline-text">
              Kiddy Convent High School, Patna.
            </p>
          </li>

        </ol>
      </div>

      {/* Experience */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={20} />
          </div>
          <h3 className="timeline-title">Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="timeline-item-title">
              React Native App Developer Intern
            </h4>
            <span>Jan 2026 — Apr 2026</span>
            <p className="timeline-text">
              CodeQuery – Patna. Developed and maintained cross-platform
              mobile applications using React Native. Integrated REST APIs,
              implemented UI components, optimized performance and handled
              Android app builds, keystore signing and Google Play Console
              releases.
            </p>
          </li>

        </ol>
      </div>

      {/* Projects */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Code size={20} />
          </div>
          <h3 className="timeline-title">Projects</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="timeline-item-title">Coffee Shop Mobile App</h4>
            <span>React Native</span>
            <p className="timeline-text">
              Built a mobile ordering app with product listing, categories,
              cart management, wishlist functionality and order summary using
              React Native, TypeScript, Zustand and Axios.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Service Booking Apps</h4>
            <span>React Native</span>
            <p className="timeline-text">
              Worked on multiple production applications including Global Pet
              Grooming, Sahil Services, CleanOzoom, Service Book Karo, Ventigo
              Partner App and AC Expert App during internship.
            </p>
          </li>

        </ol>
      </div>

    </article>
  );
};

export default Resume;