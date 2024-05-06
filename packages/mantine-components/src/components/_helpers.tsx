type PrimitiveType = string | number;
type Kv = { value: PrimitiveType; label: any } & Record<string, any>;

interface Raw2KvOptions {
  forceString?: boolean;
}

export const raw2kv = (item: PrimitiveType | Kv, options: Raw2KvOptions = { forceString: false }): Kv => {
  if (typeof item === 'object') {
    const value = options.forceString ? String(item.value) : item.value;
    return { ...item, value, label: item.label };
  }
  return raw2kv({ value: item, label: item }, options);
};
