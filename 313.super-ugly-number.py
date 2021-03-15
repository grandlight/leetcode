#
# @lc app=leetcode id=313 lang=python3
#
# [313] Super Ugly Number
#

# Time:  O(n * k)
# Space: O(n + k)

from typing import List


# @lc code=start
class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
        res, idx = [1], [0] * len(primes)
        while len(res) < n:
            ugly, min_ugly = [], float("inf")
            for i in range(len(primes)):
                ugly.append(res[idx[i]] * primes[i])
            min_ugly = min(min_ugly, min(ugly))
            for i in range(len(primes)):
                if min_ugly == ugly[i]:
                    idx[i] += 1
            res.append(min_ugly)
        return res[-1]


# @lc code=end
