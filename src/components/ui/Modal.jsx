import React from 'react';

/**
 * @typedef {object} ModalProps
 * @property {boolean} open
 * @property {() => void} onClose
 * @property {React.ReactNode} title
 * @property {React.ReactNode} children
 * @property {React.ReactNode} [footer]
 */

/**
 * A modal dialog with title, body, and footer slots.
 * @param {ModalProps} props
 */
const Modal = ({ open, onClose, title, children, footer }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          </div>
          <button onClick={onClose} className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700">
            ✕
          </button>
        </div>
        <div className="mt-5 text-gray-700 dark:text-gray-300">{children}</div>
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
