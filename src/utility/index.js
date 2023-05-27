export const getTotalFromArray = (arr) => {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0);
};

export const getAverageFromArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return getTotalFromArray(arr) / arr.length;
};
