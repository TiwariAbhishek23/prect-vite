'use client';

import { useState } from 'preact/hooks';
import { Button } from './ui/button';
import { Folder, ChevronRight, ChevronDown, Plus } from 'lucide-preact';
import { motion, AnimatePresence } from 'framer-motion';

const folders = [
  {
    id: 1,
    name: 'JavaScript',
    snippets: ['Array Methods', 'Async/Await', 'Closures'],
  },
  { id: 2, name: 'React', snippets: ['Hooks', 'Context API', 'Performance'] },
  { id: 3, name: 'CSS', snippets: ['Flexbox', 'Grid', 'Animations'] },
];

export default function Main() {
  const [openFolder, setOpenFolder] = useState<number | null>(null);

  const toggleFolder = (folderId: number) => {
    setOpenFolder(openFolder === folderId ? null : folderId);
  };

  return (
    <motion.main
      className='container mx-auto flex-grow px-4 py-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='mb-8 space-y-4'>
        {folders.map(folder => (
          <motion.div
            key={folder.id}
            className='overflow-hidden rounded-lg bg-gray-800'
            whileHover={{ scale: 1.02 }}
          >
            <Button
              variant='ghost'
              className='w-full justify-between text-left text-purple-300 transition-colors duration-200 hover:bg-gray-700 hover:text-purple-100'
              onClick={() => toggleFolder(folder.id)}
            >
              <span className='flex items-center'>
                <Folder className='mr-2 h-5 w-5' />
                {folder.name}
              </span>
              {openFolder === folder.id ? (
                <ChevronDown className='h-5 w-5' />
              ) : (
                <ChevronRight className='h-5 w-5' />
              )}
            </Button>
            <AnimatePresence>
              {openFolder === folder.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='space-y-2 bg-gray-700 px-4 py-2'
                >
                  {folder.snippets.map((snippet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Button
                        variant='ghost'
                        size='sm'
                        className='w-full justify-start text-purple-200 hover:bg-gray-600 hover:text-purple-100'
                      >
                        {snippet}
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
        <Button className='bg-purple-600 text-white hover:bg-purple-700'>
          <Plus className='mr-2 h-5 w-5' />
          Create Snippet
        </Button>
      </motion.div>
    </motion.main>
  );
}
