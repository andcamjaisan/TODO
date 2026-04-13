import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

export function Modal({ isOpen, onClose, title, children, className = '' }) {
  const modalRef = useRef(null);
  const prevFocus = useRef(null);

  useEffect(() => {
    if (isOpen) {
      prevFocus.current = document.activeElement;
      setTimeout(() => {
        modalRef.current?.querySelector('button, input, textarea, select')?.focus();
      }, 0);
    } else {
      prevFocus.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className={`${styles.modal} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}