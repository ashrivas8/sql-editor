import { writable } from "svelte/store";

export const queryText = writable('');

export const queryResults = writable({});
