import React from 'react';
import { TeamMemberCard, TeamMember } from './TeamMemberCard';
import clsx from 'clsx';

export interface TeamMemberListProps {
  members: TeamMember[];
  className?: string;
  showDividers?: boolean;
}

export function TeamMemberList({
  members,
  className,
  showDividers = true,
}: TeamMemberListProps) {
  // Sort members by order if provided
  const sortedMembers = [...members].sort((a, b) => {
    const orderA = a.order ?? Infinity;
    const orderB = b.order ?? Infinity;
    return orderA - orderB;
  });

  return (
    <div className={clsx('w-full', className)}>
      {sortedMembers.map((member, index) => (
        <React.Fragment key={member.name}>
          <TeamMemberCard
            name={member.name}
            credentials={member.credentials}
            role={member.role}
            image={member.image}
            bio={member.bio}
            socialLinks={member.socialLinks}
            isEven={index % 2 === 0}
          />
          {showDividers && index < sortedMembers.length - 1 && (
            <hr className="my-8 border-t border-black/20" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default TeamMemberList;
