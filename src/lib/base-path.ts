const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string): string {
  if (!path) {
    return BASE_PATH;
  }

  return path.startsWith('/') ? `${BASE_PATH}${path}` : `${BASE_PATH}/${path}`;
}
