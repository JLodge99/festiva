import { h } from 'preact';
const wrap = (tag = 'div') => ({ children, ...props }: any) => {
  const P = tag as any;
  return h(P, props, children);
};
export const Root = wrap('div');
export const Group = wrap('div');
export const Value = wrap('span');
export const Trigger = wrap('button');
export const ScrollUpButton = wrap('button');
export const ScrollDownButton = wrap('button');
export const Portal = wrap('div');
export const Content = wrap('div');
export const Viewport = wrap('div');
export const Label = wrap('div');
export const Item = wrap('div');
export const ItemIndicator = wrap('span');
export const ItemText = wrap('span');
export const Separator = wrap('div');
export default {
  Root, Group, Value, Trigger, ScrollUpButton, ScrollDownButton, Portal, Content, Viewport, Label, Item, ItemIndicator, ItemText, Separator
};
