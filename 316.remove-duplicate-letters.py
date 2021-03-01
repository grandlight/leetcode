#
# @lc app=leetcode id=316 lang=python3
#
# [316] Remove Duplicate Letters
#

# Time:  O(n)
# Space: O(1)

from collections import defaultdict


# @lc code=start
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        res, count, visited = ["0"], defaultdict(int), defaultdict(bool)
        for c in s:
            count[c] += 1
        for c in s:
            count[c] -= 1
            if visited[c]:
                continue
            while c < res[-1] and count[res[-1]]:
                visited[res[-1]] = 0
                res.pop()
            res.append(c)
            visited[c] = True
        return "".join(res[1:])


# @lc code=end
