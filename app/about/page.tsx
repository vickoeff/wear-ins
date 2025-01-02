import { Divider } from "@/components/atoms";

export default function AboutPage() {
  return (

    <div className="relative bg-color-3 bg-no-repeat py-12">
      <div className="container">
        <h2 className="text-8xl font-staatliches text-center mb-12 tracking-wider">About Wear.ins</h2>
        <Divider />
        <div className="py-6">
          <p className="mb-4"><b><b>Wear.ins</b></b> adalah toko kaos keren yang menawarkan berbagai macam kaos bergaya dan nyaman untuk semua orang. Apakah kamu mencari desain grafis yang seru, desain sederhana, atau sesuatu yang unik, <b>Wear.ins</b> punya semuanya. Kaos-kaos ini terbuat dari bahan berkualitas tinggi yang lembut, cocok untuk dipakai sehari-hari. Baik untuk tampil santai atau lebih bergaya, kamu pasti akan menemukan sesuatu yang sesuai dengan gayamu di <b>Wear.ins</b>.</p>
          <p><b>Wear.ins</b> is a cool t-shirt store that offers a variety of stylish and comfortable tees for everyone. Whether you&apos;re looking for a fun graphic, a simple design, or something unique, <b>Wear.ins</b> has it all. The shirts are made with soft, high-quality materials, perfect for everyday wear. Whether you&apos;re dressing up or keeping it casual, you&apos;ll find something that suits your style at <b>Wear.ins</b>.</p>
        </div>
        <div className='text-center'>
          <button className='bg-color-2 text-color-1 rounded-xl px-14 py-2 text-4xl uppercase border-4 border-color-4'>Check Our Collection</button>
        </div>
      </div>
    </div>
  );
}