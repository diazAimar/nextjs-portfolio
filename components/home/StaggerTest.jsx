import { motion } from 'framer-motion';

/**
 * Here we are defining @param staggerChildren with 1sec.
 * You can change this time as per your need.
 * 1st child will not get delayed. delay starts from 2nd child onwards.
 * 2nd child animation will start after: 1sec
 * 2rd child animation will start after: 2sec
 * 4th child animation will start after: 3sec
 * and so on...
 */
const parentVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 1 } },
};

const childrenVariant = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

export default function App() {
  return (
    <div className="App">
      <motion.div initial="initial" animate="animate" variants={parentVariant}>
        <motion.div className="child" variants={childrenVariant}>
          Start animation one
        </motion.div>
        <motion.div className="child" variants={childrenVariant}>
          Start animation Two
        </motion.div>
        <motion.div className="child" variants={childrenVariant}>
          Start animation Three
        </motion.div>
        <motion.div className="child" variants={childrenVariant}>
          Start animation Four
        </motion.div>
      </motion.div>
    </div>
  );
}
