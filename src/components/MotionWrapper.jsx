import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
    // Variants for animation with gradual size increase
    const containerVariants = {
        initial: {
            opacity: 0,
            y: "100%", // Start below the viewport
            scaleY: 0.5, // Start smaller vertically
            scaleX: 0.5, // Start smaller horizontally
            transformOrigin: "bottom", // Scale up from the bottom
        },
        animate: {
            opacity: 1,
            y: 0, // Move to normal position
            scaleY: 1, // Expand to full height
            scaleX: 1, // Expand to full width
            transition: {
                opacity: { duration: 0.3 }, // Fade-in timing
                y: { duration: 0.6, ease: "easeInOut" }, // Vertical movement
                scaleY: { duration: 0.6, ease: "easeInOut" }, // Vertical scaling
                scaleX: { duration: 0.6, ease: "easeInOut" }, // Horizontal scaling
            },
        },
        exit: {
            opacity: 0,
            y: "100%", // Slide back down
            scaleY: 0.5, // Shrink vertically
            scaleX: 0.5, // Shrink horizontally
            transition: {
                opacity: { duration: 0.3 },
                y: { duration: 0.5, ease: "easeInOut" },
                scaleY: { duration: 0.5, ease: "easeInOut" },
                scaleX: { duration: 0.5, ease: "easeInOut" },
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 overflow-hidden z-40"
            style={{ width: "100vw" }} // Ensure consistent width
        >
            <div className="h-full w-full overflow-y-auto">
                {children}
            </div>
        </motion.div>
    );
};

export default MotionWrapper;
