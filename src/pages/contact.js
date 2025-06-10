import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Have questions, feedback, or suggestions? We’d love to hear from you!<br /><br />
        📧 Email: <a href="mailto:hello@aceittracker.com">hello@aceittracker.com</a><br /><br />
        🏢 Address:<br />
        AceIt Team<br />
        23 Focus Street,<br />
        Coimbatore, 641014
      </p>
    </section>
  );
};

export default Contact;
