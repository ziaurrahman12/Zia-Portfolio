

"use client";
import { animate, motion } from "framer-motion";

const RotationShape = ({content, direction, duration}) => {
  // Define the rotation animation
  const rotationAnimation = {
    animate: {
      // Rotate 360 based on the direction
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity
      }
    },
  };
  return <motion.div variants={rotationAnimation} animate="animate">
   {content}
  </motion.div>

};

export default RotationShape;