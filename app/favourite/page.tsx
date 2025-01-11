'use client'

import { Divider } from "@/components/atoms";
import { CatalogCard, SkeletonCard } from "@/components/ui";
import { useFavourites } from "@/hooks/useFavourites";

export default function FavouritePage() {
  const { data, isLoading, remove, refetch } = useFavourites();

  const handleFavProduct = async (id: string) => {
    await remove(id);
    await refetch();
  }

  return (
    <div className="container px-4 py-14">
      <div className="w-fit">
        <h1 className="font-staatliches text-6xl text-center md:text-left">Your Favourite Products</h1>
        <Divider />
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6 md:gap-4 py-12">
        {
          isLoading || !data ? (
            <>
              <SkeletonCard className="mx-0" />
              <SkeletonCard className="mx-0" />
              <SkeletonCard className="mx-0" />
            </>
          ) :

            data.favourites.map((item, idx) => (
              <CatalogCard key={idx} {...item.product} className="mx-0" onClickFav={() => handleFavProduct(item.id)} />
            ))

        }
      </div>
    </div>
  )
}