/*
 * @lc app=leetcode id=303 lang=golang
 *
 * [303] Range Sum Query - Immutable
 */

package leetcode

// @lc code=start
type NumArray struct {
	dp []int
}

func Constructor(nums []int) NumArray {
	for i := 1; i < len(nums); i++ {
		nums[i] += nums[i-1]
	}
	return NumArray{dp: nums}
}

func (this *NumArray) SumRange(left int, right int) int {
	if left > 0 {
		return this.dp[right] - this.dp[left-1]
	}
	return this.dp[right]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.SumRange(left,right);
 */
// @lc code=end
