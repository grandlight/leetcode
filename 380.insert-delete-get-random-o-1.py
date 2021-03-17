#
# @lc app=leetcode id=380 lang=python3
#
# [380] Insert Delete GetRandom O(1)
#

# Time:  O(1)
# Space: O(n)

import random


# @lc code=start
class RandomizedSet:
    def __init__(self):
        self.list = []
        self.dict = {}

    def insert(self, val: int) -> bool:
        if val in self.dict:
            return False
        self.list.append(val)
        self.dict[val] = len(self.list) - 1
        return True

    def remove(self, val: int) -> bool:
        if val not in self.dict:
            return False

        self.dict[self.list[-1]] = self.dict[val]

        temp = self.list[self.dict[val]]
        self.list[self.dict[val]] = self.list[-1]
        self.list[-1] = temp

        self.dict.pop(val)
        self.list.pop()
        return True

    def getRandom(self) -> int:
        return self.list[random.randint(0, len(self.list) - 1)]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
# @lc code=end
