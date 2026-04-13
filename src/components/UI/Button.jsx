import styles from './Button.module.css';

export function Button({ children, variant = 'primary', size = 'medium', className = '', disabled, ...props }) {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = size === 'small' ? styles.small : '';
  
  return (
    <button 
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`} 
      disabled={disabled} 
      {...props}
    >
      {children}
    </button>
  );
}