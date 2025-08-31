export function twMerge(input: string) {
  // simple implementation: for tokens with same prefix (before first '-')
  // keep the last occurrence which approximates tw-merge behavior for tests
  if (!input) return '';
  const parts = input.split(/\s+/).filter(Boolean);
  // record last index for each token prefix
  const lastIndex = new Map<string, number>();
  parts.forEach((p, i) => {
    const key = p.split('-')[0];
    lastIndex.set(key + '|' + p, i);
  });

  // More accurate simple behavior:
  // - Tokens without a dash (e.g. "active") are preserved as-is.
  // - Tokens with a dash (e.g. "px-2", "px-4") are deduplicated by their
  //   prefix (the segment before the first '-') keeping the last occurrence.
  // - If both dashed and undashed tokens share the same prefix (e.g. "active"
  //   and "active-state"), do NOT dedupe — keep both.
  const dashedLast = new Map<string, { token: string; idx: number }>();
  const plain: { token: string; idx: number }[] = [];

  parts.forEach((p, i) => {
    if (p.includes('-')) {
      const prefix = p.split('-')[0];
      // record last occurrence for dashed tokens
      dashedLast.set(prefix, { token: p, idx: i });
    } else {
      // plain tokens always preserved
      plain.push({ token: p, idx: i });
    }
  });

  // combine preserved plain tokens and the chosen dashed tokens, then sort
  const combined = [
    ...plain,
    ...Array.from(dashedLast.values()),
  ].sort((a, b) => a.idx - b.idx);

  return combined.map((v) => v.token).join(' ');
}
