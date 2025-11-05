import { Category } from '@/types/Category';
import { Post } from '@/types/Post';

const getApiBaseUrl = (): string => {
  if (globalThis.window === undefined) {
    const serverUrl = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!serverUrl) {
      throw new Error('API_BASE_URL or NEXT_PUBLIC_API_BASE_URL is not set');
    }
    return serverUrl;
  }
  
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!url) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL is not set');
  }
  return url;
};

export async function fetchCategories(): Promise<Category[]> {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/categories`);
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }
  return await response.json();
}

export async function fetchPostsByCategory(categoryId: string): Promise<Post[]> {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/categories/${categoryId}/posts`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }
  return await response.json();
}

export async function updateCategoryFavorite(categoryId: string, favorite: boolean, name: string): Promise<Category> {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/categories/${categoryId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, favorite }),
  });
  if (!response.ok) {
    throw new Error(`Failed to update category: ${response.statusText}`);
  }
  return await response.json();
}

