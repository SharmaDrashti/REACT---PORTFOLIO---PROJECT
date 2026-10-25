
import React from "react";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page" id="contact">

      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* Heading */}

        <div className="contact-heading">
          <span>05 / CONTACT</span>

          <h1>
            Let's work <strong>together.</strong>
          </h1>

          <p>
            Have a project in mind or want to work together?
            Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-content">

          {/* Left Side */}

          <div className="contact-info">

            <h2>Let's Talk</h2>

            <p>
              I'm always open to discussing new projects,
              creative ideas or opportunities to be part of
              your vision.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <span>Email</span>
                  <p>drashti@example.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <span>Phone</span>
                  <p>+91 9712543980</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <span>Location</span>
                  <p>Gujarat, India</p>
                </div>
              </div>

            </div>

            <div className="contact-social">
              <a href="#contact">in</a>
              <a href="#contact">Git</a>
              <a href="#contact">◎</a>
            </div>

          </div>

          {/* Right Side */}

          <div className="contact-form">

            <h2>Send Me a Message</h2>

            <form>

              <div className="form-row">

                <div className="input-box">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="input-box">
                  <label>Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

              </div>

              <div className="input-box">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                />
              </div>

              <div className="input-box">
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                Send Message
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;

