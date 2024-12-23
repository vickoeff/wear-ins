import { Product } from "@prisma/client";

export async function createProduct(newProduct: Product): Promise<Product> {
  try {
    const response = await fetch(`/api/product`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
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