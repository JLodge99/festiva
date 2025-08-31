import { h } from 'preact';

const wrap = (tag = 'div') => ({ children, ...props }: any) => {
  const P = tag as any;
  return h(P, props, children);
};

export const Root = wrap('div');
export const Trigger = wrap('button');
export const Portal = wrap('div');
export const Close = wrap('button');
export const Overlay = wrap('div');
export const Content = wrap('div');
export const Title = wrap('h2');
export const Description = wrap('p');

export default {
  Root,
  Trigger,
  Portal,
  Close,
  Overlay,
  Content,
  Title,
  Description,
};
