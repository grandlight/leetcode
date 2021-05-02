#
# @lc app=leetcode id=315 lang=python3
#
# [315] Count of Smaller Numbers After Self
#

# Time:  O(nlogn)
# Space: O(n)

from typing import List


# @lc code=start
class Solution:
    def countSmaller(self, nums: List[int]) -> List[int]:
        class BinaryIndexedTree:
            def __init__(self, n):
                self.bit = [0] * (n + 1)

            def add(self, i, val):
                i += 1
                while i < len(self.bit):
                    self.bit[i] += val
                    i += i & -i

            def query(self, i):
                i += 1
                ret = 0
                while i > 0:
                    ret += self.bit[i]
                    i -= i & -i
                return ret

        sorted_nums = sorted(zip(nums, range(len(nums))))
        lookup = {i: new_i for new_i, (_, i) in enumerate(sorted_nums)}

        res, bit = [0] * len(nums), BinaryIndexedTree(len(nums))
        for i in range(len(nums) - 1, -1, -1):
            res[i] = bit.query(lookup[i] - 1)
            bit.add(lookup[i], 1)
        return res


# @lc code=end
