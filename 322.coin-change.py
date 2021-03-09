#
# @lc app=leetcode id=322 lang=python3
#
# [322] Coin Change
#

# Time:  O(n * k)
# Space: O(k)

from typing import List


# @lc code=start
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [0] + [amount + 1] * amount
        for i in range(1, amount + 1):
            for j in range(len(coins)):
                if coins[j] <= i:
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1)
        return -1 if dp[amount] > amount else dp[amount]


# @lc code=end
