import React from "react";

function Footer() {
  return (
    <div className="mt-16 py-4 text-center">
      <span>
        © {new Date().getFullYear()} Visits.id - Situs persingkat tautan.
      </span>
    </div>
  );
}

export default Footer;
