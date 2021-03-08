#
# @lc app=leetcode id=77 lang=python3
#
# [77] Combinations
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def helper(cur: list, idx):
            if len(cur) == k:
                res.append(cur[:])
                return
            for i in range(idx, n + 1):
                cur.append(i)
                helper(cur, i + 1)
                cur.pop()

        res = []
        helper([], 1)
        return res


# @lc code=end
