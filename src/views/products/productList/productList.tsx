import React from "react";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onOpenModal,
}) => (
  <div className="space-y-2">
    {products.map((product) => (
      <div key={product.id} className="flex border rounded-lg p-4 justify-between items-center hover:bg-gray-50 transition-colors">
        <div className="flex items-center space-x-2">
          <div className="font-medium text-gray-600">{product.id}</div>
          <div className="text-gray-800">{product.name}</div>
        </div>
        <button 
          onClick={() => onOpenModal(product)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Details
        </button>
      </div>
    ))}
  </div>
);
