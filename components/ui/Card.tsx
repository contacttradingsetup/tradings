type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`card-hover-lift rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 hover:border-[color:var(--primary)]/30 ${className}`} style={{ boxShadow: "var(--shadow-sm)" }}>
      {children}
    </div>
  );
}