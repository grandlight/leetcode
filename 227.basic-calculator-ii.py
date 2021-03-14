#
# @lc app=leetcode id=227 lang=python3
#
# [227] Basic Calculator II
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def calculate(self, s: str) -> int:
        res, cur, num, op = 0, 0, 0, "+"
        for i in range(len(s)):
            c = s[i]
            if c.isdigit():
                num = num * 10 + int(c)
            if c in "+-*/" or i == len(s) - 1:
                if op == "+":
                    cur += num
                elif op == "-":
                    cur -= num
                elif op == "*":
                    cur *= num
                elif op == "/":
                    cur = int(cur / num)
                if c == "+" or c == "-" or i == len(s) - 1:
                    res += cur
                    cur = 0
                op, num = c, 0
        return res


# @lc code=end
