export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Speech bubble */}
      <path
        d="M24 4C13 4 4 11.6 4 21c0 5.3 2.9 10 7.4 13.1-.3 2.3-1.3 4.6-3 6.5a1 1 0 0 0 .9 1.6c3.6-.3 6.8-1.7 9.4-3.7 1.7.4 3.5.5 5.3.5 11 0 20-7.6 20-17S35 4 24 4Z"
        fill="currentColor"
        className="text-primary"
      />
      {/* Price tag mark inside the bubble */}
      <path
        d="M18 15.5h6.5c.5 0 1 .2 1.4.6l6 6a2 2 0 0 1 0 2.8l-4.6 4.6a2 2 0 0 1-2.8 0l-6-6a2 2 0 0 1-.6-1.4V17a1.5 1.5 0 0 1 1.5-1.5Z"
        fill="white"
      />
      <circle cx="21.5" cy="19" r="1.5" fill="currentColor" className="text-primary" />
    </svg>
  );
}
