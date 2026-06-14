import React from "react";

function AuthInput({ label, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-md font-medium text-gray-700 pb-2">{label}</label>
      )}

      <input
        {...props}
        className={`
          w-full
          px-4
          py-2
          border
          rounded-lg
          outline-none
          transition-colors
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-[#4357CB]"
          }
          ${className}
        `}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}

export default AuthInput;
