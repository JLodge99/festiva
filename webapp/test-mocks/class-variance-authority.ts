export function cva(base: string, _opts?: any) {
  // return a function that accepts an object and returns base + any extra className
  return (args: any = {}) => {
    // allow being called with ({ className }) or ({ variant, size, className })
    const cls = args?.className || '';
    if (typeof cls === 'string' && cls.trim()) return (base + ' ' + cls).trim();
    return base;
  };
}

export type VariantProps<T> = any;

export default cva;
