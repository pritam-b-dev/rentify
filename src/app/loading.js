import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <span className="loading loading-spinner loading-lg text-secondary"></span>

        <p className="text-sm font-medium text-secondary animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
