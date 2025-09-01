export type TNestedKeyOfObject<T> = T extends object
  ? {
    [K in keyof T]: T[K] extends object
    ? `${string & K}.${keyof T[K] & string}`
    : `${string & K}`;
  }[keyof T]
  : never;
