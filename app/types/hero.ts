// /types/hero.ts
import { ReactNode } from "react";
import { AppImage } from "./image";

export type HeroContent = {
  title?: string;
  subtitle?: ReactNode;
  image?: AppImage;
  background?: string;
  imageWidth?: string;
};
