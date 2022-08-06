import { decode } from 'html-entities';

/**
 * Decode HTML entities.
 * @param text
 * @returns string
 */
export function escape(text: string): string {
  return decode(text);
}
