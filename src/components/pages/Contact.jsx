import { Send } from "lucide-react";
import "./Pages.css";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
   const [fullname, setFullname] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();

     // Construct mailto URL
     const mailtoLink = `mailto:pranavkumarcodequery@gmail.com?subject=${encodeURIComponent(
       subject,
     )}&body=${encodeURIComponent(
       `Name: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`,
     )}`;

     // Open default email client
     window.location.href = mailtoLink;
     setFullname("");
     setEmail("");
     setSubject("");
     setMessage("");
   };
  return (
    <article className="article contact fade-in">
      <header>
        <h2 className="article-title">Contact</h2>
      </header>

      {/* Map */}

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            title="Map of Patna"
            className="google-map"
          ></iframe>
        </figure>
      </section>

      {/* Contact Form */}

      <section className="contact-form">
        <h3 className="h3 form-title">Get in Touch</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            className="form-input"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button className="form-btn" type="submit">
            <Send size={18} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
