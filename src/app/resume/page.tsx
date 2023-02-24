'use client';

import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="h-[85vh] grid place-content-center">
        <h1 className="text-4xl text-red font-semibold text-center">Adding Soon</h1>
      </div>
    </motion.div>
  );
}
