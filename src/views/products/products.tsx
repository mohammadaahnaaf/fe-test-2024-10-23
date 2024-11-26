"use client"

import React, { useState, useCallback, useEffect } from "react";
import { Product } from "@/types";
import { ProductModal } from "@/views/products/productModal/productModal";
import { BackToHome } from "@/components/backToHome/backToHome";
import { ProductList } from "@/views/products/productList/productList";
import { PaginationControls } from "@/views/products/paginationControls/paginationControls";
import { usePagination } from "@/hooks/usePagination";
import { PRODUCTS_DATA } from "@/data/productsData";
import { useRouter, useSearchParams } from "next/navigation";

export const Products: React.FC = () => {

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedProducts,
    handlePageChange,
  } = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });

  const handleOpenModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    router.replace(`/products?modal=${product?.id}`);
  }, [router]);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
    router.push('/products');
  }, [router]);

  useEffect(() => {
    const modalId = searchParams.get('modal');
    if (modalId) {
      const product = PRODUCTS_DATA.find((p) => p.id === modalId);
      if (product) {
        setSelectedProduct(product);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [searchParams, selectedProduct]);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <BackToHome />
      <ProductList products={paginatedProducts} onOpenModal={handleOpenModal} />
      <div className="h-4" />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};
