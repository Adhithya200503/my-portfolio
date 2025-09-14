import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-amber-200 text-amber-950  p-4 sticky bottom-0">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Adhithya S
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
