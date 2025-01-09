export async function getProductById(id: string) {
  try {
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (process.env.API_KEY) {
      headers['X-Api-Key'] = process.env.API_KEY;
    }
    const response = await fetch(`${process.env.BASE_API_URL ?? "http://localhost:3000/api"}/product/${id}`, { method: 'GET', headers });
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