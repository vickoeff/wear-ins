export async function getFavourites() {
  try {
    const response = await fetch(`/api/favourite`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error fetching favourite products:', error);
    if (error instanceof Error) {
      throw new Error(`Error fetching favourite products: ${error.message}`);
    } else {
      throw new Error('Error fetching favourite products');
    }
  }

}