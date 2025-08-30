import { h } from 'preact';

const wrap = (tag = 'div') => ({ children, ...props }: any) => {
  const P = tag as any;
  return h(P, props, children);
};

export const Command = wrap('div');
export const Input = wrap('input');
export const List = wrap('div');
export const Empty = wrap('div');
export const Group = wrap('div');
export const Separator = wrap('div');
export const Item = wrap('div');

export default {
  Command,
  Input,
  List,
  Empty,
  Group,
  Separator,
  Item,
};
