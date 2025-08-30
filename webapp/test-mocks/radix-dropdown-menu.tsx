import { h } from 'preact';

const wrap = (tag = 'div') => ({ children, ...props }: any) => {
  const P = tag as any;
  return h(P, props, children);
};

export const Root = wrap('div');
export const Trigger = wrap('span');
export const Group = wrap('div');
export const Portal = wrap('div');
export const Sub = wrap('div');
export const RadioGroup = wrap('div');
export const SubTrigger = wrap('div');
export const SubContent = wrap('div');
export const Content = wrap('div');
export const Item = wrap('div');
export const CheckboxItem = wrap('div');
export const RadioItem = wrap('div');
export const ItemIndicator = wrap('span');
export const Label = wrap('div');
export const Separator = wrap('div');

export default {
  Root,
  Trigger,
  Group,
  Portal,
  Sub,
  RadioGroup,
  SubTrigger,
  SubContent,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  ItemIndicator,
  Label,
  Separator,
};
