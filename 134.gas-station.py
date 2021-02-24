#
# @lc app=leetcode id=134 lang=python3
#
# [134] Gas Station
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        curr_gas, total_cost, start = 0, 0, 0
        for i in range(len(gas)):
            curr_gas += gas[i] - cost[i]
            total_cost += gas[i] - cost[i]
            if curr_gas < 0:
                start = i + 1
                curr_gas = 0
        return start if total_cost >= 0 else -1


# @lc code=end
