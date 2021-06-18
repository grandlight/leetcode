/*
 * @lc app=leetcode id=232 lang=golang
 *
 * [232] Implement Queue using Stacks
 */

package leetcode

// @lc code=start
type MyQueue struct {
	stk1 []int
	stk2 []int
}

/** Initialize your data structure here. */
func Constructor232() MyQueue {
	return MyQueue{[]int{}, []int{}}
}

/** Push element x to the back of queue. */
func (this *MyQueue) Push(x int) {
	this.stk1 = append(this.stk1, x)
}

/** Removes the element from in front of queue and returns that element. */
func (this *MyQueue) Pop() int {
	this.Peek()
	top := this.stk2[len(this.stk2)-1]
	this.stk2 = this.stk2[:len(this.stk2)-1]
	return top
}

/** Get the front element. */
func (this *MyQueue) Peek() int {
	if len(this.stk2) == 0 {
		for len(this.stk1) > 0 {
			this.stk2 = append(this.stk2, this.stk1[len(this.stk1)-1])
			this.stk1 = this.stk1[:len(this.stk1)-1]
		}
	}
	return this.stk2[len(this.stk2)-1]
}

/** Returns whether the queue is empty. */
func (this *MyQueue) Empty() bool {
	return len(this.stk1) == 0 && len(this.stk2) == 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */
// @lc code=end
