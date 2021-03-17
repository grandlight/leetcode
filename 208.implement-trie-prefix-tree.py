#
# @lc app=leetcode id=208 lang=python3
#
# [208] Implement Trie (Prefix Tree)
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class TrieNode:
    def __init__(self):
        self.is_string = False
        self.leaves = {}


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for c in word:
            if c not in curr.leaves:
                curr.leaves[c] = TrieNode()
            curr = curr.leaves[c]
        curr.is_string = True

    def search(self, word: str) -> bool:
        node = self.helper(word)
        return node.is_string if node else False

    def startsWith(self, prefix: str) -> bool:
        return self.helper(prefix) is not None

    def helper(self, word):
        curr = self.root
        for c in word:
            if c in curr.leaves:
                curr = curr.leaves[c]
            else:
                return None
        return curr


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
# @lc code=end
