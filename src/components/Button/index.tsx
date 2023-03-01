'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { itemVariant } from '@/utils/config';

interface IProps extends React.PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'info';
  rounded?: boolean;
  link?: string;
  newtab?: boolean;
  onClick?: () => unknown;
}

export function Button(props: IProps) {
  const { children, variant = 'primary', link, rounded = false, newtab = false, onClick } = props;

  const className =
    'p-3 transition ease-in-out duration-200 font-semibold ' +
    (variant === 'primary'
      ? 'bg-red hover:bg-darkRed text-white'
      : variant === 'secondary'
      ? 'bg-transparent text-light hover:text-white'
      : 'bg-darkGray text-light hover:text-white hover:bg-dark');

  if (!link)
    return (
      <motion.button
        variants={itemVariant}
        onClick={onClick}
        className={twMerge(className, rounded ? 'rounded-lg' : '')}
      >
        {children}
      </motion.button>
    );

  return (
    <motion.div variants={itemVariant} className={twMerge('inline-block text-center')}>
      <Link
        className={twMerge(className, rounded ? 'rounded-lg' : '', 'inline-block')}
        href={link}
        target={newtab ? '_blank' : undefined}
      >
        {children}
      </Link>
    </motion.div>
  );
}
