import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have a question or feedback?  
            <br />
            We'd love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="contact-grid">

          {/* Left Info */}
          <div className="contact-info glass">
            <h2>Get in Touch</h2>

            <div className="info-block">
              <span>Email</span>
              <p>support@luxe.com</p>
            </div>

            <div className="info-block">
              <span>Phone</span>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="info-block">
              <span>Address</span>
              <p>123 Fashion Ave, New York, NY 10001</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form glass">
            <form>
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea placeholder="How can we help?"></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
