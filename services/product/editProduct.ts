import { Product } from "@prisma/client";

export async function editProduct(id: string, updatedProduct: Product): Promise<Product> {
  try {
    const response = await fetch(`/api/product/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    });
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