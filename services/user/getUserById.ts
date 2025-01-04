export async function getUserById(id: string) {
  try {
    const response = await fetch(`/api/user/${id}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    return await response.json();
  } catch (error: { message: string } | string | unknown) {
    console.error('Error fetching user:', error);
    if (error instanceof Error) {
      throw new Error(`Error fetching user: ${error.message}`);
    } else {
      throw new Error('Error fetching user');
    }
  }
}