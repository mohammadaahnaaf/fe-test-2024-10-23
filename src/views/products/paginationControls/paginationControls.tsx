import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (direction: "next" | "prev") => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex items-center justify-between px-4 py-3">
    <button
      onClick={() => onPageChange("prev")}
      disabled={currentPage === 1}
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="mr-2">←</span> Previous
    </button>
    <span className="text-sm text-gray-700">
      Page <span className="font-medium">{currentPage}</span> of{" "}
      <span className="font-medium">{totalPages}</span>
    </span>
    <button
      onClick={() => onPageChange("next")}
      disabled={currentPage === totalPages}
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next <span className="ml-2">→</span>
    </button>
  </div>
);
