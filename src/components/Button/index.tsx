import React from 'react';
import './style.css';

interface ButtonProps {
  text: string;
  onClick: (e: React.FormEvent) => void;
  className?: string;
  style?: React.CSSProperties; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', style }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`} style={style}>
      {text}
    </button>
  );
}; 

export default Button;