"use client";

import './style.css';

import React, { useState } from 'react';
import Image from 'next/image';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [walletKey, setWalletKey] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="flex items-center">
          <Image src="/assets/images/logo-dark.png" alt="Logo" width={50} height={50} />
        </div>
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <TextField
            label="Public Wallet Key"
            value={walletKey}
            onChange={(e) => setWalletKey(e.target.value)}
            placeholder="Enter your public wallet key"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </form>
      </div>
    </div>
  );
}