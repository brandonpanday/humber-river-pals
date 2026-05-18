/** Resolve a public-folder path for GitHub Pages base URL (e.g. /humber-river-pals/). */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}
