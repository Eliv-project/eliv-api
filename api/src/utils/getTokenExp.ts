export const getTokenExp = (duration: number): number => {
  return Math.floor(Date.now() / 1000) + duration;
};
