"use client";

import React from "react";

export default function FooterSection() {
  return (
    <footer className="py-12 px-6 border-t border-stone-200" id="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm font-light">
            © 2024 Sarah. Made with intention and care.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-500 hover:text-stone-700 text-sm tracking-wider transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="text-stone-500 hover:text-stone-700 text-sm tracking-wider transition-colors">
              LINKEDIN
            </a>
            <a href="#" className="text-stone-500 hover:text-stone-700 text-sm tracking-wider transition-colors">
              TWITTER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
