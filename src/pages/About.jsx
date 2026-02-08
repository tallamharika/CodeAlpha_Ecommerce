import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h1>About LUXE</h1>
          <p>
            Redefining e-commerce with curated quality and timeless design since 2024.
          </p>
        </div>

        {/* Content */}
        <div className="about-glass">
          <p>
            LUXE was founded with a simple mission: to bring premium, carefully
            curated products to discerning customers worldwide. We believe that
            quality should never be compromised, and every item in our
            collection reflects our commitment to craftsmanship and design.
          </p>

          <p>
            Our team works directly with artisans and manufacturers who share our
            passion for excellence. From sourcing the finest materials to
            ensuring impeccable delivery, every step of the LUXE experience is
            designed with you in mind.
          </p>

          {/* Features */}
<div className="about-values">
  <div className="value-item">
    <span className="value-icon">✦</span>
    <h3>Quality First</h3>
    <p>
      Every product is rigorously tested to meet our premium standards before it reaches you.
    </p>
  </div>

  <div className="value-divider"></div>

  <div className="value-item">
    <span className="value-icon">♡</span>
    <h3>Customer Love</h3>
    <p>
      Our dedicated support team ensures your shopping experience is seamless from start to finish.
    </p>
  </div>

  <div className="value-divider"></div>

  <div className="value-item">
    <span className="value-icon">◎</span>
    <h3>Global Reach</h3>
    <p>
      We deliver to 50+ countries, bringing curated style to doorsteps around the world.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
