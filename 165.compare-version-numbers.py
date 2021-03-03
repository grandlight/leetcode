#
# @lc app=leetcode id=165 lang=python3
#
# [165] Compare Version Numbers
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        i, j, n1, n2 = 0, 0, len(version1), len(version2)
        while i < n1 or j < n2:
            v1, v2 = 0, 0
            while i < n1 and version1[i] != ".":
                v1 = v1 * 10 + int(version1[i])
                i += 1
            while j < n2 and version2[j] != ".":
                v2 = v2 * 10 + int(version2[j])
                j += 1
            if v1 != v2:
                return 1 if v1 > v2 else -1
            i += 1
            j += 1
        return 0

        # less efficient
        v1 = [int(v) for v in version1.split(".")]
        v2 = [int(v) for v in version2.split(".")]
        max_len = max(len(v1), len(v2))
        v1.extend([0] * (max_len - len(v1)))
        v2.extend([0] * (max_len - len(v2)))
        for i in range(max_len):
            if v1[i] != v2[i]:
                return 1 if v1[i] > v2[i] else -1
        return 0


# @lc code=end
