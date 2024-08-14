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

const TextField: React.FC<TextFieldProps> = ({ label, placeholder = '', value, onChange, className = '', style }) => {
  return (
    <div className={`text-field-container ${className}`} style={style}>
      <label className="text-field-label">{label}</label>
      <input

      />
    </div>
  );
};