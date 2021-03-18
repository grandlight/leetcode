#
# @lc app=leetcode id=307 lang=python3
#
# [307] Range Sum Query - Mutable
#

# Time:  O(logn), ctor: O(n)
# Space: O(n)

from typing import List


# @lc code=start
class NumArray:
    def __init__(self, nums: List[int]):
        n = len(nums)
        self.nums = nums
        self.bit = [0] * (n + 1)
        for i in range(1, n + 1):
            self.bit[i] = nums[i - 1] + self.bit[i - 1]
        for i in range(n, 0, -1):
            last_i = i - (i & -i)  # i & -i = lowest '1'
            self.bit[i] -= self.bit[last_i]

    def update(self, index: int, val: int) -> None:
        diff = val - self.nums[index]
        if diff:
            i = index + 1
            while i < len(self.bit):
                self.bit[i] += diff
                i += i & -i
            self.nums[index] = val

    def sumRange(self, left: int, right: int) -> int:
        return self.sum(right) - self.sum(left - 1)

    def sum(self, i):
        s, i = 0, i + 1
        while i > 0:
            s += self.bit[i]
            i -= i & -i
        return s


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)
# @lc code=end
