const [,, x, y, b, c] = process.argv.map(n => +n);
const a = (y - c) / ((x - b) ** 2);
const resolveParabola = x => (a * ((x - b) ** 2)) + c;
const toNM = n => n * 1.356;
for (let i = 0; i < 9500; i += 250) console.log(`[${i}, ${toNM(resolveParabola(i))}],`);
