#
# @lc app=leetcode id=212 lang=python3
#
# [212] Word Search II
#

# Time:  O(m * n * 4 * 3 ^ (h - 1)) ~= O(m * n * 3 ^ h), h is the height of trie
# Space: O(t), t is the number of nodes in trie

from typing import List


# @lc code=start
class TrieNode:
    def __init__(self):
        self.leaves = {}
        self.is_string = False

    def insert(self, word):
        cur = self
        for c in word:
            if c not in cur.leaves:
                cur.leaves[c] = TrieNode()
            cur = cur.leaves[c]
        cur.is_string = True


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        def helper(cur, node, i, j):
            if i < 0 or j < 0 or i == len(board) or j == len(board[0]):
                return
            if visited[i][j] or not node or board[i][j] not in node.leaves:
                return

            cur.append(board[i][j])
            next_node = node.leaves[board[i][j]]
            if next_node.is_string:
                res["".join(cur)] = True
            visited[i][j] = True
            helper(cur, next_node, i, j + 1), helper(cur, next_node, i, j - 1)
            helper(cur, next_node, i + 1, j), helper(cur, next_node, i - 1, j)
            visited[i][j] = False
            cur.pop()

        res, trie = {}, TrieNode()
        visited = [[False] * len(board[0]) for _ in range(len(board))]
        for word in words:
            trie.insert(word)

        for i in range(len(board)):
            for j in range(len(board[0])):
                helper([], trie, i, j)
        return res.keys()


# @lc code=end
