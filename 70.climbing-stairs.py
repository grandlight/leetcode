#
# @lc app=leetcode id=70 lang=python3
#
# [70] Climbing Stairs
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [1, 2] + [0] * (n - 2)
        for i in range(2, n):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n - 1]

        prev, curr = 0, 1
        for i in range(n):
            prev, curr = curr, prev + curr
        return curr

        # recursive
        def helper(n):
            if n < 2:
                return 1
            if memo[n] > 0:
                return memo[n]
            memo[n] = helper(n - 1) + helper(n - 2)
            return memo[n]

        memo = [0] * (n + 1)
        return helper(n)


# @lc code=end
