export function twMerge(input: string) {
  // simple implementation: for tokens with same prefix (before first '-')
  // keep the last occurrence which approximates tw-merge behavior for tests
  if (!input) return '';
  const parts = input.split(/\s+/).filter(Boolean);
  const map = new Map();
  for (const p of parts) {
    const key = p.split('-')[0];
    map.set(key, p);
  }
  return Array.from(map.values()).join(' ');
}
