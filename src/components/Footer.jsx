import React from "react";
const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-r from-[#030201] via-[#070401] to-[#000000] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-amber-500/20 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Pankaj Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
