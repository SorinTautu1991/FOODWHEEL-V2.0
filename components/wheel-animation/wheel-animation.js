import Image from 'next/image';
import { motion } from 'framer-motion';
import wheel from '../../public/images/wheel.png';

function WheelAnimation() {
  const variants = {
    hidden: { opacity: 0, y: -1000 },
    visible: { opacity: 1, y: 0 },
  };
  <motion.div initial="hidden" animate="visible" variants={variants}>
    <Image src={wheel} alt="wheel" width={300} height={300} />
  </motion.div>;
}

export default WheelAnimation;
