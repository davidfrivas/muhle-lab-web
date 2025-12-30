'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface NavigationProps {
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

export default function Navigation({ currentPage = '' }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (key: string) => {
    return currentPage.toLowerCase() === key.toLowerCase();
  };

  const isParentActive = (item: NavItem) => {
    if (item.children) {
      return item.children.some(child => isActive(child.key));
    }
    return isActive(item.key);
  };

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => (
        <div
          key={item.key}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(item.key)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.children ? (
            <>
              <button
                className={clsx(
                  'px-4 py-2 text-sm font-medium tracking-wide transition-colors',
                  'flex items-center gap-1',
                  isParentActive(item)
                    ? 'text-lab-purple'
                    : 'text-white hover:text-lab-purple'
                )}
                aria-expanded={openDropdown === item.key}
                aria-haspopup="true"
              >
                {item.label}
                <svg
                  className={clsx(
                    'w-4 h-4 transition-transform',
                    openDropdown === item.key && 'rotate-180'
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

              {/* Dropdown Menu */}
              <div
                className={clsx(
                  'absolute top-full left-0 mt-1 py-2 w-40',
                  'bg-lab-dark/95 backdrop-blur-sm rounded-md shadow-lg',
                  'transition-all duration-200',
                  openDropdown === item.key
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                )}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.key}
                    href={child.href}
                    className={clsx(
                      'block px-4 py-2 text-sm transition-colors',
                      isActive(child.key)
                        ? 'text-lab-purple bg-white/10'
                        : 'text-white hover:text-lab-purple hover:bg-white/5'
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link
              href={item.href}
              className={clsx(
                'px-4 py-2 text-sm font-medium tracking-wide transition-colors',
                isActive(item.key)
                  ? 'text-lab-purple'
                  : 'text-white hover:text-lab-purple'
              )}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
