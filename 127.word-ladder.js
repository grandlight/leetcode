/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let replaceAt = (s, i, c) => {
    return s.slice(0, i) + c + s.slice(i + 1);
  };

  let queue = [beginWord];
  let res = 0;

  while (queue.length > 0) {
    for (let q = queue.length; q > 0; --q) {
      let word = queue.shift();
      if (word === endWord) return res + 1;
      for (let i = 0; i < word.length; ++i) {
        for (let ch = 97; ch < 123; ++ch) {
          let w = replaceAt(word, i, String.fromCharCode(ch));
          if (wordSet.has(w) && w !== word) {
            queue.push(w);
            wordSet.delete(w);
          }
        }
      }
    }
    ++res;
  }

  return 0;
};
// @lc code=end
