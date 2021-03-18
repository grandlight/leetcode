#
# @lc app=leetcode id=146 lang=python3
#
# [146] LRU Cache
#

# Time:  O(1)
# Space: O(k), k is the capacity of cache

from collections import OrderedDict


# @lc code=start
class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        val = self.cache[key]
        self.update(key, val)
        return val

    def put(self, key: int, value: int) -> None:
        if key not in self.cache and len(self.cache) == self.capacity:
            self.cache.popitem(last=False)
        self.update(key, value)

    def update(self, key, val):
        if key in self.cache:
            del self.cache[key]
        self.cache[key] = val


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
# @lc code=end
