#
# @lc app=leetcode id=131 lang=python3
#
# [131] Palindrome Partitioning
#

# Time:  O(2^n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        def isPalindrome(s: str):
            for i in range(len(s) // 2):
                if s[i] != s[-1 - i]:
                    return False
            return True

        def helper(cur: list, i):
            if i == len(s):
                res.append(list(cur))
                return

            for j in range(i, len(s)):
                end = j + 1
                if isPalindrome(s[i:end]):
                    cur.append(s[i:end])
                    helper(cur, end)
                    cur.pop()

        res = []
        helper([], 0)
        return res


# @lc code=end
