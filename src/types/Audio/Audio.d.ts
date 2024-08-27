/**
 * Extends the global `Window` object with the `AudioContext` and `OfflineAudioContext` constructors.
 */
export interface AudioContextWindow extends Window {
  webkitAudioContext: typeof AudioContext;
  webkitOfflineAudioContext: typeof OfflineAudioContext;
}