import { songs } from "@/data/songs";

export type FilterType = "genre" | "artist";

{/*Provides a helper that groups the songs by either genre or artist and returns the grouped songs. */}
export function useSongGrouping(filterType: FilterType) {
  const grouped = songs.reduce((acc, song) => {
    const key = filterType === "genre" ? song.genre : song.artist;
    (acc[key] ||= []).push(song);
    return acc;
  }, {} as Record<string, typeof songs>);
  return grouped;
}