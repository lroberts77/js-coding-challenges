const countIslands = (mapStr) => {

    mapStr = mapStr.split('\n').map(mx => mx.split(''))
    let counter = 0;

    const dfs = (i, j) => {
      if (
        i >= 0 &&
        j >= 0 &&
        i < mapStr.length &&
        j < mapStr[i].length &&
        mapStr[i][j] === '0'
      ) {
        mapStr[i][j] = '.';
        dfs(i + 1, j); // top
        dfs(i, j + 1); // right
        dfs(i - 1, j); // bottom
        dfs(i, j - 1); // left
      }
    };

    for (let i = 0; i < mapStr.length; i += 1) {
      for (let j = 0; j < mapStr[i].length; j += 1) {
        if (mapStr[i][j] === '0') {
          counter += 1;
          dfs(i, j);
        }
      }
    }

    return counter;
};

console.log(countIslands('0...0\n0...0\n00000'));
console.log(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....'));
console.log(countIslands("..000.\n..000.\n..000.\n.0....\n..000."));