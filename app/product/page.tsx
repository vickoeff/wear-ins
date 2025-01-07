'use client'

import { CatalogCard, SkeletonCard } from "@/components/ui";
import { useProducts } from "@/hooks/useProducts";

export default function Products() {

  const { data, isLoading } = useProducts();

  return (
    <div className="container py-14">
      <h1 className="font-staatliches text-6xl">Amazing T-Shirt Right?</h1>
      <div className="flex flex-row gap-4 py-12">
        {
          isLoading || !data ? (
            <>
              <SkeletonCard className="mx-0" />
              <SkeletonCard className="mx-0" />
            </>
          ) :

            data.products.map((item, idx) => (
              <CatalogCard key={idx} {...item} className="mx-0" />
            ))

        }
      </div>
    </div>
  )
}