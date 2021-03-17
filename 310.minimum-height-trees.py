#
# @lc app=leetcode id=310 lang=python3
#
# [310] Minimum Height Trees
#

# Time:  O(n)
# Space: O(n)

from collections import defaultdict
from typing import List


# @lc code=start
class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1:
            return [0]
        neighbors = defaultdict(set)
        for a, b in edges:
            neighbors[a].add(b)
            neighbors[b].add(a)

        res, prev_leaves = set(), []
        for i in range(n):
            res.add(i)
            if len(neighbors[i]) == 1:
                prev_leaves.append(i)
        while len(res) > 2:
            curr_leaves = []
            for src in prev_leaves:
                res.remove(src)
                for dst in neighbors[src]:
                    if dst in res:
                        neighbors[dst].remove(src)
                        if len(neighbors[dst]) == 1:
                            curr_leaves.append(dst)
            prev_leaves = curr_leaves
        return list(res)


# @lc code=end
