'use client';

import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="h-[80vh] grid place-content-center">
        <h1 className="text-4xl text-red font-semibold text-center">Adding soon</h1>
      </div>
    </motion.div>
  );
}
