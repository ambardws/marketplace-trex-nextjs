import React from "react";

export default function Button({ label, onClick }: { label: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className="btn w-full rounded-lg mt-10 bg-primary text-white normal-case">
      {label}
    </button>
  );
}
