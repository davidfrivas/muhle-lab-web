import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lab-dark text-white py-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-2xl tracking-wide hover:opacity-80 transition-opacity"
            >
              <span className="font-bold">Muhle</span>
              <span className="font-light"> Lab</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Advancing psychiatric research
            </p>
          </div>

          {/* Institution Info Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Affiliations</h3>
            <p className="text-sm text-gray-300">
              New York State Psychiatric Institute
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Columbia University Irving Medical Center
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Department of Psychiatry
            </p>
          </div>

          {/* Address Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Location</h3>
            <address className="text-sm text-gray-300 not-italic">
              <p>Herbert Pardes Building</p>
              <p>Room 4935</p>
              <p>1051 Riverside Dr</p>
              <p>New York, NY 10032</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Muhle Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
