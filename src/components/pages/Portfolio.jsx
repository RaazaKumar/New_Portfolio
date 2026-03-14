import React, { useState } from "react";
import { Eye } from "lucide-react";
import "./Pages.css";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Mobile Apps", "Web Apps", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "Service Book Karo",
      category: "Mobile Apps",
      image: "/assets/projects/servicebookkaro.png",
      link: "#",
    },

    {
      id: 2,
      title: "Y7 Steamyrides",
      category: "Mobile Apps",
      image: "/assets/projects/steamyrides.png",
      link: "#",
    },

    {
      id: 3,
      title: "Admin Dashboard",
      category: "Web Apps",
      image: "/assets/projects/dashboard.png",
      link: "#",
    },

    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Apps",
      image: "/assets/projects/portfolio.png",
      link: "#",
    },

    {
      id: 5,
      title: "Booking App UI",
      category: "UI/UX",
      image: "/assets/projects/ui-design.png",
      link: "#",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <article className="article portfolio fade-in">
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      {/* Filter Tabs */}

      <ul className="filter-list">
        {tabs.map((tab) => (
          <li className="filter-item" key={tab}>
            <button
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Project List */}

      <ul className="project-list">
        {filteredProjects.map((project) => (
          <li className="project-item" key={project.id}>
            <a href={project.link} target="_blank">
              <figure className="project-img-box">
                <img src={project.image} alt={project.title} loading="lazy" />

                <div className="project-item-icon-box">
                  <Eye size={20} />
                </div>
              </figure>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Portfolio;
