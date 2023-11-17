import { get, writable } from "svelte/store";

export const recentQueries = writable([]);

/**
 * @param {string} query
 */
export function updateRecentQueries(query) {
  const recentArr = [...get(recentQueries)];
  const existingIdx = recentArr.indexOf(query);

  if (existingIdx !== -1) recentArr.splice(existingIdx, 1);
  
  recentArr.unshift(query);
  if (recentArr.length > 3) recentArr.pop();
  recentQueries.set(recentArr);
}
