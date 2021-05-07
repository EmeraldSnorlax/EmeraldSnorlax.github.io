import { Writable, writable } from 'svelte/store';

export const intro = writable(false);
export const motion: Writable<'safe' | ''> = writable('safe');
