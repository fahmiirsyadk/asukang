export const slice = (start, end) => arr => arr.slice(start, end);
export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
export const map = expression => arr => arr.map(res => expression(res));
