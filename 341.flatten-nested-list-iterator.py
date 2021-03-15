#
# @lc app=leetcode id=341 lang=python3
#
# [341] Flatten Nested List Iterator
#

# Time:  O(n), n is the number of the integers.
# Space: O(h), h is the depth of the nested lists.


class NestedInteger:
    pass


# @lc code=start
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
# class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """


class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        self.depth = [[nestedList, 0]]

    def next(self) -> int:
        nestedList, i = self.depth[-1]
        self.depth[-1][1] += 1
        return nestedList[i].getInteger()

    def hasNext(self) -> bool:
        while self.depth:
            nestedList, i = self.depth[-1]
            if i == len(nestedList):
                self.depth.pop()
            elif nestedList[i].isInteger():
                return True
            else:
                self.depth[-1][1] += 1
                self.depth.append([nestedList[i].getList(), 0])
        return False


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
# @lc code=end
