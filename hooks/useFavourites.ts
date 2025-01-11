'use client'

import { addFavourite } from "@/services/favourite/addFavourite";
import { deleteFavourite, deleteFavouriteByProductId } from "@/services/favourite/deleteFavourite";
import { getFavourites } from "@/services/favourite/getFavourites";
import { Favorite, Product } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

interface IDataFav extends Favorite {
  product: Product
}

export const useFavourites = () => {
  const [data, setData] = useState<{ favourites: IDataFav[], total: number, status: number } | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavourites = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getFavourites();

      if (res.status === 200) {
        setData(res);
      } else {
        setData(null);
        throw new Error('Error fetching favourite products');
      }
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFavourites();
  }, [fetchFavourites]);

  const add = async (productId: string) => {
    try {
      const res = await addFavourite(productId);

      if (res.status === 200) {
        return res.productId;
      } else throw new Error('Error Add product to favourite');
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const remove = async (id: string) => {
    try {
      const res = await deleteFavourite(id);

      if (res.status === 200) {
        return res.productId;
      } else throw new Error('Error remove product to favourite');
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const removeByProductId = async (productId: string) => {
    try {
      const res = await deleteFavouriteByProductId(productId);

      if (res.status === 200) {
        return res.productId;
      } else throw new Error('Error remove product to favourite');
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }


  return {
    data,
    error,
    isLoading,
    refetch: fetchFavourites,
    add,
    remove,
    removeByProductId
  };
}
