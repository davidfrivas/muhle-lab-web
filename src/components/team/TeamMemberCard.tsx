import React from 'react';
import clsx from 'clsx';

export interface SocialLinks {
  linkedin?: string | null;
  github?: string | null;
  twitter?: string | null;
  orcid?: string | null;
  googleScholar?: string | null;
  email?: string | null;
}

export interface TeamMember {
  name: string;
  credentials?: string;
  role: string;
  image: string;
  bio: React.ReactNode;
  socialLinks?: SocialLinks;
  order?: number;
}

export interface TeamMemberCardProps {
  name: string;
  credentials?: string | null;
  role?: string | null;
  image?: string | null;
  bio?: React.ReactNode;
  socialLinks?: SocialLinks | null;
  currentPosition?: string | null;
  isEven?: boolean;
}

export function TeamMemberCard({
  name,
  credentials,
  role,
  image,
  bio,
  socialLinks,
  currentPosition,
  isEven = false
}: TeamMemberCardProps) {

  const displayName = credentials ? `${name}, ${credentials}` : name;

  return (
    <article
      className={clsx(
        'flex flex-col gap-8 py-8',
        'md:flex-row md:items-start',
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      {/* Profile Image */}
      <div className="flex-shrink-0 w-full md:w-auto">
        <img
          src={image || ''}
          alt={`Portrait of ${name}`}
          className="w-full max-w-[400px] h-auto object-cover mx-auto md:mx-0"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-lab-dark mb-1">
            {displayName}
          </h2>
          <h3 className="text-lg md:text-xl text-lab-purple font-medium">
            {role}
          </h3>
        </header>

        {/* Bio - rendered as rich text */}
        <div className="prose-lab mb-6">
          {bio}
        </div>

        {/* Social Links */}
        {socialLinks && (
          <div className="flex gap-4 items-center">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn profile`}
                className="icon-linkedin"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s GitHub profile`}
                className="icon-github"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s Twitter profile`}
                className="text-lab-link hover:text-lab-link-hover transition-colors"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            )}
            {socialLinks.orcid && (
              <a
                href={socialLinks.orcid}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s ORCID profile`}
                className="text-[#A6CE39] hover:text-lab-link-hover transition-colors"
              >
                <ion-icon name="link-outline"></ion-icon>
              </a>
            )}
            {socialLinks.googleScholar && (
              <a
                href={socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s Google Scholar profile`}
                className="text-[#4285F4] hover:text-lab-link-hover transition-colors"
              >
                <ion-icon name="school-outline"></ion-icon>
              </a>
            )}
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label={`Email ${name}`}
                className="text-lab-dark hover:text-lab-purple transition-colors"
              >
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// TypeScript declaration for ion-icon custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { name: string },
        HTMLElement
      >;
    }
  }
}

export default TeamMemberCard;
