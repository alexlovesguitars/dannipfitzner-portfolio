"use client";

import Image from "next/image";
import { Lightbox } from "@/components/Lightbox";
import type { AppImage } from "@/app/types/image";

type ImageBlockProps = {
  image: AppImage;
  className?: string;
  sizes?: string;
};

export function ImageBlock({
  image,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageBlockProps) {
  const { src, alt, caption, mode = "static" } = image;

  return (
    <div className="flex flex-col gap-3">
      <div className={className}>
        {mode === "lightbox" ? (
          <Lightbox image={{ src, alt }} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            sizes={sizes}
          />
        )}
      </div>

      {caption && (
        <p className="text-md/8 text-black leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  );
}
