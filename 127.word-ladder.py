#
# @lc app=leetcode id=127 lang=python3
#
# [127] Word Ladder
#

# bidirectional bfs
# Time:  O(b ^ (d / 2)), b is the branch factor of bfs, d is the result depth
# Space: O(w * l), w is the number of words, l is the max length of words

# bfs
# Time:  O(b ^ d)
# Space: O(w * l)

import collections
import string
from typing import List


# @lc code=start
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        words = set(wordList)
        if endWord not in words:
            return 0
        left, right = {beginWord}, {endWord}
        res = 2
        while left:
            words -= left
            new_left = set()
            for word in left:
                for i in range(len(word)):
                    for j in string.ascii_lowercase:
                        new_word = word[:i] + j + word[i + 1 :]
                        if new_word in right:
                            return res
                        if new_word in words:
                            new_left.add(new_word)
            left = new_left
            res += 1
            if len(left) > len(right):
                left, right = right, left
        return 0

        words = set(wordList)
        if endWord not in words:
            return 0
        res, q = 2, collections.deque([beginWord])
        while q:
            q_len = len(q)
            for _ in range(q_len):
                word = q.popleft()
                for i in range(len(word)):
                    for j in string.ascii_lowercase:
                        new_word = word[:i] + j + word[i + 1 :]
                        if new_word == endWord:
                            return res
                        if new_word in words:
                            words.remove(new_word)
                            q.append(new_word)
            res += 1
        return 0


# @lc code=end
