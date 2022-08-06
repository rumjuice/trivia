import { decode } from 'html-entities';

export function escape(text: string): string {
  return decode(text);
}
