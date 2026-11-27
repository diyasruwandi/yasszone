"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  links,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  links?: Record<string, string>;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.08),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          const match = word.match(/^([a-zA-Z0-9_-]+)([.,!?;:]*)$/);
          const cleanWord = match ? match[1] : word;
          const punctuation = match ? match[2] : "";
          const isLink = links && links[cleanWord.toLowerCase()];

          return (
            <motion.span
              key={word + idx}
              className="opacity-0 inline-block"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {isLink ? (
                <a
                  href={links[cleanWord.toLowerCase()]}
                  className="underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:hover:decoration-black transition-colors"
                >
                  {cleanWord}
                </a>
              ) : (
                cleanWord
              )}
              {punctuation}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-neutral-100 dark:text-neutral-900",
        className
      )}
    >
      {renderWords()}
    </div>
  );
};

