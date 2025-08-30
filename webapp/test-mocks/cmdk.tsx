import { h } from 'preact';

const wrap = (tag = 'div') => ({ children, ...props }: any) => {
  const P = tag as any;
  return h(P, props, children);
};

const Input = wrap('input');
const List = wrap('div');
const Empty = wrap('div');
const Group = wrap('div');
const Separator = wrap('div');
const Item = wrap('div');

// set displayName so consumer code can access .displayName safely
Input.displayName = 'CommandInput';
List.displayName = 'CommandList';
Empty.displayName = 'CommandEmpty';
Group.displayName = 'CommandGroup';
Separator.displayName = 'CommandSeparator';
Item.displayName = 'CommandItem';

export const Command = {
  Input,
  List,
  Empty,
  Group,
  Separator,
  Item,
};

export default Command;
