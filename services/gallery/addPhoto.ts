import { Gallery } from "@prisma/client";

export async function addPhoto(productId: string, newPhoto: Gallery): Promise<Gallery> {
  try {
    const response = await fetch(`/api/product/gallery/${productId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPhoto)
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