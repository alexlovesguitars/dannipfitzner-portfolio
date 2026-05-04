"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  image: LightboxImage;
};

export function Lightbox({ image }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  if (isOpen) {
    document.addEventListener("keydown", handleKeyDown);
  }

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
  }, [isOpen]);

  return (
    <>
      {/* Clickable image */}
      <button
        onClick={() => {
          console.log("clicked");
          setIsOpen(true);
        }}

        className="block w-full overflow-hidden"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={900}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl"
              aria-label="Close image"
            >
              ×
            </button>

            <motion.div
              className="relative h-[90vh] w-[90vw]"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
