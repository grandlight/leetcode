#
# @lc app=leetcode id=225 lang=python3
#
# [225] Implement Stack using Queues
#

# Time:  O(n)
# Space: O(n)

import collections


# @lc code=start
class MyStack:
    def __init__(self):
        self.q = collections.deque([])

    def push(self, x: int) -> None:
        self.q.append(x)
        for i in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return not self.q


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
# @lc code=end