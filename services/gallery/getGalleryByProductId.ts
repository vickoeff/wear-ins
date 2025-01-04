export async function getGalleryByProductId(id: string) {
  try {
    const response = await fetch(`/product/${id}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error fetching product:', error);
    if (error instanceof Error) {
      throw new Error(`Error fetching product: ${error.message}`);
    } else {
      throw new Error('Error fetching product');
    }
  }

}