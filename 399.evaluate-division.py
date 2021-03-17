#
# @lc app=leetcode id=399 lang=python3
#
# [399] Evaluate Division
#

# Time:  O(n^3 + q)
# Space: O(n^2)

import collections
from typing import List


# @lc code=start
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        graph = collections.defaultdict(dict)
        for (a, b), v in zip(equations, values):
            graph[a][a] = 1.0
            graph[a][b] = v
            graph[b][a] = 1.0 / v
            graph[b][b] = 1.0
        for v in graph:
            for i in graph[v]:
                for j in graph[v]:
                    graph[i][j] = graph[i][v] * graph[v][j]
        res = []
        for a, b in queries:
            if a in graph and b in graph[a]:
                res.append(graph[a][b])
            else:
                res.append(-1.0)
        return res


# @lc code=end
