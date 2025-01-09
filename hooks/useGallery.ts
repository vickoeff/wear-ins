import { getGalleryByProductId } from "@/services/gallery/getGalleryByProductId";
import { Gallery } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

export const useGallery = (productId: string, page?: number, pageSize?: number) => {
  const [data, setData] = useState<{ gallery: Gallery[], total: number, status: number } | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGallery = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getGalleryByProductId(productId, page, pageSize);

      if (res.status === 200) {
        setData(res);
      } else throw new Error('Error fetching products');
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [productId, page, pageSize]);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  return {
    data,
    error,
    isLoading,
    refetch: fetchGallery
  };
}