/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start

var TrieNode = function () {
  this.isString = false;
  this.leaves = {};
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (const c of word) {
    if (!(c in curr.leaves)) {
      curr.leaves[c] = new TrieNode();
    }
    curr = curr.leaves[c];
  }
  curr.isString = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const helper = (cur, idx) => {
    if (idx === word.length) {
      return cur.isString;
    }
    if (word[idx] in cur.leaves) {
      return helper(cur.leaves[word[idx]], idx + 1);
    } else if (word[idx] === ".") {
      for (const c of Object.keys(cur.leaves)) {
        if (helper(cur.leaves[c], idx + 1)) {
          return true;
        }
      }
    }
    return false;
  };
  return helper(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
