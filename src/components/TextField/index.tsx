import React from 'react';
import './style.css';

interface TextFieldProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ 
  label, 
  className = '', 
  style,
  type = 'text',
  placeholder = '', 
  value, 
  onChange, 
}) => {
  return (
    <div className={`text-field-container ${className}`} style={style}>
      <label className="text-field-label">{label}</label>
      <input
        type={type}
        className="text-field-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;