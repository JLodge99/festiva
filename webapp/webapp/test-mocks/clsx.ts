export function clsx(...args: any[]) {
  const out: string[] = [];
  function push(val: any) {
    if (!val && val !== 0) return;
    if (typeof val === 'string') return val.trim() && out.push(val.trim());
    if (Array.isArray(val)) return val.forEach(push);
    if (typeof val === 'object') return Object.keys(val).forEach(k => val[k] && out.push(k));
    out.push(String(val));
  }
  args.forEach(push);
  return out.join(' ');
}

export default clsx;
