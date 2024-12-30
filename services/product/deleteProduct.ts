import { Product } from "@prisma/client";

export async function deleteProduct(id: string): Promise<Product> {
  try {
    const response = await fetch(`/api/product/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error delete product:', error);
    if (error instanceof Error) {
      throw new Error(`Error delete product: ${error.message}`);
    } else {
      throw new Error('Error delete product');
    }
  }

}