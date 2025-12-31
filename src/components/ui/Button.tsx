import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'outline' | 'outline-white' | 'primary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  outline: 'border-black text-black bg-transparent hover:bg-black hover:text-white',
  'outline-white': 'border-white text-white bg-transparent hover:bg-white hover:text-black',
  primary: 'border-none rounded-full text-white bg-lab-dark hover:bg-lab-purple',
};

export function Button({
  variant = 'outline',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'px-4 py-2.5 border uppercase tracking-wider cursor-pointer transition-all duration-200 inline-block text-center';
  const classes = clsx(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
