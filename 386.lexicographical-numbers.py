#
# @lc app=leetcode id=386 lang=python3
#
# [386] Lexicographical Numbers
#

# Time:  O(n)
# Space: O(1)

from typing import List


# @lc code=start
class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        res, cur = [0] * n, 1
        for i in range(n):
            res[i] = cur
            if cur * 10 <= n:
                cur *= 10
            else:
                if cur >= n:
                    cur //= 10
                cur += 1
                while cur % 10 == 0:
                    cur //= 10
        return res


# @lc code=end
