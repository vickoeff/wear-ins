import { Gallery } from "@prisma/client";

export async function editPhoto(id: string, updatedGallery: Gallery): Promise<Gallery> {
  try {
    const response = await fetch(`/api/gallery/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGallery)
    });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error edit photo:', error);
    if (error instanceof Error) {
      throw new Error(`Error edit photo: ${error.message}`);
    } else {
      throw new Error('Error edit photo');
    }
  }

}