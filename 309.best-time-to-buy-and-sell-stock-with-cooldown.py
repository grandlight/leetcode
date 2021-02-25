#
# @lc app=leetcode id=309 lang=python3
#
# [309] Best Time to Buy and Sell Stock with Cooldown
#

# Time:  O(n)
# Space: O(n)

# mod 2 to reduce dp table size
# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        n = len(prices)

        # max profit when the last action was {act} before i-th day
        buy, sell, rest = [0] * n, [0] * n, [0] * n
        buy[0] = -prices[0]
        for i in range(1, n):
            buy[i] = max(buy[i - 1], rest[i - 1] - prices[i])
            sell[i] = buy[i - 1] + prices[i]
            rest[i] = max(sell[i - 1], rest[i - 1])
        return max(sell[n - 1], rest[n - 1])

        # mod 2 to reduce dp table size
        buy, sell, rest = [0] * 2, [0] * 2, [0] * 2
        buy[0] = -prices[0]
        for i in range(1, n):
            buy[i % 2] = max(buy[(i - 1) % 2], rest[(i - 1) % 2] - prices[i])
            sell[i % 2] = buy[(i - 1) % 2] + prices[i]
            rest[i % 2] = max(sell[(i - 1) % 2], rest[(i - 1) % 2])
        return max(sell[(n - 1) % 2], rest[(n - 1) % 2])


# @lc code=end
