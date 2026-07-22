import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`motion-safe-transition rounded-[var(--radius)] border border-[color:var(--primary)]/30 bg-[color:var(--primary)] px-5 py-3 font-semibold text-white hover:border-[color:var(--primary)]/60 hover:bg-[color:var(--primary-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}