import React from 'react';
import './style.css';

interface TextFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  isPassword?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ 
  label, 
  placeholder = '', 
  value, 
  onChange, 
  className = '', 
  style,
  isPassword = false,
}) => {
  return (
    <div className={`text-field-container ${className}`} style={style}>
      <label className="text-field-label">{label}</label>
      <input
        type={isPassword ? 'password' : 'text'}
        className="text-field-input"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};