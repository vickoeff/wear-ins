import { Favorite } from "@prisma/client";

export async function deleteFavourite(id: string): Promise<Favorite & { status: number }> {
  try {
    const response = await fetch(`/api/favourite/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error delete favourite:', error);
    if (error instanceof Error) {
      throw new Error(`Error delete favourite: ${error.message}`);
    } else {
      throw new Error('Error delete favourite');
    }
  }
}

export async function deleteFavouriteByProductId(productId: string): Promise<Favorite & { status: number }> {
  try {
    const response = await fetch(`/api/favourite/product/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error delete product from favourite:', error);
    if (error instanceof Error) {
      throw new Error(`Error delete product from favourite: ${error.message}`);
    } else {
      throw new Error('Error delete product from favourite');
    }
  }
}