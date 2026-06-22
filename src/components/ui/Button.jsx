import React from 'react';

/**
 * @typedef {object} ButtonProps
 * @property {'primary'|'secondary'|'ghost'} [variant]
 * @property {boolean} [fullWidth]
 * @property {boolean} [loading]
 * @property {() => void} [onClick]
 * @property {React.ReactNode} [children]
 * @property {string} [className]
 * @property {boolean} [disabled]
 */

/**
 * A reusable button component with primary, secondary, and ghost variants.
 * @param {ButtonProps} props
 */
const Button = ({ variant = 'primary', fullWidth = false, loading = false, onClick, children, className = '', disabled = false }) => {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-300 dark:text-blue-300 dark:hover:bg-white/10',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent dark:border-slate-200" />
      )}
      {children}
    </button>
  );
};

export default Button;
