'use client';

import * as React from 'preact/compat';

import { useState } from 'preact/hooks';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock } from 'lucide-preact';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Login attempted with:', { email, password });
  };

  const handleGoogleLogin = () => {
    // Here you would typically handle Google login logic
    console.log('Google login attempted');
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-900 text-white'>
      <motion.div
        className='w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mb-8 flex justify-center'>
          <Zap className='h-12 w-12 text-purple-400' />
        </div>
        <h1 className='text-gradient mb-6 text-center text-3xl font-bold'>
          Login to SnipMaster
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='email'>Email</Label>
            <div className='relative'>
              <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <Input
                id='email'
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={e => setEmail((e.target as HTMLInputElement).value)}
                className='border-gray-600 bg-gray-700 pl-10 text-white'
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor='password'>Password</Label>
            <div className='relative'>
              <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={e =>
                  setPassword((e.target as HTMLInputElement).value)
                }
                className='border-gray-600 bg-gray-700 pl-10 text-white'
                required
              />
            </div>
          </div>
          <Button
            type='submit'
            className='w-full bg-purple-600 hover:bg-purple-700'
          >
            Login
          </Button>
        </form>
        <div className='mt-4'>
          <Button
            onClick={handleGoogleLogin}
            variant='outline'
            className='w-full border-gray-600 text-white hover:bg-gray-700'
          >
            Login with Google
          </Button>
        </div>
        <p className='mt-6 text-center text-gray-400'>
          Don't have an account?{' '}
          <a href='/signup' className='text-purple-400 hover:underline'>
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
