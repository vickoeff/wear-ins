'use client'

import { Divider } from "@/components/atoms";
import { CatalogCard, SkeletonCard } from "@/components/ui";
import { useFavourites } from "@/hooks/useFavourites";
import { useProducts } from "@/hooks/useProducts";
import { useMemo } from "react";

export default function Products() {
  const { data, isLoading } = useProducts();
  const { data: favData, isLoading: isLoadingFav, refetch: refetchFav, add, removeByProductId } = useFavourites();

  const handleFavProduct = async (id: string, isFavProduct: boolean) => {
    if (isFavProduct) await removeByProductId(id);
    else await add(id);
    await refetchFav();
  }

  const combinedData = useMemo(() => {
    const combined = data?.products?.map((product) => ({
      ...product,
      isFavProduct: favData ? favData?.favourites?.findIndex((fav) => fav.productId === product.id) !== -1 : false
    }))

    return combined;
  }, [data, favData]);

  return (
    <div className="container px-4 py-14">
      <div className="w-fit">
        <h1 className="font-staatliches text-6xl text-center md:text-left">Our List Product</h1>
        <Divider />
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6 md:gap-4 py-12">
        {
          isLoading || isLoadingFav || !combinedData ? (
            <>
              <SkeletonCard className="mx-0" />
              <SkeletonCard className="mx-0" />
              <SkeletonCard className="mx-0" />
            </>
          ) :
            combinedData.map((item, idx) => (
              <CatalogCard key={idx} {...item} className="mx-0" onClickFav={() => handleFavProduct(item.id, item.isFavProduct)} />
            ))

        }
      </div>
    </div>
  )
}