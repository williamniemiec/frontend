/**
 * Formats a date string (YYYY-MM-DD) to a human-readable format
 * Example: "2024-05-23" -> "Thursday, May 23rd 2024"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

