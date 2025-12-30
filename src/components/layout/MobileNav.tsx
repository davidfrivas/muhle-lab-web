'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface MobileNavProps {
  currentPage?: string;
}

interface NavItem {
  label: string;
  href: string;
  key: string;
  children?: { label: string; href: string; key: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', key: 'home' },
  {
    label: 'Team',
    href: '/team',
    key: 'team',
    children: [
      { label: 'Members', href: '/team', key: 'team' },
      { label: 'Alumni', href: '/alumni', key: 'alumni' },
    ],
  },
  { label: 'Research', href: '/research', key: 'research' },
  { label: 'News', href: '/news', key: 'news' },
  { label: 'Funding', href: '/funding', key: 'funding' },
  { label: 'Contact', href: '/contact', key: 'contact' },
];

export default function MobileNav({ currentPage = '' }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (key: string) => {
    return currentPage.toLowerCase() === key.toLowerCase();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setTeamDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTeamDropdownOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 p-2 text-white focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={clsx(
              'block h-0.5 w-full bg-current transition-all duration-300',
              isOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={clsx(
              'block h-0.5 w-full bg-current transition-all duration-300',
              isOpen && 'opacity-0'
            )}
          />
          <span
            className={clsx(
              'block h-0.5 w-full bg-current transition-all duration-300',
              isOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </div>
      </button>

      {/* Full-screen Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 transition-all duration-300',
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        )}
      >
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-lab-dark/95 backdrop-blur-md"
          onClick={closeMenu}
        />

        {/* Navigation Content */}
        <nav className="relative z-10 flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <li key={item.key} className="text-center">
                {item.children ? (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                      className={clsx(
                        'text-2xl font-light tracking-wide transition-colors',
                        'flex items-center gap-2',
                        isActive(item.key) || isActive('alumni')
                          ? 'text-lab-purple'
                          : 'text-white hover:text-lab-purple'
                      )}
                    >
                      {item.label}
                      <svg
                        className={clsx(
                          'w-5 h-5 transition-transform',
                          teamDropdownOpen && 'rotate-180'
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={clsx(
                        'flex flex-col items-center mt-3 space-y-3 overflow-hidden transition-all duration-300',
                        teamDropdownOpen
                          ? 'max-h-40 opacity-100'
                          : 'max-h-0 opacity-0'
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          onClick={closeMenu}
                          className={clsx(
                            'text-lg font-light tracking-wide transition-colors',
                            isActive(child.key)
                              ? 'text-lab-purple'
                              : 'text-gray-300 hover:text-lab-purple'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={clsx(
                      'text-2xl font-light tracking-wide transition-colors',
                      isActive(item.key)
                        ? 'text-lab-purple'
                        : 'text-white hover:text-lab-purple'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
