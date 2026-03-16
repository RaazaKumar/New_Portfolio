import React from "react";
import { Layers, Globe, Smartphone, Monitor } from "lucide-react";
import "./Pages.css";

const About = () => {
  return (
    <article className="article about fade-in">
      <header>
        <h2 className="article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm <b>Raja Kumar</b>, a React Native Mobile App Developer based in
          Patna, Bihar, India. I specialize in building scalable cross-platform
          mobile applications and modern web applications using JavaScript
          technologies.
        </p>

        <p>
          I completed my internship as a <b>React Native App Developer</b> at
          CodeQuery where I developed and maintained production mobile
          applications, integrated REST APIs, optimized performance, and
          managed Android app releases using Google Play Console.
        </p>

        <p>
          I enjoy solving real-world problems, improving application
          performance, and building smooth user experiences across
          <b> mobile and web platforms.</b>
        </p>
      </section>

      <section className="service">
        <h3 className="service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Smartphone size={40} />
            </div>

            <div>
              <h4 className="service-item-title">Mobile App Development</h4>
              <p className="service-item-text">
                Building cross-platform mobile applications using React Native
                with optimized UI, navigation and API integration.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Globe size={40} />
            </div>

            <div>
              <h4 className="service-item-title">Web Development</h4>
              <p className="service-item-text">
                Developing responsive web applications using React.js, HTML and
                CSS with modern frontend tools.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Layers size={40} />
            </div>

            <div>
              <h4 className="service-item-title">API & Backend Integration</h4>
              <p className="service-item-text">
                Integrating REST APIs and handling data using MongoDB with
                scalable architecture.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Monitor size={40} />
            </div>

            <div>
              <h4 className="service-item-title">App Deployment</h4>
              <p className="service-item-text">
                Managing Android builds, keystore signing, APK/AAB generation
                and publishing apps on Google Play Console.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <h3 className="skills-title">Technical Skills</h3>

        <div className="skills-container">
          <div className="skills-track">

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
              <span>JavaScript</span>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
              <span>React</span>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg"/>
              <span>React Native</span>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
              <span>Java</span>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"/>
              <span>C++</span>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"/>
              <span>MongoDB</span>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
              <span>Git</span>
            </div>

            <div className="skill">
              <img src="assets/skills/Postman.svg"/>
              <span>Postman</span>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"/>
              <span>Android Studio</span>
            </div>

            <div className="skill">
              <img src="assets/skills/android.svg"/>
              <span>Android</span>
            </div>

            <div className="skill">
              <img src="assets/skills/apple.svg"/>
              <span>iOS</span>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
};

export default About;