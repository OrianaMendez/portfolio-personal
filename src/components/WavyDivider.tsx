import React from "react";

export function WavyDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`my-5 ${className}`} aria-hidden="true">
      <svg
        width="116"
        height="12"
        viewBox="0 0 116 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="accent-text transition-colors duration-200"
      >
        <path
          d="M2 9.5C6.5 9.5 6.5 2.5 11 2.5C15.5 2.5 15.5 9.5 20 9.5C24.5 9.5 24.5 2.5 29 2.5C33.5 2.5 33.5 9.5 38 9.5C42.5 9.5 42.5 2.5 47 2.5C51.5 2.5 51.5 9.5 56 9.5C60.5 9.5 60.5 2.5 65 2.5C69.5 2.5 69.5 9.5 74 9.5C78.5 9.5 78.5 2.5 83 2.5C87.5 2.5 87.5 9.5 92 9.5C96.5 9.5 96.5 2.5 101 2.5C105.5 2.5 105.5 9.5 110 9.5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
