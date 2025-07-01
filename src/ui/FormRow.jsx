import React from "react";

export default function FormRow({ label, children, error }) {
  if (!label) return children;
  return (
    <div className="flex flex-col items-center justify-between gap-2">
      <div className="flex w-full justify-between space-x-25">
        {<label htmlFor={label}>
          {label.slice(0, 1).toUpperCase() + label.slice(1).toLowerCase()}
        </label>}
        {error && (
          <span className="rounded-[4px] bg-red-300 px-4 py-1 text-sm text-red-400">
            {error}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
