#
# @lc app=leetcode id=140 lang=python3
#
# [140] Word Break II
#

# Time:  O(n * l ^ 2 + n * r), l is the max length of the words,
# Space: O(n ^ 2)              r is the number of the results.

from typing import List


# @lc code=start
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        def helper(cur, start):
            if start == len(s):
                res.append(" ".join(cur))
                return
            for i in range(start, len(s)):
                if valid[start][i]:
                    cur.append(s[start : i + 1])
                    helper(cur, i + 1)
                    cur.pop()

        n = len(s)
        can_break = [True] + [False] * n
        valid = [[False] * n for _ in range(n)]
        for i in range(1, n + 1):
            for j in range(i):
                if can_break[j] and s[j:i] in wordDict:
                    valid[j][i - 1] = True
                    can_break[i] = True

        res = []
        if can_break[-1]:
            helper([], 0)
        return res


# @lc code=end
