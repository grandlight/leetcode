#
# @lc app=leetcode id=381 lang=python3
#
# [381] Insert Delete GetRandom O(1) - Duplicates allowed
#


# Time:  O(1)
# Space: O(n)

from collections import defaultdict
import random


# @lc code=start
class RandomizedCollection:
    def __init__(self):
        self.list = []
        self.dict = defaultdict(list)

    def insert(self, val: int) -> bool:
        val_exists = val in self.dict
        self.list.append((val, len(self.dict[val])))
        self.dict[val].append(len(self.list) - 1)
        return val_exists

    def remove(self, val: int) -> bool:
        if val not in self.dict:
            return False

        self.dict[self.list[-1][0]][self.list[-1][1]] = self.dict[val][-1]

        temp = self.list[self.dict[val][-1]]
        self.list[self.dict[val][-1]] = self.list[-1]
        self.list[-1] = temp

        self.dict[val].pop()
        if not self.dict[val]:
            self.dict.pop(val)
        self.list.pop()

        return True

    def getRandom(self) -> int:
        return self.list[random.randint(0, len(self.list) - 1)][0]


# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
# @lc code=end
