import React from 'react';

/**
 * @typedef {object} InputProps
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [placeholder]
 * @property {string} [value]
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange]
 * @property {string} [helpText]
 * @property {boolean} [error]
 * @property {string} [className]
 */

/**
 * A styled input field with label and optional helper text.
 * @param {InputProps} props
 */
const Input = ({ label, type = 'text', placeholder = '', value, onChange, helpText, error = false, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border px-4 py-3 text-sm transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/20 ${error ? 'border-red-400' : 'border-gray-200'} ${error ? 'dark:border-red-500' : ''}`}
      />
      {helpText && <p className="text-xs text-gray-500 dark:text-gray-400">{helpText}</p>}
    </div>
  );
};

export default Input;
