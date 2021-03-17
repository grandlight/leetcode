#
# @lc app=leetcode id=207 lang=python3
#
# [207] Course Schedule
#

# Time:  O(|V| + |E|)
# Space: O(|V|)

from collections import defaultdict, deque
from typing import List


# @lc code=start
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        def helper(src):
            if visited[src] == 1:
                return True
            if visited[src] == -1:
                return False
            visited[src] = -1
            for dst in edge_out[src]:
                if not helper(dst):
                    return False
            visited[src] = 1
            return True

        edge_in = defaultdict(set)
        edge_out = defaultdict(set)
        for i, j in prerequisites:
            edge_in[i].add(j)
            edge_out[j].add(i)

        # bfs
        queue = deque(i for i in range(numCourses) if i not in edge_in)
        while queue:
            src = queue.popleft()
            for dst in edge_out[src]:
                edge_in[dst].remove(src)
                if not edge_in[dst]:
                    queue.append(dst)
                    del edge_in[dst]
            del edge_out[src]
        return not edge_in and not edge_out

        # dfs
        visited = [0] * numCourses
        for num in range(numCourses):
            if not helper(num):
                return False
        return True


# @lc code=end
