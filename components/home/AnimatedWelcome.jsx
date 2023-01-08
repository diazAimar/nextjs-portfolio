import { Box, Chip } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedWelcome() {
  const greetingsArr = ['Hi', 'Hola', 'Olá', 'こんにちは'];
  const line1 = 'Hello, welcome to my portfolio.';
  const line2 = "My name is Federico, i'm a web developer based in Argentina.";

  const containerVariants = {
    /*     hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 2,
        type: 'spring',
        staggerChildren: 0.1,
      },
    }, */
  };

  const letter = {
    /*     hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: 'easeInOut', duration: 2, type: 'spring' },
    }, */
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3 items-center justify-center"
      >
        {/* Reemplazar los p por las animaciones luego */}
        {/* <Box className="flex flex-col gap-5"> */}
        <Chip
          label={line1}
          className="text-[1rem] inline-block text-center align-middle h-full rounded-xl py-3 px-10"
        />
        <Chip
          label={line2}
          className="text-[1rem] inline-block text-center align-middle h-full rounded-md py-3 px-10"
        />
        {/* </Box> */}

        {/*         {line1.split('""').map((char, i) => {
          return (
            <motion.p key={char + '-' + i} variants={letter} className="inline-block text-[2rem]">
              {char}
            </motion.p>
          );
        })} */}
        {/*         {greetingsArr.map((greeting, i) => {
          return (
            <motion.p
              key={greeting + '-' + i}
              variants={greetingsVariants}
              className="inline-block text-[2rem]"
            >
              {greeting}
            </motion.p>
          );
        })} */}
      </motion.div>
    </>
  );
}
