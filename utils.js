export const randRange = (min,max) => min + Math.random()*(max-min)
export const hsl = (h, s, l) => `hsl(${h*360},${s*100}%,${l*100}%)`
