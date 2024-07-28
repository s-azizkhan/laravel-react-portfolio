"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const FlipWords = ({ words, duration = 3000, className, }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);
    // thanks for the fix Julian - https://github.com/Julian-AT
    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);
    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);
    return (_jsx(AnimatePresence, { onExitComplete: () => {
            setIsAnimating(false);
        }, children: _jsx(motion.div, { initial: {
                opacity: 0,
                y: 10,
            }, animate: {
                opacity: 1,
                y: 0,
            }, transition: {
                duration: 0.4,
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 10,
            }, exit: {
                opacity: 0,
                y: -40,
                x: 40,
                filter: "blur(8px)",
                scale: 2,
                position: "absolute",
            }, className: cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className), children: currentWord.split("").map((letter, index) => (_jsx(motion.span, { initial: { opacity: 0, y: 10, filter: "blur(8px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: {
                    delay: index * 0.08,
                    duration: 0.4,
                }, className: "inline-block", children: letter }, currentWord + index))) }, currentWord) }));
};
