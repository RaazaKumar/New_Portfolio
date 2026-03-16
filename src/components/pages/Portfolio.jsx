import React, { useState } from "react";
import { Eye, Github } from "lucide-react";
import "./Pages.css";
import "./Portfolio.css";

import ecommerce from "../../assets/projects/appicon.png";
import chatcode from "../../assets/projects/chatCode.png";
import safez from "../../assets/projects/safez.png";
import portfolio from "../../assets/projects/portfolio.png";
import booking from "../../assets/projects/Book.png";

const Portfolio = () => {

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Mobile Apps", "Web Apps"];

  const projects = [
    {
      id: 1,
      title: "Smart E-commerce App",
      category: "Mobile Apps",
      image: ecommerce,
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "ChatCode",
      category: "Mobile Apps",
      image: chatcode,
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "SafeZ",
      category: "Mobile Apps",
      image: safez,
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Apps",
      image: portfolio,
      live: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Booking App",
      category: "Web Apps",
      image: booking,
      live: "#",
      github: "#",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <article className="article portfolio fade-in">
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      {/* Tabs */}

      <ul className="filter-list">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Projects */}

      <ul className="project-list">

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects available.</p>
        )}

        {filteredProjects.map((project) => (
          <li className="project-item" key={project.id}>

            <div className="project-card">

              <figure className="project-img-box">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="project-overlay">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-icon"
                  >
                    <Eye size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-icon"
                  >
                    <Github size={18} />
                  </a>

                </div>

              </figure>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-category">
                {project.category}
              </p>

            </div>

          </li>
        ))}
      </ul>
    </article>
  );
};

export default Portfolio;