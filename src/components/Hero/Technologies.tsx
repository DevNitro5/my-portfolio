'use client';

import { SiReact, SiTailwindcss, SiTypescript, SiSvelte, SiVisualstudiocode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { itemVariant } from '@/utils/config';

export function Technologies() {
  return (
    <div className="my-10">
      <motion.p variants={itemVariant} className="text-light font-semibold text-lg">
        Technologies I use
      </motion.p>
      <div className="flex space-x-3 mt-2">
        <motion.a variants={itemVariant} href="https://typescriptlang.org" target="_blank" rel="noreferrer">
          <SiTypescript
            title="TypeScript"
            className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
          />
        </motion.a>
        <motion.a variants={itemVariant} href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <SiTailwindcss
            title="TailwindCSS"
            className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
          />
        </motion.a>
        <motion.a variants={itemVariant} href="https://reactjs.org" target="_blank" rel="noreferrer">
          <SiReact
            title="React"
            className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
          />
        </motion.a>
        <motion.a variants={itemVariant} href="https://svelte.dev" target="_blank" rel="noreferrer">
          <SiSvelte
            title="Svelte"
            className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-red"
          />
        </motion.a>
        <motion.a variants={itemVariant} href="https://code.visualstudio.com" target="_blank" rel="noreferrer">
          <SiVisualstudiocode
            title="Visual Studio Code"
            className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
          />
        </motion.a>
      </div>
    </div>
  );
}
