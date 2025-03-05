'use client';

import { Button } from './ui/button';
import {
  Zap,
  Flame,
  Mail,
  User,
  LogOut,
  FileText,
  Settings,
} from 'lucide-preact';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropDown';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <motion.header
      className='border-b border-purple-800 bg-gray-900'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>
        <motion.div
          className='flex items-center text-2xl font-bold text-purple-400'
          whileHover={{ scale: 1.05 }}
        >
          <Zap className='mr-2 h-6 w-6' />
        </motion.div>
        <div className='flex items-center'>
          <NavLink to='/stats' className='text-purple-400' end>
            <Button variant='ghost' className='text-purple-400'>
              <Flame className='h-4 w-4' />
              <span>30s</span>
            </Button>
          </NavLink>
          <Button variant='ghost' className='text-purple-400'>
            <Mail className='h-4 w-4' />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='text-purple-400'>
                <User className='mr-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-30 m-2 border border-purple-600 bg-gray-800'>
              <DropdownMenuItem className='cursor-pointer text-purple-200 hover:bg-gray-700 hover:text-purple-100'>
                <User className='mr-2 h-4 w-4' />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer text-purple-200 hover:bg-gray-700 hover:text-purple-100'>
                <Settings className='mr-2 h-4 w-4' />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer text-purple-200 hover:bg-gray-700 hover:text-purple-100'>
                <FileText className='mr-2 h-4 w-4' />
                <span>Documentation</span>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer text-purple-200 hover:bg-gray-700 hover:text-purple-100'>
                <LogOut className='mr-2 h-4 w-4' />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}
