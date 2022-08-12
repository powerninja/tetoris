const borad = [];
for (let y = -1; y < 21; y++) {
  borad[y] = [];
  for (let x = -1; x < 11; x++) {
    if (y === 20 || x < 0 || x >= 10) {
      borad[y][x] = 1;
      console.log(`Y: ${y}`);
      console.log(`X: ${x}`);
    } else {
      borad[y][x] = 0;
    }
    // console.log("borad: " + borad);
  }
}
