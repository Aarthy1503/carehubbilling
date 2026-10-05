import "./App.css";

function App() {
  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Care<span>Hub</span>Billing
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Solutions</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a
  href="https://wa.me/918469373421"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-button"
>
  Talk to Us
</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-left">
          <p className="eyebrow">SMART BILLING • BETTER PRACTICE</p>

          <h1>
            Your Practice.
            <br />
            <span>Our Billing Expertise.</span>
          </h1>

          <p className="hero-description">
            CareHubBilling helps healthcare providers manage the
            complexity behind billing, claims and revenue — so your
            team can spend more time where it matters.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="primary-button">
  Explore Solutions →
</a>

           <a
  href="https://wa.me/918469373421?text=Hi%20CareHubBilling%2C%20I%20would%20like%20to%20know%20more%20about%20your%20billing%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-button"
>
  Contact Our Team
</a>
          </div>
        </div>

        {/* UNIQUE DASHBOARD VISUAL */}
        <div className="hero-visual">
          <div className="medical-badges">
  <div className="medical-badge">✚ <span>Healthcare</span></div>
  <div className="medical-badge">✓ <span>Claims</span></div>
  <div className="medical-badge">▣ <span>Billing</span></div>
</div>

          <div className="dashboard-card">

            <div className="dashboard-top">
              <div>
                <p>Revenue Overview</p>
                <h3>Revenue</h3>
              </div>

              <div className="growth">
                Live
              </div>
            </div>

            <div className="chart">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="dashboard-bottom">
              <div>
                <small>Claims</small>
                <strong>Claims</strong>
              </div>

              <div>
                <small>Pending</small>
                <strong>Pending</strong>
              </div>

              <div>
                <small>Resolved</small>
                <strong>Resolved</strong>
              </div>
            </div>

          </div>

          <div className="floating-card secure-card">
            <span>✓</span>
            <div>
              <strong>Secure Workflow</strong>
              <small>Protected & Organized</small>
            </div>
          </div>

        </div>

      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">

        <div>
<strong>Claims</strong>
          <span>Claims Managed</span>
        </div>

        <div>
         <strong>Accuracy</strong>
          <span>Process Accuracy</span>
        </div>

        <div>
         <strong>Support</strong>
          <span>Support Availability</span>
        </div>

        <div>
        <strong>Client</strong>
          <span>Client Focus</span>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-label">
          
          <span>01</span>
          WHO WE ARE
        </div>

        <div className="about-content">

          <h2>
            We handle the
            <span> details behind your revenue.</span>
          </h2>

          <div>
            <p>
              Healthcare billing can become complicated quickly.
              CareHubBilling brings structure, accuracy and
              consistency to the process.
            </p>

            <p>
              From claims management to payment workflows, our
              approach is designed to reduce administrative pressure
              and create a smoother billing experience.
            </p>

            <button className="text-button">
              Discover CareHubBilling →
            </button>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="solutions-section" id="services">

        <div className="section-heading">
          <p>WHAT WE SOLVE</p>

          <h2>
            Billing support that
            <span> works around you.</span>
          </h2>
        </div>

        <div className="solution-grid">

          <div className="solution-card large-card">
            <div className="service-icon">✚</div>
            <span>01</span>
            <h3>Revenue Cycle Management</h3>
            <p>
              Structured support across the revenue cycle to help
              maintain smoother financial operations.
            </p>
            <a href="#contact">Learn more →</a>
          </div>

          <div className="solution-card">
            <span>02</span>
            <div className="service-icon">✓</div>
            <h3>Claims Management</h3>
            <p>
              Organized claim handling designed to reduce delays
              and keep the process moving.
            </p>
          </div>

          <div className="solution-card">
            <span>03</span>
            <div className="service-icon">▣</div>
            <h3>Medical Coding</h3>
            <p>
              Consistent coding support for accurate and organized
              billing workflows.
            </p>
          </div>

          <div className="solution-card">
            <span>04</span>
            <div className="service-icon">↗</div>
            <h3>Denial Recovery</h3>
            <p>
              Focused follow-up to identify issues and work toward
              recovering outstanding revenue.
            </p>
          </div>

          <div className="solution-card">
            <span>05</span>
            <div className="service-icon">₹</div>
            <h3>Payment Management</h3>
            <p>
              Clear and organized payment workflows for better
              financial visibility.
            </p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="process-section" id="process">

        <div className="section-heading">
          <p>HOW WE WORK</p>

          <h2>
            Simple process.
            <span> Stronger results.</span>
          </h2>
        </div>

        <div className="process-grid">

          <div>
            <span>01</span>
            <h3>Connect</h3>
            <p>We understand your practice and billing needs.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Analyze</h3>
            <p>We identify gaps and opportunities in your workflow.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Manage</h3>
            <p>Our team handles the required billing processes.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Improve</h3>
            <p>We continuously work toward a smoother revenue cycle.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">

        <div>
          <p>READY WHEN YOU ARE</p>

          <h2>
            Let's make billing
            <span> easier together.</span>
          </h2>
          <div className="contact-options">
  <div>
    <span>WHATSAPP</span>
    <strong>8469373421</strong>
  </div>

  <div>
    <span>AVAILABILITY</span>
    <strong>Ready to connect</strong>
  </div>
</div>

          <p>
            Tell us what your practice needs and let's start
            building a better billing workflow.
          </p>
        </div>

       <a
  href="https://wa.me/918469373421"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-button"
>
  Contact CareHubBilling →
</a>

      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          Care<span>Hub</span>Billing
        </div>
        <a
  href="https://wa.me/918469373421"
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp Us →
</a>

        <p>
          Smarter billing. Stronger healthcare operations.
        </p>

        <div>
          © 2026 CareHubBilling. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;