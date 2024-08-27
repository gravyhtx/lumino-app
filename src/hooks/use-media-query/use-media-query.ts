import * as React from 'react';

/**
 * Custom hook to detect media query matches.
 * 
 * @param query - The media query string.
 * @returns A boolean indicating whether the media query matches.
 * 
 * @example
 * const isDesktop = useMediaQuery('(min-width: 768px)');
 * if (isDesktop) {
 *   // Do something for desktop
 * }
 */
export function useMediaQuery(query: string): boolean {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
}