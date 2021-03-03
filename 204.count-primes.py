#
# @lc app=leetcode id=204 lang=python3
#
# [204] Count Primes
#

# Time:  O(nlog(logn))
# Space: O(n)

# @lc code=start
class Solution:
    def countPrimes(self, n: int) -> int:
        res = 0
        primes = [True] * n
        for i in range(2, n):
            if not primes[i]:
                continue
            res, j = res + 1, 2
            while i * j < n:
                primes[i * j] = False
                j += 1
        return res

        # faster but time complexity doesn't change
        if n < 3:
            return 0

        primes = [False, False] + [True] * (n - 2)
        for i in range(4, n, 2):
            primes[i] = False
        for i in range(3, int(n ** 0.5) + 1, 2):
            if not primes[i]:
                continue
            j = 3
            while i * j < n:
                primes[i * j] = False
                j += 2
        return sum(primes)


# @lc code=end
