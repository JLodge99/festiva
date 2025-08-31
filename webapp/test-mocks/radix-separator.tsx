import { h } from 'preact';

const wrap = (tag = 'div') => ({ children, ...props }: any) => {
  const P = tag as any;
  return h(P, props, children);
};

export const Root = wrap('div');
export const Separator = Root;
export default { Root, Separator };