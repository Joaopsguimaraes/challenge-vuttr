import classNames from 'classnames';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  type,
  variant = 'primary',
  disabled
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'cursor-pointer gap-2 w-28 h-6 font-bold p-4 rounded-md items-center justify-center  border-solid border-2  shadow-sm shadow-gray-800 flex  hover:border-blue-600 focus:border-blue-800 focus:outline-none transition-all ease-linear disabled:opacity-50',
        {
          'bg-blue-700 text-gray-200 border-blue-700  hover:bg-blue-600':
            variant === 'primary',
          'bg-transparent text-zinc-700 border-zinc-700 hover:bg-zinc-200 hover:text-blue-700 focus:bg-zinc-200 focus:text-blue-700 transition-all ease-linear':
            variant === 'secondary'
        }
      )}
    >
      {children}
    </button>
  );
}
