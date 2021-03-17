#
# @lc app=leetcode id=211 lang=python3
#
# [211] Design Add and Search Words Data Structure
#

# Time:  O(min(n, h))
# Space: O(min(n, h))

# @lc code=start
class TrieNode:
    def __init__(self):
        self.is_string = False
        self.leaves = {}


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root
        for c in word:
            if c not in curr.leaves:
                curr.leaves[c] = TrieNode()
            curr = curr.leaves[c]
        curr.is_string = True

    def search(self, word: str) -> bool:
        def helper(idx, curr: TrieNode):
            if idx == len(word):
                return curr.is_string
            if word[idx] in curr.leaves:
                return helper(idx + 1, curr.leaves[word[idx]])
            elif word[idx] == ".":
                for c in curr.leaves:
                    if helper(idx + 1, curr.leaves[c]):
                        return True
            return False

        return helper(0, self.root)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
# @lc code=end
