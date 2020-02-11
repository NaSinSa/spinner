//an example how \r works by placing the cursor @ beginning of new line
// process.stdout.write(“hello from spinner1.js... \rheyyy\n”)
const stdout = process.stdout;
let animatedLoop = [
  '\r|    ',
  '\r/    ',
  '\r-    ',
  '\r\\    ',
  '\r|    ',
  '\r/    ',
  '\r-    ',
  '\r\\    ',
  '\r|    '
];
let loopCycleNum = 5;
let timer = 0;
for (let cycle = 1; cycle <= loopCycleNum; cycle++) {
  for (let animation = 1; animation <= animatedLoop.length; animation++) {
    setTimeout(() => {
      stdout.write(animatedLoop[animation - 1]);
    }, timer)
    timer += 200;
  }
}
// returns new line
setTimeout(() => {
  stdout.write('\n');
}, timer)