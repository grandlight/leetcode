#
# @lc app=leetcode id=22 lang=python3
#
# [22] Generate Parentheses
#

# Time:  O(4^n / n^(3/2))
# Space: O(2^n)

from typing import List


# @lc code=start
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def dfs(cur, left, right):
            if left > right:
                return
            elif left == 0 and right == 0:
                res.append(cur)
            else:
                if left > 0:
                    dfs(cur + "(", left - 1, right)
                if right > 0:
                    dfs(cur + ")", left, right - 1)

        res = []
        dfs("", n, n)
        return res


# @lc code=end
