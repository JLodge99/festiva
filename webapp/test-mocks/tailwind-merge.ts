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

  // For deduplication we want the last occurrence for each prefix, but
  // preserve the order of those last occurrences.
  const chosen = new Map<string, { token: string; idx: number }>();
  parts.forEach((p, i) => {
    const prefix = p.split('-')[0];
    // find last index among tokens with this prefix
    // pick the token that has the highest index
    // we compute by scanning parts for simplicity (small inputs in tests)
    let lastTok = p;
    let lastI = i;
    for (let j = i; j < parts.length; j++) {
      if (parts[j].split('-')[0] === prefix) {
        lastTok = parts[j];
        lastI = j;
      }
    }
    chosen.set(prefix, { token: lastTok, idx: lastI });
  });

  // sort chosen tokens by their last-occurrence index
  return Array.from(chosen.values())
    .sort((a, b) => a.idx - b.idx)
    .map((v) => v.token)
    .join(' ');
}
