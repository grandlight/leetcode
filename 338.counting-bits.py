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
    def countBits(self, num: int) -> List[int]:
        dp = [0] * (num + 1)
        for i in range(1, num + 1):
            # i & (i - 1) equals to remove last '1'
            dp[i] = dp[i & (i - 1)] + 1
        return dp


# @lc code=end
