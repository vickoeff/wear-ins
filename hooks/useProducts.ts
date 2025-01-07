'use client'

import { getProducts } from "@/services/product/getProducts";
import { Product } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

export const useProducts = (page?: number, pageSize?: number) => {
  const [data, setData] = useState<{ products: Product[], total: number, status: number } | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getProducts(page, pageSize);

      if (res.status === 200) {
        setData(res);
      } else throw new Error('Error fetching products');
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    data,
    error,
    isLoading,
    refetch: fetchProducts
  };
}