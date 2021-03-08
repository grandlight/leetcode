#
# @lc app=leetcode id=216 lang=python3
#
# [216] Combination Sum III
#

# Time:  O()
# Space: O()

from typing import List


# @lc code=start
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        def helper(cur: list, idx, target):
            if target < 0:
                return
            if len(cur) == k:
                if target == 0:
                    res.append(cur[:])
                return
            for i in range(idx, 10):
                cur.append(i)
                helper(cur, i + 1, target - i)
                cur.pop()

        res = []
        helper([], 1, n)
        return res


# @lc code=end
