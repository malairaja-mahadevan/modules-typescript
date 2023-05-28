import React from 'react';
import './button.css';

export interface ButtonProps {
  modifier: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  modifier = 'primary',
  size = 'medium',
  label,
  ...props
}) => {
  const baseClass = 'mm-button';
  const modifierClass = `${baseClass}--${modifier}`;
  return (
    <button
      type="button"
      className={[baseClass, `${baseClass}--${size}`, modifierClass].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
