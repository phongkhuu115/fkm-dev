export const getNestedObject = <T>(path: string, resource: Object): T | undefined => {
  return path.split(".").reduce((acc: any, key: string) => {
    return acc?.[key]
  }, resource) as T | undefined
}