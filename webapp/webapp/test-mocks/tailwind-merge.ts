export function twMerge(input: string) {
  // naive implementation: return the input but keep the last token when
  // there are duplicate prefixes like px-2 px-4 -> px-4
  const parts = input.split(/\s+/).filter(Boolean);
  const map = new Map();
  for (const p of parts) {
    const key = p.split('-')[0];
    map.set(key + '|' + p.split('-').slice(1).join('-'), p);
  }
  return Array.from(map.values()).join(' ');
}
export default twMerge;
