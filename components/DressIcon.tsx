export default function DressIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M50 6 C50 1 58 1 58 6" />
      <path d="M22 22 L50 6 L78 22" />
      <path d="M30 24 C30 18 70 18 70 24 L80 92 L20 92 Z" fill="currentColor" fillOpacity="0.16" />
    </svg>
  );
}
