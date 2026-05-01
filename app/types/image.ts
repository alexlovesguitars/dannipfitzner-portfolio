import { ReactNode } from "react";

export type ImageMode = "static" | "lightbox";

export type AppImage = {
  src: string;
  alt: string;
  caption?: ReactNode;
  mode?: ImageMode;
};
