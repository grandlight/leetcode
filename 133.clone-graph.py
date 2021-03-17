#
# @lc app=leetcode id=133 lang=python3
#
# [133] Clone Graph
#

# Time:  O(n)
# Space: O(n)

from collections import deque


class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


# @lc code=start
class Solution:
    def cloneGraph(self, node: "Node") -> "Node":
        if not node:
            return node
        copied = Node(node.val)
        clone, queue = {node: copied}, deque([node])
        while queue:
            curr = queue.pop()
            for nb in curr.neighbors:
                if nb not in clone:
                    queue.append(nb)
                    clone[nb] = Node(nb.val)
                clone[curr].neighbors.append(clone[nb])
        return clone[node]


# @lc code=end
