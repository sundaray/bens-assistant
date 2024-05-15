"use client";

import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type MotionMainProps = HTMLMotionProps<"main">;

const MotionMain = React.forwardRef<HTMLElement, MotionMainProps>(
  function MotionMain({ children, ...props }, ref) {
    return (
      <motion.main ref={ref} {...props}>
        {children}
      </motion.main>
    );
  }
);

type MotionSectionProps = HTMLMotionProps<"section">;

const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  function MotionSection({ children, ...props }, ref) {
    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    );
  }
);

export { MotionMain, MotionSection };
