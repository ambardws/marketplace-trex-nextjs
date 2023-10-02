import React from "react";

export default function TextArea({label}: {label: string}) {
  return (
    <div>
      <label className="label pl-0 mt-2">
        <span className="label-text">
          {label} <span className="text-primary">*</span>
        </span>
      </label>
      <textarea className="textarea textarea-bordered textarea-md w-full" />
    </div>
  );
}
