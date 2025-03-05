'use client';

import { useState } from 'preact/hooks';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Share2, ThumbsUp, ThumbsDown } from 'lucide-preact';
import { motion } from 'framer-motion';

export default function Footer() {
  const [isDislikeDialogOpen, setIsDislikeDialogOpen] = useState(false);
  const [dislikeMessage, setDislikeMessage] = useState('');

  const handleDislike = () => {
    setIsDislikeDialogOpen(true);
  };

  const handleSendDislike = () => {
    console.log('Dislike message:', dislikeMessage);
    setIsDislikeDialogOpen(false);
    setDislikeMessage('');
  };

  return (
    <motion.footer
      className='border-t border-purple-800 bg-gray-900'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto flex justify-center space-x-4 px-4 py-4'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant='ghost'
            className='text-purple-400 hover:bg-gray-800 hover:text-purple-300'
          >
            <Share2 className='mr-2 h-5 w-5' />
            Share
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant='ghost'
            className='text-purple-400 hover:bg-gray-800 hover:text-purple-300'
          >
            <ThumbsUp className='mr-2 h-5 w-5' />
            Like
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant='ghost'
            onClick={handleDislike}
            className='text-purple-400 hover:bg-gray-800 hover:text-purple-300'
          >
            <ThumbsDown className='mr-2 h-5 w-5' />
            Dislike
          </Button>
        </motion.div>
      </div>

      <Dialog open={isDislikeDialogOpen} onOpenChange={setIsDislikeDialogOpen}>
        <DialogContent className='bg-gray-800 text-white'>
          <DialogHeader>
            <DialogTitle>Tell us why you dislike</DialogTitle>
          </DialogHeader>
          <Textarea
            value={dislikeMessage}
            // onChange={e => setDislikeMessage(e.target.value)}
            placeholder='Please provide your feedback...'
            className='border-purple-600 bg-gray-700 text-white focus:border-purple-400'
          />
          <DialogFooter>
            <Button
              onClick={handleSendDislike}
              className='bg-purple-600 text-white hover:bg-purple-700'
            >
              Send Feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.footer>
  );
}
