export async function getGalleryByProductId(id: string, page?: number, pageSize?: number) {
  try {
    const response = await fetch(`/api/product/gallery/${id}?page=${page}&pagesize=${pageSize}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error fetching gallery:', error);
    if (error instanceof Error) {
      throw new Error(`Error fetching gallery: ${error.message}`);
    } else {
      throw new Error('Error fetching gallery');
    }
  }

}