import { Product } from "@prisma/client";

export async function deletePhoto(id: string): Promise<Product> {
  try {
    const response = await fetch(`/api/gallery/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error delete photo:', error);
    if (error instanceof Error) {
      throw new Error(`Error delete photo: ${error.message}`);
    } else {
      throw new Error('Error delete photo');
    }
  }
}