export const isNumber = (n) => !isNaN(parseFloat(n)) && !isNaN(n - 0);

export const isDateInRange = (dateFrom, dateTo) => (date) => {
  if (!dateFrom && !dateTo) return true;
  if (!dateFrom) return date <= dateTo;
  if (!dateTo) return date >= dateFrom;
  return date >= dateFrom && date <= dateTo;
};

export const isInRange = (min, max) => (value) => {
  const minValue = isNumber(min) ? min : Number.MIN_SAFE_INTEGER;
  const maxValue = isNumber(max) ? max : Number.MAX_SAFE_INTEGER;
  return value >= minValue && value <= maxValue;
};

export const isSubstring = (substr) => (str) => {
  if (!substr || !substr.length) return true;
  return str.startsWith(substr);
};

export const isIncludes = (substr) => (str) => {
  if (!substr || !substr.length) return true;
  return str.includes(substr);
};

export const isArrayIncludes = (arr) => (value) => {
  if (!arr || !arr.length) return true;
  return arr.includes(value);
};

export const areAllThruthy = (arr) => arr.every(Boolean);

export const areSomeThruthy = (arr) => arr.some(Boolean);
