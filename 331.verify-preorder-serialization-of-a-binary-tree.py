#
# @lc app=leetcode id=331 lang=python3
#
# [331] Verify Preorder Serialization of a Binary Tree
#

# Time:  O(n)
# Space: O(1)

# @lc code=start
class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        nodes, count = preorder.split(","), 0
        for i in range(len(nodes) - 1):
            if nodes[i] == "#":
                if count == 0:
                    return False
                count -= 1
            else:
                count += 1
        return count == 0 and nodes[-1] == "#"


# @lc code=end
