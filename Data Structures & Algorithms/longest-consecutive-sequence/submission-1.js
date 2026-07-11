class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0){
            return 0
        }
        if(nums.length == 1){
            return 1
        }
        nums.sort((a,b)=> a-b)
        console.log(nums)
        let k = 0
        let l = 0
        let p = []
        for(let i=1 ; i<nums.length ; i++){
            k = nums[i] - nums[i-1]
            if(Math.abs(k) == 1){
                l=l+1
                console.log(l)
            }
            else if(k == 0){
                console.log(l)
                continue
            }
            else{
                p.push(l)
                l=0
            }
            
        }
        p.push(l)
        return Math.max(...p)+1
        

    }
}
