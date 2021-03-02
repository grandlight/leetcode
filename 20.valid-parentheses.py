#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# Time:  O(n)
# Space: O(n)

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        stack, lookup = [], {"(": ")", "[": "]", "{": "}"}
        for p in s:
            if p in lookup:
                stack.append(p)
            elif len(stack) == 0 or lookup[stack.pop()] != p:
                return False
        return len(stack) == 0


# @lc code=end
