#
# @lc app=leetcode id=241 lang=python3
#
# [241] Different Ways to Add Parentheses
#

# Time:  O(n * 4^n / n^(3/2))
# Space: O(n * 4^n / n^(3/2))

from typing import List


# @lc code=start
class Solution:
    def diffWaysToCompute(self, input: str) -> List[int]:
        lookup = [[None] * (len(input) + 1) for _ in range(len(input))]
        ops = "+-*"

        def calc(op, x, y):
            if op == "+":
                return x + y
            elif op == "-":
                return x - y
            elif op == "*":
                return x * y

        def helper(left, right):
            if lookup[left][right]:
                return lookup[left][right]
            res = []
            for i in range(left, right):
                if input[i] in ops:
                    for x in helper(left, i):
                        for y in helper(i + 1, right):
                            res.append(calc(input[i], x, y))
            if not res:
                res = [int(input[left:right])]
            lookup[left][right] = res
            return res

        return helper(0, len(input))


# @lc code=end
