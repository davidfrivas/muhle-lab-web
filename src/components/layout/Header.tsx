'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import MobileNav from './MobileNav';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '' }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-xl sm:text-2xl tracking-wide hover:opacity-80 transition-opacity"
          >
            <span className="font-bold">Muhle</span>
            <span className="font-light"> Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation currentPage={currentPage} />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <MobileNav currentPage={currentPage} />
          </div>
        </div>
      </div>
    </header>
  );
}
