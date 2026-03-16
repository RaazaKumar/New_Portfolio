import { Send } from "lucide-react";
import "./Pages.css";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);

    const { fullname, email, subject, message } = formData;

    const mailtoLink = `mailto:pranavkumarcodequery@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setSending(false);
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
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

        <h3 className="form-title">Get in Touch</h3>

        <form className="form" onSubmit={handleSubmit}>

          <div className="input-wrapper">

            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <input
            type="text"
            name="subject"
            className="form-input"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="form-btn" type="submit" disabled={sending}>
            <Send size={18} />
            <span>{sending ? "Sending..." : "Send Message"}</span>
          </button>

        </form>
      </section>
    </article>
  );
};

export default Contact;