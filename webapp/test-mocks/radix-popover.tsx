import { h } from 'preact';

const wrap = (tag = 'div') => ({ children, ...props }: any) => {
  const P = tag as any;
  return h(P, props, children);
};

export const Root = wrap('div');
export const Trigger = wrap('button');
export const Portal = wrap('div');
export const Content = wrap('div');

export default {
  Root,
  Trigger,
  Portal,
  Content,
};
