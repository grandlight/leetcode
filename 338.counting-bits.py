#
# @lc app=leetcode id=338 lang=python3
#
# [338] Counting Bits
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def countBits(self, n: int) -> List[int]:
        res = [0] * (n + 1)
        for i in range(1, n + 1):
            # i & (i - 1) equals to remove last '1'
            res[i] = res[i & (i - 1)] + 1
        return res

        res = [0] * (n + 1)
        for i in range(1, n + 1):
            if i % 2 == 0:
                res[i] = res[i // 2]
            else:
                res[i] = res[i // 2] + 1
        return res


# @lc code=end
