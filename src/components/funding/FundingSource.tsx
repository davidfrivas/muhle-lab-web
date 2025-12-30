import React from 'react';
import clsx from 'clsx';
import { withBasePath } from '@/lib/utils';

export type LogoSize = 'small' | 'medium' | 'large';
export type FundingStatus = 'active' | 'past' | 'pending';

export interface FundingSourceData {
  projectTitle: string;
  programTitle: string;
  fundingSource: string;
  fundingSourceUrl?: string;
  logo: string;
  logoSize?: LogoSize;
  principalInvestigator: string;
  coPrincipalInvestigator?: string;
  description: React.ReactNode;
  status: FundingStatus;
  order?: number;
}

export interface FundingSourceProps {
  projectTitle?: string | null;
  programTitle?: string | null;
  fundingSource?: string | null;
  fundingSourceUrl?: string | null;
  logo?: string | null;
  logoSize?: LogoSize | null;
  principalInvestigator?: string | null;
  coPrincipalInvestigator?: string | null;
  description?: React.ReactNode;
  status?: FundingStatus;
  className?: string;
}

const logoSizeClasses: Record<LogoSize, string> = {
  small: 'max-w-[100px]',
  medium: 'max-w-[150px]',
  large: 'max-w-[200px]',
};

const statusLabels: Record<FundingStatus, string> = {
  active: 'Active',
  past: 'Past',
  pending: 'Pending',
};

export function FundingSource({
  projectTitle,
  programTitle,
  fundingSource,
  fundingSourceUrl,
  logo,
  logoSize,
  principalInvestigator,
  coPrincipalInvestigator,
  description,
  status,
  className,
}: FundingSourceProps) {
  // Handle null/undefined logoSize with fallback
  const effectiveLogoSize: LogoSize = logoSize || 'medium';

  return (
    <article className={clsx('py-8', className)}>
      {/* Status Badge */}
      {(status || fundingSource) && (
        <div className="funding-status-badge mb-6">
          {status && <span>{statusLabels[status]}</span>}
          <hr />
          {fundingSource && <span>{fundingSource}</span>}
        </div>
      )}

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* Logo */}
        <div className="flex-shrink-0">
          {fundingSourceUrl ? (
            <a
              href={fundingSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={withBasePath(logo || '')}
                alt={`${fundingSource || ''} logo`}
                className={clsx('h-auto', logoSizeClasses[effectiveLogoSize])}
                loading="lazy"
              />
            </a>
          ) : logo ? (
            <img
              src={withBasePath(logo)}
              alt={`${fundingSource || ''} logo`}
              className={clsx('h-auto', logoSizeClasses[effectiveLogoSize])}
              loading="lazy"
            />
          ) : null}
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Program Title */}
          <h3 className="text-lg md:text-xl font-semibold text-lab-purple mb-2">
            {programTitle}
          </h3>

          {/* Project Title */}
          <h4 className="text-base md:text-lg font-medium text-lab-dark mb-4">
            {projectTitle}
          </h4>

          {/* PI Information */}
          <div className="mb-4 text-sm md:text-base">
            <p>
              <strong>Principal Investigator:</strong> {principalInvestigator}
            </p>
            {coPrincipalInvestigator && (
              <p>
                <strong>Co-Principal Investigator:</strong> {coPrincipalInvestigator}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="prose-lab">
            {description}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FundingSource;
