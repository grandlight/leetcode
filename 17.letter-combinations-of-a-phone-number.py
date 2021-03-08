#
# @lc app=leetcode id=17 lang=python3
#
# [17] Letter Combinations of a Phone Number
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        def helper(cur: str, idx):
            if len(cur) == len(digits):
                res.append(cur[:])
                return
            letters = lookup[int(digits[idx])]
            for i in range(len(letters)):
                helper(cur + letters[i], idx + 1)

        lookup = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        res = []
        helper("", 0)
        return res if digits else []


# @lc code=end
