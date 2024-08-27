import create from 'zustand';
import { useCallback } from 'react';

interface ViewState {
  currentView: string | null;
  setCurrentView: (view: string) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  currentView: null,
  setCurrentView: (view: string) => set({ currentView: view }),
}));

/**
 * Hook to update the current view
 * 
 * @returns - The function to update the current view
 * 
 * @example
 * const MyComponent = () => {
 *   const updateView = useUpdateView();
 *   return (
 *     <button onClick={() => updateView('new-view')}>Change View</button>
 *   );
 * }
 */
export const useUpdateView = () => {
  const { setCurrentView } = useViewStore();

  const updateView = useCallback(
    (view: string) => {
      setCurrentView(view);
      window.location.hash = `#${view}`;
    },
    [setCurrentView]
  );

  return updateView;
};