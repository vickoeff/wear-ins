import { Divider } from '@/components/atoms';
import { ProductPreview } from '@/components/ui';
import { getProductById } from '@/services/product/getProductById';
import Image from 'next/image';

export default async function ProductDetailPage({ params }: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;
  console.log("id: ", id);
  const data = await getProductById(id ?? "");

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-color-3 py-12 overflow-hidden">
      <div className='container md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
        <div className="w-2/3 text-wrap mx-auto mb-12">
          <h1 className='font-poppins italic text-8xl font-[800] text-center uppercase leading-[5rem]'>{data?.product.name}</h1>
        </div>
        <Divider />

        <Image src="/logo-light.png" width={240} height={240} alt="Logo" className='float-left mt-4 z-0' />
        <div className='font-staatliches tracking-wider text-4xl text-center mt-4 w-fit float-right'>
          <h2>Available Size</h2>
          <p>{data?.product.size}</p>
        </div>
        <div className="relative w-[850px] mx-auto h-[850px]">
          <Image src={data?.product.lightBack} width={850} height={850} alt="model-back" priority className="absolute top-24 -left-[25%] max-w-[200%] z-20" />
          <Image src={data?.product.darkBack} width={850} height={840} alt="model-front" priority className="absolute left-[25%] max-w-[200%] z-10" />
        </div>
        <div className='font-staatliches tracking-wider text-4xl text-center -mt-12 w-fit float-right'>
          <h2>Price:</h2>
          <p>{data?.product.price}</p>
        </div>
      </div>

      <div className='bg-color-1 font-staatliches tracking-widest text-4xl text-center mt-4 w-fit px-14 py-1 mx-auto'>
        Preview
      </div>
      <ProductPreview />
      <div className='text-center'>
        <button className='bg-color-2 text-color-1 rounded-xl px-14 py-2 text-4xl uppercase border-4 border-color-4'>Want This</button>
      </div>
    </div>
  );
};
