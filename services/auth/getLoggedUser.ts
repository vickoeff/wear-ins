export async function getLoggedUser() {
  try {
    const response = await fetch(`/api/current-user`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error fetching logged User:', error);
    if (error instanceof Error) {
      throw new Error(`Error fetching user: ${error.message}`);
    } else {
      throw new Error('Error fetching user');
    }
  }
}