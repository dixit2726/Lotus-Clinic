export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${base}${cleanPath}`;
};
