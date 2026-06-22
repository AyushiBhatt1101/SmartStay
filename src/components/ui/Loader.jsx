import React from 'react';

/**
 * @typedef {object} LoaderProps
 * @property {number|string} [size]
 * @property {string} [className]
 */

/**
 * A small loader spinner used while content is loading.
 * @param {LoaderProps} props
 */
const Loader = ({ size = 24, className = '' }) => {
  const numericSize = typeof size === 'string' ? parseInt(size, 10) : size;

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width: numericSize, height: numericSize }}>
      <div className="h-full w-full animate-spin rounded-full border-4 border-blue-500 border-t-transparent dark:border-sky-400" />
    </div>
  );
};

export default Loader;
