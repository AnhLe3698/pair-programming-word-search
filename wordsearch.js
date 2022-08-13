const wordSearch = (letters, word) => {
 
  if (!letters || !word) return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin);
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const revHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  for (const l of revHorizontalJoin) {
    if (l.includes(word)) return true;
  }

  let arrayObject = {};

  for (let i = 0;  i < letters.length; i ++) {
    for (let j = 0; j < letters[i].length; j++) {
      if (arrayObject[j] === undefined) {
        arrayObject[j] = [letters[i][j]];
      } else {
        arrayObject[j].push(letters[i][j]);
      }
    }
  }

  for (const index in arrayObject) {
    if (arrayObject[index].join('').includes(word)) return true;
    if (arrayObject[index].reverse().join('').includes(word)) return true;
  }
    

  let arrayObjectDiagonal = {};
  for (let i = 0;  i < letters.length; i ++) {
    for (let j = 0; j < letters[i].length; j++) {
      let smaller = i <= j ? i : j;
      if (i === 0 || j === 0) {
        arrayObjectDiagonal[`${i}${j}`] = [letters[i][j]];
      } else {
        arrayObjectDiagonal[`${i - smaller}${j - smaller}`].push(letters[i][j]);
      }
    }
  }

  for (const index in arrayObjectDiagonal) {
    if (arrayObjectDiagonal[index].join('').includes(word)) return true;
    if (arrayObjectDiagonal[index].reverse().join('').includes(word)) return true;
  }

  letters.map(l => l.reverse());
  let arrayObjectDiagonal2 = {};
  for (let i = 0;  i < letters.length; i ++) {
    for (let j = 0; j < letters[i].length; j++) {
      let smaller = i <= j ? i : j;
      if (i === 0 || j === 0) {
        arrayObjectDiagonal2[`${i}${j}`] = [letters[i][j]];
      } else {
        arrayObjectDiagonal2[`${i - smaller}${j - smaller}`].push(letters[i][j]);
      }
    }
  }

  for (const index in arrayObjectDiagonal2) {
    if (arrayObjectDiagonal2[index].join('').includes(word)) return true;
    if (arrayObjectDiagonal2[index].reverse().join('').includes(word)) return true;
  }

  return false;

};






let arraySearch = [['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']];

console.log(arraySearch[0]);
console.log(wordSearch(arraySearch, 'AEC'));





module.exports = wordSearch;
