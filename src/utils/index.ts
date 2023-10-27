export const toUrlString = (name: string) => {
  const result = name.replaceAll(' ', '_');
  return result;
};
