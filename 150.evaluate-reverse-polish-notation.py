#
# @lc app=leetcode id=150 lang=python3
#
# [150] Evaluate Reverse Polish Notation
#

# Time:  O(n)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        def calc(n1, n2, op):
            if op == "+":
                return n1 + n2
            elif op == "-":
                return n1 - n2
            elif op == "*":
                return n1 * n2
            else:
                return int(n1 / n2)

        stack, ops = [], ["+", "-", "*", "/"]
        for token in tokens:
            if token not in ops:
                stack.append(int(token))
            else:
                n2, n1 = stack.pop(), stack.pop()
                stack.append(calc(n1, n2, token))
        return stack[0]


# @lc code=end
