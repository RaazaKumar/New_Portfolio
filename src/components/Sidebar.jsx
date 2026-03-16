import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Sidebar.css";

const contacts = [
  {
    icon: <Mail size={18} />,
    title: "EMAIL",
    value: "rajakumar.develop@gmail.com",
    link: "mailto:rajakumar.develop@gmail.com",
  },
  {
    icon: <Phone size={18} />,
    title: "PHONE",
    value: "+91 62057 05816",
    link: "tel:+917488610183",
  },
  {
    icon: <MapPin size={18} />,
    title: "LOCATION",
    value: "Patna, Bihar, India",
  },
];

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "X",
    link: "https://x.com/",
    icon: "/assets/socials/x.svg",
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Profile */}

      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="src\assets\raaza.jpg" alt="Raja Kumar" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name">Raja Kumar</h1>
          <p className="title">Mobile App Developer</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        {/* Contact List */}

        <ul className="contacts-list">
          {contacts.map((contact, index) => (
            <li className="contact-item" key={index}>
              <div className="icon-box">{contact.icon}</div>

              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>

                {contact.link ? (
                  <a href={contact.link} className="contact-link">
                    {contact.value}
                  </a>
                ) : (
                  <address>{contact.value}</address>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        {/* Social Links */}

        <ul className="social-list">
          {socials.map((social) => (
            <li className="social-item" key={social.name}>
              <a
                href={social.link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} width={24} height={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;