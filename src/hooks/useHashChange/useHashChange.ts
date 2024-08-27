import { useEffect } from "react";
import { useViewStore } from "@/store/useViewStore";

/**
 * Hook to listen for hash changes in the URL
 * 
 * @param callback - The function to call when the hash changes
 * @returns - The hash value
 * 
 * @example
 * const MyComponent = () => {
 *   const handleHashChange = (hash: string) => {
 *     console.log(hash);
 *   };
 * 
 *   useHashChange(handleHashChange); // Logs the hash value when it changes
 * 
 *  return null;
 * }
 */
export const useHashChange = () => {
  const { setCurrentView, currentView } = useViewStore();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentView(hash || 'default');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Update the initial view based on the current hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [setCurrentView]);

  return { currentView };
};