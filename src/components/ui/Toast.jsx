import React, { useEffect } from 'react';

/**
 * @typedef {object} ToastProps
 * @property {string} message
 * @property {'success'|'error'|'info'} [variant]
 * @property {boolean} [visible]
 * @property {() => void} [onClose]
 */

/**
 * A toast notification for brief success, error, or info messages.
 * @param {ToastProps} props
 */
const Toast = ({ message, variant = 'info', visible = false, onClose }) => {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  const variantStyles = {
    success: 'bg-green-50 text-green-900 dark:bg-emerald-900/90 dark:text-emerald-100',
    error: 'bg-red-50 text-red-900 dark:bg-red-900/90 dark:text-red-100',
    info: 'bg-blue-50 text-blue-900 dark:bg-sky-900/90 dark:text-sky-100',
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[60] w-[min(320px,calc(100%-2rem))] rounded-3xl border border-current p-4 shadow-xl ${variantStyles[variant]}`}>
      <p className="text-sm font-semibold">{message}</p>
      <button onClick={onClose} className="mt-2 text-xs font-medium underline opacity-80 hover:opacity-100">
        Dismiss
      </button>
    </div>
  );
};

export default Toast;
