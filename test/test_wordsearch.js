const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present - FRANK is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present - Seinfeld is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });


  it("should return false if the word is present - SINK not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SINK');

    assert.isFalse(result);
  });

  it("should return false if the word is not present - FRANK verticall present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'A', 'N', 'K'],
      ['Y', 'F', 'C', 'R', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'K', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isTrue(result);
  });


  it("should return false if the word is falsy value, emply string returns false", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'A', 'N', 'K'],
      ['Y', 'F', 'C', 'R', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'K', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '');

    assert.isFalse(result);
  });

  it("should return false if the word is falsy value, AFJ can be found Diagonally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'A', 'N', 'K'],
      ['Y', 'F', 'C', 'R', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'K', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'AFJ');

    assert.isTrue(result);
  });

  it("should return false if the word is falsy value, LAP can be found diagonally backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'A', 'N', 'K'],
      ['Y', 'F', 'C', 'R', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'K', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LAP');

    assert.isTrue(result);
  });

  it("should return false if the word is falsy value, KAZY can not be found", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'A', 'N', 'K'],
      ['Y', 'F', 'C', 'R', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'A', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'N', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'K', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'KAZY');

    assert.isFalse(result);
  });
});
