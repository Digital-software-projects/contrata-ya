export const cutUntilFirstSpace = (text: string): string => {
  const spaceIndex = text.indexOf(" ");
  return spaceIndex !== -1 ? text.slice(0, spaceIndex) : text;
};
