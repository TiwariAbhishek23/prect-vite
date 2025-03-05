'use client';

import { useState, useEffect } from 'preact/hooks';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Code, Zap, Trophy } from 'lucide-preact';
import { Button } from '../components/ui/button';
import { Link } from 'preact-iso';

const statsData = {
  snippetsUsed: 120,
  timeSaved: 480, // in minutes
  mostUsedSnippet: 'React useEffect Hook',
  efficiency: 85, // percentage
  streakDays: 7,
};

export default function StatsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href='/'>
            <Button
              variant='ghost'
              className='mb-6 text-purple-400 hover:text-purple-300'
            >
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Dashboard
            </Button>
          </a>
          <h1 className='text-gradient mb-8 text-center text-4xl font-bold'>
            Your Coding Stats
          </h1>
        </motion.div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <StatCard
            icon={<Code className='h-8 w-8 text-purple-400' />}
            title='Snippets Used'
            value={statsData.snippetsUsed}
            description='Total snippets used'
          />
          <StatCard
            icon={<Clock className='h-8 w-8 text-green-400' />}
            title='Time Saved'
            value={`${statsData.timeSaved} min`}
            description='Estimated time saved'
          />
          <StatCard
            icon={<Zap className='h-8 w-8 text-yellow-400' />}
            title='Most Used Snippet'
            value={statsData.mostUsedSnippet}
            description='Your go-to code snippet'
          />
          <StatCard
            icon={<Zap className='h-8 w-8 text-blue-400' />}
            title='Efficiency Boost'
            value={`${statsData.efficiency}%`}
            description='Productivity increase'
          />
          <StatCard
            icon={<Trophy className='h-8 w-8 text-orange-400' />}
            title='Current Streak'
            value={`${statsData.streakDays} days`}
            description='Keep up the great work!'
          />
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: JSX.Element;
  title: string;
  value: string | number;
  description: string;
}

function StatCard({ icon, title, value, description }: StatCardProps) {
  return (
    <motion.div
      className='rounded-lg bg-gray-800 p-6 shadow-lg'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className='mb-4 flex items-center'>
        {icon}
        <h2 className='ml-2 text-xl font-semibold'>{title}</h2>
      </div>
      <p className='text-gradient mb-2 text-3xl font-bold'>{value}</p>
      <p className='text-gray-400'>{description}</p>
    </motion.div>
  );
}
