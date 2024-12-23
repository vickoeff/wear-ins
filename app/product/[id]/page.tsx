import { getProductById } from '@/services/product/getProductById';

export default async function ProductDetailPage({ params }: {
  params: Promise<{ slug: string }>
}) {
  const id = (await params).slug;
  const data = await getProductById(id ?? "");

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.stock}</p>
      <p>Price: ${data?.price}</p>
    </div>
  );
};
