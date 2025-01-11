import { Favorite } from "@prisma/client";

export async function addFavourite(productId: string): Promise<Favorite & { status: number }> {
  try {
    const response = await fetch(`/api/favourite/product/${productId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error add photo:', error);
    if (error instanceof Error) {
      throw new Error(`Error add photo: ${error.message}`);
    } else {
      throw new Error('Error add photo');
    }
  }

}