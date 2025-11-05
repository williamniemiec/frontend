const STORAGE_KEY_SELECTED_CATEGORY = 'selectedCategory';

/**
 * Gets the stored category ID from localStorage
 */
export const getStoredCategory = (): string | null => {
  if (globalThis.window !== undefined) {
    return globalThis.window.localStorage.getItem(STORAGE_KEY_SELECTED_CATEGORY);
  }
  return null;
};

/**
 * Sets the selected category ID in localStorage
 */
export const setStoredCategory = (categoryId: string | null): void => {
  if (globalThis.window !== undefined) {
    if (categoryId) {
      globalThis.window.localStorage.setItem(STORAGE_KEY_SELECTED_CATEGORY, categoryId);
    } else {
      globalThis.window.localStorage.removeItem(STORAGE_KEY_SELECTED_CATEGORY);
    }
  }
};

