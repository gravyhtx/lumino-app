import { cookies } from 'next/headers';

type CookieOptions = {
  secure?: boolean;
  httpOnly?: boolean;
  path?: string;
  maxAge?: number;
  expires?: Date;
};

/**
 * A hook for managing cookies.
 * 
 * @returns {Object} - An object containing functions for getting, setting, and deleting cookies.
 * 
 * @example
 * const { get, set, remove } = useCookies();
 * get('cookie-name'); // Returns the value of the cookie
 * set('cookie-name', 'cookie-value', { maxAge: 3600 }); // Sets a cookie with a max age of 1 hour
 * remove('cookie-name'); // Deletes the cookie
 */
export const useCookies = () => {
  const get = (name: string) => {
    const cookieStore = cookies();
    return cookieStore.get(name)?.value;
  };

  const set = (name: string, value: string, options?: CookieOptions) => {
    const cookieStore = cookies();
    cookieStore.set(name, value, options);
  };

  const remove = (name: string) => {
    const cookieStore = cookies();
    cookieStore.delete(name);
  };

  return { get, set, remove };
};