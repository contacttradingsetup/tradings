type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 hover:border-[color:var(--border-strong)] ${className}`}>
      {children}
    </div>
  );
}