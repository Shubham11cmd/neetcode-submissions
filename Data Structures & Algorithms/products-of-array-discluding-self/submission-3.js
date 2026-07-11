class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let r = 1
        let f=0
        let o
        let ln = new Array(nums.length).fill(0)
        for(let i=0 ; i< nums.length ; i++){
            if(nums[i]==0){
                o=i
                f=f+1
                if(f==2){
                    return ln
                }
                if(i==nums.length-1){
                    ln[o]=r
                    return ln
                }
                
                i=i+1
                r=r*nums[i]
                console.log(r)

            }
        else{
         r = r*nums[i]
         console.log(i)
         console.log(r)
        }
        }
        if(f==1){
            ln[o] = r
            return ln

        }
        for(let j=0 ; j<nums.length ; j++){
            ln[j] = r/nums[j]
        }
        return ln
    }
}
