class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0
        let j = heights.length-1
        let max = 0
        let k = 0
        while(i<j){
            if(heights[i] >= heights[j]){
                k = heights[j] * (j-i)
                if( k> max){
                    max = k
                }
                j = j-1
            }
            else if(heights[j] > heights[i]){
                k = heights[i] * (j-i)
                if(k>max){
                    max = k
                }
                i = i+1
            }
        }
        return max
    }
}
