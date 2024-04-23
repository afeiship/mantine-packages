type PrimitiveType = string | number;
type Kv = { value: PrimitiveType; label: any } & Record<string, any>;

export const raw2kv = (item: PrimitiveType | Kv) => {
  if (typeof item === 'object') return item;
  return { value: item, label: item };
};
