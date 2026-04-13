import styles from './Badge.module.css';

export function Badge({ children, variant = 'default', className = '' }) {
  const variantClass = styles[variant] || styles.default;
  
  return (
    <span className={`${styles.badge} ${variantClass} ${className}`}>
      {children}
    </span>
  );
}