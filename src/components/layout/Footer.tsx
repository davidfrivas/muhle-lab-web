import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lab-dark text-white py-8 md:py-12">
      <div className="wrapper">
        {/* Logo Row */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-2xl md:text-3xl tracking-wide hover:opacity-80 transition-opacity inline-block lowercase"
          >
            <span className="font-bold">muhle</span>
            <span className="font-light"> lab</span>
          </Link>
        </div>

        {/* Institution Info Row - with vertical purple line */}
        <div className="flex items-center text-sm mb-4">
          <hr className="self-stretch my-4 mr-6 border-l border-lab-purple" />
          <div>
            <p>New York State Psychiatric Institute</p>
            <p>Columbia University Department of Psychiatry</p>
          </div>
        </div>

        {/* Address Row - with vertical purple line */}
        <div className="flex items-center text-sm mb-4">
          <hr className="self-stretch my-4 mr-6 border-l border-lab-purple" />
          <address className="not-italic">
            <p>Herbert Pardes Building, Room 4935</p>
            <p>1051 Riverside Dr</p>
            <p>New York, NY 10032</p>
          </address>
        </div>

        {/* Copyright Row - with vertical purple line */}
        <div className="flex items-center text-sm">
          <hr className="self-stretch my-4 mr-6 border-l border-lab-purple" />
          <p>Copyright &copy; {currentYear} Muhle Lab</p>
        </div>
      </div>
    </footer>
  );
}
