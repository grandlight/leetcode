#
# @lc app=leetcode id=210 lang=python3
#
# [210] Course Schedule II
#

# Time:  O(|V| + |E|)
# Space: O(|V|)

from collections import defaultdict, deque
from typing import List


# @lc code=start
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        edge_in = defaultdict(set)
        edge_out = defaultdict(set)
        for i, j in prerequisites:
            edge_in[i].add(j)
            edge_out[j].add(i)

        res = []
        queue = deque(i for i in range(numCourses) if i not in edge_in)
        while queue:
            src = queue.popleft()
            res.append(src)
            for dst in edge_out[src]:
                edge_in[dst].remove(src)
                if not edge_in[dst]:
                    queue.append(dst)
                    del edge_in[dst]
            del edge_out[src]
        return res if not edge_in and not edge_out else []


# @lc code=end
