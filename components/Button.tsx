import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  variable: "--button-font",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ label, href, variant = "primary", onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${barlow.variable} font-[family-name:var(--button-font)] inline-block mt-2 px-6 py-3 text-[14px] tracking-wide w-fit transition-colors
        ${variant === "primary"
          ? "bg-black text-white hover:bg-gray-800"
          : "border border-black text-black hover:bg-black hover:text-white"
        }`}
    >
      {label}
    </a>
  );
}
