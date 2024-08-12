import React from 'react';
import './style.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties; 
}