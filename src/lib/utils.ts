import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string.
 * 
 * @param inputs - The class names to combine.
 * @returns - The combined class names.
 * 
 * @example
 * cn("text-red-500", "bg-blue-500"); // Returns "text-red-500 bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a string into a URL-friendly format.
 * 
 * @param name - The string to format.
 * @returns - The formatted string.
 * 
 * @example
 * formatLink("Hello, World!"); // Returns "hello-world"
 */
export const formatLink = (name: string | null) => {
  if (!name) return "";
  const decodedName = decodeURIComponent(name);
  return decodedName
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9 -]/, '')
    .replace(/\s/g, '-');
};