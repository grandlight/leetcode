#
# @lc app=leetcode id=284 lang=python3
#
# [284] Peeking Iterator
#

# Time:  O(1)
# Space: O(1)

# @lc code=start
# Below is the interface for Iterator, which is already defined for you.
#
# class Iterator:
#     def __init__(self, nums):
#         """
#         Initializes an iterator object to the beginning of a list.
#         :type nums: List[int]
#         """
#
#     def hasNext(self):
#         """
#         Returns true if the iteration has more elements.
#         :rtype: bool
#         """
#
#     def next(self):
#         """
#         Returns the next element in the iteration.
#         :rtype: int
#         """


class PeekingIterator:
    def __init__(self, iterator):
        self.iterator = iterator
        self.val = None
        self.has_next = iterator.hasNext()
        self.has_peeked = False

    def peek(self):
        if not self.has_peeked:
            self.has_peeked = True
            self.val = self.iterator.next()
        return self.val

    def next(self):
        self.val = self.peek()
        self.has_peeked = False
        self.has_next = self.iterator.hasNext()
        return self.val

    def hasNext(self):
        return self.has_next


# Your PeekingIterator object will be instantiated and called as such:
# iter = PeekingIterator(Iterator(nums))
# while iter.hasNext():
#     val = iter.peek()   # Get the next element but not advance the iterator.
#     iter.next()         # Should return the same value as [val].
# @lc code=end
