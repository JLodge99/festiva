export function cva(base: string, opts?: any) {
  // simple implementation that supports variants and defaultVariants
  return (args: any = {}) => {
    const parts: string[] = [];
    if (base && base.trim()) parts.push(base.trim());

    if (opts && opts.variants) {
      for (const key of Object.keys(opts.variants)) {
        const value = args?.[key] ?? opts.defaultVariants?.[key];
        if (value && opts.variants[key] && opts.variants[key][value]) {
          parts.push(opts.variants[key][value]);
        }
      }
    }

    const cls = args?.className ?? '';
    if (typeof cls === 'string' && cls.trim()) parts.push(cls.trim());

    return parts.join(' ').trim();
  };
}

export type VariantProps<T> = any;

export default cva;
