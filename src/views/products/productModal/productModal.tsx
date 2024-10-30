import React from "react";
import { Product } from "@/types";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full text-gray-800 flex flex-col gap-4">
        <h2 className="text-xl font-bold border-b pb-2">{product.name}</h2>
        <p className="flex flex-col gap-1">
          <span className="font-semibold text-gray-700">Description:</span>
          <span className="text-gray-600">{product.description}</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold text-gray-700">Price:</span>
          <span className="text-green-600 font-bold">${product.price}</span>
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};
