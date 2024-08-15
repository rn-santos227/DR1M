"use client";

import './style.css';

import React, { useState } from 'react';
import Image from 'next/image';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <h1>signup</h1>
    </>
  );
}