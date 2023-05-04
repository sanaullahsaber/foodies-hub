import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    
      <Container>
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to our recipe website. By using our website, you agree to
          comply with and be bound by the following terms and conditions of use.
          Please read these terms and conditions carefully before using our
          website.
        </p>
        <h2>1. Use of the Website</h2>
        <p>
          The content of the pages of this website is for your general
          information and use only. It is subject to change without notice.
        </p>
        <p>
          Neither we nor any third parties provide any warranty or guarantee as
          to the accuracy, timeliness, performance, completeness or suitability
          of the information and materials found or offered on this website for
          any particular purpose. You acknowledge that such information and
          materials may contain inaccuracies or errors and we expressly exclude
          liability for any such inaccuracies or errors to the fullest extent
          permitted by law.
        </p>
        <p>
          Your use of any information or materials on this website is entirely
          at your own risk, for which we shall not be liable. It shall be your
          own responsibility to ensure that any products, services or
          information available through this website meet your specific
          requirements.
        </p>
        <p>
          This website contains material which is owned by or licensed to us.
          This material includes, but is not limited to, the design, layout,
          look, appearance and graphics. Reproduction is prohibited other than
          in accordance with the copyright notice, which forms part of these
          terms and conditions.
        </p>
        <p>
          All trademarks reproduced in this website, which are not the property
          of, or licensed to the operator, are acknowledged on the website.
        </p>
        <h2>2. User-Generated Content</h2>
        <p>
          Our website allows users to submit recipes and other content. By
          submitting any content to our website, you grant us a non-exclusive,
          transferable, sub-licensable, royalty-free, worldwide license to use,
          copy, modify, create derivative works based on, distribute, publicly
          display, publicly perform, and otherwise exploit in any manner such
          content in all formats and distribution channels now known or
          hereafter devised (including in connection with the website and our
          business and on third-party sites and services), without further
          notice to or consent from you, and without the requirement of payment
          to you or any other person or entity.
        </p>
        <p>
          By submitting any content to our website, you represent and warrant
          that you have the right to grant the license set forth in these Terms
          and Conditions, that our use of the content will not infringe on any
          third party rights, and that the content complies with our community
          guidelines and all applicable laws and regulations.
        </p>
        <h2>3. Links to Other Websites</h2>
        <p>
          Our website may contain links to other websites. These links are
          provided for your convenience to provide further information. They do
          not signify that we endorse the website(s). We have no responsibility
          for the content of the linked website(s).
        </p>
        <h2>4. Privacy Policy</h2>
        <p>
          Our Privacy Policy, which is incorporated into these Terms and
          Conditions by this reference, explains how we collect, use, and
          disclose information that we receive about users of our website.
        </p>
        <p>
          Go back to <Link to="/register"></Link>
        </p>
      </Container>
    
  );
};

export default Terms;